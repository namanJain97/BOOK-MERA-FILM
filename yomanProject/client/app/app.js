'use strict';

angular.module('yomanProjectApp', ['yomanProjectApp.auth', 'yomanProjectApp.admin',
    'yomanProjectApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'validation.match','ui.unique'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
