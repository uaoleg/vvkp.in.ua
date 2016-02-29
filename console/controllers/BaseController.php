<?php
namespace console\controllers;

class BaseController extends \yii\console\Controller
{

    /**
     * Init
     */
    public function init()
    {
        parent::init();

        // Support cyrillic on windows
        if ($this->isWindows()) {
            system("chcp 65001");
        }
    }

    /**
     * Check if env OS is Windows
     * @return bool
     */
    protected function isWindows()
    {
        $os = getenv('OS');
        $isWindows = (stripos($os, 'windows') !== false);
        return $isWindows;
    }

}
