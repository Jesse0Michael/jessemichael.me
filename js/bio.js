BioCtrl.$inject = ['$scope', '$window'];
app.controller('BioCtrl', BioCtrl);

function BioCtrl($scope, $window) {
  $scope.bios = [{
    id: "blogger",
    title: "Blog",
    image: "/jessemichael.me/content/icons/blogger.png",
    url: "http://jesse0michael.blogspot.com/"
  },{
    id: "deviantart",
    title: "Deviant Art",
    image: "/jessemichael.me/content/icons/deviantart2.png",
    url: "http://mini-michael.deviantart.com/"
  },{
    id: "facebook",
    title: "Facebook",
    image: "/jessemichael.me/content/icons/facebook.png",
    url: "http://www.facebook.com/jesse0michael"
  },{
    id: "github",
    title: "GitHub",
    image: "/jessemichael.me/content/icons/github.png",
    url: "https://github.com/Jesse0Michael"
  },{
    id: "instagram",
    title: "Instagram",
    image: "/jessemichael.me/content/icons/instagram.png",
    url: "https://www.instagram.com/jesse0michael/"
  },{
    id: "linkedin",
    title: "Linked In",
    image: "/jessemichael.me/content/icons/linkedin.png",
    url: "http://www.linkedin.com/pub/jesse0michael"
  },{
    id: "soundcloud",
    title: "Sound Cloud",
    image: "/jessemichael.me/content/icons/soundcloud.png",
    url: "https://soundcloud.com/jesse0michael"
  },{
    id: "steam",
    title: "Steam",
    image: "/jessemichael.me/content/icons/steam.png",
    url: "https://steamcommunity.com/id/Jesse0Michael"
  },{
    id: "twitter",
    title: "Twitter",
    image: "/jessemichael.me/content/icons/twitter.png",
    url: "http://twitter.com/#!/Jesse0Michael"
  },{
    id: "xbox",
    title: "Xbox",
    image: "/jessemichael.me/content/icons/xbox.png",
    url: "https://account.xbox.com/en-us/Profile?Gamertag=LoopedMichael"
  },{
    id: "youtube",
    title: "YouTube",
    image: "/jessemichael.me/content/icons/youtube.png",
    url: "http://www.youtube.com/user/MiniMichael63"
  },{
    id: "itch",
    title: "Itch.io",
    image: "/jessemichael.me/content/icons/itch.png",
    url: "https://raineystreetgames.itch.io/"
  }]

  $scope.redirect = function(url) {
    $window.location.href = url;
  }
}
