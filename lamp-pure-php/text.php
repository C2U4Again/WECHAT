<?php




$file=$_POST['text'];
//$fname=$_POST['name'];
$fname = 'jilu';
$filename = $fname.'.txt';

if(!empty($_POST['btn'])) {
echo 'updated<br>';
$fh=fopen($filename,'a');
$date_time = date("Y-n-j-G-i-s");
$date_time_seconds = date("U");
fwrite($fh,"\r\n--------".$date_time."--------\r\n");
fwrite($fh,$file);
fclose($fh);
} elseif(!empty($_POST['btn2'])) {
echo 'deleted<br>';
$fp = fopen($filename, "r+");
// clear content to 0 bits
ftruncate($fp, 0);
//close file
fclose($fp);
}


echo "<a href='./jilu.php'>back</a>";

?>
