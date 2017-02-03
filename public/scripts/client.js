var app = angular.module('myApp', []);

app.controller('GifController', function(GifGetter) {
  console.log('GifController connected');

  var vm = this;
  // vm.searchQuery = 'Upsilon'

vm.randomGif = function() {
  GifGetter.randomGif().then(function(res) {
    console.log("from the controller \n", res);

    vm.randomGifUrl = res.data.image_url
  }); // end GifGetter.andomGif
}; // end vm.randomGif

vm.searchGif = function(searchQuery) {
  GifGetter.searchGif(searchQuery).then(function(res) {
    // store array of gifs in searchGifUrl
    vm.searchGifUrl = res.data;
  }); // end GifGetter.searchGif
}; // end vm.searchGif

}); // end app.controller
