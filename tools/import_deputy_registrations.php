<?php

require_once './lib/HtmlDomParser/HtmlDomParser.php';

$datafile = '../data/data.raw.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

$parser = new \Sunra\PhpSimple\HtmlDomParser();
foreach ($data->deputies as $deputy) {

    echo "{$deputy->id}\n";

    // Get link to registrations
    $url = "http://itd.rada.gov.ua/mps/info/page/{$deputy->id}";
    $content = file_get_contents($url);
    $html = $parser->str_get_html($content);
    $link = $html->find('.topTitle a', 1); // Реєстрація депутата за допомогою електронної системи
    $url = parse_url($link->href);
    $url['path'] = str_replace('ns_dep', 'ns_dep_reg_list', $url['path']);
    $url['query'] = mb_substr($url['query'], 10); // Remove "vid=2&"
    $url['query'] .= '&startDate=01.01.2010&endDate=' . date('d.m.Y') . '&nom_str=0';
    $url = "{$url['scheme']}://{$url['host']}{$url['path']}?{$url['query']}";

    // Get registrations
    $deputy->registrations = array(
        'total'   => 0,
        'present' => 0,
        'missing' => 0,
        'rate'    => 0,
    );
    $content = file_get_contents($url);
    $content = iconv('windows-1251', 'utf-8', $content);
    $html = $parser->str_get_html($content);
    $registrations = $html->find('ul.pd li .zrez font');
    foreach ($registrations as $registration) {
        $deputy->registrations['total']++;
        if (mb_strpos($registration->plaintext, 'Присут') === 0) {
            $deputy->registrations['present']++;
        } else {
            $deputy->registrations['missing']++;
        }
    }
    $deputy->registrations['rate'] = round($deputy->registrations['present'] / $deputy->registrations['total'] * 100);
}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
echo $json;
