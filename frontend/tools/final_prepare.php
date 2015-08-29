<?php

error_reporting(E_ALL & ~E_NOTICE);

$datafile = '../data/data.json';

// Get data
$data = file_get_contents($datafile);
$data = json_decode($data);

// Recount law tags' law count
foreach ($data->lawTags as $lawTag) {
    $lawTag->laws = 0;
    foreach ($data->laws as $i => $law) {
        if (in_array($lawTag->name, [$law->tagYes, $law->tagNo]))  {
            $lawTag->laws++;
        }
    }
}

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
            if ($vote >= 50) {
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

        // Set registration rate
        if ($law->id === 'відвідуваність') {
            if ($lawTag === 'працює') {
                $deputy->lawTagsInfo[$lawTag]['rate'] = $vote;
            } else {
                $deputy->lawTagsInfo[$lawTag]['rate'] = 100 - $vote;
            }
        }

    }

    // Set law tags rates
    foreach ($deputy->lawTagsInfo as $lawTag => $info) {

        if (in_array($lawTag, array('працює', 'прогулює'))) {
            continue;
        }

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
        if (in_array($a, ['працює', 'прогулює'])) {
            return -1;
        } elseif (in_array($b, ['працює', 'прогулює'])) {
            return 1;
        } else {
            return strcmp($a, $b);
        }
    });

}

// Laws: recoutnd deputy count
usort($data->laws, function($a, $b) {
    if (!$a->date) {
        return -1;
    } elseif (!$b->date) {
        return 1;
    } elseif ($a->date < $b->date) {
        return 1;
    } elseif ($a->date > $b->date) {
        return -1;
    } else {
        return 0;
    }
});

// Parties: recount deputy count and law tags info
foreach ($data->parties as $party) {
    $party->deputies = 0;
    $party->lawTagsInfo = array();
    foreach ($data->lawTags as $lawTag) {
        $lawTagGood = ($lawTag->type === 'success') ? $lawTag->name : $lawTag->opposite;
        $lawTagBad  = ($lawTag->type === 'success') ? $lawTag->opposite : $lawTag->name;
        $party->lawTagsInfo[$lawTagGood] = [
            'good'  => $lawTagGood,
            'bad'   => $lawTagBad,
            'rates' => [],
        ];
    }
    foreach ($data->deputies as $i => $deputy) {
        if ($deputy->party !== $party->name)  {
            continue;
        }
        if (!$deputy->dateAuthorityStop || ($deputy->dateAuthorityStop >= time())) {
            $party->deputies++;
        }
        foreach ($deputy->lawTagsInfo as $lawTagName => $lawTagInfo) {
            foreach ($data->lawTags as $lawTag) {
                if ($lawTag->name === $lawTagName) {
                    break;
                }
            }
            $lawTagGood = ($lawTag->type === 'success') ? $lawTag->name : $lawTag->opposite;
            $lawTagBad  = ($lawTag->type === 'success') ? $lawTag->opposite : $lawTag->name;
            if ($lawTag->type === 'success') {
                $party->lawTagsInfo[$lawTagGood]['rates'][] = $lawTagInfo['rate'];
                if (isset($deputy->lawTagsInfo[$lawTag->opposite])) {
                    $party->lawTagsInfo[$lawTagGood]['rates'][] = 100 - $deputy->lawTagsInfo[$lawTag->opposite]['rate'];
                }
            } else {
                $party->lawTagsInfo[$lawTagGood]['rates'][] = 100 - $lawTagInfo['rate'];
                if (isset($deputy->lawTagsInfo[$lawTag->opposite])) {
                    $party->lawTagsInfo[$lawTagGood]['rates'][] = $deputy->lawTagsInfo[$lawTag->opposite]['rate'];
                }
            }
        }
    }

    foreach ($party->lawTagsInfo as $lawTagName => $lawTagInfo) {
        if (count($lawTagInfo['rates'])) {
            $party->lawTagsInfo[$lawTagName]['rate'] = round(array_sum($lawTagInfo['rates']) / count($lawTagInfo['rates']));
        } else {
            $party->lawTagsInfo[$lawTagName]['rate'] = 0;
        }
        unset($party->lawTagsInfo[$lawTagName]['rates']);
    }
}
usort($data->parties, function($a, $b) {
    return $b->deputies - $a->deputies;
});

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
        'name'              => $deputy->name,
        'type'              => 'deputy-name',
        'typeOrder'         => 3,
        'deputyId'          => $deputy->id,
        'dateAuthorityStop' => $deputy->dateAuthorityStop ? date('Y-m-d', $deputy->dateAuthorityStop) : '',
    );
    if ($deputy->district) {
        $tagsDeputyDistrict[] = array(
            'name'          => "Виборчий округ №{$deputy->district->id} ({$deputy->district->region})",
            'type'          => 'district',
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
file_put_contents('../js/data.js', "VVKP_DATA = {$json};");

// gzip
system("gzip --best < ../index.html > ../index.min.html");
system("gzip --best < ../js/_/all.js > ../js/_/all.min.js");
system("gzip --best < ../css/_/all.css > ../css/_/all.min.css");
