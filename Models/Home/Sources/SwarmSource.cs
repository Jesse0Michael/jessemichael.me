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
    public class SwarmSource : IFeedSource
    {
        public SwarmSource()
        {
            
        }

        public List<FeedObject> GetData()
        {
            List<FeedObject> swarmItems = new List<FeedObject>();
            string swarmVersion = "20140806";
            string swarmCount = ConfigurationManager.AppSettings["feedSourceMaxCount"];
            string swarmAccessToken = ConfigurationManager.AppSettings["foursquareAccessToken"];
            string swarmURL = "https://api.foursquare.com/v2/users/self/checkins?oauth_token=" + swarmAccessToken +
                "&limit=" + swarmCount + "&v=" + swarmVersion;

            try
            {
                /* Connect to the Deviant Art API based on the string sent in from the input. If the web 
                 * request comes back successful, then we navigate the JSON data and add new feedObjects
                 * to our list. */
                HttpWebRequest swarmRequest = (HttpWebRequest)WebRequest.Create(swarmURL);

                using (HttpWebResponse swarmResponse = (HttpWebResponse)swarmRequest.GetResponse())
                {
                    using (StreamReader swarms = new StreamReader(swarmResponse.GetResponseStream()))
                    {
                        string swarmRtn = swarms.ReadToEnd();
                        JObject swarmObject = JObject.Parse(swarmRtn);

                        for (int x = 0; x < swarmObject["response"]["checkins"]["items"].Count() - 1; x++)
                        {
                            /* Traverse through the JSON string that was returned from the API and create new 
                             * feedObjects and add them to the list. */
                            FeedObject newFeed = new FeedObject();

                            string comment = (string)swarmObject["response"]["checkins"]["items"][x]["shout"];
                            string location = (string)swarmObject["response"]["checkins"]["items"][x]["venue"]["name"];
                            string image = "";

                            if (swarmObject["response"]["checkins"]["items"][x]["photos"]["items"].Any())
                            {
                                string prefix = (string)swarmObject["response"]["checkins"]["items"][x]["photos"]["items"].Last["prefix"];
                                string suffix = (string)swarmObject["response"]["checkins"]["items"][x]["photos"]["items"].Last["suffix"];
                                string size = "300x300";
                                image = "<center><img src = '" + prefix + size + suffix + "' ></center>";
                            }

                            CultureInfo ci = new CultureInfo("en-GB");
                            DateTime swarmTime = new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            swarmTime = swarmTime.AddSeconds(Convert.ToDouble((string)swarmObject["response"]["checkins"]["items"][x]["createdAt"])).ToLocalTime();

                            newFeed.link = (string)swarmObject["response"]["checkins"]["items"][x]["source"]["url"];
                            newFeed.source = "At " + location + " On <a href = '" + newFeed.link + "' style='text-decoration: none' target='_top'>Swarm <img src = '/Images/Icons/swarmBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>";
                            newFeed.dateTimeString = swarmTime.ToString("dd MMM yyyy HH:mm");
                            newFeed.dateTime = swarmTime;
                            newFeed.content = image;
                            newFeed.style = "width:36%";
                            newFeed.id = (string)swarmObject["response"]["checkins"]["items"][x]["id"];

                            swarmItems.Add(newFeed);
                        }
                    };
                };
            }
            catch
            {
                /* If there is a problem with the web request to the API an exception would be thrown. 
                 * This can happen if there is no connection to the internet, if the Blogger ID
                 * was entered incorrectly, etc. */
            }

            return swarmItems;
        }
    }
}