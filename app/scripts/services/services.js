angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {
    $http.defaults.headers.common.Authorization = 'Bearer oj1yZA172yKaGL7oWUwg1qQg7bJGc8';
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var ergastAPI = {};

    ergastAPI.getOrders = function() {
      return $http({
        //method: 'JSONP',
        url: 'http://127.0.0.1:8000/orders.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getOrderDetails = function(id){
      return $http({
        url : 'http://127.0.0.1:8000/orders/'+ id + '.json'
      });
    }

    ergastAPI.setAmount = function(amount,id,weight,amount){
      var data = {
        "amount" : amount,
        "weight" : weight,
        "amount" : amount,
        "status" : 2
      }

      return $http({
        data : data,
        method : 'PATCH',
        url: 'http://127.0.0.1:8000/orders/'+ id +'.json?'
      });
    }

    return ergastAPI;
  });
