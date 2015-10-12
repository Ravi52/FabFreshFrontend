'use strict';

/**
 * @ngdoc overview
 * @name factoryPageApp
 * @description
 * # factoryPageApp
 *
 * Main module of the application.
 */
angular
  .module('factoryPageApp', [
    'F1FeederApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orders',{
        templateUrl : 'views/orders.html',
        controller: 'ordersCtrl',
        controllerAs: 'orders'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
