'use strict';

/**
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('AboutCtrl', function($scope, ergastAPIservice, $q) {
    $scope.nameFilter = null;
    $scope.ordersList = [];


    $scope.searchFilter = function (orders) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(orders.id) || re.test(orders.owner) || re.test(orders.p_id);
    };

    ergastAPIservice.getOrders()
	.then(
		function(response){
			 $scope.ordersList = response;
		},
		function(httpError){
			throw httpError.status;		
		}
	);



	/*success(function (response) {
    	
      $scope.ordersList = response;
	
    }).error(function(data, status) {
      alert(status);
	
    });*/
	
  });
