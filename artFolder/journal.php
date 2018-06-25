
<style>

#wrapper {

position: relative;

width: 80%;

height: 100%;


margin: 0 auto;

}

#spread{

margin:auto;
text-align:center;
width: 90%;

height: 100%;
overflow-y:auto;






}


#imag{
	
margin: 0 auto;

border-color: #000000;

	border-width: 5px;
	
	border-style: solid;



}


html, body {

	margin:auto;
	height:99%;
	width:100%;

	background: #F3F3F3;
overflow-x:hidden;
text-align:center;
}



</style>

<script type="text/javascript" language="javascript" src="lytebox.js"></script>
<link rel="stylesheet" href="lytebox.css" type="text/css" media="screen" />



<?php



function spitImgs($dir)

{


	echo "<div id = 'spread'>";

 	$sorted = array();

    if (is_dir($dir)) {

        if ($dh = opendir($dir)) {

            while (false !== ($file = readdir($dh))) { 

			 	if ($file != "." AND $file != ".."){

            		 $sorted[] = $file;

         		}

			}

		closedir($dh);
		}
	}

 	arsort($sorted);

 	//$arrSize = count($sorted);

	foreach($sorted as $myImg)
	{
 		echo "<a href='http://jessemichael.me/jessemichael/artFolder/Book/medium/$myImg' target='_top' class='lytebox' data-lyte-options='group:Book'><img id = 'imag' width='150' height='150' src='$dir/$myImg' ></a> ";
				
	


    }

 

    $return .= '';

    return $return;

 

}



$dir1 = spitImgs("Book/thumbnails");

 

echo $dir1;
echo "</div>";



?>



 

