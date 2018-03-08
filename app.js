// console.log("files connected");
const app = angular.module('Coinsite', ['ngRoute']);

// app.config(['$httpProvider'function($httpProvider) {}])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/store', {
    templateUrl: './views/store.html',
    controller: "StoreController as str" 
  })
  .when('/forum', {
    templateUrl: './views/forum.html',
    controller: "ForumController as frm"
  }).when('/info', {
    templateUrl: './views/info.html',
    controller: "InfoController as inf"
  }).when('/register', {
    templateUrl: './views/register.html',
    controller: 'RegisterController as rgs'
  }).when('/halfcent', {
    templateUrl: './views/'
  }).when('/largeCent', {
    templateUrl: './views/'
  }).when('/smallCent', {
    templateUrl: './views/'
  }).when('/nickels', {
    templateUrl: './views/'
  }).when('/halfDimes', {
    templateUrl: './views/'
  }).when('/dimes', {
    templateUrl: './views/'
  }).when('/twentyCents', {
    templateUrl: './views/'
  }).when('/quarters', {
    templateUrl: './views/'
  }).when('/halfDollars', {
    templateUrl: './views/'
  }).when('/silverDollar', {
    templateUrl: './views/'
  }).when('/modernDollar', {
    templateUrl: './views/'
  }).when('/tradeDollar', {
    templateUrl: './views/'
  }).when('/goldDollar', {
    templateUrl: './views/'
  }).when('/goldQuarter', {
    templateUrl: './views/'
  }).when('/threeDollaGold', {
    templateUrl: './views/'
  }).when('/fourDollaGold', {
    templateUrl: './views/'
  }).when('/goldHalfEagle', {
    templateUrl: './views/'
  }).when('/tenGoldEagle', {
    templateUrl: './views/'
  }).when('/goldDoubleEagle', {
    templateUrl: './views/'
  }).when('/commerative', {
    templateUrl: './views/'
  })
}]);

