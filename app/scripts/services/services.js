'use strict';
angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http, $q) {
    $http.defaults.headers.common.Authorization = 'Bearer hari';
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var ergastAPI = {};

	var deferred = $q.defer();

	//var URL = 'http://fabfresh.elasticbeanstalk.com'
  var URL = 'http://localhost:8000'
  //var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
  


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

  ergastAPI.getClothType = function() {
    var deferredType = $q.defer();
    return $http({
        url : URL + '/cloth/type/',
        method : 'GET'
    })
      .then(function(response){
        deferredType.resolve(response.data);
                    return deferredType.promise;
                },function(response){
        deferredType.reject(response);
                    return deferredType.promise;      
      });
  };


  ergastAPI.getClothPrice = function(id){
      var deferredPrice = $q.defer();
      return $http({
          //url : URL + '/order/reciept?id=45.json',
          method : 'GET',
          url : URL + '/order/reciept/',  
          params: {
            "id" : id
          }
      }).then(function(response){
            deferredPrice.resolve(response.data);
                return deferredPrice.promise;
                },function(response){
                    deferredPrice.reject(response);
                        return deferredPrice.promise;
                });
  };

  ergastAPI.getClothBrand = function() {
    var deferredBrand = $q.defer();
    return $http({
        url : URL + '/cloth/brand/',
        method : 'GET'
    })
      .then(function(response){
        deferredBrand.resolve(response.data);
                    return deferredBrand.promise;
                },function(response){
        deferredBrand.reject(response);
                    return deferredBrand.promise;      
      });
  };  

  ergastAPI.getClothColor = function() {
    var deferredColor = $q.defer();
    return $http({
        url : URL + '/cloth/color/',
        method : 'GET'
    })
      .then(function(response){
        deferredColor.resolve(response.data);
                    return deferredColor.promise;
                },function(response){
        deferredColor.reject(response);
                    return deferredColor.promise;      
      });
  };

  //For Size
  ergastAPI.getClothSize = function() {
    var deferredSize = $q.defer();
    return $http({
        url : URL + '/cloth/size/',
        method : 'GET'
    })
      .then(function(response){
        deferredSize.resolve(response.data);
                    return deferredSize.promise;
                },function(response){
        deferredSize.reject(response);
                    return deferredSize.promise;      
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
    ergastAPI.setCloths = function(color,type,size,brand,id,gender,damage){
      var deferredCloths = $q.defer();
      var data = {
        "color": color,
        "gender": gender,
        "type": type,
        "brand": brand,
        "order": id,
        "size": size,
        "damage": damage

      };
      return $http({
        data : data,
        method : 'POST',
        url: URL + '/cloth/cloths/'
      }).then(function(response){
            deferredCloths.resolve(response.data);
                return deferredCloths.promise;
                },function(response){
                    deferredCloths.reject(response);
                        return deferredCloths.promise;
                });
    };

    ergastAPI.setAmount = function(amount,id,weight,quantity){
      var data = {
        "weight" : weight,
        "quantity" : quantity,
        "status" : "5",
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

    
    //Created Stage 1[created] to 3[recieved]
    ergastAPI.setStatusCreated = function(id){
      var data = {
        "status" : 3
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });

    };

    //Received complete stage 3[recieved] to 4[tagging]
    ergastAPI.setStatusRecieved = function(id){
      var data = {
        "status" : 4
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });
    };    

    
    //Tagging complete stage 4[precheck] to 5[Tagging]
    ergastAPI.setStatusPrecheck = function(id){
      var data = {
        "status" : 5
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });
    };

    
    //Pre check stage 5[tagging] to 6[wash] 
    ergastAPI.setStatusTagging = function(id){
      var data = {
        "status" : 6
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });

    };

    //Wash stage 6[wash] to 7[dry]
    ergastAPI.setStatusWash = function(id){
      var data = {
        "status" : 7
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });

    };

    //Dry stage 7[dry] to 8[iron]
    ergastAPI.setStatusDry = function(id){
      var data = {
        "status" : 8
      };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/'+id+'.json'
      });

    };

    //iron stage 8[iron] to 9[package]
    ergastAPI.setStatusIron = function(id){
      //deferred = $q.defer();
      var data = {
        "status" : 9
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
    

    ergastAPI.setStatusShip = function(id){
      var data = {
        "status" : 10
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
