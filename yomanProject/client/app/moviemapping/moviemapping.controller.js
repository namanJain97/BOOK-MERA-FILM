'use strict';

(function(){

class MoviemappingComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    $(document).ready(function(){
      $('#datepicker').datepicker({dateFormat:'dd, M yy'});

    });
}

$onInit() {
  this.$http.get('/api/theatreendpoints/').then(response => {
    this.theatreData = response.data;
    this.socket.syncUpdates('theatreendpoint', this.theatreData);
  });

  this.$http.get('/api/moviesendpoints').then(response => {
    this.MovieData = response.data;
    this.socket.syncUpdates('moviesendpoint', this.MovieData);
      });

      this.$http.get('/api/moviemappingendpoints/').then(response => {
            this.mappingData = response.data;
            console.log(this.mappingData);
            this.socket.syncUpdates('moviemappingendpoint', this.mappingData);
      });
      $( "#datepicker" ).datepicker({ minDate: new Date()});

}

mapMovie(){
  alert('Movie Mapped Successfully');
  console.log(this.selectedCity+" "+this.selectedMovie+" "+this.selectedPlace+" "+this.selectedTheatre);
  this.selectedDate=$('#datepicker').val();
  console.log(this.selectedDate);
  this.$http.post('/api/moviemappingendpoints/', {
       Title:this.selectedMovie,
       City:this.selectedCity,
       Place:this.selectedPlace,
       TheatreName:this.selectedTheatre,
       ShowDate:this.selectedDate,
       ShowTime:this.arrayTym,

  });

    this.$http.put('/api/moviesendpoints/up/'+ this.selectedMovie).then(response => {
    console.log(response);
    });
}

time(){
  var h = document.getElementById("hh");
  var hour = h.options[h.selectedIndex].value;
  var m = document.getElementById("mm");
  var min = m.options[m.selectedIndex].value;
  var am = document.getElementById("am");
  var am = am.options[am.selectedIndex].value;
  var timing = hour + ":" + min + " " + am;
  $('#opt').append( '<option value="'+timing+'">'+timing+'</option>' );

  var fld = document.getElementById('opt');
  var arr = [];
  for (var i = 0; i < fld.options.length; i++) {
    arr[i]=fld.options[i].value;

}
  console.log("Array is "+arr);
  this.arrayTym=arr;

console.log(this.arrayTym);
}
// Date(){
// //  var d = document.getElementById("dte").value;
//   this.selectedDate = document.getElementById("dte").value;
//   console.log("hi"+this.selectedDate);y

}

angular.module('yomanProjectApp')
  .component('moviemapping', {
    templateUrl: 'app/moviemapping/moviemapping.html',
    controller: MoviemappingComponent,
    controllerAs: 'moviemappingCtrl'
  });

})();
