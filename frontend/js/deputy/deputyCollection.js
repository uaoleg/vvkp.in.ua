'use strict';

angular.module('vvkp-app.deputy').

factory('DeputyCollection', function ($http, $localStorage, AbstractEntity, DeputyModel) {

    var DeputyCollection = AbstractEntity.extend({

        /**
         * Initialize collection
         */
        initialize: function () {

        },

    });

    return DeputyCollection;

});
