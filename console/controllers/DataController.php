<?php
namespace console\controllers;

use \common\models\Deputy;
use \common\models\Deputy\Law as DeputyLaw;
use \common\models\Law;
use \common\models\LawTag;
use \common\models\Party;

class DataController extends BaseController
{

    /**
     * Returns path to data file
     * @return string
     */
    public static function getDataPath()
    {
        return \yii::getAlias('@frontend') . '/data/data.json';;
    }

    /**
     * JSON => DB
     */
    public function actionImport()
    {
        error_reporting(E_ALL & ~E_NOTICE);

        // Get data
        $data = json_decode(file_get_contents(static::getDataPath()));

        // Deputies
        Deputy::deleteAll();
        foreach ($data->deputies as $deputyData) {

            // Data
            $deputyData->partyName = $deputyData->party;
            $deputyData->facebook = $deputyData->facebook ?: null;
            $deputyData->phones = $deputyData->phones ? implode(',', $deputyData->phones) : null;
            $deputyData->dateAuthorityStart = date('Y-m-d', $deputyData->dateAuthorityStart);
            $deputyData->dateAuthorityStop = $deputyData->dateAuthorityStop ? date('Y-m-d', $deputyData->dateAuthorityStop) : null;
            $deputy = new Deputy();
            $deputy->setAttributes((array)$deputyData, false);
            $deputy->save();

            // Votes
            DeputyLaw::deleteAll(['deputyId' => $deputy->id]);
            foreach ($deputyData->laws as $deputyLawId => $deputyLawVote) {
                if ($deputyLawId === 'відвідуваність') {
                    continue;
                }
                $deputyLaw = new DeputyLaw();
                $deputyLaw->setAttributes([
                    'deputyId'  => $deputy->id,
                    'lawId'     => $deputyLawId,
                    'vote'      => $deputyLawVote,
                ], false);
                $deputyLaw->save();
            }
        }

        // Laws
        Law::deleteAll();
        foreach ($data->laws as $lawData) {
            $law = new Law();
            $law->setAttributes((array)$lawData, false);
            $law->dateVoting = $lawData->date ? date('Y-m-d H:i:s', $lawData->date) : null;
            $law->save();
        }

        // Law tags
        LawTag::deleteAll();
        foreach ($data->lawTags as $lawTagData) {
            $lawTag = new LawTag();
            $lawTag->setAttributes((array)$lawTagData, false);
            $lawTag->save();
        }

        // Parites
        Party::deleteAll();
        foreach ($data->parties as $partyData) {
            $party = new Party();
            $party->setAttributes((array)$partyData, false);
            $party->save();
        }
    }

    /**
     * DB => JSON
     */
    public function actionExport()
    {
        $data = [];

        // Parties
        $data['parties'] = [];
        foreach (Party::find()->all() as $party) {
            $data['parties'][] = [
                'name'          => $party->name,
                'deputies'      => $party->deputyCount,
                'lawTagsInfo'   => $party->lawTagsInfo,
            ];
        }
        usort($data['parties'], function($a, $b) {
            return $b['deputies'] - $a['deputies'];
        });

        // Laws
        $data['laws'] = [];
        foreach (Law::find()->orderBy('no, id')->all() as $law) {
            $lawData = [
                'id'        => $law->id,
                'no'        => $law->no,
                'name'      => $law->name,
                'url'       => $law->url,
                'urlVoting' => $law->urlVoting,
                'good'      => $law->good,
                'tagYes'    => $law->tagYes,
                'descYes'   => $law->descYes,
                'tagNo'     => $law->tagNo,
                'descNo'    => $law->descNo,
                'date'      => strtotime($law->dateVoting),
            ];
            if (!$law->urlVoting) {
                unset($lawData['urlVoting']);
            }
            if (!$law->dateVoting) {
                unset($lawData['date']);
            }
            $data['laws'][] = $lawData;
        }

        // Law tags
        $data['lawTags'] = [];
        foreach (LawTag::find()->orderBy('order')->all() as $lawTag) {
            $data['lawTags'][] = [
                'name'      => $lawTag->name,
                'desc'      => $lawTag->desc,
                'type'      => $lawTag->type,
                'opposite'  => $lawTag->opposite,
                'order'     => $lawTag->order,
                'laws'      => $lawTag->lawCount,
            ];
        }

        // Deputies
        $data['deputies'] = [];
        foreach (Deputy::find()->orderBy('name')->all() as $deputy) {
            $deputyData = [
                'id'        => $deputy->id,
                'name'      => $deputy->name,
                'party'     => $deputy->partyName,
                'phones'    => $deputy->phones ? explode(',', $deputy->phones) : [],
                'residence' => $deputy->residence,
                'dateAuthorityStart' => strtotime($deputy->dateAuthorityStart),
            ];
            if ($deputy->dateAuthorityStop) {
                $deputyData['dateAuthorityStop'] = strtotime($deputy->dateAuthorityStop);
            }
            if ($deputy->facebook) {
                $deputyData['facebook'] = $deputy->facebook;
            }
            if ($deputy->district) {
                $deputyData['district'] = [
                    'id'        => $deputy->district->id,
                    'region'    => $deputy->district->region,
                    'text'      => $deputy->district->text,
                ];
            }

            // Deputy laws
            $deputyData['laws'] = [];
            $deputyData['laws']['відвідуваність'] = $deputy->registrationRate;
            foreach ($deputy->laws as $deputyLaw) {
                $deputyData['laws'][$deputyLaw->lawId] = $deputyLaw->vote;
            }

            // Deputy law tags and info
            $deputyData['lawTags'] = $deputy->lawTags;
            $deputyData['lawTagsInfo'] = $deputy->lawTagsInfo;

            $data['deputies'][] = $deputyData;
        }

        // Search suggestions
        $tags = array();
        $tagsDeputyName = array();
        $tagsDeputyDistrict = array();
        foreach (LawTag::find()->orderBy('name')->all() as $lawTag) {
            $tags[] = array(
                'name'          => $lawTag->name,
                'type'          => 'law-tag',
                'typeOrder'     => 1,
                'lawTagType'    => $lawTag->type,
            );
        }
        foreach (Party::find()->orderBy('name')->all() as $party) {
            $tags[] = array(
                'name'      => $party->name,
                'type'      => 'party',
                'typeOrder' => 2,
            );
        }
        foreach (Deputy::find()->orderBy('name')->all() as $deputy) {
            $tagsDeputyName[] = array(
                'name'              => $deputy->name,
                'type'              => 'deputy-name',
                'typeOrder'         => 3,
                'deputyId'          => $deputy->id,
                'dateAuthorityStop' => $deputy->dateAuthorityStop ? $deputy->dateAuthorityStop : '',
            );
var_dump($deputy->district);
            if ($deputy->district) {
                $tagsDeputyDistrict[] = array(
                    'name'          => "Виборчий округ №{$deputy->district->id} ({$deputy->district->region})",
                    'type'          => 'deputy-district',
                    'typeOrder'     => 4,
                    'districtId'    => (int)$deputy->district->id,
                );
            }
        }
        usort($tagsDeputyDistrict, function($a, $b) {
            if ($a['districtId'] === $b['districtId']) {
                return 0;
            } else {
                return ($a['districtId'] < $b['districtId']) ? -1 : 1;
            }
        });
        $data['searchSuggestions'] = array_merge($tags, $tagsDeputyName, $tagsDeputyDistrict);

        $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        file_put_contents(static::getDataPath(), $json);
    }

}
