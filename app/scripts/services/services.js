angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        //method: 'JSONP',
        url: 'http://127.0.0.1:8000/orders.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
