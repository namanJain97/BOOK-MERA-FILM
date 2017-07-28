'use strict';

(function(){

class BookingComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.theatreData = [];
    this.mappingData = [];
    }

$onInit(){
var x = sessionStorage.getItem('Movie');
var y = sessionStorage.getItem('Poster');

this.movieTitle=x;
console.log(this.movieTitle);
//document.getElementById('mov').innerHTML=x;
document.getElementById('Post').src=y;

this.$http.get('/api/theatreendpoints/').then(response => {
  this.theatreData = response.data;
  this.socket.syncUpdates('theatreendpoint', this.theatreData);
});


        this.$http.get('/api/moviemappingendpoints/mov/'+ this.movieTitle).then(response => {
              this.mappingDataTitle = response.data;
              this.mappingData = response.data;
              console.log(this.mappingData);
              this.socket.syncUpdates('moviemappingendpoint', this.mappingDataTitle);
        });

var arrDates=[];

for (var i = 0; i <4 ; i++) {
var today = new Date();
today.setDate(today.getDate()+i);
arrDates[i]=today;
//  var s=document.getElementById('list');
//  var option=document.createElement('option');
//  option.text=arrDates[i];
//  s.add(option);
  }
this.movDates=arrDates;
}

timing(a,b,c,d,e,f){
console.log('btn clicked');
sessionStorage.setItem('title',a);
sessionStorage.setItem('city',b);
sessionStorage.setItem('place',c);
sessionStorage.setItem('theatre',d);
sessionStorage.setItem('date',e);
sessionStorage.setItem('time',f);
if (true) {

location.href='/seat';
} else {

}
}

}
angular.module('yomanProjectApp')
  .component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });

})();
