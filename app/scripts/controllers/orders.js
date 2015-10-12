/**
 * Created by hari on 12/10/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('ordersCtrl', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.ordersList = [];

    ergastAPIservice.getOrders().success(function (response) {
      $scope.ordersList =response;
      alert(response);
    }).error(function(data, status) {
      alert(status);
    });
  });
