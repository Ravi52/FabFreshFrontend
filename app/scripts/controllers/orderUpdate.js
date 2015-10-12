/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('OrderUpdateCtrl', function($scope,$routeParams,ergastAPIservice,$location) {
    var alert;
    $scope.formData = {};
    $scope.submit = function() {

      ergastAPIservice.setAmount($scope.amount,$scope.id,$scope.weight,$scope.quantity).success(function () {
        alert("Shipment Added to operations");
        $location.path('/orderlist');

      }).error(function (data, status) {
        alert(status);
      });
    };
  });

