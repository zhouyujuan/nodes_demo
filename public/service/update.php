<?php

  require_once('db.php');

  if($link){
  	//连接之后进行插入
  	$newstitle = $_POST['newstitle'];
  	$newstype = $_POST['newstype'];
  	$newsimg = $_POST['newsimg'];
  	$newstime = $_POST['newstime'];
  	$newsid = $_POST['newsid'];
  	$newssrc = $_POST['newstype'];


  	$sql = "UPDATE `newsTable` SET `newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}',`newstitle`='{$newstitle}',`newstype`='{$newstype}' WHERE `newsid`='{$newsid}'";
  	mysqli_query($link,'SET NAMES utf8');
  	$result = mysqli_query($link,$sql);

  	echo json_encode(array('success'=>'ok'));
  }
  // mysqli_close();

?>