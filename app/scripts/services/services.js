'use strict';
angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http, $q) {
    $http.defaults.headers.common.Authorization = 'Bearer 29fEhsSxh0H8NBwzmwiopbmX90WkLa';
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var ergastAPI = {};

	var deferred = $q.defer();
	
	ergastAPI.getOrders = function() {
		return $http({
		    url : 'https://evening-refuge-7944.herokuapp.com/orders.json',
		    method : 'GET'
		})
			.then(function(response){
				deferred.resolve(response.data);
                		return deferred.promise;
            		},function(response){
				deferred.reject(response);
                		return deferred.promise;			
			});
	};

	ergastAPI.setStatusIron = function(id){
      //deferred = $q.defer();
      var data = {
        "status" : 5
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : 'https://evening-refuge-7944.herokuapp.com/orders/'+id+'.json'
      })
      .then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

	ergastAPI.getOrderDetails = function(id){
      return $http({
	method : 'GET',
        url : 'https://evening-refuge-7944.herokuapp.com/orders/'+ id + '.json'
      })
      .then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

    ergastAPI.setAmount = function(amount,id,weight,quantity){
      var data = {
        "amount" : amount,
        "weight" : weight,
        "quantity" : quantity,
        "status" : 2
      };

      return $http({
        data : data,
        method : 'PATCH',
        url: 'https://evening-refuge-7944.herokuapp.com/orders/'+ id +'.json'
      }).then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

    ergastAPI.setStatusWash = function(id){
      var data = {
        "status" : 3
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : 'https://evening-refuge-7944.herokuapp.com/orders/'+id+'.json'
      });

    };

    ergastAPI.setStatusDry = function(id){
      var data = {
        "status" : 4
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : 'https://evening-refuge-7944.herokuapp.com/orders/'+id+'.json'
      });
    };



    return ergastAPI;
  });
