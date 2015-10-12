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
      .when('/orderlist', {
        templateUrl: '../views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orders/:id',{
        templateUrl : 'views/orders.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .when('/wash', {
        templateUrl: '../views/wash.html',
        controller: 'AboutCtrl',
        controllerAs: 'wash'
      })
      .when('/dry', {
        templateUrl: '../views/dry.html',
        controller: 'AboutCtrl',
        controllerAs: 'dry'
      })
      .when('/iron',{
        templateUrl:'../views/iron.html',
        controller: 'AboutCtrl',
        controllerAs: 'iron'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
