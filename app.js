// console.log("files connected");
const app = angular.module('Coinsite', ['ngRoute']);


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
    controller: 'SessionController as ses'
  }).when('/halfcent', {
    templateUrl: './views/halfCent.html'
  }).when('/largeCent', {
    templateUrl: './views/'
  }).when('/smallCent', {
    templateUrl: './views/'
  }).when('/twoCents', {
    templateUrl: './views/'
  }).when('/threeCents', {
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
  }).when('/1', {
    templateUrl: './views/halfright.html',
    controller: 'InfoController as inf'
  }).when('/2', {
    templateUrl: './views'
  }).when('/3', {
    templateUrl: './views/'
  }).when('/4', {
    templateUrl: './views/'
  }).when('/5', {
    templateUrl: './views/'
  })
}]);




app.controller("ForumController", ['$http', function ($http){
  this.username = '';
  this.password = '';
  controller = this;

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

  this.newPost = function() {
    const makePostRequest = $http({
      method: 'POST',
      url: 'http://localhost:9292/comments'
    }).then(function(res) {
      console.log(res);
    }, function(err) {
      console.error(err);
    })
  }

}]); //end forum controller




app.controller("StoreController", ['$http', function($http) {

  controller = this;

  this.getEbayItems = function() {}
  const makeAjaxCall = $http({
    method: 'GET',
    url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?q=1909limit=10',
    headers:{
      'Authorization': 'Bearer v^1.1#i^1#r^0#p^3#f^0#I^3#t^H4sIAAAAAAAAAOVXW2wUVRju9oaVVoWiXIS4DiKJZHbPmdvujt0N21uo0nbpFoKtpDk7c6YdmZ3ZzDnbdoPE2hge8AKBxAsPUgHRChibCAkXSdRITIgQA1EBrZAYo74IahQTQpzZXtjWCLTloYn7splz/tv3/d85Mz/oKS55bNOKTX+VeWbk9/WAnnyPB84EJcVFy+4pyF9QlAdyDDx9PY/0FPYW/FRBUNJIyU2YpCyTYG930jCJnF0MM2nblC1EdCKbKImJTBU5Hq1fKXM+IKdsi1qKZTDeuuowo0EeSArUMBdUsMJxzqo5ErPZCjNBjAMJyAU1XgMcVIGzT0ga15mEIpOGGQ7AIAt4FoSaoShDKEPgE4RQC+Ndg22iW6Zj4gNMJFuunPW1c2q9eamIEGxTJwgTqYvWxhujddU1Dc0V/pxYkWEe4hTRNBn7VGWp2LsGGWl88zQkay3H04qCCWH8kaEMY4PK0ZFiJlF+lmo+gCAKIsQjSUAIS3eEylrLTiJ68zrcFV1ltaypjE2q08ytGHXYSDyDFTr81OCEqKv2un+r0sjQNR3bYaamMvrU6nhNE+ONx2K21amrWHWRQlEUOVEKwBATwQlsEGqjTmzoZrti6SYZTjcUc5jscfmqLFPVXeqIt8GildipHY9nCOQw5Bg1mo12VKNuXbl2gVEmhRa3tUO9TNMO0+0uTjp0eLOPt+7DiDBuSOFOSUOEQQElgAQ4LqAAKORIwz3rk5ZHxO1QNBbzu7XgBMqwSWSvxzRlIAWzikNvOoltXZV5UeP4oIZZVQpprBDSNDYhqhLrXAwYYJxIKKHg/08llNp6Ik3xqFLGb2Shhpm4YqVwzDJ0JcOMN8neP8O66CZhpoPSlOz3d3V1+bp4n2W3+zkAoH9t/cq40oGTiBm11W9tzOpZ0SrY8SK6TDMpp5puR4BOcrOdifC2GkM2zcSx4fI6It8xtUXGr/4HSOKCnF7wXH/iBEAp3eeq26dYSb+FnNPsLrVlK/bejpGfOAT5hs6GE9lnY6RappGZjPMEfHSz0xGVZWeGE7pnfUJJRwNMwAcpipU26WQwDrtOwENLG5puGO7ZmUzCHPeJlGkiI0N1hYymnJLwo6lUnTq9hI9pBzKdO5MduTfZWFM1K6iapAhIlFhe40SsIG1KuFXcqSu4TZ9m2M20YUwJVzXunAb9dM56ZGxPNVFRnZc/m8CS8wrmpBCb4AICy0liUEIBlYdqYkq469unWyshFALOVMFJPADSlLBVGbpzRzRnptsbaoVFKFanBs35UJxeoNy7ZuSqUWFCYYEkSawAAyobCgmY5XkO3i7kcQs5X1r/+tT2j514I3nZH+z1HAS9ngFnaAZ+sAQuBg8XF6wuLChdQHSKfTrSfERvN51Bzsa+9TiTQrqdX+xpXfhBf1vOjN23DswbnbJLCuDMnJEbLLyxUwTvnVsGg4AHIShCCEELWHxjtxA+UDgHzN28/bNFJ06d6a+NPqteq1qqeOOgbNTI4ynKK+z15LGntpz7YdWJ2cd3yHnls/78/jn+8u6Dywf2GH9kvhmIb/j96rsHyj7/7kxf/8UXrhw6P9DkhesH/25d+cYnXx/4tHTn5WPg7FcN5XN3nb5UcKHv0R/DFxrP4/nl15bMnrP78egXgbuMGU0PHtizV17y4bmT789fxB7Z/1vrW08IyT0bl85euyMevT/hr70UqHxnw65lW5cdKQu0/Xq04tqTXz59tfzV/W39L20tL6ujz9cMwtf3V7y4Zl7mvUvnv73+dmns5fY2e1/l3ftOXinpbvto81lBvC/Q+so2+svOzPKHZsUOa9d9r23+eNuCvce2hAffZMrCx8XSwxcHj/p3nFnbf7q3sGSjuM5qqf/Zf2ioff8A63qkyP0QAAA='
    }
  }).then(function(res) {
    console.log(res);
    controller.items = res.data
  }, function(err) {
    console.error(err);
  })
  this.getEbayItems(); //runs the function immediately
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




app.controller("SessionController", ['$http', function($http) {
  this.register = function() {
    const makeBackendCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/register'
    }).then(function(res) {
      console.log(res);
    }, function(err) {
      console.error(err);
    })
  }

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
}]);