<?php

namespace common\models;

/**
 * Law tag
 *
 * @property string $name
 * @property string $desc
 * @property string $type
 * @property string $opposite
 * @property int $order
 * 
 * @property-read int $lawCount
 */
class LawTag extends BaseActiveRecord
{

    const TYPE_SUCCESS = 'success';
    const TYPE_DANGER  = 'danger';

    /**
     * Returns count of tag's laws
     * @return int
     */
    public function getLawCount()
    {
        return Law::find()
            ->where(['tagYes' => $this->name])
            ->orWhere(['tagNo' => $this->name])
            ->count();
    }

}