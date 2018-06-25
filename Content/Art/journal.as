package 
{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;





	public class journal extends MovieClip
	{

		public var URLb:String;

		public var mX:Number;

		public var mY:Number;



		public function journal()
		{

			


		}



		public function update(jou:journal, mmX:Number, mmY:Number)
		{

			mX = mmX;

			mY = mmY;



			if (jou.hitTestPoint(mX,mY,true))
			{
				var newd:journalDot = new journalDot(mX, mY);
				
				MovieClip(root).addChildAt(newd, 13);
				



				if (MovieClip(root).clicked == true)
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



	}



}