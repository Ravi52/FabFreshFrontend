/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlIron', function($scope,$routeParams,ergastAPIservice,$location, $q,$window) {
    $scope.id = $routeParams.id;


   /* ergastAPIservice.setStatusIron($scope.id).success(function () {

      alert("Status updated");
      $location.path('/iron');

    }).error(function (data, status) {
      alert(status);
    });
*/
    ergastAPIservice.setStatusIron($scope.id)
    .then(
		function(response){
			 alert("Status updated");
             $location.path('/iron');
             $window.location.href = 'http://52.27.27.85/#/iron/8';
             //$window.location.href = 'http://localhost:9000/#/iron';
             $window.location.reload();

		},
		function(httpError){
			throw httpError.status;
		}
	);

  });

