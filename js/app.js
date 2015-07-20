(function() {
    'use strict';

    angular.module('vvkp-app', ['controllers', 'ui.bootstrap'])


        .directive('vvkpSrc', function() {
            return {
                restrict: 'A',
                scope: true
            };
        });

})();