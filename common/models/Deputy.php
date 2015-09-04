<?php

namespace common\models;

use \yii\db\ActiveQuery;

/**
 * Deputy
 *
 * @property int $id
 * @property string $name
 * @property string $partyName
 * @property string $districtId
 * @property string $facebook
 * @property string $phones
 * @property string $residence
 * @property string $dateAuthorityStart
 * @property string $dateAuthorityStop
 *
 * @property-read District  $district
 * @property-read int       $registrationRate
 * @property-read array     $laws
 * @property-read array     $lawTags
 * @property-read array     $lawTagsInfo
 * @property-read array     $phoneList
 */
class Deputy extends BaseActiveRecord
{

    /**
     * Returns related district
     * @return ActiveQuery
     */
    public function getDistrict()
    {
        return $this->hasOne(District::className(), ['id' => 'districtId']);
    }

    /**
     * Returns deputy's registration rate
     * @return int
     */
    public function getRegistrationRate()
    {
        $isPresentCount = (int)Deputy\Registration::find()->where([
            'deputyId'  => $this->id,
            'isPresent' => 1,
        ])->count();
        $totalCount = (int)Deputy\Registration::find()->where(['deputyId'  => $this->id])->count();
        return round($isPresentCount / $totalCount * 100);
    }

    /**
     * Returns related laws
     * @return ActiveQuery
     */
    public function getLaws()
    {
        return $this->hasMany(Deputy\Law::class, ['deputyId' => 'id']);
    }

    /**
     * Returns list of deputy's law tags
     * @return array
     */
    public function getLawTags()
    {
        $lawTags = [];

        // Manual check
        switch ($this->name) {
            case 'Савченко Надія Вікторівна':
                return $lawTags;
                break;
        }

        // Registratoin rate
        if ($this->registrationRate >= Deputy\Registration::MIN_RATE) {
            $lawTags['працює'] = 1;
        } else {
            $lawTags['прогулює'] = 1;
        }

        // Law votings
        foreach ($this->laws as $deputyLaw) {
            $lawTag = $deputyLaw->lawTag;
            if ($lawTag !== null) {
                $lawTags[$lawTag->name] = $lawTag->order;
            }
        }
        asort($lawTags);
        $lawTags = array_keys($lawTags);

        return $lawTags;
    }

    /**
     * Returns list of deputy law tags' info
     * @return array
     */
    public function getLawTagsInfo()
    {
        $lawTagsInfo = [];

        // Manual check
        switch ($this->name) {
            case 'Савченко Надія Вікторівна':
                return $lawTagsInfo;
                break;
        }

        // Registratoin rate
        if ($this->registrationRate >= Deputy\Registration::MIN_RATE) {
            $lawTagsInfo['працює'] = [
                'laws'  => ['відвідуваність'],
                'rate'  => $this->registrationRate,
            ];
        } else {
            $lawTagsInfo['прогулює'] = [
                'laws'  => ['відвідуваність'],
                'rate'  => 100 - $this->registrationRate,
            ];
        }

        // Law votings
        foreach ($this->laws as $deputyLaw) {
            $law = $deputyLaw->law;
            $lawTag = $deputyLaw->lawTag;
            if ($lawTag === null) {
                continue;
            }
            if (!isset($lawTagsInfo[$lawTag->name])) {
                $lawTagsInfo[$lawTag->name] = [
                    'laws' => [],
                ];
            }
            $lawTagsInfo[$lawTag->name]['laws'][] = $law->id;
        }

        // Set law tags rates
        foreach ($lawTagsInfo as $lawTagName => $info) {
            $lawTag = LawTag::findOne(['name' => $lawTagName]);
            if (in_array($lawTag->name, array('працює', 'прогулює'))) {
                continue;
            }
            $lawTagsInfo[$lawTag->name]['rate'] =
                round(count($lawTagsInfo[$lawTag->name]['laws']) / $lawTag->lawCount * 100);
        }

        return $lawTagsInfo;
    }

    /**
     * Returns phones as array
     * @return array
     */
    public function getPhoneList()
    {
        return explode(',', $this->phones);
    }

}
