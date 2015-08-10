<?php

require_once './lib/HtmlDomParser/HtmlDomParser.php';
$parser = new \Sunra\PhpSimple\HtmlDomParser();

$datafile = '../data/data.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

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
foreach ($data->deputies as $deputy) {
    echo "$deputy->id\n";
    $url = "http://itd.rada.gov.ua/mps/info/page/{$deputy->id}";
    $content = file_get_contents($url);
    $html = $parser->str_get_html($content);
    foreach ($html->find('.mp-general-info dl', 0)->children() as $i => $row) {
        if (mb_strpos($row->plaintext, 'Дата набуття депутатських повноважень') !== false) {
            $dateStr = $html->find('.mp-general-info dl', 0)->children($i + 1)->plaintext;
            $deputy->dateAuthorityStart = $strToTime($dateStr);
        }
        if (mb_strpos($row->plaintext, 'Дата припинення депутатських повноважень') !== false) {
            $dateStr = $html->find('.mp-general-info dl', 0)->children($i + 1)->plaintext;
            $deputy->dateAuthorityStop = $strToTime($dateStr);
        }
    }
}

// Get districts
echo "Districts...\n";
$content = file_get_contents('http://w1.c1.rada.gov.ua/pls/site2/fetch_mps?skl_id=9&district=y');
$content = iconv('windows-1251', 'utf-8', $content);

// Parse districts
$html = $parser->str_get_html($content);
$deputies = $html->find('.search-filter-results li');

// Update data
foreach ($deputies as $deputy) {

    $name = $deputy->find('.title a')[0]->plaintext;
    $districts = $deputy->find('dl dd');

    // Update data
    foreach ($data->deputies as $deputy) {

        if ($deputy->name !== $name) {
            continue;
        }
        $districtId = str_replace('Виборчому округу №', '', $districts[0]->plaintext);
        $districtRegion = $districts[1]->plaintext;
        $deputy->district = array(
            'id'        => $districtId,
            'region'    => $districtRegion,
            'text'      => "Виборчий округ №{$districtId} ({$districtRegion})",
        );
        break;
    }
}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
