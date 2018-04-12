// console.log("files connected");
const app = angular.module('Coinsite', ['ngRoute']);


app.config(function($routeProvider) {

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
  }).otherwise({
    templateUrl: './views/info.html'
  })
});




app.controller("ForumController", ['$http', function ($http){
  controller = this;

  this.getComments = function() {
    $http({
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
    $http({
      method: 'POST',
      url: 'http://localhost:9292/comments',
      data: {

        comment: controller.comment
      }
    }).then(function(res) {
      // console.log(controller)
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
      'Authorization': 'Bearer '
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
  controller = this;

  this.register = function() {
    const makeBackendCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/users/register',
      data: {
        username: controller.username,
        password: controller.password
      },
    }).then(function(res) {
      console.log(controller)
      console.log(res);
      console.log(this)
    }, function(err) {
      console.error(err);
      console.log(controller)
      console.log(this)
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