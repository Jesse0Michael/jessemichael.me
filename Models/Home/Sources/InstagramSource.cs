using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace JesseMichael.Models.Home
{
    public class InstagramSource : IFeedSource
    {
        private string instagramId { get; set; }
        private bool isMobile { get; set; }

        public InstagramSource(string id, bool isMobile)
        {
            instagramId = id;
            this.isMobile = isMobile;
        }

        public List<FeedObject> GetData()
        {
            List<FeedObject> instagramItems = new List<FeedObject>();
            string instagramAccessToken = ConfigurationManager.AppSettings["instagramAccessToken"];
            string instagramCount = ConfigurationManager.AppSettings["feedSourceMaxCount"];
            string instagramURL = "https://api.instagram.com/v1/users/" + instagramId + "/media/recent/?access_token=" + instagramAccessToken + "&count=" + instagramCount;

            try
            {
                /* Connect to the Instagram API based on the string sent in from the input. If the web 
                 * request comes back successful, then we navigate the JSON data and add new feedObjects
                 * to our list. */
                HttpWebRequest instagramRequest = (HttpWebRequest)WebRequest.Create(instagramURL);

                using (HttpWebResponse instagramResponse = (HttpWebResponse)instagramRequest.GetResponse())
                {
                    using (StreamReader instagrams = new StreamReader(instagramResponse.GetResponseStream()))
                    {
                        string instagramRtn = instagrams.ReadToEnd();
                        JObject instagramObject = JObject.Parse(instagramRtn);

                        for (int x = 0; x < instagramObject["data"].Count() - 1; x++)
                        {
                            /* Traverse through the JSON string that was returned from the API and create new 
                             * feedObjects and add them to the list. */
                            FeedObject newFeed = new FeedObject();

                            CultureInfo ci = new CultureInfo("en-GB");
                            DateTime instaTime = new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            instaTime = instaTime.AddSeconds(Convert.ToDouble((string)instagramObject["data"][x]["created_time"])).ToLocalTime();

                            newFeed.dateTimeString = instaTime.ToString("dd MMM yyyy HH:mm");
                            newFeed.dateTime = instaTime;
                            newFeed.id = (string)instagramObject["data"][x]["id"];
                            newFeed.link = (string)instagramObject["data"][x]["link"];
                            newFeed.source = "On <a href = '" + newFeed.link + "' style='text-decoration: none' target='_top'>Instagram <img src = '/Images/Icons/instagramBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>";
                            newFeed.style = "width:36%";
                            string gramURL;

                            if (((string)instagramObject["data"][x]["type"]).ToLower().Equals("video"))
                            {
                                string controls = isMobile ? "controls" : string.Empty;
                                gramURL = (string)instagramObject["data"][x]["videos"]["standard_resolution"]["url"];
                                newFeed.content = "<center><video id = \"" + newFeed.id + "\" width='300' height='300' " + controls + "><source src = \"" + gramURL + "\" type='video/mp4'></video></center>";
                            }
                            else
                            {
                                gramURL = (string)instagramObject["data"][x]["images"]["standard_resolution"]["url"];
                                newFeed.content = "<center><img src = '" + gramURL + "' width='300' height='300'></center>";
                            }

                            instagramItems.Add(newFeed);
                        }
                    };
                };

            }
            catch
            {
                /* If there is a problem with the web request to the API an exception would be thrown. 
                 * This can happen if there is no connection to the internet, if the Instagram ID
                 * was entered incorrectly, etc. */
            }

            return instagramItems;
        }
    }
}