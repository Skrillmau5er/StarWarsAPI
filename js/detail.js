//API Call
var urlString = window.location.href;
var url = new URL(urlString);
var movieID = url.searchParams.get("movieID");
var request = new XMLHttpRequest()
request.open('GET', 'https://swapi.co/api/films/' + movieID, true)
request.onload = function() {
// Begin accessing JSON data here
  detailView.setMovie(JSON.parse(this.response));
  showPage();
}
request.send();

var detailView = new Vue({
    el: '#detailView',
    data: {
      movie: 'title',
      likes: 0,
      dislikes: 0,
    },
    methods: {
      setMovie: function (movie) {
        this.movie = movie;
        console.log(this.movie)
      }
    }
  });

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("waitMessage").style.display = "none";
    document.getElementById("detailView").style.display = "block";
  }