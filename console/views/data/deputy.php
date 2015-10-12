<?php

/* @var $deputy \common\models\Deputy */

use common\models\Deputy;
use common\models\LawTag;

?>

<div class="modal fade in" modal-animation-class="fade" modal-in-class="in" modal-window="modal-window" index="0" animate="animate" modal-animation="true" style="z-index: 1050; display: block;"
     onclick="location.href = 'http://vvkp.in.ua'">
    <div class="modal-dialog" onclick="event.stopPropagation();"><div class="modal-content" modal-transclude="">
    <div class="modal-header ng-scope">
        <a type="button" class="close" data-dismiss="modal" aria-hidden="true" href="http://vvkp.in.ua">×</a>
        <table><tbody><tr>
            <td style="padding-right: 20px;">
                <img ng-src="img/deputies/origin/2524.jpg" style="border-radius: 4px 0; box-shadow: 1px 1px 1px #999;" src="/img/deputies/origin/<?= $deputy->id ?>.jpg">
            </td>
            <td style="vertical-align: top;">
                <h3 class="modal-title ng-binding" style="line-height: 1;"><?= $deputy->name ?></h3>
                <table class="deputy-info">
                    <tbody>
                        <?php if ($deputy->partyName): ?>
                        <tr ng-if="deputy.party" style="vertical-align: middle;" class="ng-scope">
                            <td style="width: 30px;">
                                <img ng-src="img/icon/party-16.png" tooltip="Партія" tooltip-placement="left" style="opacity: 0.4" src="/img/icon/party-16.png">
                            </td>
                            <td>
                                <img class="deputy-party" style="cursor: default; margin: 0;" src="/img/parties/100x35/<?= $deputy->partyName ?>.png">
                            </td>
                        </tr>
                        <?php endif; ?>
                        <?php if ($deputy->dateAuthorityStop): ?>
                        <tr style="vertical-align: middle;">
                            <td>
                                <span class="glyphicon glyphicon-globe" tooltip="Офіційна веб-сторінка" tooltip-placement="left"></span>
                            </td>
                            <td>
                                <a href="http://itd.rada.gov.ua/mps/info/page/<?= $deputy->id ?>" target="_blank">Верховна Рада</a>
                            </td>
                        </tr>
                        <?php endif; ?>
                        <?php if ($deputy->phones): ?>
                        <tr ng-if="deputy.phones.length" class="ng-scope">
                            <td><span class="glyphicon glyphicon-earphone" tooltip="Контактні телефони" tooltip-placement="left"></span></td>
                            <td>
                                <?php foreach ($deputy->phoneList as $i => $phone): ?>
                                <small ng-repeat="phone in deputy.phones" class="ng-binding ng-scope"><?= $phone ?></small><?= $i + 1 < count($deputy->phoneList) ? ', ' : '' ?>
                                <?php endforeach; ?>
                            </td>
                        </tr>
                        <?php endif; ?>
                        <?php if ($deputy->residence): ?>
                        <tr ng-if="deputy.residence" class="ng-scope">
                            <td><span class="glyphicon glyphicon-map-marker" tooltip="Місце проживання" tooltip-placement="left"></span></td>
                            <td><small class="ng-binding"><?= $deputy->residence ?></small></td>
                        </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </td>
        </tr></tbody></table>
    </div>
    <div class="modal-body ng-scope">
        <table class="table">
            <tbody>
                <?php foreach ($deputy->lawTags as $lawTagName): ?>
                    <?php
                        $tagLawIds = $deputy->lawTagsInfo[$lawTagName]['laws'];
                        $lawTag = LawTag::findOne(['name' => $lawTagName]);
                        $lawTagOpposite = LawTag::findOne(['opposite' => $lawTagName]);
                        if (isset($deputy->lawTagsInfo[$lawTagOpposite->name])) {
                            if (($lawTagOpposite->type === LawTag::TYPE_SUCCESS) && $deputy->lawTagsInfo[$lawTagOpposite->name]['rate'] >= $deputy->lawTagsInfo[$lawTagName]['rate']) {
                                continue;
                            } elseif (($lawTagOpposite->type === LawTag::TYPE_DANGER) && $deputy->lawTagsInfo[$lawTagOpposite->name]['rate'] > $deputy->lawTagsInfo[$lawTagName]['rate']) {
                                continue;
                            }
                            $tagLawIds = \yii\helpers\ArrayHelper::merge($tagLawIds, $deputy->lawTagsInfo[$lawTagOpposite->name]['laws']);
                        }
                    ?>
                    <tr>
                        <td>
                            <?php if (in_array($lawTagName, ['працює', 'прогулює'])): ?>
                                <p style="font-size: 14px; line-height: 18px;">
                                    <b class="text-<?= $lawTag->type ?>">
                                        <?= $lawTag->desc ?>
                                        <span>
                                            (<?= $deputy->registrationRate ?>%)
                                        </span>
                                    </b>
                                    /
                                    <i class="ng-binding">Реєстрація депутата за допомогою електронної системи</i>
                                </p>
                            <?php else: ?>
                                <?php foreach ($deputy->getLaws()->andWhere([
                                    'lawId' => $tagLawIds,
                                ])->all() as $deputyLaw): ?>
                                    <?php /* @var $deputyLaw \common\models\Deputy\Law */ ?>
                                    <p ng-repeat="law in laws" style="font-size: 14px; line-height: 18px;" class="ng-scope">
                                        <b class="text-<?= $deputyLaw->lawTag->type ?>">
                                            <?= $deputyLaw->lawDesc ?>
                                        </b>
                                        /
                                        <i class="ng-binding">Реєстрація депутата за допомогою електронної системи</i>
                                    </p>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </td>
                        <td style="width: 200px;">
                            <?php
                                if ($lawTagName === 'працює') {
                                    $progress = $deputy->registrationRate;
                                } elseif ($lawTagName === 'прогулює') {
                                    $progress = 100 - $deputy->registrationRate;
                                } elseif ($lawTag->type === LawTag::TYPE_SUCCESS) {
                                    $progress = $deputy->lawTagsInfo[$lawTagName]['rate'];
                                } elseif ($lawTag->type === LawTag::TYPE_DANGER) {
                                    $progress = 100 - $deputy->lawTagsInfo[$lawTagName]['rate'];
                                } else {
                                    $progress = 0;
                                }
                            ?>
                            <div class="progress ng-isolate-scope" ng-transclude="">
                                <div class="progress-bar progress-bar-success"
                                     role="progressbar"
                                     aria-valuenow="<?= $progress ?>"
                                     aria-valuemin="0"
                                     aria-valuemax="100"
                                     aria-valuetext="<?= $progress ?>%"
                                     type="success"
                                     style="width: <?= $progress ?>%;"></div>
                                <div class="progress-bar progress-bar-danger"
                                     role="progressbar"
                                     aria-valuenow="<?= 100 - $progress ?>"
                                     aria-valuemin="0"
                                     aria-valuemax="100"
                                     aria-valuetext="<?= 100 - $progress ?>%"
                                     type="danger"
                                     style="width: <?= 100 - $progress ?>%;"></div>
                            </div>
                            <div class="progress-title ng-binding"><?= $lawTagName ?></div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="modal-footer ng-scope">
    </div>
</div>
</div>
</div>

<script>
</script>

