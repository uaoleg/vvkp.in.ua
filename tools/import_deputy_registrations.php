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
    $registrations = array(
        'total'   => 0,
        'present' => 0,
        'missing' => 0,
        'rate'    => 0,
    );
    $content = file_get_contents($url);
    $content = iconv('windows-1251', 'utf-8', $content);
    $html = $parser->str_get_html($content);
    $htmlRegistrations = $html->find('ul.pd li .zrez font');
    foreach ($htmlRegistrations as $htmlRegistration) {
        $registrations['total']++;
        if (mb_strpos($htmlRegistration->plaintext, 'Присут') === 0) {
            $registrations['present']++;
        } else {
            $registrations['missing']++;
        }
    }
    $registrations['rate'] = round($registrations['present'] / $registrations['total'] * 100);

    // Remove tags
    $deputy->lawTags = (array)$deputy->lawTags;
    $deputy->lawTagsRate = (array)$deputy->lawTagsRate;
    if (($key = array_search('працює', $deputy->lawTags)) !== false) {
        unset($deputy->lawTags[$key]);
    }
    if (($key = array_search('прогулює', $deputy->lawTags)) !== false) {
        unset($deputy->lawTags[$key]);
    }
    if (isset($deputy->lawTagsRate['працює'])) {
        unset($deputy->lawTagsRate['працює']);
    }
    if (isset($deputy->lawTagsRate['прогулює'])) {
        unset($deputy->lawTagsRate['прогулює']);
    }

    // Set tags
    if ($registrations['rate'] >= 50) {
        $deputy->lawTags[] = 'працює';
        $deputy->lawTagsRate['працює'] = $registrations['rate'];
    } else {
        $deputy->lawTags[] = 'прогулює';
        $deputy->lawTagsRate['прогулює'] = 100 - $registrations['rate'];
    }
}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
echo $json;
