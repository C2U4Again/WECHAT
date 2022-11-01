<?php
echo "new path finally added";
echo "<br>updated lol<br>";
echo time();
echo "<br>updated lol<br>";
$path    = './upload';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
foreach($files as $myfile){
  echo "<td><a href='$path/$myfile'>$myfile</a></td>";
  echo "<br>$path/$myfile";
  echo "<br>";
  echo "<br>";
}

?>
