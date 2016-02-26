/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlShip', function($scope,$routeParams,ergastAPIservice,$location, $q,$window) {
    $scope.id = $routeParams.id;

    ergastAPIservice.setStatusShip($scope.id)
    .then(
		function(response){
			 alert("Status updated");
             $location.path('/iron');
            $window.location.href = 'http://52.27.27.85/#/ship/9';
             //$window.location.href = 'http://localhost:9000/#/ship';

             $window.location.reload();

		},
		function(httpError){
			throw httpError.status;
		}
	);

  });

