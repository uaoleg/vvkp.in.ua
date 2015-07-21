(function (angular) {
    var app = angular.module('vvkp-app',['ngTagsInput']);

    app.controller('deputiesListCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.list = [];
        $scope.tags = [];
        $scope.filtering = false;

        $scope.isTagSelected = function(text){
            return indexOfTag($scope.tags,text) > -1;
        };


        $scope.addSearchTag = function(text){
            if ($scope.isTagSelected(text)) return;

            $scope.tags.push({name:text});
            $scope.reloadSearchResults();
        };

        $scope.reloadSearchResults = function(){
            $scope.filtering = true;
            $timeout(function(){
                $scope.list = filterList(angular.copy($scope.deputies), angular.copy($scope.tags));
                $scope.filtering = false;
            },50); // remove value after list rendering fixes

            return;
        };

        function filterList(list, options){
            if (!options.length) return list;

            var searchString = options.shift().name.toLowerCase();

            list = list.filter(function(item){
                if (item.name.toLowerCase().indexOf(searchString) > -1) return true;
                if (item.residence.toLowerCase().indexOf(searchString) > -1) return true;
                if (item.party.toLowerCase().indexOf(searchString) > -1) return true;
                if (indexOfTag(item.tags, searchString) > -1) return true;

                return false;
            });

            return filterList(list, options);
        };

        function indexOfTag(tags, text){
            var tagIndex = -1;
            tags.forEach(function(tag, index){
                tagIndex = (tag.name.toLowerCase().indexOf(text) > -1)? index : tagIndex;
            });

            return tagIndex;
        }

        $http.get('data/data.min.js?vvkp-version-1.2.7')
            .then(function(response){
                  var binStr = atob(response.data);
                  $scope.deputies = JSON.parse(pako.inflate(binStr, { to: 'string' }));
                  $scope.reloadSearchResults();
            });
    }]);
})(window.angular);