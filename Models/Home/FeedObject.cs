using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Home
{
    public class FeedObject : IComparable<FeedObject>
    {

        public string content;
        public string source;
        public string dateTimeString;
        public DateTime dateTime;
        public string style;
        public string id;
        public string link;

        public FeedObject()
        {
            /* An instance of the feedObject class is created for every feed that will bee added 
             * to the list. It has the source for what API it was collected from, the content that
             * it is being pulled for, and the date and time that content was posted. */
        }

        public int CompareTo(FeedObject other)
        {
            /* After adding the feedObjects to the list in any order, we sort the feeds based on the
             * date and time they were posted. This way we get a neat, ordered list of content from
             * many resources accross the web. The feeds are easily sorted by implementing a sorting
             * interface unique to feedObjects. */

            if (this.dateTime < other.dateTime) return 1;
            else if (this.dateTime > other.dateTime) return -1;
            else return 0;
        }

    }
}