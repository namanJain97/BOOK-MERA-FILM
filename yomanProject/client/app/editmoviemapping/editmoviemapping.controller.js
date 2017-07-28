'use strict';

(function(){

class EditmoviemappingComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.mappingData = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('moviemappingendpoint');
    });
  }

  $onInit(){
  this.$http.get('/api/moviemappingendpoints/').then(response => {
        this.mappingData = response.data;
        console.log(this.mappingData);
        this.socket.syncUpdates('moviemappingendpoint', this.mappingData);
  });
}

removeMapping(moviemapping){
    var x = confirm('Are you sure you want to delete this record ?');
  if (x) {
    this.$http.delete('/api/moviemappingendpoints/' + moviemapping._id).then(response => {
      });

  alert('Mapping of the movie is removed!');
      this.$http.get('/api/moviemappingendpoints/mov/'+ moviemapping.Title).then(response => {
    console.log(response.data);
  console.log(response.data.length);
  if(response.data.length==0){
    this.$http.put('/api/moviesendpoints/map/'+ moviemapping.Title).then(response => {
    console.log(response);
    });

  }

          });
}

}
}
angular.module('yomanProjectApp')
  .component('editmoviemapping', {
    templateUrl: 'app/editmoviemapping/editmoviemapping.html',
    controller: EditmoviemappingComponent,
    controllerAs: 'editmoviemappingCtrl'
  });

})();
