'use strict';

angular.module('yomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/moviemapping', {
        template: '<moviemapping></moviemapping>',
        authenticate:'true'
      });
  });
