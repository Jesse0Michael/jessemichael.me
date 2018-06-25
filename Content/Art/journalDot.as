package 
{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;





	public class journalDot extends MovieClip
	{

		public var URLb:String;

		public var mX:Number;

		public var mY:Number;
		
		public var red:Number;

		public var green:Number;

		public var blue:Number;
		
		public var thisAlpha:Number;
		
		public var fadeDelay:Number;
		
		public var fadeReacher:Number;



		public function journalDot( mmX:Number, mmY:Number)
		{
			
			fadeDelay = 30;
			
			fadeReacher = 0;
			
			
			mX = mmX;

			mY = mmY;
			
			this.x = mX;
			this.y = mY;
			
			var f:Number = Math.round(Math.random() * 180);
			this.rotation = f;
			
			
			var r:Number = Math.round(Math.random() * 255);
			var g:Number = Math.round(Math.random() * 255);
			var b:Number = Math.round(Math.random() * 255);
			
			red = r;
			green = g;
			blue = b;
			thisAlpha = 0;
			
			
			
			this.transform.colorTransform = new ColorTransform(1,1,1,1,this.red,this.green,this.blue,this.thisAlpha);
			
			this.addEventListener( Event.ENTER_FRAME, onUpdate );
		}



		public function onUpdate( e:Event ):void

		{

				if(fadeReacher < fadeDelay)
				{
					fadeReacher ++;
				}
				else
				{
					
					thisAlpha -= 5;
					
					trace(thisAlpha);
					
				}

				if(thisAlpha < -300)
				{
					deleteSelf();
					
				}
			

				this.transform.colorTransform = new ColorTransform(1,1,1,1,this.red,this.green,this.blue,this.thisAlpha);
				
				

		}
		
		public function deleteSelf()
		{
			
			this.removeEventListener( Event.ENTER_FRAME, onUpdate );
			MovieClip(root).removeChild(this);
			
			
		}



	}



}