'use strict';

/**
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('AboutCtrl', function($scope, ergastAPIservice, $q,$routeParams) {
    $scope.nameFilter = null;
    $scope.ordersList = [];
    $scope.id = $routeParams.id;

    $scope.searchFilter = function (orders) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(orders.id) ;
    };

    /* ergastAPIservice.getOrders()
	.then(
		function(response){
       $scope.rowCollection = response;
			 $scope.ordersList = response;
       
		},
		function(httpError){
			throw httpError.status;		
		}
	)*/
	ergastAPIservice.orderListStatus($scope.id)
  .then(
    function(response){
       $scope.rowCollection = response;
       $scope.ordersList = response;
       
    },
    function(httpError){
      throw httpError.status;   
    }
  )
  });

