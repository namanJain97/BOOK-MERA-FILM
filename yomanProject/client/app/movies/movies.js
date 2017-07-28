'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movies', {
        template: '<movies></movies>',
        authenticate:'true'
      });
  });
