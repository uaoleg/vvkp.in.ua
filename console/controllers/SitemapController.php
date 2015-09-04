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
        $this->layout = 'deputy';
        $dir = \yii::getAlias('@frontend/депутати');
        $deputies = Deputy::find()->orderBy('name')->all();
        foreach ($deputies as $deputy) {
            $this->view->params['deputy'] = $deputy;
            $pageHtml = $this->render('deputy', [
                'deputy' => $deputy,
            ]);
            $fileName = str_replace(' ', '-', "{$deputy->name} {$deputy->id}");
			$file = fopen("wfio://{$dir}/{$fileName}.html", 'w');
            fwrite($file, $pageHtml);
            fclose($file);
        }
    }

}