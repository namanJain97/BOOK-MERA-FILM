'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seat', {
        template: '<seat></seat>'
      });
  });
