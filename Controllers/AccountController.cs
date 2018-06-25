using DotNetOpenAuth.AspNet;
using Microsoft.Web.WebPages.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace JesseMichael.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Login()
        {
            return View(OAuthWebSecurity.RegisteredClientData);
        }


        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLogin(string provider, string returnUrl)
        {
            return new ExternalLoginResult(provider, Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
        }

        //
        // GET: /Account/ExternalLoginCallback
        public ActionResult ExternalLoginCallback(string returnUrl)
        {
            AuthenticationResult result = OAuthWebSecurity.VerifyAuthentication(Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
            if (result.IsSuccessful && Login(result))
            {
                return RedirectToLocal(returnUrl);
            }
            else
            {
                return RedirectToAction("ExternalLoginFailure");
            }

        }

        private bool Login(AuthenticationResult result)
        {
            bool success = true;

            if (ModelState.IsValid)
            {
                // authenticate user
                FormsAuthentication.SetAuthCookie(result.ProviderUserId, true);

                if (!Roles.FindUsersInRole("scoreboard", result.ProviderUserId).Any())
                {
                    Roles.AddUserToRole(result.ProviderUserId, "scoreboard");
                }
                // select/insert user into DB


                // pull & set roles

                //dont add roles if they are already added
                //Roles.AddUserToRole(result.ProviderUserId, "admin");

            }
            else
            {
                success = false;
            }

            return success;
        }

        //
        // GET: /Account/ExternalLoginFailure

        public ActionResult ExternalLoginFailure()
        {
            return View("Login");
        }


        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        internal class ExternalLoginResult : ActionResult
        {
            public ExternalLoginResult(string provider, string returnUrl)
            {
                Provider = provider;
                ReturnUrl = returnUrl;
            }

            public string Provider { get; private set; }
            public string ReturnUrl { get; private set; }

            public override void ExecuteResult(ControllerContext context)
            {
                OAuthWebSecurity.RequestAuthentication(Provider, ReturnUrl);
            }
        }
    }
}