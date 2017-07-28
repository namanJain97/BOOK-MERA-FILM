'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editmoviemapping', {
        template: '<editmoviemapping></editmoviemapping>',
        authenticate:'true'
      });
  });
