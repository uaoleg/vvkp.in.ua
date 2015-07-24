<?php

$datafile = '../data/data.raw.json';
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

foreach ($laws as $lawUrl => $law) {

    if ($url && ($url !== $lawUrl)) {
        continue;
    }

    // Get votes
    $content = file_get_contents($lawUrl);
    $content = iconv('windows-1251', 'utf-8', $content);

    // Parse votes
    $dom = new DomDocument();
    @$dom->loadHTML($content);
    $finder = new DomXPath($dom);
    $votes = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' golos ')]");

    // Update data
    foreach ($data->deputies as $i => $deputy) {

        // Get vote
        $vote = $votes->item($i)->nodeValue;

        // Remove tags
        if (($key = array_search($law['tagGood'], $deputy->lawTags)) !== false) {
            unset($deputy->lawTags[$key]);
        }
        if (($key = array_search($law['tagBad'], $deputy->lawTags)) !== false) {
            unset($deputy->lawTags[$key]);
        }

        // Append tag
        if (($lawUrl === 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049') && in_array($deputy->name, array('Кулініч Олег Іванович', 'Мельничук Сергій Петрович', 'Рудик Сергій Ярославович'))) {
            $deputy->lawTags[] = $law['tagBad'];
        } elseif ($law['isGood']) {
            if (in_array($vote, array('За', 'За*'))) {
                $deputy->lawTags[] = $law['tagGood'];
            } else {
                $deputy->lawTags[] = $law['tagBad'];
            }
        } else {
            if (in_array($vote, array('За', 'За*'))) {
                $deputy->lawTags[] = $law['tagBad'];
            } elseif (!in_array($vote, array('Відсутній', 'Відсутня', 'Відсутній*', 'Відсутня*'))) {
                $deputy->lawTags[] = $law['tagGood'];
            }
        }

        $deputy->lawTags = array_unique($deputy->lawTags);
        sort($deputy->lawTags);
    }

}

// Recount parties' deputy count
foreach ($data->parties as $party) {
    $party->deputies = 0;
    foreach ($data->deputies as $i => $deputy) {
        if ($deputy->party === $party->name)  {
            $party->deputies++;
        }
    }
}
usort($data->parties, function($a, $b) {
    return $b->deputies - $a->deputies;
});

//header('Content-Type: text/html; charset=utf-8');
$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
echo $json;
