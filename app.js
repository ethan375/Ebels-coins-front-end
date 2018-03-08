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
    controller: "ForumController as frm"
  }).when('/info', {
    templateUrl: './views/info.html',
    controller: "InfoController as inf"
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

}]); //end forum controller


app.controller("StoreController", ['$http', function($http) {
  this.getEbayItems = function() {}
  const makeAjaxCall = $http({
    method: 'GET',
    url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3'
  }).then(function(res) {
    console.log(res)
  }, function(err) {
    console.error(err);
  })
  this.getEbayItems(); //runs the function immediately when the store template is rendered
}]); //end of the Store controller


app.controller("InfoController", ['$http', function($http) {
  this.halfCent = "https://en.wikipedia.org/wiki/Half_cent_(United_States_coin)#/media/File:Half_cent_obv.jpg"
  
  this.largeCent = "https://en.wikipedia.org/wiki/Large_cent#/media/File:1817_Large_cent_obverse.jpg"

  this.smallCent = "https://upload.wikimedia.org/wikipedia/commons/e/ec/NNC-US-1858-1C-Flying_Eagle_Cent.jpg"

  this.nickels = "https://en.wikipedia.org/wiki/Liberty_Head_nickel#/media/File:NNC-US-1883-5C-Liberty_Nickel_(no_cents).jpg"

  this.halfDimes = "https://upload.wikimedia.org/wikipedia/commons/2/2b/1794_half_dime_obv.jpg"

  this.dimes = "https://en.wikipedia.org/wiki/Mercury_dime#/media/File:1943D_Mercury_Dime_obverse.jpg"

  this.twentyCents = "https://en.wikipedia.org/wiki/Twenty-cent_piece_(United_States_coin)#/media/File:1876-CC_20C_(obv).jpg"

  this.quarters = "https://en.wikipedia.org/wiki/Standing_Liberty_quarter#/media/File:1916_Standing_Liberty_quarter_obverse_1.png"

  this.halfDollars = "https://en.wikipedia.org/wiki/Barber_coinage#/media/File:1914_Barber_Dime_NGC_MS64plus_Obverse.png"

  this.silverDollar = "https://en.wikipedia.org/wiki/1804_dollar#/media/File:1804_dollar_type_I_obverse.jpeg"

  this.modernDollar = "https://en.wikipedia.org/wiki/Susan_B._Anthony_dollar#/media/File:1981-S_SBA$_Type_Two_Deep_Cameo.jpg"

  this.tradeDollar = "https://en.wikipedia.org/wiki/Trade_dollar_(United_States_coin)#/media/File:1884_T$1_Trade_Dollar_(Judd-1732).jpg"

  this.goldDollar = "https://en.wikipedia.org/wiki/Gold_dollar#/media/File:NNC-US-1849-G$1-Liberty_head_(Ty1).jpg"

  this.goldQuarter = "some placeholder until I get ahold of the book"

  this.threeDollaGold = "https://en.wikipedia.org/wiki/Three-dollar_piece#/media/File:NNC-US-1854-G$3-Indian_Princess_Head.jpg"

  this.fourDollaGold = "https://en.wikipedia.org/wiki/Stella_(United_States_coin)#/media/File:NNC-US-1880-G$4-Stella_Pattern_(Coiled_Hair).jpg"

  this.goldHalfEagle = "https://en.wikipedia.org/wiki/Half_eagle#/media/File:NNC-US-1795-G$5-Turban_Head_(small_eagle).jpg"

  this.tenGoldEagle = "https://en.wikipedia.org/wiki/American_Gold_Eagle#/media/File:Liberty_$50_Obverse.png"

  this.goldDoubleEagle = "https://en.wikipedia.org/wiki/Double_eagle#/media/File:NNC-US-1849-G$20-Liberty_Head_(Twenty_D.).jpg"

  this.commerative = "https://en.wikipedia.org/wiki/Modern_United_States_commemorative_coins#/media/File:86_Ellis_Island.jpg"

}]);