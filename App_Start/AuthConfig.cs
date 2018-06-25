using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Web.WebPages.OAuth;
using JesseMichael.Models;
using System.Configuration;
using WebMatrix.WebData;
using System.Web.Security;

namespace JesseMichael
{
    public static class AuthConfig
    {
        public static void RegisterAuth()
        {
            // To let users of this site log in using their accounts from other sites such as Microsoft, Facebook, and Twitter,
            // you must update this site. For more information visit http://go.microsoft.com/fwlink/?LinkID=252166

            if (!Roles.RoleExists("admin"))
            {
                Roles.CreateRole("admin");
            }

            if (!Roles.RoleExists("readonly"))
            {
                Roles.CreateRole("readonly");
            }

            if (!Roles.RoleExists("scoreboard"))
            {
                Roles.CreateRole("scoreboard");
            }

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "",
            //    clientSecret: "");

            //OAuthWebSecurity.RegisterTwitterClient(
            //    consumerKey: "",
            //    consumerSecret: "");


            string facebookAppId = ConfigurationManager.AppSettings["facebookAppId"];
            string facebookAppSectet = ConfigurationManager.AppSettings["facebookAppSecret"];
            OAuthWebSecurity.RegisterFacebookClient(
                appId: facebookAppId,
                appSecret: facebookAppSectet);

            //OAuthWebSecurity.RegisterGoogleClient();

        }
    }
}
