/**
 * Created by hari on 12/10/15.
 */
'use strict';

/**;
 * @ngdoc function
 * @name factoryPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the factoryPageApp
 */
angular.module('factoryPageApp')
  .controller('OrderCtrl', function($scope,$routeParams,ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.ordersList = [];
    $scope.order = null;
    var alert;
    ergastAPIservice.getOrderDetails($scope.id).success(function (response) {
      $scope.order = response;

    }).error(function(data) {
      alert(data);
    });

   /* ergastAPIservice.setAmount().success(function(response,status){
      //alert("asd");
    }).error(function(data,status){
      alert("this is setAmout")
      alert(status)
    });
*/
  });

