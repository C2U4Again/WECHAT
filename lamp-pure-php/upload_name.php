<?php
// 允许上传的图片后缀
$allowedExts = array("gif", "jpeg", "jpg", "png", "zip");
$temp = explode(".", $_FILES["userfile"]["name"]);
echo $_FILES["userfile"]["size"];
$extension = end($temp);     // 获取文件后缀名

/*
*.csv	text/csv
*.doc	application/msword
*.ppt	application/vnd.ms-powerpoint
*.jpeg	image/jpeg
*.jpg	image/jpeg
*.mp3	audio/mpeg
*.mp4	audio/mp4, video/mp4
*.pdf	application/pdf
*.png	image/png
*.txt	text/plain
*.zip	aplication/zip
*/
 
if ((($_FILES["userfile"]["type"] == "image/gif")
|| ($_FILES["userfile"]["type"] == "image/jpeg")
|| ($_FILES["userfile"]["type"] == "image/jpg")
|| ($_FILES["userfile"]["type"] == "image/pjpeg")
|| ($_FILES["userfile"]["type"] == "image/x-png")
|| ($_FILES["userfile"]["type"] == "image/png")
|| ($_FILES["userfile"]["type"] == "application/zip")
|| ($_FILES["userfile"]["type"] == "text/plain"))
&& ($_FILES["userfile"]["size"] < 204800)   // 小于 200 kb
&& in_array($extension, $allowedExts))
{
    if ($_FILES["userfile"]["error"] > 0)
    {
        echo "错误：: " . $_FILES["userfile"]["error"] . "<br>";
    }
    else
    {
        echo "name: " . $_FILES["userfile"]["name"] . "<br>";
        echo "type: " . $_FILES["userfile"]["type"] . "<br>";
        echo "size: " . ($_FILES["userfile"]["size"] / 1024) . " kB<br>";
        echo "temp: " . $_FILES["userfile"]["tmp_name"] . "<br>";
        
        // 判断当前目录下的 upload 目录是否存在该文件
        // 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
        if (userfile_exists("upload/" . $_FILES["userfile"]["name"]))
        {
            echo $_FILES["userfile"]["name"] . " 文件已经存在。 ";
        }
        else
        {
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_userfile($_FILES["userfile"]["tmp_name"], "upload/" . $_FILES["userfile"]["name"]);
            echo "the userfile stored at: " . "upload/" . $_FILES["userfile"]["name"];
        }
    }
}
else
{
    echo "非法的文件格式";
}
?>
