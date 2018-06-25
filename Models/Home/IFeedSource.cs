using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Home
{
    public interface IFeedSource
    {
        List<FeedObject> GetData();
    }
}