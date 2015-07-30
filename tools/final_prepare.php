<?php

$datafile = '../data/data.raw.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

// Law tags
foreach ($data->deputies as $deputy) {

    $deputy->lawTags = [];
    $deputy->lawTagsInfo = [];

    foreach ($deputy->laws as $lawId => $vote) {

        // Get law
        foreach ($data->laws as $law) {
            if ($law->id === $lawId) {
                break;
            }
        }

        // Append tag
        if ($law->id === 'відвідуваність') {
            if ($registrations['rate'] >= 50) {
                $lawTag = 'працює';
            } else {
                $lawTag = 'прогулює';
            }
        } else {
            if (!$law->good && ($vote === 'absent')) {
                continue;
            } elseif ($vote === 'yes') {
                $lawTag = $law->tagYes;
            } else {
                $lawTag = $law->tagNo;
            }
        }
        $deputy->lawTags[] = $lawTag;

        // Set tags' laws
        if (!isset($deputy->lawTagsInfo[$lawTag])) {
            $deputy->lawTagsInfo[$lawTag] = [
                'laws' => [],
            ];
        }
        $deputy->lawTagsInfo[$lawTag]['laws'][] = $law->id;

    }

    // Set law tags rates
    foreach ($deputy->lawTagsInfo as $lawTag => $info) {

        // Total laws count for the tag
        $total = 0;
        foreach ($data->laws as $law) {
            if (($law->tagYes === $lawTag) || ($law->tagNo === $lawTag)) {
                $total++;
            }
        }

        // Set rate
        $deputy->lawTagsInfo[$lawTag]['rate'] = round(count($deputy->lawTagsInfo[$lawTag]['laws']) / $total * 100);
    }

    // Order law tags
    $deputy->lawTags = array_unique($deputy->lawTags);
    usort($deputy->lawTags, function($a, $b) {
        if (in_array($a, ['працює', 'прогулює', 'шокін-ок', 'шокін-геть'])) {
            return -1;
        } elseif (in_array($b, ['працює', 'прогулює', 'шокін-ок', 'шокін-геть'])) {
            return 1;
        } else {
            return strcmp($a, $b);
        }
    });

}

// Search suggestions
$tags = array();
$tagsDeputyName = array();
$tagsDeputyDistrict = array();
foreach ($data->lawTags as $i => $lawTag) {
    $tags[] = array(
        'name'          => $lawTag->name,
        'type'          => 'law-tag',
        'typeOrder'     => 1,
        'lawTagType'    => $lawTag->type,
    );
}
foreach ($data->parties as $i => $party) {
    $tags[] = array(
        'name'      => $party->name,
        'type'      => 'party',
        'typeOrder' => 2,
    );
}
foreach ($data->deputies as $i => $deputy) {
    $tagsDeputyName[] = array(
        'name'      => $deputy->name,
        'type'      => 'deputy-name',
        'typeOrder' => 3,
        'deputyId'  => $deputy->id,
    );
    if ($deputy->district) {
        $tagsDeputyDistrict[] = array(
            'name'          => "Виборчий округ №{$deputy->district->id} ({$deputy->district->region})",
            'type'          => 'deputy-district',
            'typeOrder'     => 4,
            'districtId'    => (int)$deputy->district->id,
        );
    }
}
usort($tagsDeputyDistrict, function($a, $b) {
    if ($a['districtId'] === $b['districtId']) {
        return 0;
    } else {
        return ($a['districtId'] < $b['districtId']) ? -1 : 1;
    }
});
$data->searchSuggestions = array_merge($tags, $tagsDeputyName, $tagsDeputyDistrict);

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

// Manual updates
foreach ($data->deputies as $deputy) {
    switch ($deputy->name) {
        case 'Савченко Надія Вікторівна':
            $deputy->laws = [];
            $deputy->lawTags = [];
            $deputy->lawTagsRate = [];
            break;
    }
}

$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
file_put_contents($datafile, $json);
echo $json;
