'use strict';

(function(){

class RatingsComponent {
  constructor($http,$location, $scope, socket,Auth) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.userRate=[];

  }

  $onInit(){
    var x = sessionStorage.getItem('Movie');
    var y = sessionStorage.getItem('Poster');
    this.movieTitle=x;
    console.log(this.movieTitle);
    document.getElementById('post').src=y;

    this.$http.get('/api/ratingsendpoints/').then(response => {
      this.userRate = response.data;
      var len=response.data.length;
        var sum=0,avg=0;
    for(var i=0;i<len;i++)
    {
          var n= response.data[i].Ratings;
          sum=sum+n;
    }
    avg=sum/len;
    var average =(avg).toFixed(2);
    console.log(average);
      document.getElementById('rte').innerHTML=average;
      this.socket.syncUpdates('ratingsendpoints', this.userRate);
    });
  }

  save(){
    if(this.isLoggedIn){
    var radios = document.getElementsByName('rating');
    var uname = document.getElementById('name').value;
    console.log(uname);
    this.rtname=uname;
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        var selrad=radios[i].value;
        this.rateStar=selrad;
        break;
      }
  }

      this.$http.post('/api/ratingsendpoints/', {
       Ratings:this.rateStar,
       Name:this.rtname
          });

          this.$http.get('/api/ratingsendpoints/').then(response => {
            this.userRate = response.data;
            var len=response.data.length;
              var sum=0,avg=0;
          for(var i=0;i<len;i++)
          {
                var n= response.data[i].Ratings;
                sum=sum+n;
          }
          avg=sum/len;
          var average =(avg).toFixed(2);
          console.log(average);
            document.getElementById('rte').innerHTML=average;
            this.socket.syncUpdates('ratingsendpoints', this.userRate);
          });

          if (true) {
            alert('Thanks For Giving Your Feedback');
          } else {}

          }

else {
alert('please login');
}

}
// onInit();
}

angular.module('yomanProjectApp')
  .component('ratings', {
    templateUrl: 'app/ratings/ratings.html',
    controller: RatingsComponent,
    controllerAs: 'ratingsCtrl'
  });

})();
