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
    url: 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&q=Beatles&filter=price:[200..500]&filter=priceCurrency:USD&limit=10',
    headers:{
      'Authorization': 'Bearer v^1.1#i^1#I^3#p^3#f^0#r^0#t^H4sIAAAAAAAAAOVXW2wUVRjutttirUgCDTRQZBmoRHB2z5nZmd0Z2w0rhVBT2m233NXmzMyZdtrZmc3MbNuNSpoG8RIhPoARpKEKqQFNCg8QTDBoTCPxEgRD8MFg4MFK8EFN44WQ4JnthW3VlrY8NHGTyWb+89++73znzDmgs6Bw9Z6Ne/6Y65mT29MJOnM9HlgECgvy1zyal7s4PwdkOXh6Old2ervyfiq3UUJPivXYTpqGjX0dCd2wxYyxgkpZhmgiW7NFAyWwLTqyGI9uqhYZPxCTlumYsqlTvqrKCooJKxIvyRxQJZVnGECsxkjOBrOCCgoKRIoSwmxQUQXojtt2ClcZtoMMh8QDGKYBSwOhAXAiFEQO+sNscAfl24ItWzMN4uIHVCTTrpiJtbJ6nbhVZNvYckgSKlIV3RCvjVZVrq9pKA9k5YoM8xB3kJOyx76tMxXs24L0FJ64jJ3xFuMpWca2TQUiQxXGJhWjI81Mo/0M1ZICBQQAGxIEDEFIeiBUbjCtBHIm7sO1aAqtZlxFbDiak56MUcKG1IJlZ/ithqSoqvS5f3UppGuqhq0Kav3T0e2b4+vrKV88FrPMNk3BiosU8iDEgTAHBSqCnWaEJdzIDhcZyjRM8bgq60xD0VzCbF+N6TyNScd4PC8gixfiVGvUWlHVcbvJ9guN8gd3uBM6NIMpp9lw5xQnCAm+zOvk7I/I4Z4AHpQgGE7ADKfAoMwCOSwE/1UQ7lqfoigi7rxEY7GA2wuWUJpOIKsVO0kdyZiWCb2pBLY0RWQ5lWHDKqYVXlDpoKCqtMQpPA1VjAHGkiQL4f+LNhzH0qSUg0f1MX4gA7CCistmEsdMXZPT1HiXzF4zrIYOu4JqdpykGAi0t7f721m/aTUFGABgYNum6rjcjBOIGvXVJnemtYwuZEyibE100knSTQeRHSluNFER1lJiyHLScazrxDAi2jG9RcZb/wOk7YKcXfDceJskQEnN72raL5uJgInIGnZNjZmOfffjFLAJQf6hFUEy+y2MFNPQ09MJnkKMZrQRUZlWeoKC7lqfPMEUiiJZNlOGMx2Mw6FTiFBTuqrpurt2plMwK3wqbRpITzuabI+WnJHwo8lklTK7hO9ukgbZJWny6MSI6Fh9JU1OY7wcRBxPsyrDYRmpM8Kt4DZNxo3aLMNupHR9Rrgqcdusm0+VkxUZkLW+GtIS5smHl+EFWmJCQZrhuTCPQgoLFWlGuDc1zbaphDAYAgxkeBYAfkbY1uka2SMa0rPtC7XRtB2szAwaOR7OLlDuXjOy1ShQkmnA8zwdhCGFFoQgplmWgfcLeZwh66T1jwN2YOztNpKT+cEuz2nQ5TlFLsggAMrgCrC8IG+zN++RxbbmYL+GVL+tNRnk0mZhfytOJ5Fm5RZ4dpaePN6YdZ/ueQ6UjN6oC/NgUdb1GpTeG8mH8xbNhWHAAgGQ8yoHd4AV90a9cKG3+Nyco5HPSy4fefvoJ3c7+u70/tC/7yEwd9TJ48nP8XZ5ck7tqTUPL5EPXFlYEUl79vPg6Dy4Ew/0BY/t7kblaw8f7PvR+8GypQMd+Iuzv3XvTi/4pmTNlVO9X545t1Us/z3wytbu+fKtC7ee/Kx0eY2e+9KvP7ewbz0FBr098tL61u0vrL3e0h++/tcl743WlkW5V2Fd6cBA4d6HX3xv7+nHTvR29h+aN/ja81yL2R0JfP8nX70kxh4r44+UHFh4653jg2XLdn0K2f2X9n114aO6+d7DwjO3w7/sLbrWB89ue79lVXWw/1A3OJL37KurDr58/vXvWs9sWXnz2OM3ond3XSw+827Zm8tOLrqWrlr7MQwV3b558MM7dW983cuc955wirdevPzEt8VXqQWDQ9P3N99XaxzpEAAA'
    }
  }).then(function(res) {
    console.log(res.data)
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
    })
  }

    this.login = function() {
    const makeAjaxCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/login',
      headers:{

      }
    }).then(function(res) {
      console.log(res)
    }, function(err) {
      console.error(err)
    })
  }
}]);