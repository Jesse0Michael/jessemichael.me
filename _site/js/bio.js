BioCtrl.$inject = ['$scope', '$window'];
app.controller('BioCtrl', BioCtrl);

function BioCtrl($scope, $window) {
  $scope.bios = [{
    id: "blogger",
    title: "Blog",
    image: "/content/icons/blogger.png",
    url: "http://jesse0michael.blogspot.com/"
  },{
    id: "deviantart",
    title: "Deviant Art",
    image: "/content/icons/deviantart2.png",
    url: "http://mini-michael.deviantart.com/"
  },{
    id: "facebook",
    title: "Facebook",
    image: "/content/icons/facebook.png",
    url: "http://www.facebook.com/jesse0michael"
  },{
    id: "github",
    title: "GitHub",
    image: "/content/icons/github.png",
    url: "https://github.com/Jesse0Michael"
  },{
    id: "instagram",
    title: "Instagram",
    image: "/content/icons/instagram.png",
    url: "https://www.instagram.com/jesse0michael/"
  },{
    id: "linkedin",
    title: "Linked In",
    image: "/content/icons/linkedin.png",
    url: "http://www.linkedin.com/pub/jesse-michael/4a/801/a14"
  },{
    id: "twitter",
    title: "Twitter",
    image: "/content/icons/twitter.png",
    url: "http://twitter.com/#!/Jesse0Michael"
  },{
    id: "xbox",
    title: "Xbox",
    image: "/content/icons/xbox.png",
    url: "https://account.xbox.com/en-us/Profile?Gamertag=LoopedMichael"
  },{
    id: "youtube",
    title: "YouTube",
    image: "/content/icons/youtube.png",
    url: "http://www.youtube.com/user/MiniMichael63"
  }]

  $scope.redirect = function(url) {
    $window.location.href = url;
  }
}
