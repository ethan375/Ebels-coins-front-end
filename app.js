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
  this.imgSrc = "http://www.coinfacts.com/half_cents/1804_half_cents/1804_half_cent_c3_obv.jpg"
  
  this.largeCent = "http://imagehost.vendio.com/a/35113942/aview/0502z2.jpg"

  this.smallCent = "https://cdn.coinvalues.com/original/8f/93/f0/1857-flying-eagle-cent-41-1423321604.jpg"

  this.twoCents = 'http://www.eyeappealingcoins.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/7/6/7612-o.jpg'

  this.threeCents = 'http://ngccoin-production.s3.amazonaws.com/coin-grading-guide/Three-Cent-Silvers-Obverse.jpg'

  this.nickels = "http://i.ebayimg.com/00/s/NTAwWDQ5MQ==/z/BkIAAOxyeZNTVhC~/$_3.JPG?set_id=2"

  this.halfDimes = "http://www.images-apmex.com/images/Catalog%20Images/Products/89585_Obv.jpg?v=20150428030235&width=900&height=900"

  this.dimes = "https://s3.amazonaws.com/ngccoin-production/us-coin-explorer/1898957-014o.jpg"

  this.twentyCents = "https://www.coincommunity.com/forum/uploaded/carlanga/20160131_1_opt-_3_.jpg"

  this.quarters = "http://www.coinfacts.com/silver_dollars/1804_dollars/childs_1804_dollar_obverse.JPG"

  this.halfDollars = "http://www.images-apmex.com/images/Catalog%20Images/Products/5339_Obv.jpg?v=20160222103746&width=900&height=900"

  this.silverDollar = "http://www.coinfacts.com/silver_dollars/draped_bust_dollars/1802_silver_dollars/1802_silver_dollar_obv.jpg"

  this.modernDollar = "http://i.ebayimg.com/images/i/141426368630-0-1/s-l1000.jpg"

  this.tradeDollar = "https://apmex.exceda.com/images/Catalog%20Images/Products/75819_Obv.jpg?v=20130101120000&width=900&height=900"

  this.goldDollar = "http://image.invaluable.com/housePhotos/eppli/85/577485/H2953-L83870329.jpg"

  this.goldQuarter = "https://www.bullionbypost.co.uk/media/uploads/images/2015/03/08/jqb_0018.JPG"

  this.threeDollaGold = "http://www.westcoastcoinsoregon.com/media/catalog/product/3/1/31416770_a.jpg"

  this.fourDollaGold = 'https://whitman.com/RedBook/images/strike/250/250-04dG_1880_Flowing_o.jpg'

  this.goldHalfEagle = "http://www.images-apmex.com/images/Catalog%20Images/Products/68917_Slab.jpg?v=20130101120000&width=900&height=900"

  this.tenGoldEagle = "https://apmex.exceda.com/images/Catalog%20Images/Products/22227_Obv.jpg?v=20130101120000&width=900&height=900"

  this.goldDoubleEagle = "http://cdn.bgasc.com/images/uploads/GPRE33_20_ST_JLY-01-popup.jpg"

  this.commerative = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lafayette_dollar_obverse.jpg"

}]);

app.controller("RegisterController", ['$http', function($http) {
  this.register = function() {
    const makeBackendCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/register'
    })
  }
}]);