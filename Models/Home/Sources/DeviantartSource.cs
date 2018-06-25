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
    public class DeviantartSource : IFeedSource
    {
        private string deviantId { get; set; }
        private string deviantFolder { get; set; }

        public DeviantartSource(string id, string folder)
        {
            deviantId = id;
            deviantFolder = folder;
        }

        public List<FeedObject> GetData()
        {
            List<FeedObject> deviantItems = new List<FeedObject>();
            string deviantCount = ConfigurationManager.AppSettings["feedSourceMaxCount"];
            string deviantClientId = ConfigurationManager.AppSettings["deviantClientId"];
            string deviantClientSecret = ConfigurationManager.AppSettings["deviantClientSecret"];
            string deviantAccessToken = "";
            string deviantURL = "https://www.deviantart.com/api/v1/oauth2/gallery/" + deviantFolder + "?username="
                + deviantId + "&mode=newest&limit=" + deviantCount;
            string oauthURL = "https://www.deviantart.com/oauth2/token?grant_type=client_credentials&client_id=" +
                deviantClientId + "&client_secret=" + deviantClientSecret;

            try
            {

                 HttpWebRequest oauthRequest = (HttpWebRequest)WebRequest.Create(oauthURL);

                 using (HttpWebResponse oauthResponse = (HttpWebResponse)oauthRequest.GetResponse())
                 {
                     using (StreamReader auth = new StreamReader(oauthResponse.GetResponseStream()))
                     {
                         string oauthRtn = auth.ReadToEnd();
                         JObject oauthObject = JObject.Parse(oauthRtn);
                         deviantAccessToken = (string)oauthObject["access_token"];
                     }
                 }


                /* Connect to the Deviant Art API based on the string sent in from the input. If the web 
                 * request comes back successful, then we navigate the JSON data and add new feedObjects
                 * to our list. */
                HttpWebRequest deviantRequest = (HttpWebRequest)WebRequest.Create(deviantURL + "&access_token=" + deviantAccessToken);
                
                using (HttpWebResponse deviantResponse = (HttpWebResponse)deviantRequest.GetResponse())
                {
                    using (StreamReader deviants = new StreamReader(deviantResponse.GetResponseStream()))
                    {
                        string deviantRtn = deviants.ReadToEnd();
                        JObject deviantObject = JObject.Parse(deviantRtn);

                        for (int x = 0; x < deviantObject["results"].Count() - 1; x++)
                        {
                            /* Traverse through the JSON string that was returned from the API and create new 
                             * feedObjects and add them to the list. */
                            FeedObject newFeed = new FeedObject();

                            string title = (string)deviantObject["results"][x]["title"];
                            string source = (string)deviantObject["results"][x]["thumbs"].Last["src"];

                            CultureInfo ci = new CultureInfo("en-GB");
                            DateTime deviantTime = new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            deviantTime = deviantTime.AddSeconds(Convert.ToDouble((string)deviantObject["results"][x]["published_time"])).ToLocalTime();

                            newFeed.link = (string)deviantObject["results"][x]["url"];
                            newFeed.source = "\"" + title + "\" On <a href = '" + newFeed.link + "' style='text-decoration: none' target='_top'>Deviant Art <img src = '/Images/Icons/deviantart2BW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>";
                            newFeed.dateTimeString = deviantTime.ToString("dd MMM yyyy HH:mm");
                            newFeed.dateTime = deviantTime;
                            newFeed.content = "<center><img src = '" + source + "' ></center>";
                            newFeed.style = "width:36%";
                            newFeed.id = (string)deviantObject["results"][x]["deviationid"];

                            deviantItems.Add(newFeed);
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

            return deviantItems;
        }
    }
}