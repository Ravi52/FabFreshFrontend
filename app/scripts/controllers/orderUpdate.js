/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('OrderUpdateCtrl', function($scope,$routeParams,ergastAPIservice,$location,$window) {
    $scope.formData = {};
    $scope.submit = function() {
    ergastAPIservice.setAmount($scope.amount,$scope.id,$scope.weight,$scope.quantity)
    .then(
		function(response){
			alert("Shipment Added to operations");
            $window.location.href = 'http://52.27.27.85/#/orderlist';
            //$window.location.href = 'http://localhost:9000/#/orderlist';
            $window.location.reload();
		},
		function(httpError){
		    alert("Shipment Added to operations");
			throw httpError.status;
		}
	);
  };

 });

