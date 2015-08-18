<?php

namespace common\models;

/**
 * Party
 *
 * @property string $name
 * @property-read int $deputyCount
 */
class Party extends BaseActiveRecord
{

    /**
     * Returns count of party's deputies
     * @return int
     */
    public function getDeputyCount()
    {
        return Deputy::find()
            ->where([
                'party'             => $this->name,
                'dateAuthorityStop' => null,
            ])
            ->count();
    }

}