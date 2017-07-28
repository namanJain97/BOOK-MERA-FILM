'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
}

rate(a,b){
  console.log('clicked');
  console.log(a);
  sessionStorage.setItem('Movie',a);
  sessionStorage.setItem('Poster',b);
  if (true) {
    location.href='/ratings';
  } else {

  }
}

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });

        this.$http.get('/api/moviemappingendpoints/').then(response => {
              this.mappingData = response.data;
              console.log(this.mappingData);
              this.socket.syncUpdates('moviemappingendpoint', this.mappingData);
        });



        this.$http.get('/api/moviesendpoints').then(response => {
          this.MovieData = response.data;
          this.socket.syncUpdates('moviesendpoint', this.MovieData);
        });
    }

    book(a,b){
  sessionStorage.setItem('Movie',a);
  sessionStorage.setItem('Poster',b);
 location.href='/booking';
    }

  }

  angular.module('yomanProjectApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
