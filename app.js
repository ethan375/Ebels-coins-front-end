console.log("files connected");
const app = angular.module("Coinsite", ['ngRoute']);

Coinsite.config(['$routeProvider', function(routeProvider) {
  $routeProvider
  .when('/store', {
    templateUrl: './views/store'
  })
  .when('/forum', {
    templateUrl: './views/forum'
  }).when('/info', {
    templateUrl: './views/info',
    // this is where were going to specify the controller for the view
  }).otherwise({
    redirectTo: '/store'
  })
}]);

app.controller("StoreController", ['$http',function ($http){
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
    const makeAjaxCall = $http({
      method:'GET',
      url: 'http://localhost:9292/comments'
    }).then(function(res) {
      // console.log(res.data);
      controller.comments = res.data;
    }, function(err) {
      console.error(err);
    })
  }
  this.getComments() //runs the function immediately

}]);