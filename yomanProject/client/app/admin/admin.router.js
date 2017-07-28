'use strict';

angular.module('yomanProjectApp.admin')
  .config(function($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    });
  });
