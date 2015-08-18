<?php
namespace console\controllers;

use \common\models\Deputy;
use \common\models\District;
use \common\models\Law;
use \common\models\LawTag;
use \common\models\Party;

/**
 * Import data from rada.gov.ua
 */
class RadaController extends BaseController
{

    /**
     * HTML DOM parser
     * @var \Sunra\PhpSimple\HtmlDomParser
     */
    protected $parser;

    /**
     * Initializes the object
     */
    public function init()
    {
        parent::init();
        $this->parser = new \Sunra\PhpSimple\HtmlDomParser();
    }

    /**
     * Import deputies' info
     */
    public function actionDeputyInfo()
    {
        // Authority dates
        echo "Authority dates...\n";
        $strToTime = function($str) {
            list($date, $month, $year) = explode(' ', $str);
            $date = (int)$date;
            $month = mb_strtolower(mb_substr($month, 0, 3, 'UTF-8'), 'UTF-8');
            switch ($month) {
                case 'січ':
                    $month = 1;
                    break;
                case 'лют':
                    $month = 2;
                    break;
                case 'бер':
                    $month = 3;
                    break;
                case 'кві':
                    $month = 4;
                    break;
                case 'тра':
                    $month = 5;
                    break;
                case 'чер':
                    $month = 6;
                    break;
                case 'лип':
                    $month = 7;
                    break;
                case 'сер':
                    $month = 8;
                    break;
                case 'вер':
                    $month = 9;
                    break;
                case 'жов':
                    $month = 10;
                    break;
                case 'лис':
                    $month = 11;
                    break;
                case 'гру':
                    $month = 12;
                    break;
            }
            $year = (int)$year;
            $date = date_create("{$year}-{$month}-{$date}");
            return $date->getTimestamp();
        };
        foreach (Deputy::find()->all() as $deputy) {
            echo "$deputy->id\n";
            $url = "http://itd.rada.gov.ua/mps/info/page/{$deputy->id}";
            $content = file_get_contents($url);
            $html = $this->parser->str_get_html($content);
            $deputy->dateAuthorityStart = null;
            $deputy->dateAuthorityStop = null;
            foreach ($html->find('.mp-general-info dl', 0)->children() as $i => $row) {
                if (mb_strpos($row->plaintext, 'Дата набуття депутатських повноважень') !== false) {
                    $dateStr = $html->find('.mp-general-info dl', 0)->children($i + 1)->plaintext;
                    $deputy->dateAuthorityStart = date('Y-m-d', $strToTime($dateStr));
                }
                if (mb_strpos($row->plaintext, 'Дата припинення депутатських повноважень') !== false) {
                    $dateStr = $html->find('.mp-general-info dl', 0)->children($i + 1)->plaintext;
                    $deputy->dateAuthorityStop = date('Y-m-d', $strToTime($dateStr));
                }
            }
            $deputy->save();
        }

        // Get districts
        echo "Districts...\n";
        $content = file_get_contents('http://w1.c1.rada.gov.ua/pls/site2/fetch_mps?skl_id=9&district=y');
        $content = iconv('windows-1251', 'utf-8', $content);
        $html = $this->parser->str_get_html($content);
        $htmlDeputies = $html->find('.search-filter-results li');

        // Save districts
        foreach ($htmlDeputies as $htmlDeputy) {
            $name = $htmlDeputy->find('.title a')[0]->plaintext;
            $deputy = Deputy::findOne(['name' => $name]);
            if ($deputy !== null) {
                $districts = $htmlDeputy->find('dl dd');
                $districtId = str_replace('Виборчому округу №', '', $districts[0]->plaintext);
                $districtRegion = $districts[1]->plaintext;
                $deputy->districtId = $districtId;
                $deputy->save();
                if (!District::findOne(['id' => $districtId])) {
                    $district = new District();
                    $district->setAttributes([
                        'id'        => $districtId,
                        'region'    => $districtRegion,
                    ], false);
                    $district->save();
                }
            }
        }

    }

}
