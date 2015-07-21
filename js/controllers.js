(function() {
    'use strict';

    angular.module('controllers', ['services'])

        .controller('deputiesListCtrl', ['$rootScope', '$scope', '$timeout',
            function($rootScope, $scope, $timeout) {
                $scope.setSearchText = function(text) {
                    location.href = '#search-text';
                    $scope.searchText = text;
                };

                $scope.addSearchTag = function(text) {
                    if ($scope.isTagSelected(text)) return;

                    $scope.tags.push({name:text});
                    $scope.reloadSearchResults();
                };

                $scope.reloadSearchResults = function() {
                    $scope.filtering = true;
                    $timeout(function() {
                        $scope.list = filterList(angular.copy($scope.deputies), angular.copy($scope.tags));
                        $scope.filtering = false;
                    }, 50); // remove value after list rendering fixes
                };

                function filterList(list, options) {
                    if (!options.length) return list;

                    var searchString = options.shift().name.toLowerCase();

                    list = list.filter(function(item) {
                        if (item.name.toLowerCase().indexOf(searchString) > -1) return true;
                        if (item.residence.toLowerCase().indexOf(searchString) > -1) return true;
                        if (item.party.toLowerCase().indexOf(searchString) > -1) return true;
                        if (indexOfTag(item.tags, searchString) > -1) return true;

                        return false;
                    });

                    return filterList(list, options);
                }

                function indexOfTag(tags, text) {
                    var tagIndex = -1;
                    tags.forEach(function(tag, index) {
                        tagIndex = (tag.name.toLowerCase().indexOf(text) > -1)? index : tagIndex;
                    });

                    return tagIndex;
                }
            }]);

})();