'use strict';

(function(){

class MoviesComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;

    this.MovieData = [];
    this.MovieDetails=[];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('moviesendpoint');
    });

  }

  $onInit() {
    this.$http.get('/api/moviesendpoints').then(response => {
      this.MovieData = response.data;
      console.log(this.MovieData);
      this.socket.syncUpdates('moviesendpoint', this.MovieData);
    });
  }
  SearchMovie()
  {
    document.getElementById("myForm").reset();
    console.log('searching..');
    var MovieID;
    this.$http.get('https://moviesapi.com/m.php?t='+this.MovieName+'&y='+this.MovieYear+'&type=movie&r=json').then(response=>{
      MovieID=response.data[0].id;
      this.$http.get('https://moviesapi.com/m.php?i='+MovieID+'&type=movie&r=json').then(response=>{
        this.MovieDetails=response.data;
         console.log(this.MovieDetails);
          });
  });
  }

  addMovie() {
    alert('Movie Added Successfully');
  this.$http.post('/api/moviesendpoints/', {
    Image:this.MovieDetails.cov,
    Title:this.MovieDetails.title,
    Year:this.MovieDetails.year,
    Cast:this.MovieDetails.cast,
    Duration:this.MovieDetails.dur,
    Genre:this.MovieDetails.gen,
    Rate:this.MovieDetails.rate,
    Plot:this.MovieDetails.plot,
    Status:"false"
  });

  }

  removeMovie(movies){
    console.log('inside delete');
    var x = confirm('Are you sure you want to delete this record ?');
    if (x) {
      this.$http.delete('/api/moviesendpoints/' + movies._id);
    }
    alert('Movie Removed Successfully');
  }

}

angular.module('yomanProjectApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();
