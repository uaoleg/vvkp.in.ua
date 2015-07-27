<?php

require_once './lib/HtmlDomParser/HtmlDomParser.php';

$datafile = '../data/data.raw.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

// Get districts
$content = file_get_contents('../data/import/districts.html');

// Parse districts
$parser = new \Sunra\PhpSimple\HtmlDomParser();
$html = $parser->str_get_html($content);
$deputies = $html->find('.search-filter-results li');

// Update data
echo '<pre>';
foreach ($deputies as $deputy) {

    $name = $deputy->find('.title a')[0]->plaintext;
    $districts = $deputy->find('dl dd');

    // Update data
    foreach ($data->deputies as $deputy) {
        if ($deputy->name !== $name) {
            continue;
        }
        $deputy->district = array(
            'id'        => str_replace('Виборчому округу №', '', $districts[0]->plaintext),
            'region'    => $districts[1]->plaintext,
        );
        break;
    }
}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
echo $json;
