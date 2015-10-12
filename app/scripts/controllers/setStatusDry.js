/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlDry', function($scope,$routeParams,ergastAPIservice,$location) {
    $scope.id = $routeParams.id;
    var alert;
    ergastAPIservice.setStatusDry($scope.id).success(function () {
      alert("Status updated");
      $location.path('/dry');

    }).error(function (data, status) {
      alert(status);
    });

  });
