(function (angular) {

    'use strict';

    angular.module('vvkp-app.common.features.deputy').

    factory('DeputyModel2', ['AbstractEntity', function (AbstractEntity) {

        var DeputyModel = AbstractEntity.extend({
            /**
             * Initialize object
             * @param {DeputyModel} data
             */
            initialize: function (data) {
                if ((typeof data !== 'object') || (data === null)) {
                    data = {};
                }
                this.id = data.id || '';
                this.name = data.name || '';
            }
        });

        return DeputyModel;
    }]);

})(window.angular);
