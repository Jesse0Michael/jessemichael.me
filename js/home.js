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

          $scope.items.push.apply($scope.items,item)
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
            source: "At " + data.venue.name + "On <a href = '" + data.source.url + "' style='text-decoration: none' target='_top'>Swarm <img src = '/content/icons/swarmBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: content
          }

          $scope.items.push.apply($scope.items,item)

          alert($scope.items);
        }
			})
	}
	fetchSwarm();

}

HomeCtrl.$inject = ['$scope', '$http'];
angular.module('app', []).controller('HomeCtrl', HomeCtrl);
