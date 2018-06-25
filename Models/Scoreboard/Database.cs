using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Scoreboard
{
    public class Database
    {   
        private bool connection_open;

        private MySqlConnection connection;

        public Database()
        {

        }

        public List<Scoreboard> GetScoreboardsForScorer(string scorerid) {
            List<Scoreboard> boards = new List<Scoreboard>();
            Get_Connection();

	        try
	        {
		        MySqlCommand cmd = new MySqlCommand();
		        cmd.Connection = connection;
		        cmd.CommandText =
	            string.Format("select sb.scoreboardid, sb.name from scoreboards sb inner join scoreboardtoscorers ss on sb.scoreboardid = ss.scoreboardid inner join scorers s on ss.scorerid = s.scorerid where s.scorerid = '{0}'",
							  scorerid);

		        MySqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    boards.Add(new Scoreboard(reader.GetString("scoreboardid"), reader.GetString("name")));
                }
                reader.Close();
            }
            catch { }

            connection.Close();

            return boards;
        }

        public Scoreboard GetScoreboard(Scoreboard scoreboard)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("select s.scorerid, s.name, ss.score from scoreboardtoscorers ss inner join scorers s on ss.scorerid = s.scorerid where ss.scoreboardid = '{0}';",
                              scoreboard.id);

                MySqlDataReader reader = cmd.ExecuteReader();
                List<Scorer> scorers = new List<Scorer>();
                while (reader.Read())
                {
                    scorers.Add(new Scorer(reader.GetString("scorerid"), reader.GetString("name"), reader.GetInt32("score")));
                }

                scoreboard.SetScorers(scorers);

                reader.Close();
            }
            catch { }

            connection.Close();

            return scoreboard;
        }

        public string AddScoreboard(string name)
        {
            string id = Guid.NewGuid().ToString();
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("insert into scoreboards (scoreboardid, name) values ('{0}', '{1}');",
                              id, name);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();

            return id;
        }

        public void RemoveScoreboard(string scoreboardId)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("delete from scoreboardtoscorers where scoreboardid = '{0}';",
                              scoreboardId);

                cmd.ExecuteNonQuery();

                cmd.CommandText =
                string.Format("delete from scoreboards where scoreboardid = '{0}';",
                              scoreboardId);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        public void AddScorer(string id, string name)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("insert into scorers (scorerid, name) values ('{0}', '{1}');",
                              id, name);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        public void AddScorerToScoreboard(string scoreboardId, string scorerId)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("insert into scoreboardtoscorers (scoreboardid, scorerid) values ('{0}', '{1}');",
                              scoreboardId, scorerId);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        public void RemoveScorerFromScoreboard(string scoreboardId, string scorerId)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("delete from scoreboardtoscorers where scoreboardid = '{0}' and scorerid =  '{1}';",
                              scoreboardId, scorerId);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        public void AddScore(string scoreboardId, string scorerId)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("update scoreboardtoscorers set score = score + 1 where scoreboardid = '{0}' and scorerid = '{1}';",
                              scoreboardId, scorerId);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        public void RemoveScore(string scoreboardId, string scorerId)
        {
            Get_Connection();

            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;
                cmd.CommandText =
                string.Format("update scoreboardtoscorers set score = score - 1 where scoreboardid = '{0}' and scorerid = '{1}';",
                              scoreboardId, scorerId);

                cmd.ExecuteNonQuery();
            }
            catch { }

            connection.Close();
        }

        private void Get_Connection()
        {
            connection_open = false;
            connection = new MySqlConnection();

            connection.ConnectionString = ConfigurationManager.ConnectionStrings["JesseMichael"].ConnectionString;

            if (Open_Local_Connection())
            {
                connection_open = true;
            }
        }

        private bool Open_Local_Connection()
        {
            try
            {
                connection.Open();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}