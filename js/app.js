(function (angular) {
    var app = angular.module('vvkp-app',[]);

    app.controller('deputiesListCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.list = [];

        $scope.setSearchText = function(text) {
            location.href = '#search-text';
            $scope.searchText = text;
        };

        $http.get('data/data.min.js?vvkp-version-1.2.6')
            .then(function(response){
                  var binStr = atob(response.data);
                  $scope.list = JSON.parse(pako.inflate(binStr, { to: 'string' }));
            });
    }]);

	app.directive('vvkpSrc', function(){
		return {
			restrict: 'A',
			scope: true
		};
	});
})(window.angular);