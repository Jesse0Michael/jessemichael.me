package 

{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;





	public class aLongButton extends MovieClip

	{



		public var red:Number;

		public var green:Number;

		public var blue:Number;

		public var URLb:String;

		public var iFrame:Boolean;

		public var mX:Number;

		public var mY:Number;



		public function aLongButton()

		{

			// constructor code



			red = 0;

			green = 0;

			blue = 0;







		}



		public function update(btn:aLongButton, mmX:Number, mmY:Number)

		{



			mX = mmX;

			mY = mmY;



			if (btn.hitTestPoint(mX,mY,true))

			{



				MovieClip(root).setChildIndex(btn, 90);



				if (btn.scaleX < 1.6)

				{

					btn.scaleX +=  .20;

					btn.scaleY +=  .20;

				}



				if (btn.transform.colorTransform.redOffset <= 0 &&

				  btn.transform.colorTransform.greenOffset <= 0 &&

				  btn.transform.colorTransform.blueOffset <= 0)

				{





					var r:Number = Math.random() * 430 - 175;

					var g:Number = Math.random() * 430 - 175;

					var b:Number = Math.random() * 430 - 175;

					btn.transform.colorTransform = new ColorTransform(1,1,1,1,r,g,b,0);



				}



				if (MovieClip(root).clicked == true)

				{

					if (iFrame == true)

					{

						//button.onPress = function(){

						// getURL("pageToLoad.html", "webFrame");

						//}

						var request:URLRequest = new URLRequest(URLb);

						try

						{

							navigateToURL(request, 'webFrame');// second argument is target

						}

						catch (e:Error)

						{

							trace("Error occurred!");

						}

						MovieClip(root).clicked = false;

					}

					else

					{



						var requestb:URLRequest = new URLRequest(URLb);

						try

						{

							navigateToURL(requestb, '_self');// second argument is target

						}

						catch (e:Error)

						{

							trace("Error occurred!");

						}

						MovieClip(root).clicked = false;



					}

				}





			}

			else

			{



				if (btn.scaleX > 1.0)

				{

					btn.scaleX -=  .1;

					btn.scaleY -=  .1;

				}







				if (btn.transform.colorTransform.redOffset > 0)

				{

					btn.red = btn.transform.colorTransform.redOffset - 10;



				}

				else if (btn.transform.colorTransform.redOffset < 0)

				{

					btn.red = 0;

				}



				if (btn.transform.colorTransform.greenOffset > 0)

				{

					btn.green = btn.transform.colorTransform.greenOffset - 10;



				}

				else if (btn.transform.colorTransform.greenOffset < 0)

				{

					btn.green = 0;

				}



				if (btn.transform.colorTransform.blueOffset > 0)

				{

					btn.blue = btn.transform.colorTransform.blueOffset - 10;



				}

				else if (btn.transform.colorTransform.blueOffset < 0)

				{

					btn.blue = 0;

				}















				btn.transform.colorTransform = new ColorTransform(1,1,1,1,btn.red,btn.green,btn.blue,0);





			}

		}



	}



}