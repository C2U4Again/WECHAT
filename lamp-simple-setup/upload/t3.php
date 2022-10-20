<?php
$conn = mysqli_connect("localhost", "root", "ttanzuOU", "bookdb");
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}


$sql = "SELECT c, c2, c3 FROM lunyu";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {
    // 输出数据
    $arr2 = array();
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["username"]. " " . $row["email"]. "<br>";
	$arr = array("c"=>$row["c"], "c2"=>$row["c2"], "c3"=>$row["c3"]);
        array_push($arr2, $arr);
	//$arrobj->append(array($arr));
    }
        //echo json_encode($arrobj, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);           //这样显示的结果就比较正常了
} else {
    echo "没有数据";
}
	echo json_encode($arr2);
mysqli_close($conn);
?>

