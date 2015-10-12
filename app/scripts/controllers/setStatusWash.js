/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlWash', function($scope,$routeParams,ergastAPIservice,$location) {
    $scope.id = $routeParams.id;
    var alert;
    ergastAPIservice.setStatusWash($scope.id).success(function () {

      alert("Status updated");
      $location.path('/wash');

    }).error(function (data, status) {
      alert(status);
    });

  });

