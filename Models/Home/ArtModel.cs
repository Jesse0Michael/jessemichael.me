using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JesseMichael.Models.Home
{
    public class ArtModel
    {
        public string FileName { get; private set; }

        public string ArtType { get; private set; }

        public string LargeURL
        {
            get
            {
                return "/Images/Art/" + ArtType +"/Large/" + FileName;
            }
        }

        public string MediumURL
        {
            get
            {
                return "/Images/Art/" + ArtType + "/Medium/" + FileName;
            }
        }

        public string ThumbnailURL
        {
            get
            {
                return "/Images/Art/" + ArtType + "/Thumbnail/" + FileName;
            }
        }

        public ArtModel(string fileName, string artType)
        {

            FileName = fileName;
            ArtType = artType;
        }

    }
}