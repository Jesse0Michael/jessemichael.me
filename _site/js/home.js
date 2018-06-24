var app = angular.module('app',['ngAnimate', 'colorBoxes']);

HomeCtrl.$inject = ['$scope', '$http', '$sce', '$window'];
app.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $http, $sce, $window) {
  $scope.items = []
  $scope.count = 20
  $scope.smallWidth = "small-box"
  $scope.largeWidth = "large-box"
  $scope.totalDisplayed = 10

  $scope.loadMore = function () {
    $scope.totalDisplayed += 10;  
  };

  angular.element($window).bind("scroll", function() {
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      $scope.$apply($scope.loadMore());   
    }
  }); 

	function fetchInstagram() {
		var params = {
			access_token: "50957893.c4c5a38.45731381623a4ddd86c042851d4d317f",
      callback: "JSON_CALLBACK"
		}
		$http.jsonp("https://api.instagram.com/v1/users/50957893/media/recent/", { params: params })
			.success(function (resp) {
        for (var i in resp.data) {
          var data = resp.data[i]
          var caption = data.caption.text;
          var content = "";
          if(data.type == "video") {
            var gramURL = data.videos.standard_resolution.url;
            content = "<center><video id = \"" + data.id + "\" width='100%' poster=\"" + data.images.low_resolution.url + "\"><source src = \"" + gramURL + "\" type='video/mp4'></video><br />" + caption + "</center>";
          } else {
            var gramURL = data.images.standard_resolution.url;
            content = "<center><img src = '" + gramURL + "' width='100%' ><br />" + caption + "</center>";
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
      v: 20140806
		}
		$http.get("https://api.foursquare.com/v2/users/self/checkins", { params: params })
			.success(function (resp) {
        for (var i in resp.response.checkins.items) {
          var data = resp.response.checkins.items[i]

          var content = ""
          if(data.photos.items.length > 0) {
            content = "<center><img src = '" + data.photos.items[0].prefix + "300x300" + data.photos.items[0].suffix + "' width='100%' ><br />" + data.shout + "</center>"
          }

          var item = {
            date: new Date(data.createdAt * 1000),
            id: data.id,
            source: $sce.trustAsHtml("At " + data.venue.name + " On <a href = '" + data.source.url + "' style='text-decoration: none' target='_top'>Swarm <img src = '/content/icons/swarmBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: $sce.trustAsHtml(content)
          }
          if(content != "") {
            $scope.items.push(item);
          }
        }
			})
	}
	fetchSwarm();

  function fetchTwitter() {
    var params = {
      lang: "en",
      suppress_response_codes: true,
      rnd: Math.random(),
      callback: "__twttrf.callback",
      dnt:false,
      list_slug:""
		}
		$http.jsonp("https://cdn.syndication.twimg.com/widgets/timelines/714647134084050945", { params: params })
	}
  $scope.appendTwitter = function(widget) {
    for (var i in widget.tweets) {
      var data = widget.tweets[i]
      var author = "<a href = '" + data.author.url + "' style='text-decoration: none' target='_top'><img class='twitter-avatar' src='" + data.author.avatar + "'> " + data.author.nickName + ": </a>"
      var media = ""
      if(data.media != null && data.media.length > 0) {
        media = "<br/><div class='twitter-media'>"
        for (var i in data.media) {
          media += "<a href = '" + data.permalink + "' target='_top'><img src = '" + data.media[i] + ".png' width='100%' ></a>"
        }
        media += "</div>"
      }
      var item = {
        date: new Date(data.dateTime),
        id: data.id,
        source: $sce.trustAsHtml("On <a href = '" + data.permalink + "' style='text-decoration: none' target='_top'>Twitter <img src = '/content/icons/twitterBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
        style: $scope.smallWidth,
        content: $sce.trustAsHtml(author + data.html + media)
      }

      $scope.items.push(item)
    }
  }
	fetchTwitter();

  function fetchDeviantArt() {
    // Parse Deviantart RSS feed and get past CORS through https://developer.yahoo.com/yql/
    var url = "http://backend.deviantart.com/rss.xml?q=gallery:mini-michael/33242408"
    var params = {
			q: "select * from rss where url='" + url + "'",
      format: "json",
      env: "store://datatables.org/alltableswithkeys"
		}

    $http.get("https://query.yahooapis.com/v1/public/yql", { params: params })
			.success(function (resp) {
        var count = Math.min(resp.query.results.item.length, $scope.count)
        for (var i = 0; i < count; i++) {
          var data = resp.query.results.item[i]
          var urlParts = data.guid.content.split("/")
          var title = urlParts[urlParts.length - 1].split("-")[0]

          var item = {
            date: new Date(data.pubDate),
            id: title,
            source: $sce.trustAsHtml("\"" + title + "\" On <a href = '" + data.guid.content + "' style='text-decoration: none' target='_top'>Deviant Art <img src = '/content/icons/deviantart2BW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: $sce.trustAsHtml("<center><img src = '" + data.thumbnail[data.thumbnail.length-1].url + "' width='100%' ></center>")
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

  function fetchSoundCloud() {
		var params = {
      client_id: "f330c0bb90f1c89a15e78ece83e21856",
      limit: $scope.count
		}
    $http.get("http://api.soundcloud.com/users/20560365/favorites", { params: params })
			.success(function (resp) {
        for (var i in resp) {
          var data = resp[i]
          var iframeSrc = "https://w.soundcloud.com/player/?url=" + data.uri + "&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false"
          var content = $sce.trustAsHtml("<iframe id='iframe-" + data.id + "' class='sc-widget' src='" + iframeSrc + "' width='100%' height='130' scrolling='no' frameborder='no' target='_top'></iframe>")
          var item = {
            date: new Date(data.created_at),
            id: data.id,
            source: $sce.trustAsHtml("On <a href = '" + data.permalink_url + "' style='text-decoration: none' target='_top'>Sound Cloud <img src = '/content/icons/soundcloudBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>"),
            style: $scope.smallWidth,
            content: content
          }
          $scope.items.push(item)
        }
			})
	}
	fetchSoundCloud();

}

var __twttrf = {
  callback: function(resp) {
    var widget = parseWidget(resp);
    angular.element(document.getElementById('home')).scope().appendTwitter(widget);
  }
}

function parseWidget(data) {
  var response = {
    headers: data.headers,
    tweets: []
  },
  els,
  el,
  tweet,
  x,
  tmp;

  if (data.body) {
    els = angular.element(data.body)[0].getElementsByClassName('timeline-Tweet');
    for (x = 0; x < els.length; x++) {
      el = els[x];
      tweet = {};
      tweet.retweet = (el.getElementsByClassName('timeline-Tweet-retweetCredit').length > 0);
      tweet.id = el.getAttribute('data-tweet-id');
      tmp = el.getElementsByClassName('timeline-Tweet-text')[0];
      tweet.html = tmp.innerHTML;
      tweet.text = tmp.textContent || tmp.innerText; // IE8 doesn't support textContent
      tmp = el.getElementsByClassName('timeline-Tweet-author')[0];
      tweet.author = {
        url: tmp.getElementsByClassName('TweetAuthor-link')[0].getAttribute('href'),
        avatar: tmp.getElementsByClassName('Avatar')[0].getAttribute('data-src-1x'),
        fullName: tmp.getElementsByClassName('TweetAuthor-name')[0].innerText,
        nickName: tmp.getElementsByClassName('TweetAuthor-screenName')[0].innerText
      };
      tweet.updated = el.getElementsByClassName('dt-updated')[0].innerText;
      tweet.dateTime = el.getElementsByClassName('dt-updated')[0].getAttribute('datetime');
      tweet.permalink = el.getElementsByClassName('timeline-Tweet-timestamp')[0].getAttribute('href');
      if (el.getElementsByClassName('timeline-Tweet-media')[0]) {
        var elements = el.getElementsByClassName('Interstitial');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        removeStyles(el.getElementsByClassName('timeline-Tweet-media')[0])
        tweet.inlineMedia = el.getElementsByClassName('timeline-Tweet-media')[0].innerHTML;
        tweet.media = findAttribute(el.getElementsByClassName('timeline-Tweet-media')[0], 'data-image');
      }

      response.tweets.push(tweet);
    }
  }
  return response;
}

function findAttribute(el, attr) {
  var found = [];
  if(el.getAttribute(attr) != null){
    found.push(el.getAttribute(attr));
  }

  if(el.childNodes.length > 0) {
    for(var child in el.childNodes) {
      if(el.childNodes[child].nodeType == 1)
        found = found.concat(findAttribute(el.childNodes[child], attr));
    }
  }
  return found
}

function removeStyles(el) {
  el.removeAttribute('style');
  if(el.getAttribute('data-srcset') != null){
    el.classList.add('lazyload');
    el.setAttribute('data-srcset', decodeURIComponent(el.getAttribute('data-srcset')));
  }

  if(el.childNodes.length > 0) {
    for(var child in el.childNodes) {
      /* filter element nodes only */
      if(el.childNodes[child].nodeType == 1)
        removeStyles(el.childNodes[child]);
    }
  }
}
