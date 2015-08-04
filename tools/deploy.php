<?php

// gzip
system('gzip --best < ../index.html > ../index.min.html');
system('gzip --best < ../data/data.raw.json > ../data/data.min.json');
system('gzip --best < ../js/app.js > ../data/app.min.js');
// each css file in ../css
// each html template in ../template/

// Upload to Amazon S3 and add "Content-Encoding: gzip" HTTP header
require_once './lib/aws-autoloader.php';
$s3 = new Aws\S3\S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1'
]);
$result = $s3->putObject([
    'Bucket' => 'my-bucket',
    'Key'    => 'my-key',
    'Body'   => 'this is the body!',
    '@http'  => [
        'Content-Encoding' => 'gzip'
    ]
]);