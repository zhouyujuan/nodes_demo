var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
   var newstype = req.query.newstype;

   // 建立数据库连接
   var connection = mysql.createConnection({
   	host:'localhost',  //主机
   	port:3306, //端口号
   	user:'root',
   	database:'News'

   });
   connection.connect();
   //读取选择的typeSELECT * FROM `newsTable` ORDER BY `newsid`
   // connection.query('SELECT * FROM `newsTable` WHERE `newstype` = ?',[newstype],function(err,rows,fields){
   // 	  res.json(rows);//向前端返回数据
   // })
    connection.query('SELECT * FROM `newsTable` WHERE `newstype` = ? ORDER BY `newsid` DESC',[newstype],function(err,rows,fields){
        res.json(rows);//向前端返回数据
   })

});

module.exports = router;
