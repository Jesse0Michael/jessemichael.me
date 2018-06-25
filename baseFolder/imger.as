package 

{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;



	public class imger extends MovieClip

	{

		public var pic:imgerSym = new imgerSym();



		public function imger()

		{



			pic.x = 50;

			pic.y = 50;

			var f:Number = Math.round(Math.random() * 3 + 1);

			pic.gotoAndStop(f);

			addChild(pic);









			this.stage.addEventListener( Event.ENTER_FRAME, onUpdate );







		}

		private function onUpdate( e:Event ):void

		{



			if (this.pic.hitTestPoint(mouseX,mouseY,true))

			{





				if (this.pic.transform.colorTransform.redOffset >= 0 &&

				  this.pic.transform.colorTransform.greenOffset >= 0 &&

				  this.pic.transform.colorTransform.blueOffset >= 0)

				{





					var r:Number = Math.random() * 226 *-1;

					var g:Number = Math.random() * 226 *-1;

					var b:Number = Math.random() * 226 *-1;

					this.pic.transform.colorTransform = new ColorTransform(1,1,1,1,r,g,b,0);



				}



			}

			else

			{









				if (this.pic.transform.colorTransform.redOffset < 0)

				{

					this.pic.red = this.pic.transform.colorTransform.redOffset + 10;



				}

				else if (this.pic.transform.colorTransform.redOffset > 0)

				{

					this.pic.red = 0;

				}



				if (this.pic.transform.colorTransform.greenOffset < 0)

				{

					this.pic.green = this.pic.transform.colorTransform.greenOffset + 10;



				}

				else if (this.pic.transform.colorTransform.greenOffset > 0)

				{

					this.pic.green = 0;

				}



				if (this.pic.transform.colorTransform.blueOffset < 0)

				{

					this.pic.blue = this.pic.transform.colorTransform.blueOffset + 10;



				}

				else if (this.pic.transform.colorTransform.blueOffset > 0)

				{

					this.pic.blue = 0;

				}















				this.pic.transform.colorTransform = new ColorTransform(1,1,1,1,this.pic.red,this.pic.green,this.pic.blue,0);





			}



		}







	}

}