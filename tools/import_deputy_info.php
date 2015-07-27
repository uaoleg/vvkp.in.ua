<?php

require_once './lib/HtmlDomParser/HtmlDomParser.php';

$datafile = '../data/data.raw.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

// Get districts
$content = file_get_contents('http://w1.c1.rada.gov.ua/pls/site2/fetch_mps?skl_id=9&district=y');
$content = iconv('windows-1251', 'utf-8', $content);

// Parse districts
$parser = new \Sunra\PhpSimple\HtmlDomParser();
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
echo $json;
