(function (angular) {
  var app = angular.module('vvkp-app',[]);

  app.controller('deputiesListCtrl', ['$scope', '$http', function($scope, $http){
    $scope.list = [];

    $http.get('data/data.min.js?vvkp-version-1.2.2')
	  .then(function(response){
			var binStr = atob(response.data);
			$scope.list = JSON.parse(pako.inflate(binStr, { to: 'string' }));
		});
  }]);

	app.directive('vvkpSrc', function(){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, elem, attrs){

				function tryToLoadImage(){
					elem.attr('src', '')
						.attr('src', attrs.vvkpSrc)
						.on('error', function() {
							tryToLoadImage();
						});
				}

				setTimeout(tryToLoadImage,1500);
			}
		}
	})
})(window.angular)