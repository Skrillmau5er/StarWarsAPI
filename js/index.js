//API Call
var request = new XMLHttpRequest()

request.open('GET', 'https://swapi.co/api/films/', true)
request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data['results'].forEach(movie => {
        results.addMovie(movie);
    });
    showPage();
  }
}
request.send()

var results = new Vue({
    el:'#results',
    data: {
        movies: [],
    },
    methods: {
        addMovie: function (movie) {
            this.movies.push(movie)
        },
        detailView: function(movieID){
            window.open('detail.html','_self');
            getMovie(movieID)

        },
        sortTitle: function() {
          this.movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
        },
        sortEpisode: function() {
          this.movies.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1);
        },
        sortRelease: function() {
          this.movies.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1);
        }
    },
    computed: {
      orderedTitle: function () {
        return _.orderBy(this.movies, 'title');
      }
    }
});

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("waitMessage").style.display = "none";
  document.getElementById("results").style.display = "block";
}