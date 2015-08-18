<?php
namespace console\controllers;

use \common\models\Deputy;
use \common\models\Law;
use \common\models\LawTag;
use \common\models\Party;

class JsonController extends BaseController
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
    }

}
