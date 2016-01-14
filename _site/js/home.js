function HomeCtrl($scope, $http) {
  $scope.items = [];

	function fetchInstagram() {
		var params = {
			access_token: "50957893.c4c5a38.45731381623a4ddd86c042851d4d317f",
      counts: 2
		}
		$http.get("https://api.instagram.com/v1/users/50957893/media/recent/", { params: params })
			.success(function (resp) {
        for (var i in resp.data) {
          var data = resp.data[i]
          var content = "";
          if(data.type == "video") {
            var gramURL = data.videos.standard_resolution.url;
            content = "<center><video id = \"" + data.id + "\" width='300' height='300' controls><source src = \"" + gramURL + "\" type='video/mp4'></video></center>";
          } else {
            var gramURL = data.images.standard_resolution.url;
            content = "<center><img src = '" + gramURL + "' width='300' height='300'></center>";
          }

          var item = {
            date: data.created_time,
            id: data.id,
            source: "On <a href = '" + data.link + "' style='text-decoration: none' target='_top'>Instagram <img src = '/content/icons/instagramBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: content
          }

          $scope.items.push(item)
        }
			})
	}
	fetchInstagram();

  function fetchSwarm() {
		var params = {
			oauth_token: "OU2LAHV5RHIWU22OSUUA2QRXAWYWDISJBCY2SS5ANH41PRXS",
      limit: 2,
      v: 20140806
		}
		$http.get("https://api.foursquare.com/v2/users/self/checkins", { params: params })
			.success(function (resp) {
        for (var i in resp.response.checkins.items) {
          var data = resp.response.checkins.items[i]
          var content = "";
          if(data.photos.items.length > 0) {
            content = "<center><img src = '" + data.photos.items.prefix + "300x300" + data.photos.items.suffix + "' ></center>";
          }

          var item = {
            date: data.createdAt,
            id: data.id,
            source: "At " + data.venue.name + " On <a href = '" + data.source.url + "' style='text-decoration: none' target='_top'>Swarm <img src = '/content/icons/swarmBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: content
          }

          $scope.items.push(item)

          console.log($scope.items);
        }
			})
	}
	fetchSwarm();

  function fetchTwitter() {
		var params = {
      screen_name: "jesse0michael",
      count: 2,
      include_rts: true
		}
		$http.get("https://api.twitter.com/1.1/statuses/user_timeline.json", { params: params })
			.success(function (resp) {
        for (var i in resp) {
          var data = resp[i]

          var item = {
            date: data.created_date,
            id: data.id,
            source: "On <a href = 'http://www.twitter.com/#!/Jesse0Michael' style='text-decoration: none' target='_top'>Twitter <img src = '/content/icons/twitterBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: data.text_as_html
          }

          $scope.items.push(item)

          console.log($scope.items);
        }
			})
	}
	fetchTwitter();

  function fetchDeviantArt() {
		var params = {
      access_token: "",
      username: "mini-michael",
      mode: "newest",
      limit: 2,
      access_token: true
		}
		$http.get("https://www.deviantart.com/api/v1/oauth2/gallery/5251B071-78F9-727D-CC27-E0EAAB2BA9BD", { params: params })
			.success(function (resp) {
        for (var i in resp.results) {
          var data = resp.results[i]

          var item = {
            date: data.published_time,
            id: data.deviationid,
            source: "\"" + data.title + "\" On <a href = '" + data.url + "' style='text-decoration: none' target='_top'>Deviant Art <img src = '/content/icons/deviantart2BW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: "<center><img src = '" + data.thumbs[data.thumbs.size].src + "' ></center>"
          }

          $scope.items.push(item)

          console.log($scope.items);
        }
			})
	}
	fetchDeviantArt();

  function fetchBlogger() {
		var params = {
      key: "AIzaSyBU3_KGZO90Vu_s8Lhbl7lJAEsaIouAEaY",
      fetchBodies: true,
      maxResults: 2
		}
		$http.get("https://www.googleapis.com/blogger/v2/blogs/2628647666607369284/posts", { params: params })
			.success(function (resp) {
        for (var i in resp.items) {
          var data = resp.items[i]

          var item = {
            date: data.published,
            id: data.id,
            source: "On <a href = '" + data.url + "' style='text-decoration: none' target='_top'>Blogger <img src = '/content/icons/bloggerBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:88%",
            content: data.content
          }

          $scope.items.push(item)

          console.log($scope.items);
        }
			})
	}
	fetchBlogger();

}

HomeCtrl.$inject = ['$scope', '$http'];
angular.module('app', []).controller('HomeCtrl', HomeCtrl);
