(function() {
    'use strict';

    angular.module('services', [])

        .service('tagsService', ['$rootScope', '$http', function($rootScope, $http) {
            return {
                getList: function(callback) {
                    $http.get('data/tags.min.js')
                        .then(function(response) {
                            if (typeof callback === 'function')
                                var data = JSON.parse(pako.inflate(atob(response.data), { to: 'string' }));
                                callback(data);
                        });
                }
            }
        }])

        .service('deputiesService', ['$rootScope', '$http', function($rootScope, $http) {
            return {
                getList: function(callback) {
                    $http.get('data/deputies.min.js')
                        .then(function(response) {
                            if (typeof callback === 'function')
                                var data = JSON.parse(pako.inflate(atob(response.data), { to: 'string' }));
                                callback(data);
                        });
                }
            }
        }])

        .run(['$rootScope', 'tagsService', 'deputiesService',
            function($rootScope, tagsService, deputiesService) {
                window.ctx = $rootScope;
                $rootScope.list = [];
                $rootScope.tags = [];
                $rootScope.filtering = false;

                tagsService.getList(function(tags) {
                    $rootScope.tags = tags;
                    deputiesService.getList(function(deputies) {
                        angular.forEach(deputies, function(deputy) {
                            var tags = [];
                            angular.forEach(deputy.tags, function(tag) {
                                tags.push(_.findWhere($rootScope.tags, {
                                    "name": tag
                                }));
                            });
                            deputy.tags = tags;
                        });
                        $rootScope.list = deputies;
                    })
                });
            }]);
})();