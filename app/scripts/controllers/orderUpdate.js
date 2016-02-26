/**
 * Created by hari on 12/10/15.
 */
'use strict';
angular.module('factoryPageApp')
  .controller('OrderUpdateCtrl', function($scope,$routeParams,ergastAPIservice,$location,$window,$http) {
    $scope.formData = {};
    $scope.selectedTestAccount = null;
    $scope.testAccounts = [];
    
    $scope.selectedColor = null;
    $scope.colors = [];
    
    $scope.selectedSize = null;
    $scope.sizes = [];

    $scope.selectedBrand = null;
    $scope.brands = [];


    ergastAPIservice.getClothSize()
    .then(
    function(response){
      
      $scope.sizes = response;
	       //alert($scope.sizes)
      },
    function(httpError){
        alert("size not available");
      throw httpError.status;
    }
  );

    ergastAPIservice.getClothColor()
    .then(
    function(response){
      
      $scope.colors = response;

      },
    function(httpError){
        alert("Colors not available");
      throw httpError.status;
    }
  );

//Brand
ergastAPIservice.getClothBrand()
    .then(
    function(response){
      
      $scope.brands = response;

      },
    function(httpError){
        alert("Brand not available");
      throw httpError.status;
    }
  );

    ergastAPIservice.getClothType($scope.amount,$scope.id,$scope.weight,$scope.quantity)
    .then(
    function(response){
      $scope.testAccounts = response;
      },
    function(httpError){
        alert("type not available");
      throw httpError.status;
    }
  );

    $scope.submitCloth = function(){
      ergastAPIservice.setCloths($scope.selectedColor,$scope.selectedTestAccount,$scope.selectedSize,$scope.selectedBrand,$scope.id,$scope.selectedGender,$scope.checkboxSelection)
      .then(function(response){
        alert("success ");
        $window.location.reload();
      },function(httpError){
        throw httpError.status;
      }
      );
    };

    $scope.submit = function() {
    ergastAPIservice.setAmount($scope.amount,$scope.id,$scope.weight,$scope.quantity)
    .then(
		function(response){
			alert("Shipment Added to operations");
            $window.location.href = 'http://52.27.27.85/#/precheck/4';
            //$window.location.href = 'http://localhost:9000/#/precheck';
            $window.location.reload();
		},
		function(httpError){
		    alert("Error Adding Coloths Informations");
			throw httpError.status;
		}
	);
  };

 });

