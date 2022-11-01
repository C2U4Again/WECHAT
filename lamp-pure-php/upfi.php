<?php

print <<< EOT
<html>
<head>
<meta charset="utf-8">
<title>upload</title>
</head>
<body>
<h4>upload file with jpg</h4>
<form action='./upload.php' method=post enctype="multipart/form-data">
    <input type="hidden" name="MAX_FILE_SIZE" value="2000000000">
    <!--input type=file name=userfile size=20-->
    <input type=file name=upfile size=20>
    <input type=submit value='upload'>
</form>

<h4>upload file with zip</h4>
<form action='./upload_zip.php' method=post enctype="multipart/form-data">
    <input type="hidden" name="MAX_FILE_SIZE" value="2000000000">
    <input type=file name=zip_file size=20>
    <input type=submit value='upload'>
</form>

<h4><s>upload file with old name</s></h4>
<form action='./upload_name.php' method=post enctype="">
    <input type="hidden" name="MAX_FILE_SIZE" value="2000000000">
    <input type=file name=userfile size=20>
    <input type=submit value='upload'>
</form>

</body>
</html>

EOT;

?>
