'use strict';

/**
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('AboutCtrl', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.ordersList = [];

    $scope.searchFilter = function (orders) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(orders.id) || re.test(orders.owner);
    };

    ergastAPIservice.getOrders().success(function (response,status) {

      $scope.ordersList = response

    }).error(function(data, status) {
      alert(status);
    });
  });
