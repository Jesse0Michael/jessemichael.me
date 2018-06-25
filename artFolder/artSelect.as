package 

{



	import flash.display.*;

	import flash.events.*;

	import flash.utils.*;

	import flash.geom.*;

	import fl.motion.Color;

	import flash.net.URLRequest;

	import flash.net.navigateToURL;



	public class artSelect extends MovieClip

	{

		

		public var canc:canvas = new canvas();
		public var cana:canvas = new canvas();
		public var cann:canvas = new canvas();
		public var canv:canvas = new canvas();
		public var cana2:canvas = new canvas();
		public var cans:canvas = new canvas();
		
		public var jouj:journal = new journal();
		public var jouo:journal = new journal();
		public var jouu:journal = new journal();
		public var jour:journal = new journal();
		public var joun:journal = new journal();
		public var joua:journal = new journal();
		public var joul:journal = new journal();
		
		public var anc:antiCanvas = new antiCanvas();
		
		public var anj:antiJournal = new antiJournal();


		public var clicked:Boolean;

		public function artSelect()

		{

			canc.x = 19.4;
			canc.y = 25.5;
			canc.URLb = "artFolder/canvas.php";
			canc.gotoAndStop(1);
			addChild(canc);
			cana.x = 19.4;
			cana.y = 25.5;
			cana.URLb = "artFolder/canvas.php";
			cana.gotoAndStop(2);
			addChild(cana);
			cann.x = 19.4;
			cann.y = 25.5;
			cann.URLb = "artFolder/canvas.php";
			cann.gotoAndStop(3);
			addChild(cann);
			canv.x = 19.4;
			canv.y = 25.5;
			canv.URLb = "artFolder/canvas.php";
			canv.gotoAndStop(4);
			addChild(canv);
			cana2.x = 19.4;
			cana2.y = 25.5;
			cana2.URLb = "artFolder/canvas.php";
			cana2.gotoAndStop(5);
			addChild(cana2);
			cans.x = 19.4;
			cans.y = 25.5;
			cans.URLb = "artFolder/canvas.php";
			cans.gotoAndStop(6);
			addChild(cans);
			
			
			jouj.x = 4.5;
			jouj.y = 393.5;
			jouj.URLb = "artFolder/journal.php";
			jouj.gotoAndStop(1);
			addChild(jouj);
			jouo.x = 4.5;
			jouo.y = 393.5;
			jouo.URLb = "artFolder/journal.php";
			jouo.gotoAndStop(2);
			addChild(jouo);
			jouu.x = 4.5;
			jouu.y = 393.5;
			jouu.URLb = "artFolder/journal.php";
			jouu.gotoAndStop(3);
			addChild(jouu);
			jour.x = 4.5;
			jour.y = 393.5;
			jour.URLb = "artFolder/journal.php";
			jour.gotoAndStop(4);
			addChild(jour);
			joun.x = 4.5;
			joun.y = 393.5;
			joun.URLb = "artFolder/journal.php";
			joun.gotoAndStop(5);
			addChild(joun);
			joua.x = 4.5;
			joua.y = 393.5;
			joua.URLb = "artFolder/journal.php";
			joua.gotoAndStop(6);
			addChild(joua);
			joul.x = 4.5;
			joul.y = 393.5;
			joul.URLb = "artFolder/journal.php";
			joul.gotoAndStop(7);
			addChild(joul);
			
			
			anc.x = 0;
			anc.y = 0;
			addChild(anc);
			
			
			anj.x = 0;
			anj.y = 312.5;
			addChild(anj);
			
			



			this.stage.addEventListener( Event.ENTER_FRAME, onUpdate );

			this.stage.addEventListener(MouseEvent.CLICK, onClick);





		}

		private function onUpdate( e:Event ):void

		{



			canc.update(canc, mouseX, mouseY);
			cana.update(cana, mouseX, mouseY);
			cann.update(cann, mouseX, mouseY);
			canv.update(canv, mouseX, mouseY);
			cana2.update(cana2, mouseX, mouseY);
			cans.update(cans, mouseX, mouseY);

			jouj.update(jouj, mouseX, mouseY);
			jouo.update(jouo, mouseX, mouseY);
			jouu.update(jouu, mouseX, mouseY);
			jour.update(jour, mouseX, mouseY);
			joun.update(joun, mouseX, mouseY);
			joua.update(joua, mouseX, mouseY);
			joul.update(joul, mouseX, mouseY);
			

			clicked = false;

			

		}

		public function onClick(evt:MouseEvent):void {

			

			

			clicked = true;

			

		}

	}



}