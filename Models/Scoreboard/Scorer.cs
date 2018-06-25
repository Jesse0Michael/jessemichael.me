using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Scoreboard
{
    public class Scorer
    {
        public string id { get; private set; }

        public string name { get; private set; }

        public int score { get; private set; }

        public Scorer(string id, string name, int score)
        {
            this.id = id;
            this.name = name;
            this.score = score;
        }
    }
}