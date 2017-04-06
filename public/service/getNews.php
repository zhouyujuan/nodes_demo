<?php

 
require_once('db.php');
   
  if($link){
    if($_GET['newstype']){
      $newstype = $_GET['newstype'];
      //执行成功
            $sql = "SELECT * FROM `newsTable` WHERE `newstype` = '{$newstype}'";
            mysqli_query($link,'SET NAMES utf8');//表格中有中文使用这个进行编码
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

    }else{
              //执行成功
          $sql = 'SELECT * FROM newsTable';
          mysqli_query($link,'SET NAMES utf8');//表格中有中文使用这个进行编码
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

  }else{
    echo json_encode(array('success'=>'none'));
  }
  mysqli_close($link);
?>