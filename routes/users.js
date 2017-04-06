var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost', //主机
    port: 3306, //端口号
    user: 'root',
    database: 'News'
});
/* 后台页面路由 */
//获取所有新闻列表
router.get('/getNews', function(req, res, next) {
    connection.query('SELECT * FROM `newsTable` ORDER BY `newsid` DESC', function(err, rows, fields) {
        res.json(rows);
    });
});

//更新
router.post('/update', function(req, res) {

    var newsid = req.body.newsid,
        newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime;

    connection.query('UPDATE `newsTable` SET `newsimg`= ?,`newstime`= ?,`newssrc`= ?,`newstitle`= ?,`newstype`=? WHERE `newsid`= ?', [newsimg, newstime, newstype, newstitle, newstype, newsid], function(err, rows, fields) {
        res.json(rows.changedRows);
    });
});

//模态块取值
// SELECT * FROM `newsTable` ORDER BY `newsid`
router.get('/current', function(req, res) {
    var newsid = req.query.newsid; //因为在admin中发送的是newsid

    connection.query('SELECT * FROM `newsTable` WHERE `newsid`=? ORDER BY `newsid` DESC', [newsid], function(err, rows) {
        res.json(rows);
    });
});

//删除
router.post('/delete', function(req, res) {

    var newsid = req.body.newsid;

    console.log(newsid);
        connection.query('DELETE FROM `newsTable` WHERE `newsTable`.`newsid` = ?', [newsid], function(err, result) {
            console.log(result);
            res.json({"message":"success"});
        });
});

//插入  insert


router.post('/insert', function(req, res) {

	console.log(req.body);
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
        connection.query('INSERT INTO `newsTable` (`newsimg`,`newstime`,`newssrc`,`newstitle`,`newstype`) VALUES (?,?,?,?,?)',[newsimg,newstime,newssrc,newstitle,newstype], function(err, result) {
             if(!err){
             	console.log(result.insertId)
                res.json({"message":"success"});
             }else{
             	console.log(err);
                res.json({"message":"fail"});
             }
        });

})



module.exports = router;
