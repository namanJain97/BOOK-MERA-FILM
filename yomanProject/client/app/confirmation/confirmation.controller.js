'use strict';

(function(){

class ConfirmationComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
  }

  $onInit(){
    var t=  sessionStorage.getItem('title');
    var c=  sessionStorage.getItem('class');
    var s=  JSON.parse(sessionStorage.getItem('chair'));
    var n=sessionStorage.getItem('bookSeats');
    var a=  sessionStorage.getItem('amount');
    var p = sessionStorage.getItem('Poster');
    var y = sessionStorage.getItem('city');
    var x = sessionStorage.getItem('place');
    var w = sessionStorage.getItem('theatre');
    var v = sessionStorage.getItem('date');
    var u = sessionStorage.getItem('time');
    this.t=t;
    this.c=c;
    this.s=s;
    this.n=n;
    this.a=a;
    this.mcity=y;
    this.mplace=x;
    this.mtheatre=w;
    this.mdate=v;
    this.mtime=u;
    document.getElementById('pos').src=p;
    console.log(t+" "+c+" "+s+" "+a+" "+y+" "+x+" "+w+" "+v+" "+u);

    this.$http.post('/api/confirmationendpoints/', {
      Title: this.t,
      movclass: this.c,
      movseat: this.s,
      movamount: this.a,
      City:this.mcity,
      Place:this.mplace,
      TheatreName:this.mtheatre,
      ShowDate:this.mdate,
      ShowTime:this.mtime

    });

  }

}

angular.module('yomanProjectApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });

})();
