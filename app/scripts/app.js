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
    //'ngAnimate',
    //'ngCookies',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'smart-table'
      ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      
      //For Created Page
      
      .when('/created/:id',{

        templateUrl : '../views/created.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      
      .when('/orderStatusCreated/:id',{
        template : '',
        controller: 'statusUpdateCtrlCreated',
        controllerAs: 'statusCreated'
      })

      //Recieved at processing center

      .when('/recieve/:id',{
        templateUrl : '../views/recieved.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orderStatusRecieved/:id',{
        template : '',
        controller: 'statusUpdateCtrlRecieve',
        controllerAs: 'statusCreated'
      })

      //For Tagging Page
      .when('/tagging/:id',{
        templateUrl : '../views/tagging.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orderStatusTagging/:id',{
        template : '',
        controller: 'statusUpdateCtrlTagging',
        controllerAs: 'statusTagging'
      })

      //For PreCheck
      .when('/precheck/:id',{
        templateUrl : '../views/precheck.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orderStatusPrecheck/:id',{
        template : '',
        controller: 'statusUpdateCtrlprecheck',
        controllerAs: 'statusprecheck'
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
      .when('/wash/:id', {
        templateUrl: '../views/wash.html',
        controller: 'AboutCtrl',
        controllerAs: 'wash'
      })
      .when('/dry/:id', {
        templateUrl: '../views/dry.html',
        controller: 'AboutCtrl',
        controllerAs: 'dry'
      })
      .when('/iron/:id',{
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
      .when('/ship/:id',{
        templateUrl:'../views/ship.html',
        controller: 'AboutCtrl',
        controllerAs: 'ship'
      })
      .when('/invoice/:id',{
        templateUrl: '../views/invoice.html',
        controller:'reciept',
        controllerAs : 'reciept'
      })
      .when('/slip/:id', {
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

