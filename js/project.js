ProjectCtrl.$inject = ['$scope', '$sce'];
app.controller('ProjectCtrl', ProjectCtrl);

function ProjectCtrl($scope, $sce) {
  $scope.projects = [{
    id: "ld29",
    title: "Beneath The Surface",
    date: "2014",
    url: "/projects/ld29.html",
    body: $sce.trustAsHtml(`After a long break from (outside of work) development, I decided to jump back into games by participating in the 29th Ludum Dare competition. <a href="http://www.ludumdare.com/">Ludum Dare</a>
    is a competition where developers create a game based on a theme in one weekend. The theme is announced at the beginning of the weekend and it was "Beneath the Surface".
    It felt really good to be making games again, even though I didn't get very far in the short amount of time.
    <br /><br />
    I used Unity for the first time on this project, and I fell in love almost immediately. It's never been so easy for me to trajectory my content, distinguish gameplay scenes. Unity allowed me to
    control everything I wanted to. It also made making animations incredibly easy. I also liked that I was able to stay in the C# language.
    <br/><br/>
    The gameplay behind "Beneath the Surface" is pretty simple. You play a hero that wields a bow and fends of a giant for as long as you can. To fire an arrow, click on the scene and drag the mouse as if you were pulling back the arrow on the bow.
    The game use the angle from where you started and ended clicking, as well as the distance of the two points, to calculate a trajectory for the arrow. You must hit the giant to stop him from destroying you. This game isn't as complete or as entertaining
    as I imagined it would be when starting the competition, but I did the best I could with the time I had. I'm very satisfied with my first Ludum Dare.`)
  },{
    id: "doggame",
    title: "Phone Buddy",
    date: "2012",
    url: "/projects/doggame.html",
    body: $sce.trustAsHtml(`Interact with your own windows phone dog through many different activities. You can play fetch with your dog by throwing a ball for him to chase. You can play tug of war with your dog by pulling on your end of a rope. You can give your dog food and water. And you can clean up after him when he poops! You can select any of these activities from the user interface that slides away when it is not needed. The project was developed in C# using the XNA game framework and the application is released on the windows phone market place.
    <br /><br />
    The Phone Buddy project was then expanded on and developed for the Android smart phone platform. The application was re-written in Java and used the AndEngine Game framework and was published onto the Android Play Store where it can be found under the name Phone Buddy.`)
  },{
    id: "lwt2",
    title: "Life Without Taxes 2",
    date: "2010",
    url: "/projects/lwt2.html",
    body: $sce.trustAsHtml(`The second installment of Life Without Taxes is an exciting adventure in the 3D world of Taxfreeville. The game play is similar to the first Life Without Taxes because it has you live a day in the life of a person who lives in a town that does not have taxes. In the game, you start your day by having to drive to work in the morning. But the roads are trashed because there is no government funding to fix them, and the people of Taxfreeville are reckless because there is no police force to serve and protect. You've taken it upon yourself to try and do something about the animals that roam free in Taxfreeville, so as your job you clean the city of wild animals because there is no government regulated animal control to do so. After work you drive back home, with the streets being even more trashed and reckless, to spend your night defending your house from burglars because of the lack of police in Taxfreeville. The Life Without Taxes games are meant to be educational to teach the users about the importance of taxes, while having fun. This game is unique from the first one because it uses 3D graphics to enhance the game play. This project was developed by myself, written in C# using the XNA framework.`)
  },{
    id: "lwt",
    title: "Life Without Taxes",
    date: "2009",
    url: "/projects/lwt.html",
    body: $sce.trustAsHtml(`Life Without Taxes is a game that takes you through a day in a world where there are no taxes. The game is meant to be a fun way to teach the importance of taxes. The game starts by having the player drive to work on streets that are unkempt because of the lack of government services. When the player survives, they arrive at their job at a grocery store where they have to bag the good food and throw away the surplus of rotten food because there is no government regulation on food, all while stopping burglars from stealing from your store. The player then drives home to discover that his house is on fire, and because there are no taxes to pay for a fire department, you have to put the fire out yourself. Life Without Taxes is a 2D game built in Flash using Actionscript. This project was developed by Johannes Alexander, Rachel Phillips, Galen Arnold, and myself.`)
  },{
    id: "alpoh",
    title: "A Little Piece of Heaven",
    date: "2009",
    url: "/projects/alpoh.html",
    body: $sce.trustAsHtml(`This side-scrolling game tells the story of a beautiful girl who was kidnapped and the man fighting his way to get him back. The game takes you through 4 unique levels where you fight your way through, hoping to reach your kidnapped girlfriend. A Little Piece of Heaven is a 2D side-scroller developed in GameMaker, with unique art, developed by me. The game play for this game is not all that exciting but I am really proud of the art that was created for each unique level.`)
  }]
}
