<?php

namespace common\models;

/**
 * District
 *
 * @property string $id
 * @property string $region
 * @property-read string $text
 */
class District extends BaseActiveRecord
{

    /**
     * Returns district text
     * @return string
     */
    public function getText()
    {
        return "Виборчий округ №{$this->id} ($this->region)";
    }

    /**
     * Returns district text
     * @return string
     */
    public function __toString()
    {
        return $this->text;
    }

}