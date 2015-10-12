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

    ergastAPIservice.getDrivers().success(function (response,status) {
      //Dig into the responde to get the relevant data

      $scope.ordersList = response


    }).error(function(data, status) {
      alert(status);
    });
  });
