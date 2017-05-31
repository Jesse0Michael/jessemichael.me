'use strict';

angular.module('ngTweets', [])
  .service('tweets', function($http) {
    var service = this;
    this.get = function(config) {
      return $http({
        url: url(config.widgetId, config.lang),
        method: 'JSONP',
        transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
          return parse(value);
        })
      });
    };
    this.getTweets = function(config) {
      return service.get(config)
        .then(trim);
    };
  });

var __twttrf = {
  callback: function(resp) {
    return parse(resp);
  }
}

function trim(request) {
  return request.data.tweets;
}

function url(id, lang) {
  return [
    'https://cdn.syndication.twimg.com/widgets/timelines/',
    id,
    '?&lang=',
    (lang || 'en'),
    '&callback=__twttrf.callback',
    '&suppress_response_codes=true&rnd=',
    Math.random()
  ].join('');
}


function appendTransform(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}

function parse(data) {
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
          removeStyles(el.getElementsByClassName('timeline-Tweet-media')[0])
          tweet.inlineMedia = el.getElementsByClassName('timeline-Tweet-media')[0].innerHTML;
        }
        response.tweets.push(tweet);
      }
    }
  return response;
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
