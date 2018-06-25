using JesseMichael.Models.Scoreboard;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JesseMichael.Controllers
{
    public class ScoreboardController : Controller
    {
        private Database db = new Database();

        [Authorize(Roles = "scoreboard")]
        public ActionResult Index()
        {
            List<Scoreboard> scoreboards = db.GetScoreboardsForScorer("user111");
            List<Scoreboard> filledScoreboards = new List<Scoreboard>();
            foreach (Scoreboard scoreboard in scoreboards)
            {
                filledScoreboards.Add(db.GetScoreboard(scoreboard));
            }
            return View(filledScoreboards);
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult AddScoreboard(string name)
        {
            string id = db.AddScoreboard(name);
            db.AddScorerToScoreboard(id, "user111");

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult RemoveScoreboard(string scoreboardid)
        {
            db.RemoveScoreboard(scoreboardid);

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult AddScorer(string scoreboardid, string scorerid, string name)
        {
            db.AddScorer(scorerid, name);
            db.AddScorerToScoreboard(scoreboardid, scorerid);

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult RemoveScorer(string scoreboardid, string scorerid)
        {
            db.RemoveScorerFromScoreboard(scoreboardid, scorerid);
            if(!db.GetScoreboard(new Scoreboard(scoreboardid, string.Empty)).scorers.Any())
            {
                db.RemoveScoreboard(scoreboardid);
            }

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult AddScore(string scoreboardid, string scorerid)
        {
            db.AddScore(scoreboardid, scorerid);

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult RemoveScore(string scoreboardid, string scorerid)
        {
            db.RemoveScore(scoreboardid, scorerid);

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "scoreboard")]
        public ActionResult GetFacebookFriends()
        {
            
            return RedirectToAction("Index");
        }

    }
}