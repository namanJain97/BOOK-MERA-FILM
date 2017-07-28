'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/booking', {
        template: '<booking></booking>'
      });
  });
