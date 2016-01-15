'use strict';

angular.module('factoryPageApp')
  .controller('reciept', function($scope ,$routeParams,ergastAPIservice, $q) {
    $scope.id = $routeParams.id;

    $scope.ordersList = [];
    //$scope.ordersList = [{\"total\": \"10.0\", \"typeName\": \"pants\", \"typeQuantity\": \"pants\", \"id\": \"0\", \"typePrice\": \"5.0\"}, {\"total\": \"2.0\", \"typeName\": \"truoser\", \"typeQuantity\": \"truoser\", \"id\": \"1\", \"typePrice\": \"1.0\"}, {\"total\": \"1.0\", \"typeName\": \"trouser\", \"typeQuantity\": \"trouser\", \"id\": \"2\", \"typePrice\": \"1.0\"}];

  ergastAPIservice.getClothPrice($scope.id)
    .then(
    function(response){
       $scope.ordersList = response;
       

      },
    function(httpError){
      throw httpError.status;   
    }
  );
  });
