'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatre', {
        template: '<theatre></theatre>',
        authenticate:'true'
      });
  });
