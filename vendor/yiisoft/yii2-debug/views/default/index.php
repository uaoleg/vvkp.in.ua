<?php
/* @var $this \yii\web\View */
/* @var $manifest array */
/* @var $searchModel \yii\debug\models\search\Debug */
/* @var $dataProvider ArrayDataProvider */
/* @var $panels \yii\debug\Panel[] */

use yii\helpers\Html;
use yii\grid\GridView;
use yii\data\ArrayDataProvider;

$this->title = 'Yii Debugger';
?>
<div class="default-index">

    <div id="yii-debug-toolbar" class="yii-debug-toolbar-top">
        <div class="yii-debug-toolbar-block title">
            <a href="#">
                <img width="29" height="30" alt="" src="<?= \yii\debug\Module::getYiiLogo() ?>">
            </a>
        </div>
        <?php foreach ($panels as $panel): ?>
            <?= $panel->getSummary() ?>
        <?php endforeach; ?>
    </div>

    <div class="container">
        <div class="row">
<?php

if (isset($this->context->module->panels['db']) && isset($this->context->module->panels['request'])) {

    echo "			<h1>Available Debug Data</h1>";

    $codes = [];
    foreach ($manifest as $tag => $vals) {
        if (!empty($vals['statusCode'])) {
            $codes[] = $vals['statusCode'];
        }
    }
    $codes = array_unique($codes, SORT_NUMERIC);
    $statusCodes = !empty($codes) ? array_combine($codes, $codes) : null;

    echo GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'rowOptions' => function ($model, $key, $index, $grid) use ($searchModel) {
            $dbPanel = $this->context->module->panels['db'];

            if ($searchModel->isCodeCritical($model['statusCode']) || $dbPanel->isQueryCountCritical($model['sqlCount'])) {
                return ['class'=>'danger'];
            } else {
                return [];
            }
        },
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute' => 'tag',
                'value' => function ($data) {
                    return Html::a($data['tag'], ['view', 'tag' => $data['tag']]);
                },
                'format' => 'html',
            ],
            [
                'attribute' => 'time',
                'value' => function ($data) {
                    return '<span class="nowrap">' . Yii::$app->formatter->asDatetime($data['time'], 'yyyy-MM-dd HH:mm:ss') . '</span>';
                },
                'format' => 'html',
            ],
            'ip',
            [
                'attribute' => 'sqlCount',
                'label' => 'Query Count',
                'value' => function ($data) {
                    $dbPanel = $this->context->module->panels['db'];

                    if ($dbPanel->isQueryCountCritical($data['sqlCount'])) {

                        $content = Html::tag('b', $data['sqlCount']) . ' ' . Html::tag('span', '', ['class' => 'glyphicon glyphicon-exclamation-sign']);

                        return Html::a($content, ['view', 'panel' => 'db', 'tag' => $data['tag']], [
                            'title' => 'Too many queries. Allowed count is ' . $dbPanel->criticalQueryThreshold,
                        ]);

                    } else {
                        return $data['sqlCount'];
                    }
                },
                'format' => 'html',
            ],
            [
                'attribute' => 'mailCount',
                'visible' => isset($this->context->module->panels['mail']),
            ],
            [
                'attribute' => 'method',
                'filter' => ['get' => 'GET', 'post' => 'POST', 'delete' => 'DELETE', 'put' => 'PUT', 'head' => 'HEAD']
            ],
            [
                'attribute'=>'ajax',
                'value' => function ($data) {
                    return $data['ajax'] ? 'Yes' : 'No';
                },
                'filter' => ['No', 'Yes'],
            ],
            [
                'attribute' => 'url',
                'label' => 'URL',
            ],
            [
                'attribute' => 'statusCode',
                'value' => function ($data) {
                    $statusCode = $data['statusCode'];
                    if ($statusCode === null) {
                        $statusCode = 200;
                    }
                    if ($statusCode >= 200 && $statusCode < 300) {
                        $class = 'label-success';
                    } elseif ($statusCode >= 300 && $statusCode < 400) {
                        $class = 'label-info';
                    } else {
                        $class = 'label-danger';
                    }
                    return "<span class=\"label {$class}\">$statusCode</span>";
                },
                'format' => 'raw',
                'filter' => $statusCodes,
                'label' => 'Status code'
            ],
        ],
    ]);

} else {
    echo "<div class='alert alert-warning'>No data available. Panel <code>db</code> or <code>request</code> not found.</div>";
}

?>
        </div>
    </div>
</div>
