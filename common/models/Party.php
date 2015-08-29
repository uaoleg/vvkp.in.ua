<?php

namespace common\models;

use \yii\db\ActiveQuery;

/**
 * Party
 *
 * @property string $name
 *
 * @property-read array $deputies
 * @property-read int   $deputyCount
 * @property-read array $lawTagsInfo
 */
class Party extends BaseActiveRecord
{

    /**
     * Returns related deputies
     * @return ActiveQuery
     */
    public function getDeputies()
    {
        return $this->hasMany(Deputy::class, ['partyName' => 'name']);
    }

    /**
     * Returns count of party's deputies
     * @return int
     */
    public function getDeputyCount()
    {
        return $this->getDeputies()
            ->andWhere(['dateAuthorityStop' => null])
            ->count();
    }

    /**
     * Returns party's law tags info
     * @return array
     */
    public function getLawTagsInfo()
    {
        $info = [];
        foreach (LawTag::find()->orderBy('order')->all() as $lawTag) {
            $lawTagGood = ($lawTag->type === LawTag::TYPE_SUCCESS) ? $lawTag->name : $lawTag->opposite;
            $lawTagBad  = ($lawTag->type === LawTag::TYPE_SUCCESS) ? $lawTag->opposite : $lawTag->name;
            $info[$lawTagGood] = [
                'good'  => $lawTagGood,
                'bad'   => $lawTagBad,
                'rates' => [],
            ];
        }
        foreach ($this->deputies as $deputy) {
            $lawTagsInfo = $deputy->lawTagsInfo;
            foreach ($lawTagsInfo as $lawTagName => $lawTagInfo) {
                $lawTag = LawTag::findOne(['name' => $lawTagName]);
                $lawTagGood = ($lawTag->type === LawTag::TYPE_SUCCESS) ? $lawTag->name : $lawTag->opposite;
                $lawTagBad  = ($lawTag->type === LawTag::TYPE_SUCCESS) ? $lawTag->opposite : $lawTag->name;
                if ($lawTag->type === LawTag::TYPE_SUCCESS) {
                    $info[$lawTagGood]['rates'][] = $lawTagInfo['rate'];
                    if (isset($lawTagsInfo[$lawTag->opposite])) {
                        $info[$lawTagGood]['rates'][] = 100 - $lawTagsInfo[$lawTag->opposite]['rate'];
                    }
                } else {
                    $info[$lawTagGood]['rates'][] = 100 - $lawTagInfo['rate'];
                    if (isset($lawTagsInfo[$lawTag->opposite])) {
                        $info[$lawTagGood]['rates'][] = $lawTagsInfo[$lawTag->opposite]['rate'];
                    }
                }
            }
        }

        foreach ($info as $lawTagName => $lawTagInfo) {
            if (count($lawTagInfo['rates'])) {
                $info[$lawTagName]['rate'] = round(array_sum($lawTagInfo['rates']) / count($lawTagInfo['rates']));
            } else {
                $info[$lawTagName]['rate'] = 0;
            }
            unset($info[$lawTagName]['rates']);
        }

        return $info;
    }

}