'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ratings', {
        template: '<ratings></ratings>',
        authenticate:'true'
      });
  });
