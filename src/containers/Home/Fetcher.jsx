class Fetcher {
  fetchBlogger() {
    return fetch(
      "https://www.googleapis.com/blogger/v2/blogs/2628647666607369284/posts?key=AIzaSyBU3_KGZO90Vu_s8Lhbl7lJAEsaIouAEaY&fetchBodies=true&maxResults=20"
    )
      .then(r => r.json())
      .then(resp => {
        return resp.items.map(data => ({
          date: new Date(data.published),
          id: data.id,
          source: "Blogger",
          link: data.url,
          media: "",
          content: data.content
        }));
      });
  }

  fetchDeviantArt() {
    // Parse Deviantart RSS feed and get past CORS through https://developer.yahoo.com/yql/
    var url =
      "https://backend.deviantart.com/rss.xml?q=gallery:mini-michael/33242408";
    return fetch(
      "https://query.yahooapis.com/v1/public/yql?q=select * from rss where url='" +
        url +
        "'&format=json&env=store://datatables.org/alltableswithkeys"
    )
      .then(r => r.json())
      .then(resp => {
        return resp.query.results.item.map(data => {
          var urlParts = data.guid.content.split("/");
          var title = urlParts[urlParts.length - 1].split("-")[0];
          return {
            date: new Date(data.pubDate),
            id: title,
            source: "Deviant Art",
            link: data.guid.content,
            media:
              "<img class='content-media' src = '" +
              data.thumbnail[data.thumbnail.length - 1].url +
              "' />",
            content: ""
          };
        });
      });
  }

  fetchInstagram() {
    return fetch(
      "https://api.instagram.com/v1/users/50957893/media/recent?access_token=50957893.c4c5a38.45731381623a4ddd86c042851d4d317f&callback=JSON_CALLBACK"
    )
      .then(response => response.text())
      .then(responseText => {
        const match = responseText.match("({(.*)})");
        if (!match) throw new Error("invalid JSONP response");
        return JSON.parse(match[0]);
      })
      .then(resp => {
        return resp.data.map(data => {
          var content = "";
          if (data.type === "video") {
            content =
              '<video id = "' +
              data.id +
              '" poster="' +
              data.images.low_resolution.url +
              '" class="content-media"><source src = "' +
              data.videos.standard_resolution.url +
              "\" type='video/mp4'></video>";
          } else {
            content =
              "<img class='content-media' src = '" +
              data.images.standard_resolution.url +
              "' />";
          }

          var text = "";
          if (data.caption) {
            text = data.caption.text;
          }

          return {
            date: new Date(data.created_time * 1000),
            id: data.id,
            source: "Instagram",
            link: data.link,
            media: content,
            content: text
          };
        });
      });
  }

  fetchSoundCloud() {
    return fetch(
      "https://api.soundcloud.com/users/20560365/favorites?client_id=f330c0bb90f1c89a15e78ece83e21856&limit=20"
    )
      .then(r => r.json())
      .then(resp => {
        return resp.map(data => {
          var iframeSrc =
            "https://w.soundcloud.com/player/?url=" +
            data.uri +
            "&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false";
          var content =
            "<iframe id='iframe-" +
            data.id +
            "' class='sc-widget' src='" +
            iframeSrc +
            "' width='100%' height='130' scrolling='no' frameborder='no' target='_top'></iframe>";

          return {
            date: new Date(data.created_at),
            id: data.id,
            source: "Sound Cloud",
            media: content
          };
        });
      });
  }

  fetchSwarm() {
    return fetch(
      "https://api.foursquare.com/v2/users/self/checkins?oauth_token=OU2LAHV5RHIWU22OSUUA2QRXAWYWDISJBCY2SS5ANH41PRXS&v=20140806"
    )
      .then(r => r.json())
      .then(resp => {
        return resp.response.checkins.items
          .filter(data => data.photos.items.length > 0)
          .map(data => ({
            date: new Date(data.createdAt * 1000),
            id: data.id,
            source: "Swarm",
            link: data.source.url,
            media:
              "<img class='content-media' src = '" +
              data.photos.items[0].prefix +
              "300x300" +
              data.photos.items[0].suffix +
              "' />",
            content: data.shout
          }));
      });
  }

  fetchTwitter() {
    return fetch(
      "https://cdn.syndication.twimg.com/widgets/timelines/714647134084050945?lang=en&suppress_response_codes=true&rnd=" +
        Math.random() +
        "&callback=__twttrf.callback&dnt=false&list_slug="
    )
      .then(r => {
        console.log(r);
        r.json();
      })
      .then(resp => {
        console.log(resp);
      });
  }

  appendTwitter(widget) {
    for (var i in widget.tweets) {
      var data = widget.tweets[i];
      var author =
        "<a href = '" +
        data.author.url +
        "' style='text-decoration: none' target='_top'><img class='twitter-avatar' src='" +
        data.author.avatar +
        "'> " +
        data.author.nickName +
        ": </a>";
      var media = "";
      if (data.media != null && data.media.length > 0) {
        media = "<br/><div class='twitter-media'>";
        for (var m in data.media) {
          media +=
            "<a href = '" +
            data.permalink +
            "' target='_top'><img class='content-media' src = '" +
            data.media[m] +
            ".png'></a>";
        }
        media += "</div>";
      }
      return {
        date: new Date(data.dateTime),
        id: data.id,
        source: "Twitter",
        link: data.permalink,
        media: "",
        content: author + data.html + media
      };
    }
  }

  __twttrf = {
    callback: function(resp) {
      var widget = this.parseWidget(resp);
      var tweets = this.appendTwitter(widget);
      console.log(tweets);
    }
  };

  parseWidget(data) {
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
      els = data.body.getElementsByClassName("timeline-Tweet");
      for (x = 0; x < els.length; x++) {
        el = els[x];
        tweet = {};
        tweet.retweet =
          el.getElementsByClassName("timeline-Tweet-retweetCredit").length > 0;
        tweet.id = el.getAttribute("data-tweet-id");
        tmp = el.getElementsByClassName("timeline-Tweet-text")[0];
        tweet.html = tmp.innerHTML;
        tweet.text = tmp.textContent || tmp.innerText; // IE8 doesn't support textContent
        tmp = el.getElementsByClassName("timeline-Tweet-author")[0];
        tweet.author = {
          url: tmp
            .getElementsByClassName("TweetAuthor-link")[0]
            .getAttribute("href"),
          avatar: tmp
            .getElementsByClassName("Avatar")[0]
            .getAttribute("data-src-1x"),
          fullName: tmp.getElementsByClassName("TweetAuthor-name")[0].innerText,
          nickName: tmp.getElementsByClassName("TweetAuthor-screenName")[0]
            .innerText
        };
        tweet.updated = el.getElementsByClassName("dt-updated")[0].innerText;
        tweet.dateTime = el
          .getElementsByClassName("dt-updated")[0]
          .getAttribute("datetime");
        tweet.permalink = el
          .getElementsByClassName("timeline-Tweet-timestamp")[0]
          .getAttribute("href");
        if (el.getElementsByClassName("timeline-Tweet-media")[0]) {
          var elements = el.getElementsByClassName("Interstitial");
          while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
          }
          this.removeStyles(
            el.getElementsByClassName("timeline-Tweet-media")[0]
          );
          tweet.inlineMedia = el.getElementsByClassName(
            "timeline-Tweet-media"
          )[0].innerHTML;
          tweet.media = this.findAttribute(
            el.getElementsByClassName("timeline-Tweet-media")[0],
            "data-image"
          );
        }

        response.tweets.push(tweet);
      }
    }
    return response;
  }

  findAttribute(el, attr) {
    var found = [];
    if (el.getAttribute(attr) != null) {
      found.push(el.getAttribute(attr));
    }

    if (el.childNodes.length > 0) {
      for (var child in el.childNodes) {
        if (el.childNodes[child].nodeType === 1)
          found = found.concat(this.findAttribute(el.childNodes[child], attr));
      }
    }
    return found;
  }

  removeStyles(el) {
    el.removeAttribute("style");
    if (el.getAttribute("data-srcset") != null) {
      el.classList.add("lazyload");
      el.setAttribute(
        "data-srcset",
        decodeURIComponent(el.getAttribute("data-srcset"))
      );
    }

    if (el.childNodes.length > 0) {
      for (var child in el.childNodes) {
        /* filter element nodes only */
        if (el.childNodes[child].nodeType === 1)
          this.removeStyles(el.childNodes[child]);
      }
    }
  }
}

export default Fetcher;
