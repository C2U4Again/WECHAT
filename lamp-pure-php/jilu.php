<?php

print <<< EOT
<html>
<head>
<meta charset="utf-8">
<title>upload</title>
</head>
<body>

<style>
 textarea{
 resize: none;
 border: 2px solid #000;
 outline: none;
 }
 input{
 margin-top: 15px;
 width: 80px;
 height: 30px;
 border: none;
 outline: none;
 color: #fff;
 background-color: orange;
 }
</style>
<form action="text.php" method="post">
 <textarea name="text" id="" cols="100" rows="10"></textarea>
 <div><input type="submit" name="btn" value="update">&nbsp;&nbsp;<input type="submit" name="btn2" value="clear"></div>

</form>

</body>
</html>

EOT;


$myFile = file("jilu.txt");
for ($index = 0; $index < count($myFile); $index++) {
print($myFile[$index] . "<BR>");
}

?>
