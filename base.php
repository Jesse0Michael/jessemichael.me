<style type="text/css">





html, body {

	text-align:center;

	margin:auto;

	height:100%;

	width:100%;

	overflow-y:none;



	padding:0px;



	background: #F3F3F3;



}





ul {

	

	list-style-type: none;



}





#blog {



	position: relative;



	margin: auto;



	left: 0%;



	float: left;



	width: 100%;



	height: 100%;



	background-color: #F3F3F3;



	overflow-y:scroll;

	

}




a { 
	
		color: #666;
	  
}


#discript {

		  

	font-family: calibri;

		

	font-size: 24px;



	font-style: bold;



	color: #3A3A3A;  

		

}





</style>















<?php







   // Include the file that does all the work







   include("rssreader.php");





   // This is the URL to the actual RSS feed. Change this value



   // if you want to show a different feed.







   $url="http://jesse-michael.blogspot.com/feeds/posts/default?alt=rss";















   // Create an instance of the rssFeed object, passing it







   // the URL of the feed







   $rss=new rssFeed($url);















   // If there was an error getting the data







   if($rss->error){







      // Show the error







      print "<h1>Error:</h1>\n<p><strong>$rss->error</strong></p>";







   }else{











	//echo"<div id = 'wrapper'>";



	echo"<div id = 'blog'>";







      // Otherwise, we have the data, so we call the parse method







      $rss->parse();











      // Show the news stories







      $rss->showStories();



	  echo"</div>";



	  //echo"<div id = 'wedge'>";



	  //echo"</div>";



	  //echo"<div id = 'rightwapper'>";



	  //echo"<div id = 'twits'>";



	  



	  //echo"<span id='discript'>Twitter</span>";



	  //echo"<div id = 'twitter-box'>";



	  



	  //echo"Loading...";



	  



	  //echo"</div>";



	  //echo"</div>";



	  //echo"<div id = 'new'>";



	  



	  //echo"<span id='discript'>Inspiration</span><p>";



	  



	  

	  

	  //$dir1 = randImg("artFolder/Canvas/large");







 	  //echo "<img  id = 'rando' src = 'artFolder/Canvas/thumbnails/$dir1'>";



	  



	  



	  //echo"</div>";



	  //echo"</div>";



	  //echo"</div>";



	  





   }







function randImg($dir)



{



	$files = scandir($dir);



	



	return $files[array_rand($files, 1)];



	



}



  







?>























