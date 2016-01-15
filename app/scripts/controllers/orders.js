/**
 * Created by hari on 12/10/15.
 */
'use strict';

/**;
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('OrderCtrl', function($scope,$routeParams,ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.ordersList = [];
    $scope.order = null;

    ergastAPIservice.getOrderDetails($scope.id)
     .then(
		function(response){
			 $scope.ordersList = response;

		},
		function(httpError){
			throw httpError.status;
		}
	);
  });

