var app = angular.module('app',['ngAnimate', 'colorBoxes', 'ngTweets']);

HomeCtrl.$inject = ['$scope', '$http', '$sce', 'tweets'];
app.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $http, $sce, tweets) {
  $scope.items = []
  $scope.count = 12
  $scope.smallWidth = "width:36%"
  $scope.largeWidth = "width:85%"

	function fetchInstagram() {
		var params = {
			access_token: "50957893.c4c5a38.45731381623a4ddd86c042851d4d317f",
      count: $scope.count,
      callback: "JSON_CALLBACK"
		}
		$http.jsonp("https://api.instagram.com/v1/users/50957893/media/recent/", { params: params })
			.success(function (resp) {
        for (var i in resp.data) {
          var data = resp.data[i]
          var content = "";
          if(data.type == "video") {
            var gramURL = data.videos.standard_resolution.url;
            content = "<center><video id = \"" + data.id + "\" width='300' height='300'><source src = \"" + gramURL + "\" type='video/mp4'></video></center>";
          } else {
            var gramURL = data.images.standard_resolution.url;
            content = "<center><img src = '" + gramURL + "' width='300' height='300'></center>";
          }

          var item = {
            date: new Date(data.created_time * 1000),
            id: data.id,
            source: $sce.trustAsHtml("On <a href = '" + data.link + "' style='text-decoration: none' target='_top'>Instagram <img src = '/content/icons/instagramBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: $sce.trustAsHtml(content)
          }

          $scope.items.push(item);
        }
			})
	}
	fetchInstagram();

  function fetchSwarm() {
		var params = {
			oauth_token: "OU2LAHV5RHIWU22OSUUA2QRXAWYWDISJBCY2SS5ANH41PRXS",
      limit: $scope.count,
      v: 20140806
		}
		$http.get("https://api.foursquare.com/v2/users/self/checkins", { params: params })
			.success(function (resp) {
        for (var i in resp.response.checkins.items) {
          var data = resp.response.checkins.items[i]
          var content = ""
          if(data.photos.items.length > 0) {
            content = "<center><img src = '" + data.photos.items[0].prefix + "300x300" + data.photos.items[0].suffix + "' ></center>"
          }

          var item = {
            date: new Date(data.createdAt * 1000),
            id: data.id,
            source: $sce.trustAsHtml("At " + data.venue.name + " On <a href = '" + data.source.url + "' style='text-decoration: none' target='_top'>Swarm <img src = '/content/icons/swarmBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: $sce.trustAsHtml(content)
          }

          $scope.items.push(item);
        }
			})
	}
	fetchSwarm();

  function fetchTwitter() {
    //https://github.com/forwardadvance/ng-tweets
    tweets.get({
      widgetId: '714647134084050945'
    }).then(function(resp) {

      for (var i in resp.data.tweets) {
        var data = resp.data.tweets[i]
        var retweet = ""
        if(data.retweet == true) {
          retweet = "<a href = '" + data.author.url + "' style='text-decoration: none' target='_top'>" + data.author.nickName + ": </a>"
        }

        var item = {
          date: new Date(data.dateTime),
          id: data.id,
          source: $sce.trustAsHtml("On <a href = '" + data.permalink + "' style='text-decoration: none' target='_top'>Twitter <img src = '/content/icons/twitterBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
          style: $scope.smallWidth,
          content: $sce.trustAsHtml(retweet + data.html)
        }

        $scope.items.push(item)
      }
    })
	}
	fetchTwitter();

  function fetchDeviantArt() {
    // Parse Deviantart RSS feed and get past CORS through https://developer.yahoo.com/yql/
    var url = "http://backend.deviantart.com/rss.xml?q=gallery:mini-michael/33242408"
    var params = {
			q: "select * from html where url='" + url + "'",
      format: "json",
      env: "store://datatables.org/alltableswithkeys"
		}

    $http.get("https://query.yahooapis.com/v1/public/yql", { params: params })
			.success(function (resp) {
        var count = Math.min(resp.query.results.body.rss.channel.item.length, $scope.count)
        for (var i = 0; i < count; i++) {
          var data = resp.query.results.body.rss.channel.item[i]
          var urlParts = data.guid.content.split("/")
          var title = urlParts[urlParts.length - 1].split("-")[0]

          var item = {
            date: new Date(data.pubdate),
            id: title,
            source: $sce.trustAsHtml("\"" + title + "\" On <a href = '" + data.guid.content + "' style='text-decoration: none' target='_top'>Deviant Art <img src = '/content/icons/deviantart2BW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: $sce.trustAsHtml("<center><img src = '" + data.thumbnail.thumbnail.url + "' ></center>")
          }

          $scope.items.push(item)
        }
			})
	}
	fetchDeviantArt();

  function fetchBlogger() {
		var params = {
      key: "AIzaSyBU3_KGZO90Vu_s8Lhbl7lJAEsaIouAEaY",
      fetchBodies: true,
      maxResults: $scope.count
		}
		$http.get("https://www.googleapis.com/blogger/v2/blogs/2628647666607369284/posts", { params: params })
			.success(function (resp) {
        for (var i in resp.items) {
          var data = resp.items[i]

          var item = {
            date: new Date(data.published),
            id: data.id,
            source: $sce.trustAsHtml("On <a href = '" + data.url + "' style='text-decoration: none' target='_top'>Blogger <img src = '/content/icons/bloggerBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.largeWidth,
            content: $sce.trustAsHtml(data.content)
          }

          $scope.items.push(item)
        }
			})
	}
	fetchBlogger();

}
