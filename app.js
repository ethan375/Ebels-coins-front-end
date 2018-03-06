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



}]);