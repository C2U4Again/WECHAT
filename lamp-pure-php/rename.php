<?php
$file_pointer = $_GET["oname"];
$file_new= $_GET["nname"];
echo "try rename ".$file_pointer."to".$file_new;
echo "<br>"; 
if(rename($file_pointer, $file_new)){
	echo "success change name";
}else{
	echo "fail change nmae";
}
?>
