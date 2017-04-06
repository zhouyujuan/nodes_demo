<?php
require_once('db.php');
if($link){

   $newsid = $_GET['newsid'];
		//执行成功
	mysqli_query($link,'SET NAMES utf8');//表格中有中文使用这个进行编码
  	$sql = "SELECT * FROM `newsTable` WHERE `newsid` = {$newsid}";
  	
  	$result = mysqli_query($link,$sql);
  	$sendData = array();
  	while ($row = mysqli_fetch_assoc($result)) {
  		# code...
  		array_push($sendData,array(
  			              'newsimg'=>$row['newsimg'],
  			              'newstime'=>$row['newstime'],
  			              'newssrc'=>$row['newssrc'],
  			              'newstitle'=>$row['newstitle'],
  			              'newsid'=>$row['newsid'],
  			              'newstype'=>$row['newstype'],

  			));
  	}
  	echo json_encode($sendData);
  	
  }
  mysqli_close($link);

?>