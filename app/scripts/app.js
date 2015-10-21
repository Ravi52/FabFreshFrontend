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
      .when('/orderStatusWash/:id',{
        template : '',
        controller: 'statusUpdateCtrlWash',
        controllerAs: 'statusWash'
      })
      .when('/orderStatusDry/:id',{
        template : '',
        controller: 'statusUpdateCtrlDry',
        controllerAs: 'statusDry'
      })
      .when('/orderStatusIron/:id',{
        template : '',
        controller: 'statusUpdateCtrlIron',
        controllerAs: 'statusIron'
      })
      .when('/ship',{
        templateUrl:'../views/ship.html',
        controller: 'AboutCtrl',
        controllerAs: 'ship'
      })
      .when('/invoice',{
        templateUrl: '../views/invoice.html',
        controller:'',
      })
      .when('/slip', {
        templateUrl: '../views/slip.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orderStatusShip/:id',{
        template : '',
        controller:'statusUpdateCtrlShip',
        controllerAs : 'statusShip'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
