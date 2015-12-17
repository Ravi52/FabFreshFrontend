'use strict';
angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http, $q) {
    $http.defaults.headers.common.Authorization = 'Bearer hari';
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var ergastAPI = {};

	var deferred = $q.defer();

	var URL = 'http://fabfresh.elasticbeanstalk.com'

	ergastAPI.getOrders = function() {
		return $http({
		    url : URL + '/orders.json',
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
        url : URL + '/orders/' +id+ '.json'
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
        url : URL + '/orders/'+ id + '.json'
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
        "weight" : weight,
        "quantity" : quantity,
        "status" : "2",
        "id" : id
      };

      return $http({
        data : data,
        method : 'POST',
        url: URL + '/setAmount/'
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
        url : URL + '/orders/'+id+'.json'
      });

    };

    ergastAPI.setStatusDry = function(id){
      var data = {
        "status" : 4
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });
    };

    ergastAPI.setStatusShip = function(id){
      var data = {
        "status" : 6
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/' +id+ '.json'
      })
      .then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

    return ergastAPI;
  });
