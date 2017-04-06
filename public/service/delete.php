<?php
require_once('db.php');
if($link){
	$newsid = $_POST['newsid'];
	mysqli_query($link,'SET NAMES utf8');
	$sql = "DELETE FROM `newsTable` WHERE `newsTable`.`newsid` = {$newsid}";
	mysqli_query($link,$sql);
}
mysqli_close();
?>