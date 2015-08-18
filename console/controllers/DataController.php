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
        // Get data
        $data = json_decode(file_get_contents(static::getDataPath()));

        // Deputies
        Deputy::deleteAll();
        foreach ($data->deputies as $deputyData) {
            $deputyData->facebook = $deputyData->facebook ?: null;
            $deputyData->phones = $deputyData->phones ? implode(',', $deputyData->phones) : null;
            $deputyData->dateAuthorityStart = date('Y-m-d', $deputyData->dateAuthorityStart);
            $deputyData->dateAuthorityStop = $deputyData->dateAuthorityStop ? date('Y-m-d', $deputyData->dateAuthorityStop) : null;
            $deputy = new Deputy();
            $deputy->setAttributes((array)$deputyData, false);
            $deputy->save();
        }

        // Laws
        Law::deleteAll();
        foreach ($data->laws as $lawData) {
            $law = new Law();
            $law->setAttributes((array)$lawData, false);
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
                'name'      => $party->name,
                'deputies'  => $party->deputyCount,
            ];
        }
        usort($data['parties'], function($a, $b) {
            return $b['deputies'] - $a['deputies'];
        });

        // Laws
        $data['laws'] = [];
        foreach (Law::find()->all() as $law) {
            $data['laws'][] = [
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
        }

        // Law tags
        $data['lawTags'] = [];
        foreach (LawTag::find()->all() as $lawTag) {
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
                'party'     => $deputy->party,
                'facebook'  => $deputy->facebook,
                'phones'    => $deputy->phones ? explode(',', $deputy->phones) : [],
                'residence' => $deputy->residence,
                'dateAuthorityStart'    => strtotime($deputy->dateAuthorityStart),
                'dateAuthorityStop'     => $deputy->dateAuthorityStop ? strtotime($deputy->dateAuthorityStop) : null,
            ];
            if ($deputy->district) {
                $deputyData['district'] = [
                    'id'        => $deputy->district->id,
                    'region'    => $deputy->district->region,
                    'text'      => $deputy->district->text,
                ];
            }

            // Deputy laws
            $deputyData['laws'] = [];
            $deputyLaws = DeputyLaw::find()->where(['deputyId' => $deputy->id])->all();
            foreach ($deputyLaws as $deputyLaw) {
                $deputyData['laws'][$deputyLaw->lawId] = $deputyLaw->vote;
            }

            // Deputy law tags and info
            $deputyData['lawTags'] = [];
            $deputyData['lawTagsInfo'] = [];
            foreach ($deputyLaws as $deputyLaw) {
                $lawTagsInfo = [];
                $law = Law::findOne(['id' => $deputyLaw->lawId]);

                // Append tag
                if ($law->id === 'відвідуваність') {
                    if ($deputyLaw->vote >= 50) {
                        $lawTagName = 'працює';
                    } else {
                        $lawTagName = 'прогулює';
                    }
                } else {
                    if (!$law->good && ($deputyLaw->vote === DeputyLaw::VOTE_ABSENT)) {
                        continue;
                    } elseif ($deputyLaw->vote === DeputyLaw::VOTE_YES) {
                        $lawTagName = $law->tagYes;
                    } else {
                        $lawTagName = $law->tagNo;
                    }
                }
                $lawTag = LawTag::findOne(['name' => $lawTagName]);
                $deputyData['lawTags'][$lawTag->name] = $lawTag->order;

                // Tag info
                if (!isset($lawTagsInfo[$lawTag->name])) {
                    $lawTagsInfo[$lawTag->name] = [
                        'laws' => [],
                    ];
                }
                $lawTagsInfo[$lawTag->name]['laws'][] = $law->id;

                // Set registration rate
                if ($law->id === 'відвідуваність') {
                    if ($lawTag === 'працює') {
                        $lawTagsInfo[$lawTag]['rate'] = $vote;
                    } else {
                        $lawTagsInfo[$lawTag]['rate'] = 100 - $vote;
                    }
                }
                $deputyData['lawTagsInfo'][] = $lawTagsInfo;
            }
            asort($deputyData['lawTags']);
            $deputyData['lawTags'] = array_keys($deputyData['lawTags']);

            // Manual updates
            switch ($deputy->name) {
                case 'Савченко Надія Вікторівна':
                    $deputyData['laws'] = [];
                    $deputyData['lawTags'] = [];
                    $deputyData['lawTagsInfo'] = [];
                    break;
            }

            $data['deputies'][] = $deputyData;
        }

