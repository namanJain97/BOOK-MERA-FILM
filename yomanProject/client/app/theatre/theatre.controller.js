'use strict';

(function(){

class TheatreComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;

    this.theatreData = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('theatreendpoint');
    });
  }
  $onInit() {
    this.$http.get('/api/theatreendpoints/').then(response => {
      this.theatreData = response.data;
      console.log(this.theatreData);
      this.socket.syncUpdates('theatreendpoint', this.theatreData);
    });
  }

  addTheatre() {
    console.log('theatre added');
    //console.log(this.theatreName);
    this.$http.post('/api/theatreendpoints/', {
      TheatreName: this.theatreName,//left hand side=model and right hand side=html
      Place: this.place,
      City: this.city
    });
    document.getElementById("myForm").reset();
    alert('Theatre Added Successfully');
  }

  RemoveTheatre(theatre) {
    console.log('inside deleting');
    var x = confirm('Are you sure you want to delete this record ?');
    if (x) {
      this.$http.delete('/api/theatreendpoints/' + theatre._id);
    }
    alert('Theatre Remove Successfully');
  }

}

angular.module('yomanProjectApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });

})();
