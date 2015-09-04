<?php

namespace common\models\Deputy;

use \common\models\LawTag;
use \yii\db\ActiveQuery;

/**
 * Deputy law vote
 *
 * @property int $id
 * @property int $deputyId
 * @property string $lawId
 * @property string $vote
 *
 * @property-read string                $lawDesc
 * @property-read \common\models\Law    $law
 * @property-read LawTag                $lawTag
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

    /**
     * Return law description based on deputy vote
     * @return string
     */
    public function getLawDesc()
    {
        $law = $this->law;
        if (!$law->good && ($this->vote === Law::VOTE_ABSENT)) {
            $lawDesc = '';
        } elseif ($this->vote === Law::VOTE_YES) {
            $lawDesc = $law->descYes;
        } else {
            $lawDesc = $law->descNo;
        }
        return $lawDesc;
    }

    /**
     * Returns related law
     * @return ActiveQuery
     */
    public function getLaw()
    {
        return $this->hasOne(\common\models\Law::class, ['id' => 'lawId']);
    }

    /**
     * Return law tag based on deputy vote
     * @return LawTag
     */
    public function getLawTag()
    {
        $law = $this->law;
        $lawTagName = '';
        if ($law->id === 'відвідуваність') {
            if ($this->vote >= 50) {
                $lawTagName = 'працює';
            } else {
                $lawTagName = 'прогулює';
            }
        } else {
            if (!$law->good && ($this->vote === Law::VOTE_ABSENT)) {
                $lawTagName = '';
            } elseif ($this->vote === Law::VOTE_YES) {
                $lawTagName = $law->tagYes;
            } else {
                $lawTagName = $law->tagNo;
            }
        }
        return LawTag::findOne(['name' => $lawTagName]);
    }

}