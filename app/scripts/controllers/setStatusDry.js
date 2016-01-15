/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlDry', function($scope,$routeParams,ergastAPIservice,$location,$window) {
    $scope.id = $routeParams.id;

    ergastAPIservice.setStatusDry($scope.id).success(function () {
      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/dry';
      $window.location.href = 'http://localhost:9000/#/dry';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  });
