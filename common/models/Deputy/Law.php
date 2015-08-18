<?php

namespace common\models\Deputy;

/**
 * Deputy law vote
 *
 * @property int $id
 * @property int $deputyId
 * @property string $lawId
 * @property string $vote
 */
class Law extends \common\models\BaseActiveRecord
{

    const VOTE_YES      = 'yes';
    const VOTE_NO       = 'no';
    const VOTE_ABSENT   = 'absent';

    /**
     * @return string the table name
     */
    public static function tableName()
    {
        return '{{%deputy_law}}';
    }

}