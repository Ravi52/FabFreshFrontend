/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlWash', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;

/*
     ergastAPIservice.setStatusWash($scope.id)
     .then(
		function(){
			alert("Status updated");
		},
		function(httpError){
			throw httpError.status;
		}
	);

*/
    ergastAPIservice.setStatusWash($scope.id).success(function () {

      alert("Status updated");
      $window.location.href = 'http://52.27.27.85/#/wash';
      //$window.location.href = 'http://localhost:9000/#/wash';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  });

