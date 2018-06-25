using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using TweetSharp;

namespace JesseMichael.Models.Home
{
    public class TwitterSource : IFeedSource
    {
        private string twitterId { get; set; }

        public TwitterSource(string id)
        {
            twitterId = id;
        }

        public List<FeedObject> GetData()
        {
            List<FeedObject> twitterItems = new List<FeedObject>();
            string consumerKey = ConfigurationManager.AppSettings["twitterConsumerKey"];
            string consumerSecret = ConfigurationManager.AppSettings["twitterConsumerSecret"];
            string accessToken = ConfigurationManager.AppSettings["twitterAccessToken"];
            string accessTokenSecret = ConfigurationManager.AppSettings["twitterAccessTokenSecret"];

            try
            {
                /* Connect to the Twitter API based on the string sent in from the input. If the web 
                 * request comes back successful, then we navigate the JSON data and add new feedObjects
                 * to our list. */

                TwitterService twitterService = new TwitterService(consumerKey, consumerSecret);
                twitterService.AuthenticateWith(accessToken, accessTokenSecret);

                IEnumerable<TwitterStatus> tweets = twitterService.ListTweetsOnUserTimeline(new ListTweetsOnUserTimelineOptions()
                {
                    ScreenName = twitterId,
                    Count = int.Parse(ConfigurationManager.AppSettings["feedSourceMaxCount"]),
                    IncludeRts = true
                });

                foreach (TwitterStatus tweet in tweets)
                {
                    FeedObject newFeed = new FeedObject();

                    newFeed.dateTimeString = tweet.CreatedDate.ToString("dd MMM yyyy HH:mm");
                    newFeed.dateTime = tweet.CreatedDate;
                    newFeed.source = "On <a href = 'http://www.twitter.com/#!/Jesse0Michael' style='text-decoration: none' target='_top'>Twitter <img src = '/Images/Icons/twitterBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>";
                    newFeed.content = tweet.TextAsHtml;
                    newFeed.id = tweet.Id.ToString();
                    newFeed.link = "";
                    newFeed.style = "width:36%";

                    if (!string.IsNullOrEmpty(newFeed.content))
                    {
                        twitterItems.Add(newFeed);
                    }
                }
            }
            catch
            {
                /* If there is a problem with the web request to the API an exception would be thrown. 
                 * This can happen if there is no connection to the internet, if the Twitter screen name
                 * was entered incorrectly, etc. */
            }

            return twitterItems;
        }
    }
}