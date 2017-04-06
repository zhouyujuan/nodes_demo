<?php
  require_once('db.php');

  if($link){
  	//连接之后进行插入
  	$newstitle = $_POST['newstitle'];
  	$newstype = $_POST['newstype'];
  	$newsimg = $_POST['newsimg'];
  	$newstime = $_POST['newstime'];
  	$newssrc = $_POST['newssrc'];

// 注意这里的`这个符号
  	$sql = "INSERT INTO `newsTable` (`newsimg`,`newstime`,`newssrc`,`newstitle`,`newstype`) VALUES ('{$newsimg}','{$newstime}','{$newssrc}','{$newstitle}','{$newstype}')";
  	mysqli_query($link,'SET NAMES utf8');
  	$result = mysqli_query($link,$sql);

  	echo json_encode(array('success'=>'ok'));
  }
 
?>

