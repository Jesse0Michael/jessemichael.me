using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace JesseMichael.Models.Home
{
    public class BloggerSource : IFeedSource
    {
        private string bloggerId { get; set;}

        public BloggerSource(string id)
        {
            bloggerId = id;
        }

        public List<FeedObject> GetData()
        {
            List<FeedObject> bloggerItems = new List<FeedObject>();
            string bloggerCount = ConfigurationManager.AppSettings["feedSourceMaxCount"];
            string bloggerBodies = "true";
            string bloggerKey = ConfigurationManager.AppSettings["bloggerKey"];
            string bloggerURL = "https://www.googleapis.com/blogger/v2/blogs/" + bloggerId + "/posts?fetchBodies="
                + bloggerBodies + "&maxResults=" + bloggerCount + "&key=" + bloggerKey;

            try
            {
                /* Connect to the Blogger API based on the string sent in from the input. If the web 
                 * request comes back successful, then we navigate the JSON data and add new feedObjects
                 * to our list. */
                HttpWebRequest bloggerRequest = (HttpWebRequest)WebRequest.Create(bloggerURL);

                using (HttpWebResponse bloggerResponse = (HttpWebResponse)bloggerRequest.GetResponse())
                {
                    using (StreamReader bloggers = new StreamReader(bloggerResponse.GetResponseStream()))
                    {
                        string bloggerRtn = bloggers.ReadToEnd();
                        JObject bloggerObject = JObject.Parse(bloggerRtn);

                        for (int x = 0; x < bloggerObject["items"].Count() - 1; x++)
                        {
                            /* Traverse through the JSON string that was returned from the API and create new 
                             * feedObjects and add them to the list. */
                            FeedObject newFeed = new FeedObject();

                            string text = (string)bloggerObject["items"][x]["content"];
                            DateTime blogTime = DateTime.Parse(bloggerObject["items"][x]["published"].ToString());

                            newFeed.link = (string)bloggerObject["items"][x]["url"];
                            newFeed.source = "On <a href = '" + newFeed.link + "' style='text-decoration: none' target='_top'>Blogger <img src = '/Images/Icons/bloggerBW.png' align = 'absmiddle' height = '12' width = '12' style='border-style: none' /></a>";
                            newFeed.dateTimeString = blogTime.ToString("dd MMM yyyy HH:mm");
                            newFeed.dateTime = blogTime;
                            newFeed.content = text;
                            newFeed.style = "width:88%";
                            newFeed.id = (string)bloggerObject["items"][x]["id"];

                            bloggerItems.Add(newFeed);
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

            return bloggerItems;
        }
    }
}