function HomeCtrl($scope, $http) {
  $scope.items = [];

	function fetchInstagram() {
		var params = {
			access_token: "50957893.c4c5a38.45731381623a4ddd86c042851d4d317f",
      counts: 2
		}
		$http.get("https://api.instagram.com/v1/users/50957893/media/recent/", { params: params })
			.success(function (resp) {
        for (var data in resp.data) {
          alert(data);
          var content = "";
          if(data["type"] == "video") {
            var gramURL = data["videos"]["standard_resolution"]["url"];
            content = "<center><video id = \"" + data["id"] + "\" width='300' height='300' controls><source src = \"" + gramURL + "\" type='video/mp4'></video></center>";
          } else {
            var gramURL = data["images"]["standard_resolution"]["url"];
            content = "<center><img src = '" + gramURL + "' width='300' height='300'></center>";
          }

          var item = {
            date: data["created_time"],
            id: data["id"],
            source: "On <a href = '" + data["link"] + "' style='text-decoration: none' target='_top'>Instagram <img src = '/content/icons/instagramBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>",
            style: "width:36%",
            content: content
          }

          $scope.items.push.apply($scope.items,item)
        }
			})
	}
	fetchInstagram();
}

HomeCtrl.$inject = ['$scope', '$http'];
angular.module('app', []).controller('HomeCtrl', HomeCtrl);
