<?php
$file_pointer = $_GET["name"];
echo "try delete ".$file_pointer;
echo "<br>"; 
if (!unlink($file_pointer)) {
    echo ("$file_pointer cannot be deleted due to an error");
}
else {
    echo ("$file_pointer has been deleted");
}
?>
