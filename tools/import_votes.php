<?php

$datafile = '../data/data.json';
$url = isset($_GET['url']) ? $_GET['url'] : '';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

// Define good and bad tags
$laws = array();
foreach ($data->lawTags as $lawTag) {
    if (!$lawTag->lawId) {
        continue;
    }
    if (!isset($laws[$lawTag->lawUrl])) {
        $laws[$lawTag->lawUrl] = array(
            'isGood' => $lawTag->lawGood,
        );
    }
    if ($lawTag->type === 'success') {
        $laws[$lawTag->lawUrl]['tagGood'] = $lawTag->name;
    }
    if ($lawTag->type === 'danger') {
        $laws[$lawTag->lawUrl]['tagBad'] = $lawTag->name;
    }
}

foreach ($data->laws as $law) {

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

    // Parse votes
    $dom = new DomDocument();
    @$dom->loadHTML($content);
    $finder = new DomXPath($dom);
    $votes = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' golos ')]");

    // Update data
    foreach ($data->deputies as $i => $deputy) {

        $deputy->laws = (array)$deputy->laws;
        $deputy->lawTagsInfo = (array)$deputy->lawTagsInfo;

        // Get vote
        $voteStr = $votes->item($i)->nodeValue;
        if (($law->urlVoting === 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049') && in_array($deputy->name, array('Кулініч Олег Іванович', 'Мельничук Сергій Петрович', 'Рудик Сергій Ярославович'))) {
            $vote = 'yes';
        } else {
            switch ($voteStr) {
                case 'За':
                case 'За*':
                    $vote = 'yes';
                    break;
                case 'Відсутній':
                case 'Відсутня':
                case 'Відсутній*':
                case 'Відсутня*':
                    $vote = 'absent';
                    break;
                default:
                    $vote = 'no';
                    break;
            }
        }

        // Append law
        $deputy->laws[$law->id] = $vote;

    }

}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
