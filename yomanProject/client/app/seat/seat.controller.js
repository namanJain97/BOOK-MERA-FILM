'use strict';

(function(){

class SeatComponent {
    constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.seatData=[];

}
$onInit(){
  var seats=[];
  var totalamount;
  var z = sessionStorage.getItem('title');
  var y = sessionStorage.getItem('city');
  var x = sessionStorage.getItem('place');
  var w = sessionStorage.getItem('theatre');
  var v = sessionStorage.getItem('date');
  var u = sessionStorage.getItem('time');
  this.movieTitle=z;
  this.mcity=y;
  this.mplace=x;
  this.mtheatre=w;
  this.mdate=v;
  this.mtime=u;
  this.totalseats=seats;

  $('.seatBook').click(function($scope){
    var source = $(this).attr('src');
    var id =$(this).attr('id');
    if (source=="../assets/images/chair.png") {
          $(this).attr('src','../assets/images/chair2.png');
      } else if(source=='../assets/images/chair2.png') {
          $(this).attr('src','../assets/images/chair.png');
      }
      if (seats.indexOf(id) ==-1) {
         seats.push(id);
      } else if (seats.indexOf(id) == 0) {
        seats.splice(index, 1);
      }
      var index = seats.indexOf(id);
      document.getElementById('seatsSel').innerHTML=seats;
    var amount=seats.length*200;
      document.getElementById('amt').innerHTML=amount;
      var tax=0.12*amount;
    totalamount=tax+amount;
      // document.getElementById('total').innerHTML=totalamount;
      this.totalamt=totalamount;
    //console.log(this.totalseats);

});

this.$http.get('/api/confirmationendpoints/').then(response => {
  this.seatData = response.data;
  console.log(this.seatData);
  this.socket.syncUpdates('confirmationendpoints', this.seatData);
});

this.$http.get('api/confirmationendpoints/seatid/' +this.movieTitle+'/'+this.mcity+'/'+this.mplace+'/'+this.mtheatre+'/'+this.mtime).then(response => {

      for (var i = 0; i < response.data.length; i++) {
        for (var j = 0; j < response.data[i].movseat.length; j++) {
          console.log(response.data[i].movseat.length);
var newsrc=$('#'+response.data[i].movseat[j]).attr("src").replace("../assets/images/chair.png","../assets/images/chair1.png");
$('#'+response.data[i].movseat[j]).attr("src",newsrc);
document.getElementById(response.data[1].movseat[j]).setAttribute('disabled', true);

         }
      }
  });
}
proc(){
  var a=document.getElementById('amt').innerHTML;
  sessionStorage.setItem('chair',JSON.stringify(this.totalseats));
  sessionStorage.setItem('class','Silver');
  sessionStorage.setItem('amount',a);
  var b=document.getElementById('seatsSel').innerHTML;
  sessionStorage.setItem('bookSeats',b);
  if (true) {
    location.href='/payment';
  } else {

  }
}
}
angular.module('yomanProjectApp')
  .component('seat', {
    templateUrl: 'app/seat/seat.html',
    controller: SeatComponent,
    controllerAs: 'seatCtrl'
  });

})();
