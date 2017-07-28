'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;

    $(document).ready(function()
    {
      $(bank).hide();
      $(gift).hide();
      $(wallet).hide();
      $(redeem).hide();
    });
  }
$onInit()
{
var t=  sessionStorage.getItem('title');
var c=  sessionStorage.getItem('class');
var s=  JSON.parse(sessionStorage.getItem('chair'));
var n=sessionStorage.getItem('bookSeats');
console.log(n);
var a=  sessionStorage.getItem('amount');
this.t=t;
this.c=c;
this.s=s;
this.n=n;
this.a=a;
console.log(t+" "+c+" "+s+" "+a);

document.getElementById('num').addEventListener('input', function (e) {
 e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

}
  payment(evt, pay) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      document.getElementById(pay).style.display = "block";
      evt.currentTarget.className += " active";
  }
  card(){
    var today = new Date();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
   if(mm<10) {
    mm = '0'+mm}
today = mm + '/'+ yyyy;
console.log(today);
var sel = document.getElementById("month");
var mon = sel.options[sel.selectedIndex].value;
var selyear = document.getElementById("year");
var year = selyear.options[selyear.selectedIndex].value;
 var selectedDate=mon+"/"+year;
 console.log(selectedDate);
if(selectedDate>today)
{
  location.href='/confirmation';
}else {
  alert('Please Enter Correct Details');
}

}

makeP(){
  if (true) {
    location.href='/confirmation';
  } else {

  }
}

}

angular.module('yomanProjectApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
