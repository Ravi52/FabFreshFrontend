/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('statusUpdateCtrlWash', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;

    ergastAPIservice.setStatusWash($scope.id).success(function () {

      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/wash';
      $window.location.href = 'http://localhost:9000/#/wash';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  })
  .controller('statusUpdateCtrlCreated', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;
    ergastAPIservice.setStatusCreated($scope.id).success(function () {

      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/created';
      $window.location.href = 'http://localhost:9000/#/created';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  })
  .controller('statusUpdateCtrlRecieve', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;
    ergastAPIservice.setStatusRecieved($scope.id).success(function () {

      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/recieve';
      $window.location.href = 'http://localhost:9000/#/recieve';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  })
  .controller('statusUpdateCtrlTagging', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;
    
    ergastAPIservice.setStatusTagging($scope.id).success(function () {

      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/tagging';
      $window.location.href = 'http://localhost:9000/#/tagging';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  })
  .controller('statusUpdateCtrlprecheck', function($window, $scope,$routeParams,ergastAPIservice,$location, $q) {
    $scope.id = $routeParams.id;
    
    ergastAPIservice.setStatusPrecheck($scope.id).success(function () {

      alert("Status updated");
      //$window.location.href = 'http://52.27.27.85/#/precheck';
      $window.location.href = 'http://localhost:9000/#/precheck';
      $window.location.reload();

    }).error(function (data, status) {
      alert(status);
    });

  });

