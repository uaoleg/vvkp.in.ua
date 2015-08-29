<?php

require_once './lib/HtmlDomParser/HtmlDomParser.php';
$parser = new \Sunra\PhpSimple\HtmlDomParser();

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
    $html = $parser->str_get_html($content);

    // Parse date
    $lawInfo = $html->find('.head_gol', 0)->plaintext;
    preg_match('/\d\d\.\d\d\.\d\d\d\d/', $lawInfo, $matches);
    $law->date = strtotime($matches[0]);

    // Parse votes
    $votes = $html->find('.golos');
    $deputyNo = 0;
    foreach ($data->deputies as $deputy) {

        $deputy->laws = json_decode(json_encode($deputy->laws), true);
        $deputy->lawTagsInfo = json_decode(json_encode($deputy->lawTagsInfo), true);

        // Check if law voting date is in authority date range
        if ($law->date) {
            if (($deputy->dateAuthorityStart > $law->date) || ($deputy->dateAuthorityStop && ($deputy->dateAuthorityStop < $law->date))) {
                unset($deputy->laws[$law->id]);
                continue;
            }
        }

        // Get vote
        $voteStr = strip_tags($votes[$deputyNo]->plaintext);
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

        // Next deputy index
        $deputyNo++;
    }

}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
