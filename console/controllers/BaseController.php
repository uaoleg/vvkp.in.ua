<?php
namespace console\controllers;

class BaseController extends \yii\console\Controller
{

    /**
     * Returns path to data file
     * @return string
     */
    public static function getDataPath()
    {
        return \yii::getAlias('@frontend') . '/data/data.json';;
    }

}
