<?php
namespace console\controllers;

use \common\models\Deputy;
use \common\models\Deputy\Registration;
use \common\models\Deputy\Law as DeputyLaw;
use \common\models\District;
use \common\models\Law;

/**
 * Generate sitemap and static pages
 */
class SitemapController extends BaseController
{

    public function actionRender()
    {
        $dir = \yii::getAlias('@frontend/депутати');
        $deputies = Deputy::find()->orderBy('name')->all();
        foreach ($deputies as $deputy) {
            $pageHtml = $this->render('deputy', [
                'deputy' => $deputy,
            ]);
			$file = fopen("wfio://{$dir}/{$deputy->name} {$deputy->id}.html", 'w');
            fwrite($file, $pageHtml);
            fclose($file);
        }
    }

}