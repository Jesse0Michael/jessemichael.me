using JesseMichael.Models.Home;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using TweetSharp;

namespace JesseMichael.Controllers
{
    public class HomeController : Controller
    {
        private List<FeedObject> feedList;

        public ActionResult Index()
        {
            List<IFeedSource> feedSources = new List<IFeedSource>();

            feedSources.Add(new BloggerSource("2628647666607369284"));
            feedSources.Add(new TwitterSource("jesse0michael"));
            feedSources.Add(new InstagramSource("50957893", bool.Parse(Request.Browser["IsMobile"])));
            feedSources.Add(new DeviantartSource("mini-michael", "5251B071-78F9-727D-CC27-E0EAAB2BA9BD"));
            feedSources.Add(new SwarmSource());

            GetData(feedSources);

            return View(feedList);
        }

        /// <summary>
        /// The Get Data function will take the feed sources and collect information returned from the source's APIs.
        /// The information is collected from each source through their own Thread, and then sorted
        /// If a failure occurs retrieving a soure, it will be skipped.
        /// </summary>
        /// <param name="feeds">The sources to retrieve</param>
        private void GetData(List<IFeedSource> feeds)
        {
            feedList = new List<FeedObject>();

            Parallel.ForEach(feeds, feed =>
            {
                List<FeedObject> objects = feed.GetData();

                lock (feedList)
                {
                    feedList.AddRange(objects);
                }
            });

            //Sorts the content based on a DateTime that was assigned to the content from each API
            feedList.Sort();
        }


        public ActionResult Projects()
        {
            if (Request.Url.Segments.Count() > 3)
            {
                switch (Request.Url.Segments[3])
                {

                    case "LD29":
                        return View("projects/ld29");

                    case "dogGame" :
                        return View("projects/doggame");

                    case "lwt2":
                        return View("projects/lwt2");

                    case "lwt":
                        return View("projects/lwt");

                    case "lwtPlay":
                        return View("projects/lwtplay");

                    case "alpoh":
                        return View("projects/alpoh");

                }
            }

            return View();
        }

        //[Authorize(Roles="admin")]
        public ActionResult Art()
        {
            if (Request.Url.Segments.Count() > 3)
            {
                List<ArtModel> model = new List<ArtModel>();
                switch (Request.Url.Segments[3].ToLower())
                {
                    case "canvas":
                        model = GetArtModelsForType("canvas");
                        return View("art/artspread", model);

                    case "journal":
                        model = GetArtModelsForType("journal");
                        return View("art/artspread", model);

                }
            }

            return View();
        }

        private List<ArtModel> GetArtModelsForType(string ArtType)
        {
            List<ArtModel> art = new List<ArtModel>();

            try
            {

                string[] files = Directory.GetFiles(Server.MapPath("~/Images/Art/" + ArtType + "/Medium"));
                if (ArtType == "journal")
                    files = files.Reverse().ToArray();

                foreach (string file in files)
                {
                    string[] fileSegments = file.Split('\\');
                    art.Add(new ArtModel(fileSegments.Last(), ArtType));
                }

            }
            catch
            {
            }

            return art;
        }


        public ActionResult Bio()
        {
            return View();
        }
    }
}





