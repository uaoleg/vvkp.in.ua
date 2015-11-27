<?php
namespace console\controllers;

use \common\models\Deputy;
use \common\models\Deputy\Registration;
use \common\models\Deputy\Law as DeputyLaw;
use \common\models\District;
use \common\models\Law;

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
    public function actionInfo()
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

    /**
     * Import deputies' registrations
     */
    public function actionRegistrations()
    {
        foreach (Deputy::find()->all() as $deputy) {

            echo "{$deputy->id}\n";

            // Get last reg
            $lastReg = Registration::find()
                ->where(['deputyId'  => $deputy->id])
                ->orderBy([
                    'date' => \SORT_DESC,
                    'time' => \SORT_DESC,
                ])
                ->one();
            $startDate = $lastReg ? date('d.m.Y', strtotime($lastReg->date)) : '01.01.2010';
            $endDate = date('d.m.Y');

            // Get link to registrations
            $url = "http://itd.rada.gov.ua/mps/info/page/{$deputy->id}";
            do {
                $content = @file_get_contents($url);
                if ($content === false) {
                    echo '.';
                }
            } while ($content === false);
            $html = $this->parser->str_get_html($content);
            $link = $html->find('.topTitle a', 1); // Реєстрація депутата за допомогою електронної системи
            $url = parse_url($link->href);
            $url['path'] = str_replace('ns_dep', 'ns_dep_reg_list', $url['path']);
            $url['query'] = mb_substr($url['query'], 10); // Remove "vid=2&"
            $url['query'] .= "&startDate={$startDate}&endDate={$endDate}&nom_str=0";
            $url = "{$url['scheme']}://{$url['host']}{$url['path']}?{$url['query']}";

            // Get registrations
            $content = file_get_contents($url);
            $content = iconv('windows-1251', 'utf-8', $content);
            $html = $this->parser->str_get_html($content);
            $htmlRegistrations = $html->find('ul > li');
            foreach ($htmlRegistrations as $htmlRegistration) {

                // Regular registration
                if (!isset($htmlRegistration->find('.strdate b')[0])) {
                    // Application for previous registration (http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_dep_reg_list?kod=242&startDate=04.12.2014&endDate=18.08.2015&nom_str=0)
                    if (mb_strpos($htmlRegistration->plaintext, 'Присут') !== false) {
                        $registration->isPresent = true;
                        $registration->save();
                    }
                } else {
                    $regDate = date('Y-m-d', strtotime($htmlRegistration->find('.strdate b')[0]->plaintext));
                    $regType = mb_strpos($htmlRegistration->find('.zname a')[0]->plaintext, 'Ранкова') !== false
                        ? Registration::TYPE_MORNING
                        : Registration::TYPE_EVENING;
                    $regTime = mb_substr($htmlRegistration->find('.strdate')[0]->plaintext, -8);
                    Registration::deleteAll([
                        'deputyId'  => $deputy->id,
                        'date'      => $regDate,
                        'type'      => $regType,
                    ]);
                    $registration = new Registration();
                    $registration->setAttributes([
                        'deputyId'  => $deputy->id,
                        'date'      => $regDate,
                        'type'      => $regType,
                        'time'      => $regTime,
                        'isPresent' => mb_strpos($htmlRegistration->plaintext, 'Присут') !== false,
                    ], false);
                    $registration->save();
                }

            }
        }
    }

    /**
     * Import deputies' votes
     */
    public function actionVotes($url = '')
    {
        foreach (Law::find()->all() as $law) {

            // Skip
            if (!$law->urlVoting) {
                continue;
            }
            if ($url && ($url !== $law->urlVoting)) {
                continue;
            }

            // Get votes
            echo "{$law->id}\n";
            $content = file_get_contents($law->urlVoting);
            $content = iconv('windows-1251', 'utf-8', $content);
            $html = $this->parser->str_get_html($content);

            // Parse date
            $lawInfo = $html->find('.head_gol', 0)->plaintext;
            preg_match('/\d\d\.\d\d\.\d\d\d\d \d\d:\d\d/', $lawInfo, $matches);
            $law->dateVoting = date('Y-m-d H:i:s', strtotime($matches[0]));
            $law->save();

            // Parse votes
            $votes = $html->find('.golos');
            $deputyNo = 0;
            foreach (Deputy::find()->orderBy('name')->all() as $deputy) {

                // Delete voting
                DeputyLaw::deleteAll([
                    'deputyId'  => $deputy->id,
                    'lawId'     => $law->id,
                ]);

                // Check if law voting date is in authority date range
                if ($law->dateVoting) {
                    if (($deputy->dateAuthorityStart > $law->dateVoting) || ($deputy->dateAuthorityStop && ($deputy->dateAuthorityStop < $law->dateVoting))) {
                        continue;
                    }
                }

                // Get vote
                $voteStr = strip_tags($votes[$deputyNo]->plaintext);
                if (($law->urlVoting === 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049') && in_array($deputy->name, array('Кулініч Олег Іванович', 'Мельничук Сергій Петрович', 'Рудик Сергій Ярославович'))) {
                    $vote = DeputyLaw::VOTE_YES;
                } else {
                    switch ($voteStr) {
                        case 'За':
                        case 'За*':
                            $vote = DeputyLaw::VOTE_YES;
                            break;
                        default:
                            $registration = Registration::find()
                                ->where([
                                    'deputyId'  => $deputy->id,
                                    'date'      => date('Y-m-d', strtotime($law->dateVoting)),
                                ])
                                ->andWhere(['<=', 'time', date('H:i:s', strtotime($law->dateVoting))])
                                ->orderBy('time DESC')
                                ->one();
                            if ($registration->isPresent) {
                                $vote = DeputyLaw::VOTE_NO;
                            } else {
                                $vote = DeputyLaw::VOTE_ABSENT;
                            }
                            break;
                    }
                }

                // Save law vote
                $deputyLaw = new DeputyLaw();
                $deputyLaw->setAttributes([
                    'deputyId'  => $deputy->id,
                    'lawId'     => $law->id,
                    'vote'      => $vote,
                ], false);
                $deputyLaw->save();

                // Next deputy index
                $deputyNo++;
            }

        }
    }

}
