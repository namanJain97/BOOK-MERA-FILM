'use strict';

angular.module('yomanProjectApp.auth', ['yomanProjectApp.constants', 'yomanProjectApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
