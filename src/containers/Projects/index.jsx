import React, { Component } from "react";
import Project from "../../components/Project";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Project
          title="Wubs"
          date="2019"
          description="Just like a dream, Wubs comes to life. Fly with Wubs, the elephant, to all the places he's been. 
          Travel far, fly through the sky, and reach for the stars!
          <br /><br />
          This project uses 2D game development powered by Unity and 100% custom, hand-drawn, art."
          video="/projects/wubs/Wubs Promo.mp4"
          buttons={[
            {
              text: "Code",
              link: "https://github.com/RaineyStreetGames/Wubs",
              icon: "code"
            },
          ]}
        />
        <Project
          title="Minesweeper"
          date="2018"
          description="In an effort to get more frontend experiences, specifically in React, I built a web version of Minesweeper. 
          The board will fill up the entire height and width of the window and place bombs randomly at 20% of the open locations.
          It will work on any screen size, even mobile. It uses Material Design components to keep a nice and clean look and feel.
          <br /><br />
          The application uses Google Analytics to track user interaction with the website and even uses custom events to track when users win or lose.
          It uses Firebase for free web hosting, and CircleCI for continuous integration to automatically build and deploy new changes."
          video="/projects/minesweeper/Minesweeper.mp4"
          buttons={[
            {
              text: "Code",
              link: "https://github.com/Jesse0Michael/react-minesweeper",
              icon: "code"
            },
            {
              text: "Play",
              link: "https://minesweeper-cb7d3.firebaseapp.com/",
              icon: "play_arrow"
            }
          ]}
        />
        <Project
          title="Go Rest Assured"
          date="2018"
          description="Entering the world of Open Source Software, I built a tool in GO that I find very useful and hope other find it useful as well.
          Go Rest Assured is a small REST API testing service intended to mock out web endpoints with defined responses and verify calls made to those endpoints. 
          The concept is based on other <a href='http://rest-assured.io/'>Rest Assured</a> application testing services.
          <br /><br />
          The GO <i>httptest</i> package is usually too limited for what I need. For this case, I use the Go Rest Assured client to stub out and validate any number of api endpoints and validate the calls made to them.
          In integration testing I use the Go Rest Assured binary to preload api expectations to validate that my application works with external services without having my tests depend on those services. 
          The tests don't even have to be written in GO to use this.
          "
          buttons={[
            {
              text: "Code",
              link: "https://github.com/Jesse0Michael/go-rest-assured",
              icon: "code"
            }
          ]}
        />
        <Project
          title="Transportation Day"
          date="2018"
          description="Transportation Day is a fun game where you spawn different modes of transportation with the touch of a finger.
          Drive cars around in circles, fly planes over the scenery, crash them into each other! Enjoy a wide variety of different vehicles that you can create by dragging across the screen.
          <br /><br />
          This project was a dive into using 3D models in Unity. The models used in this game are provided for free from <a href='http://quaternius.com/' >Quaternius</a>.
          It also expanded my Unity toolset by getting exposure to 3D audio, collision, particle effects, and other Unity features.
          "
          video="/projects/transportation/TransportationDay.mp4"
          buttons={[
            {
              text: "Code",
              link: "https://github.com/RaineyStreetGames/Transport",
              icon: "code"
            }
          ]}
        />
        <Project
          title="Boxster"
          date="2017"
          description="Wanting to get back into game development and work with Unity again, I remastered Phone Buddy. This time written in C# using Unity. 
          Boxster is the name of the dog who the textures are modeled off of.
          <br /><br />
          Working in Unity is a great for what I try to do when I have time to work on games. I'm not interested in building my own game framework. I feel accomplished when I have a working game that I can share with family and friends. 
          The goal of this project was to learn how to use Unity better and publish this dog game on all mobile platforms."
          video="/projects/boxter/boxter%20promo.mp4"
          buttons={[
            {
              text: "Code",
              link: "https://github.com/RaineyStreetGames/PhoneBuddy-Unity",
              icon: "code"
            }
          ]}
        />
        <Project
          title="Beneath The Surface"
          date="2014"
          description="After a long break from (outside of work) development, I decided to jump back into games by participating in the 29th Ludum Dare competition. <a href='http://www.ludumdare.com/'>Ludum Dare</a>
                is a competition where developers create a game based on a theme in one weekend. The theme is announced at the beginning of the weekend and it was `Beneath the Surface`.
                It felt really good to be making games again, even though I didn't get very far in the short amount of time.
                <br /><br />
                I used Unity for the first time on this project, and I fell in love almost immediately. It's never been so easy for me to trajectory my content, distinguish gameplay scenes. Unity allowed me to
                control everything I wanted to. It also made making animations incredibly easy. I also liked that I was able to stay in the C# language.
                <br/><br/>
                The gameplay behind `Beneath the Surface` is pretty simple. You play a hero that wields a bow and fends of a giant for as long as you can. To fire an arrow, click on the scene and drag the mouse as if you were pulling back the arrow on the bow.
                The game use the angle from where you started and ended clicking, as well as the distance of the two points, to calculate a trajectory for the arrow. You must hit the giant to stop him from destroying you. This game isn't as complete or as entertaining
                as I imagined it would be when starting the competition, but I did the best I could with the time I had. I'm very satisfied with my first Ludum Dare."
          images={[
            "/projects/ld29/screen1.png",
            "/projects/ld29/screen2.png",
            "/projects/ld29/screen3.png",
            "/projects/ld29/screen4.png"
          ]}
          buttons={[
            {
              text: "Play",
              link: "/projects/ld29/ld29play.html",
              icon: "play_arrow"
            },
            {
              text: "Link",
              link: "http://www.ludumdare.com/compo/ludum-dare-29/?action=preview&uid=34408",
              icon: "link"
            },
            {
              text: "Code",
              link: "https://github.com/Jesse-Michael/LD29",
              icon: "code"
            }
          ]}
        />
        <Project
          title="Phone Buddy"
          date="2012"
          description="Interact with your own windows phone dog through many different activities. You can play fetch with your dog by throwing a ball for him to chase. You can play tug of war with your dog by pulling on your end of a rope. You can give your dog food and water. And you can clean up after him when he poops! You can select any of these activities from the user interface that slides away when it is not needed. The project was developed in C# using the XNA game framework and the application is released on the windows phone market place.
                <br /><br />
                The Phone Buddy project was then expanded on and developed for the Android smart phone platform. The application was re-written in Java and used the AndEngine Game framework and was published onto the Android Play Store where it can be found under the name Phone Buddy."
          images={[
            "/projects/doggame/screen1.png",
            "/projects/doggame/screen2.png",
            "/projects/doggame/screen3.png",
            "/projects/doggame/screen4.png"
          ]}
          buttons={[
            {
              text: "Link",
              link: "http://www.windowsphone.com/en-US/apps/dd523323-3fea-448f-b01e-42ce850acb8c",
              icon: "widgets"
            },
            {
              text: "Code",
              link: "https://github.com/Jesse-Michael/Phone-Buddy-WindowsPhone",
              icon: "mobile_friendly"
            },
            {
              text: "Link",
              link: "https://play.google.com/store/apps/details?id=org.phonebuddy",
              icon: "android"
            },
            {
              text: "Code",
              link: "https://github.com/Jesse-Michael/Phone-Buddy-Android",
              icon: "phone_android"
            }
          ]}
        />
        <Project
          title="Life Without Taxes 2"
          date="2010"
          description="The second installment of Life Without Taxes is an exciting adventure in the 3D world of Taxfreeville. The game play is similar to the first Life Without Taxes because it has you live a day in the life of a person who lives in a town that does not have taxes. In the game, you start your day by having to drive to work in the morning. But the roads are trashed because there is no government funding to fix them, and the people of Taxfreeville are reckless because there is no police force to serve and protect. You've taken it upon yourself to try and do something about the animals that roam free in Taxfreeville, so as your job you clean the city of wild animals because there is no government regulated animal control to do so. After work you drive back home, with the streets being even more trashed and reckless, to spend your night defending your house from burglars because of the lack of police in Taxfreeville. The Life Without Taxes games are meant to be educational to teach the users about the importance of taxes, while having fun. This game is unique from the first one because it uses 3D graphics to enhance the game play. This project was developed by myself, written in C# using the XNA framework."
          images={["/projects/lwt2/screen1.png", "/projects/lwt2/screen2.png", "/projects/lwt2/screen3.png"]}
          buttons={[
            {
              text: "Download",
              link: "/projects/lwt2/LifeWithoutTaxes2.zip",
              icon: "file_download"
            },
            {
              text: "Code",
              link: "https://github.com/Jesse-Michael/LifeWithoutTaxes2",
              icon: "code"
            }
          ]}
        />
        <Project
          title="Life Without Taxes"
          date="2009"
          description="Life Without Taxes is a game that takes you through a day in a world where there are no taxes. The game is meant to be a fun way to teach the importance of taxes. The game starts by having the player drive to work on streets that are unkempt because of the lack of government services. When the player survives, they arrive at their job at a grocery store where they have to bag the good food and throw away the surplus of rotten food because there is no government regulation on food, all while stopping burglars from stealing from your store. The player then drives home to discover that his house is on fire, and because there are no taxes to pay for a fire department, you have to put the fire out yourself. Life Without Taxes is a 2D game built in Flash using Actionscript. This project was developed by Johannes Alexander, Rachel Phillips, Galen Arnold, and myself."
          images={["/projects/lwt/screen1.png", "/projects/lwt/screen2.png", "/projects/lwt/screen3.png"]}
          buttons={[
            { text: "Play", link: "/projects/lwtplay", icon: "play_arrow" },
            {
              text: "Code",
              link: "https://github.com/Jesse-Michael/LifeWithoutTaxes",
              icon: "code"
            }
          ]}
        />
        <Project
          title="A Little Piece of Heaven"
          date="2009"
          description="This side-scrolling game tells the story of a beautiful girl who was kidnapped and the man fighting his way to get him back. The game takes you through 4 unique levels where you fight your way through, hoping to reach your kidnapped girlfriend. A Little Piece of Heaven is a 2D side-scroller developed in GameMaker, with unique art, developed by me. The game play for this game is not all that exciting but I am really proud of the art that was created for each unique level."
          images={["/projects/alpoh/screen1.png", "/projects/alpoh/screen2.png", "/projects/alpoh/screen3.png"]}
          buttons={[
            {
              text: "Link",
              link: "http://sandbox.yoyogames.com/games/200129-a-little-piece-of-heaven",
              icon: "link"
            },
            {
              text: "Download",
              link: "/projects/alpoh/Little_Piece_of_Heaven.exe",
              icon: "file_download"
            }
          ]}
        />
      </div>
    );
  }
}

export default Projects;
