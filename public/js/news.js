$(document).ready(function() {

    refresh('精选');

    // 这里要注意这个url的路径
    $('nav a').click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refresh(type);
    })


});

function refresh(type) {

    var $lists = $('article ul');
    $lists.empty();

    $.ajax({
        url: '/News',
        type: 'get',
        dataType: 'json',
        data:{newstype:type},
        success: function(data) {
            console.log(data);
            data.forEach(function(item, index, array) {

                var $list = $("<li></li>").addClass('news-list').prependTo($lists);
                var $newsimg = $("<div></div>").addClass('newsimg').appendTo($list);
                var $img = $("<img>").attr({ "src": item.newsimg, "width": "100%" }).appendTo($newsimg);
                var $newsContent = $("<div></div>").addClass("newscontent").appendTo($list);
                var $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsContent);
                var $p = $("<p></p>").appendTo($newsContent);
                var $newsTime = $('<span></span>').html(moment(item.newstime).format('YYYY-MM-DD HH:MM')).addClass('newstime').appendTo($p);
                var $newssrc = $("<span></span>").html(item.newssrc).addClass('newssrc').appendTo($p);
            })



        }
    })




}
