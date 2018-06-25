package 

{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;



	public class main extends MovieClip

	{

		public var buttonArray:Array = new Array();

		public var homeB:aLongButton = new aLongButton();

		public var projB:aLongButton = new aLongButton();

		public var artB:aLongButton = new aLongButton();

		public var bioB:aLongButton = new aLongButton();

		/*public var faceB:aLongButton = new aLongButton();

		public var twitterB:aLongButton = new aLongButton();

		public var youtubeB:aLongButton = new aLongButton();

		public var bloggerB:aLongButton = new aLongButton();

		public var diviantB:aLongButton = new aLongButton();

		public var gitB:aLongButton = new aLongButton();*/

		public var clicked:Boolean;



		public function main()

		{

			var counter:int = 0;

			for (var i:int = 0; i < 3; i++)

			{

				for (var j:int = 0; j < 33; j++)

				{



					if (/*(((33*i) + j) != 0) && (((33*i) + j) != 1) && (((33*i) + j) != 2) && 

						(((33*i) + j) != 6) && (((33*i) + j) != 7) && (((33*i) + j) != 8) &&

						(((33*i) + j) != 12) && (((33*i) + j) != 13) && (((33*i) + j) != 14) &&

						(((33*i) + j) != 18) && (((33*i) + j) != 19) && (((33*i) + j) != 20) &&

						(((33*i) + j) != 24) && (((33*i) + j) != 25) && (((33*i) + j) != 26) &&

						(((33*i) + j) != 30) && (((33*i) + j) != 31) && (((33*i) + j) != 32) &&*/

						(((33*i) + j) != 39) && (((33*i) + j) != 40) && (((33*i) + j) != 41) && 

						(((33*i) + j) != 45) && (((33*i) + j) != 46) && (((33*i) + j) != 47) &&

						(((33*i) + j) != 51) && (((33*i) + j) != 52) && (((33*i) + j) != 53) && 

						(((33*i) + j) != 57) && (((33*i) + j) != 58) && (((33*i) + j) != 59))

					{



						var btn:aButton = new aButton();

						btn.x = 37.5 * j + 25;

						btn.y = 37.5 * i + 25;

						btn.scaleX = 1.10;

						btn.scaleY = 1.10;



						buttonArray.push(btn);

						addChild(buttonArray[counter]);

						counter++;

					}

				}

			}



			//trace(counter);

			

			homeB.x = 37.5 * 7 + 25;

			homeB.y = 37.5 * 1 + 25;

			homeB.scaleY = 1.0;

			homeB.scaleY = 1.0;

			homeB.label.text = "HOME";

			homeB.label.selectable = false;

			homeB.URLb = "/home/index";

			homeB.iFrame = false;

			addChild(homeB);



			

			projB.x = 37.5 * 13 + 25;

			projB.y = 37.5 * 1 + 25;

			projB.scaleY = 1.0;

			projB.scaleY = 1.0;

			projB.label.text = "PROJECTS";

			projB.URLb = "/home/projects";

			projB.label.selectable = false;

			projB.iFrame = false;

			addChild(projB);



			

			artB.x = 37.5 * 19 + 25;

			artB.y = 37.5 * 1 + 25;

			artB.scaleY = 1.0;

			artB.scaleY = 1.0;

			artB.label.text = "ART";

			artB.URLb = "/home/art";

			artB.iFrame = false;

			artB.label.selectable = false;

			addChild(artB);



			

			bioB.x = 37.5 * 25 + 25;

			bioB.y = 37.5 * 1 + 25;

			bioB.scaleY = 1.0;

			bioB.scaleY = 1.0;

			bioB.label.text = "BIO";

			bioB.URLb = "/home/bio";

			bioB.iFrame = false;

			bioB.label.selectable = false;

			addChild(bioB);

			

			

			/*faceB.x = 37.5 * 1 + 25;

			faceB.y = 37.5 * 0 + 25;

			faceB.scaleY = 1.0;

			faceB.scaleY = 1.0;

			faceB.label.text = "FACEBOOK";

			faceB.iFrame = false;

			faceB.URLb = "http://www.facebook.com/profile.php?id=711267518";

			faceB.label.selectable = false;

			addChild(faceB);

			

			

			twitterB.x = 37.5 * 7 + 25;

			twitterB.y = 37.5 * 0 + 25;

			twitterB.scaleY = 1.0;

			twitterB.scaleY = 1.0;

			twitterB.label.text = "TWITTER";

			twitterB.URLb = "http://twitter.com/#!/Jesse0Michael";

			twitterB.iFrame = false;

			twitterB.label.selectable = false;

			addChild(twitterB);

			

			

			youtubeB.x = 37.5 * 13 + 25;

			youtubeB.y = 37.5 * 0 + 25;

			youtubeB.scaleY = 1.0;

			youtubeB.scaleY = 1.0;

			youtubeB.label.text = "YOU TUBE";

			youtubeB.URLb = "http://www.youtube.com/user/MiniMichael63";

			youtubeB.iFrame = false;

			youtubeB.label.selectable = false;

			addChild(youtubeB);

			

			

			bloggerB.x = 37.5 * 19 + 25;

			bloggerB.y = 37.5 * 0 + 25;

			bloggerB.scaleY = 1.0;

			bloggerB.scaleY = 1.0;

			bloggerB.label.text = "BLOG";

			bloggerB.URLb = "http://jesse-michael.blogspot.com/";

			bloggerB.iFrame = false;

			bloggerB.label.selectable = false;

			addChild(bloggerB);

			

			

			diviantB.x = 37.5 * 25 + 25;

			diviantB.y = 37.5 * 0 + 25;

			diviantB.scaleY = 1.0;

			diviantB.scaleY = 1.0;

			diviantB.label.text = "DEVIANT ART";

			diviantB.URLb = "http://mini-michael.deviantart.com/";

			diviantB.iFrame = false;

			diviantB.label.selectable = false;

			addChild(diviantB);

			

			

			gitB.x = 37.5 * 31 + 25;

			gitB.y = 37.5 * 0 + 25;

			gitB.scaleY = 1.0;

			gitB.scaleY = 1.0;

			gitB.label.text = "GITHUB";

			gitB.URLb = "https://github.com/Jesse-Michael";

			gitB.iFrame = false;

			gitB.label.selectable = false;

			addChild(gitB);*/

			

			



			this.stage.addEventListener( Event.ENTER_FRAME, onUpdate );

			this.stage.addEventListener(MouseEvent.CLICK, onClick);







		}

		private function onUpdate( e:Event ):void

		{



			homeB.update(homeB, mouseX, mouseY);

			projB.update(projB, mouseX, mouseY);

			artB.update(artB, mouseX, mouseY);

			bioB.update(bioB, mouseX, mouseY);

			/*faceB.update(faceB, mouseX, mouseY);

			twitterB.update(twitterB, mouseX, mouseY);

			youtubeB.update(youtubeB, mouseX, mouseY);

			bloggerB.update(bloggerB, mouseX, mouseY);

			diviantB.update(diviantB, mouseX, mouseY);

			gitB.update(gitB, mouseX, mouseY);*/

			

			

			clicked = false;

			

			

			for (var i:int = 0; i < 87; i++)

			{

				if (this.buttonArray[i].hitTestPoint(mouseX,mouseY,true))

				{

					setChildIndex(buttonArray[i], 90);



					if (this.buttonArray[i].scaleX < 1.6)

					{

						this.buttonArray[i].scaleX +=  .20;

						this.buttonArray[i].scaleY +=  .20;

					}



					if (this.buttonArray[i].transform.colorTransform.redOffset <= 0 &&

					  this.buttonArray[i].transform.colorTransform.greenOffset <= 0 &&

					  this.buttonArray[i].transform.colorTransform.blueOffset <= 0)

					{





						var r:Number = Math.random() * 430 - 175;

						var g:Number = Math.random() * 430 - 175;

						var b:Number = Math.random() * 430 - 175;

						this.buttonArray[i].transform.colorTransform = new ColorTransform(1,1,1,1,r,g,b,0);



					}



				}

				else

				{



					if (this.buttonArray[i].scaleX > 1.0)

					{

						this.buttonArray[i].scaleX -=  .1;

						this.buttonArray[i].scaleY -=  .1;

					}







					if (this.buttonArray[i].transform.colorTransform.redOffset > 0)

					{

						this.buttonArray[i].red = this.buttonArray[i].transform.colorTransform.redOffset - 10;



					}

					else if (this.buttonArray[i].transform.colorTransform.redOffset < 0)

					{

						this.buttonArray[i].red = 0;

					}



					if (this.buttonArray[i].transform.colorTransform.greenOffset > 0)

					{

						this.buttonArray[i].green = this.buttonArray[i].transform.colorTransform.greenOffset - 10;



					}

					else if (this.buttonArray[i].transform.colorTransform.greenOffset < 0)

					{

						this.buttonArray[i].green = 0;

					}



					if (this.buttonArray[i].transform.colorTransform.blueOffset > 0)

					{

						this.buttonArray[i].blue = this.buttonArray[i].transform.colorTransform.blueOffset - 10;



					}

					else if (this.buttonArray[i].transform.colorTransform.blueOffset < 0)

					{

						this.buttonArray[i].blue = 0;

					}















					this.buttonArray[i].transform.colorTransform = new ColorTransform(1,1,1,1,this.buttonArray[i].red,this.buttonArray[i].green,this.buttonArray[i].blue,0);





				}



			}







		}

		public function onClick(evt:MouseEvent):void {

			

			

			clicked = true;

			

		}

	}



}