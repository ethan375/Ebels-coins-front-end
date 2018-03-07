// console.log("files connected");
const app = angular.module('Coinsite', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/store', {
    templateUrl: './views/store.html',
    controller: "StoreController" 
  })
  .when('/forum', {
    templateUrl: './views/forum.html',
    controller: "ForumController"
  }).when('/info', {
    templateUrl: './views/info.html',
    controller: "InfoController"
  })
}]);

app.controller("ForumController", ['$http', function ($http){
  this.username = '';
  this.password = '';
  controller = this;
  this.login = function() {
    const makeAjaxCall = $http({
      method: 'POST',
      url: 'localhost'
    })
  }

  this.getComments = function() {
    console.log("this is the start of the ajax call")
    const makeAjaxCall = $http({
      method:'GET',
      url: 'http://localhost:9292/comments'
    }).then(function(res) {
      console.log(res.data);
      controller.comments = res.data;
    }, function(err) {
      console.error(err);
    })
  }
  this.getComments() //runs the function immediately

}]); //end forum controller


app.controller("StoreController", ['$http', function($http) {
  this.done = "there will be an ajax call made when this view is loaded to get all of the items I have for sale on my ebay store"
}]);


app.controller("InfoController", ['$http', function($http) {
  this.done = "we gotta make some 'advanced' sql queries so that we can get the right coins for every section"
}]);