<?php

namespace common\models;

/**
 * Deputy
 *
 * @property int $id
 * @property string $name
 * @property string $party
 * @property string $districtId
 * @property string $facebook
 * @property string $phones
 * @property string $residence
 * @property string $dateAuthorityStart
 * @property string $dateAuthorityStop
 * @property-read District $district
 */
class Deputy extends BaseActiveRecord
{

    public function getDistrict()
    {
        return $this->hasOne(District::className(), ['id' => 'districtId']);
    }

}