//        // Law tags
//        foreach ($data->deputies as $deputy) {
//
//            // Set law tags rates
//            foreach ($deputy->lawTagsInfo as $lawTag => $info) {
//
//                if (in_array($lawTag, array('працює', 'прогулює'))) {
//                    continue;
//                }
//
//                // Total laws count for the tag
//                $total = 0;
//                foreach ($data->laws as $law) {
//                    if (($law->tagYes === $lawTag) || ($law->tagNo === $lawTag)) {
//                        $total++;
//                    }
//                }
//
//                // Set rate
//                $deputy->lawTagsInfo[$lawTag]['rate'] = round(count($deputy->lawTagsInfo[$lawTag]['laws']) / $total * 100);
//            }
//
//        }
//
//        // Search suggestions
//        $tags = array();
//        $tagsDeputyName = array();
//        $tagsDeputyDistrict = array();
//        foreach ($data->lawTags as $i => $lawTag) {
//            $tags[] = array(
//                'name'          => $lawTag->name,
//                'type'          => 'law-tag',
//                'typeOrder'     => 1,
//                'lawTagType'    => $lawTag->type,
//            );
//        }
//        foreach ($data->parties as $i => $party) {
//            $tags[] = array(
//                'name'      => $party->name,
//                'type'      => 'party',
//                'typeOrder' => 2,
//            );
//        }
//        foreach ($data->deputies as $i => $deputy) {
//            $tagsDeputyName[] = array(
//                'name'              => $deputy->name,
//                'type'              => 'deputy-name',
//                'typeOrder'         => 3,
//                'deputyId'          => $deputy->id,
//                'dateAuthorityStop' => $deputy->dateAuthorityStop ? date('Y-m-d', $deputy->dateAuthorityStop)  => '',
//            );
//            if ($deputy->district) {
//                $tagsDeputyDistrict[] = array(
//                    'name'          => "Виборчий округ №{$deputy->district->id} ({$deputy->district->region})",
//                    'type'          => 'deputy-district',
//                    'typeOrder'     => 4,
//                    'districtId'    => (int)$deputy->district->id,
//                );
//            }
//        }
//        usort($tagsDeputyDistrict, function($a, $b) {
//            if ($a['districtId'] === $b['districtId']) {
//                return 0;
//            } else {
//                return ($a['districtId'] < $b['districtId']) ? -1  => 1;
//            }
//        });
//        $data->searchSuggestions = array_merge($tags, $tagsDeputyName, $tagsDeputyDistrict);

        $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        file_put_contents(static::getDataPath(), $json);

//        // gzip
//        $compressDir = function($dir) use(&$compressDir, $s3) {
//            foreach (new DirectoryIterator($dir) as $file) {
//                if ($file->isDir() && (!$file->isDot())) {
//                    $compressDir($file->getPathname());
//                    continue;
//                }
//                if (!$file->isFile()) {
//                    continue;
//                }
//                if (!in_array($file->getExtension(), ['html', 'js', 'css', 'json'])) {
//                    continue;
//                }
//                if (mb_strpos($file->getFilename(), '.min.') !== false) {
//                    continue;
//                }
//                $minName = mb_substr($file->getFilename(), 0, -mb_strlen($file->getExtension())) . 'min.' . $file->getExtension();
//                $minPath = str_replace($file->getFilename(), $minName, $file->getRealPath());
//                system("gzip --best < {$file->getRealPath()} > {$minPath}");
//            }
//        };
//        system("gzip --best < ../index.html > ../index.min.html");
//        foreach (['../data', '../js', '../css', '../template'] as $dir) {
//            $compressDir($dir);
//        }

    }

}
