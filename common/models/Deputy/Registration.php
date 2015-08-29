<?php

namespace common\models\Deputy;

/**
 * Registration
 *
 * @property int $id
 * @property int $deputyId
 * @property string $date
 * @property string $type
 * @property string $time
 * @property int $isPresent
 */
class Registration extends \common\models\BaseActiveRecord
{

    const TYPE_MORNING = 'ранкова';
    const TYPE_EVENING = 'вечірня';

    const MIN_RATE = 50;

    /**
     * @return string the table name
     */
    public static function tableName()
    {
        return '{{%deputy_registration}}';
    }

}