app.controller("ForumController", ['$http', function ($http){
  this.username = '';
  this.password = '';
  controller = this;
  this.login = function() {
    const makeAjaxCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/login'
    }).then(function(res) {
      console.log(res)
    }, function(err) {
      console.error(err)
    })
  }

  this.getComments = function() {
    const makeAjaxCall = $http({
      method:'GET',
      url: 'http://localhost:9292/comments',

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

  controller = this;

  this.getEbayItems = function() {}
  const makeAjaxCall = $http({
    method: 'GET',
    url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&q=Beatles&filter=price:[200..500]&filter=priceCurrency:USD&limit=10',
    headers:{
      'Authorization': 'Bearer v^1.1#i^1#r^0#f^0#p^3#I^3#t^H4sIAAAAAAAAAOVXW2wUVRjutttiAy2RS1GCsAyWcMnsnrl2dsKu2d6ksbQrW8CWYHNm5kw7dHZmnTPbdnkwpSYYARMIJCRGa6OSyIMVjFoND0TjBQIxSEwUYjAxJOLlQQhRAwie2bbLtkagLQ9N3EyymXP+6/d/55/zg76S0jW71u/6s8w3q3CwD/QV+nzMbFBaUry2vKhwcXEByBPwDfY93ufvL7q8DsOkmZI3IpyyLYwCvUnTwnJ2MUKlHUu2ITawbMEkwrKryonYhkaZDQI55diurdomFWiojVC8xGoiJyEJcLzCKxpZtcZsttgRSkAa0AXAIMhzrIrINsZp1GBhF1puhGIBI9GAo4HUwjIyALLABKUqsY0KbEYONmyLiAQBFc1GK2d1nbxQ7x4pxBg5LjFCRRti9YnmWENtXVPLulCeregoDAkXumk8/q3G1lBgMzTT6O5ucFZaTqRVFWFMhaIjHsYblWNjwUwh/CzSrMbriJN4lkM8edgHAmW97SShe/c4vBVDo/WsqIws13Az90KUoKFsR6o7+tZETDTUBry/p9PQNHQDORGqrjrWuilRt5EKJOJxx+42NKR5mTKCILCCWMWEqShSkIldB3Yj07A6VNuw8Ki7EZujYE/wV2NbmuFBhwNNtluNSOxoPEIEnjyEiFCz1ezEdNeLK1+OyyHJt3mlHall2u20vOqiJIEjkH29dx3GiHGHCg+KGhzHhiVWVYDIoSrES/nU8M76VOkR9SoUi8dDXixIgRk6CZ0u5KZMqCJaJfCmk8gxNJkTdJaTdERrYlin+bCu04qgiTSjIwQQUhQ1LP3/WOK6jqGkXZRjysSNbKoRKqHaKRS3TUPNUBNFsv1nlBe9OEJ1um5KDoV6enqCPVzQdjpCLABM6JkNjQm1EyUhlZM17i1MG1nSem2ZyMtuJkWi6SUEJM6tDirKOVocOm4mgUwP1zH6jostOnH1P5LEXpIzKz1PHxMDMGUEPXYHVTsZsiE5zd5SezbiwP0IhTABKDhyNojloIOgZltmZirKk9AxrG5CKtvJjDn0zvpknOYMTEIHqqqdttyp5DiqOgkNPW3qhml6Z2cqDvPUJxOmBc2Ma6g453JaxI+lUg3azCI+cjuhRXomPdY36fjGWprXdFHloSDSnM4KSIX6tPLWULehonZjhuVupU1zWnnVou6ZUE9y1sfXVBdUTQUMrSCRfIJZMUwrbBVPs6IgibBK4xhNmVbeGzpmWikZhq8CLMOKHADitHKrMQ3SI1oyM+0Ltd7GLtKmlxq5KM6spLxeM9ZqNEZRaSCKIs0zVRodDvOIJrdZ5n5TnrCQd9P611U7NH7gjRZkf0y/7wPQ7ztGZmYQApXMCrC8pGiTv2jOYmy4KGhAPYiNDosMcg4KdqFMChpOYYlv65KjR9rzRuzBbeCR3JBdWsTMzpu4wZI7O8XM3EVlDBmWgcQyAAhMG1hxZ9fPVPgXvLn+Dd/XS99bser8dvbq2t3qmjOpLlCWE/L5igv8/b6C1psVWwbPtm3Zee3kzkXvn6iXPlv43DeB1mpcVrOXOni0adW3KxcOv7N//kc1A4dX767f8dCeD+ecXhaqBtW3bjQ0LpIG3uqb136obzjWjoLvJptW1p688ug58P25UxeG8J4rlTsWC1svHdnXwZ39g/3q8rWbh5b9+PGJ0y+8+GtpWWL5gt+YX4Z/n3ez7sBLgw8fPnY6MmvzDxHf0IWl/p9uv7r/QHmv/Vr1xU3fdbceHr7RL7WeH4B/Ky+vYo//tW/tHDt4i2l8nqr4vPQT5WqFL3T9qYvr5K5tQ3udn18pvz6rfknb65+Gb585lXq761lorq58bGhp7RPldHPX8YFUqHL+pdK56rEv/V88OVK+fwCP9dDg/BAAAA=='
    }
  }).then(function(res) {
    console.log(res.data)
    controller.items = res.data
  }, function(err) {
    console.error(err);
  })
  this.getEbayItems(); //runs the function immediately when the store template is rendered
}]); //end of the Store controller


app.controller("InfoController", ['$http', function($http) {
  this.imgSrc = "https://en.wikipedia.org/wiki/Half_cent_(United_States_coin)#/media/File:Half_cent_obv.jpg"
  
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

app.controller("RegisterController", ['$http', function($http) {
  this.register = function() {
    const makeBackendCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/register'
    })
  }
}]);