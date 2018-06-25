using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Scoreboard
{
    public class Scoreboard
    {
        public string id { get; private set; }

        public string name { get; private set; }

        public List<Scorer> scorers;

        public Scoreboard(string id, string name)
        {
            this.id = id;
            this.name = name;
            scorers = new List<Scorer>();
        }

        public void SetScorers(List<Scorer> scorers)
        {
            this.scorers = scorers;
        }
    }
}