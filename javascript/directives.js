(function(angular){
  'use strict';
  angular.module('vvkpApp').directive('deputiesList', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/deputyParams.html'
    }
  });
})(angular);