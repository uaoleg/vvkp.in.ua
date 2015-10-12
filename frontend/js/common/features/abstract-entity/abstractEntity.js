(function (angular) {

    'use strict';

    angular.module('vvkp-app.common.features.abstract-entity', []).

    factory('AbstractEntity', function () {

        /**
         * @class AbstractEntity
         * @abstract
         * @constructor
         */
        function AbstractEntity() {
            this.initialize.apply(this, arguments);
        }

        AbstractEntity.prototype.initialize = function () {};

        /**
         * @method onExtend
         * @static
         * @description Called on class initialization
         */
        AbstractEntity.onExtend = function () {};

        /**
         * @method extend
         * @static
         * @description Extends class
         * @param {Object} protoProperties (Optional)
         * @param {Object} staticProperties (Optional)
         * @return {Function}
         */
        AbstractEntity.extend = function (protoProperties, staticProperties) {
            var Parent = this,
                Child;

            if (protoProperties && Object.prototype.hasOwnProperty.call(protoProperties, 'constructor')) {
                Child = protoProperties.constructor;
            } else {
                Child = function () {
                    return Parent.apply(this, arguments);
                };
            }

            angular.extend(Child, Parent, staticProperties);

            Child.prototype = Object.create(Parent.prototype, {
                constructor: {
                    value: Child,
                    writable: true
                }
            });

            angular.extend(Child.prototype, protoProperties);

            Object.defineProperties(Child, {
                super: {
                    value: Parent.prototype
                }
            });

            Child.onExtend(protoProperties, staticProperties);

            return Child;
        };

        return AbstractEntity;
    });

})(window.angular);
