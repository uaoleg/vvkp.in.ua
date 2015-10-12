(function (angular) {

    'use strict';

    angular.module('vvkp-app.common.features.deputy').

    factory('DeputyCollection', function (AbstractEntity, DeputyModel) {

        var DeputyCollection = AbstractEntity.extend({

            /**
             * Initialize collection
             */
            initialize: function () {

            }

        });

        return DeputyCollection;

    });

})(window.angular);
