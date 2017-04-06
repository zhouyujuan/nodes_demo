//刚刚打开后台界面刷新新闻列表
$(document).ready(function() {
    console.log("1");
    $ref = $("#newsTable tbody");
    refresh("");

    //提交新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //关闭原本的提交动作
        if ($("#newsTitle1").val() === '' || $("#newsimg1").val() === '' || $("#newsTime1").val() === '') {
            if ($("#newsTitle1").val() === '') {

                $("#newsTitle1").parent().addClass("has-error");

            } else {
                $("#newsTitle1").parent().removeClass("has-error");
            }

            if ($("#newsimg1").val() === '') {

                $("#newsimg1").parent().addClass("has-error");

            } else {
                $("#newsimg1").parent().removeClass("has-error");
            }

            if ($("#newsTime1").val() === '') {

                $("#newsTime1").parent().addClass("has-error");
            } else {
                $("#newsTime1").parent().removeClass("has-error");
            }

            if ($("#newssource1").val() === '') {

                $("#newssource1").parent().addClass("has-error");

            } else {

                $("#newssource1").parent().removeClass("has-error");
            }

            alert("请填充完整在提交");
            return;
        } else {
            //提交
            var jsonNews = {
                newstype: $('#newsType1').val(),
                newstitle: $('#newsTitle1').val(),
                newsimg: $('#newsimg1').val(),
                newstime: $('#newsTime1').val(),
                newssrc: $('#newssource1').val()
            };

            $.ajax({
                url: 'admin/insert',
                type: 'post',
                data: jsonNews,
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    refresh("");
                     // $("#newsType1").attr("value","");
                     // $('#newsTitle1').attr("value","");
                     // $('#newsimg1').attr("value","");
                     // $('#newsTime1').attr("value","");
                     // $('#newssource1').attr("value","");
                     $('#newsType1').val("精选");
                     $('#newsTitle1').val("");
                     $('#newsimg1').val("");
                     $('#newsTime1').val("");
                     $('#newssource1').val("");
                   
                    
                }
            })
        }
    });

    //删除新闻的功能
    var deleteId = null;
    $ref.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
        console.log(deleteId);
    });

    $('#deleteModal #conformDel').click(function(e) {

        if (deleteId) {
            $.ajax({
                url: 'admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refresh("");
                }

            })
        }
    });

    // 更新
    var upid = null;
  
    $ref.on('click', '.btn-primary', function(e) {

        $('#updataModal').modal('show');
        upid = $(this).parent().prevAll().eq(4).html();
        console.log("uid",upid);
        $.ajax({
        	url:'admin/current',
        	type:'get',
        	data:{newsid:upid},
        	dataType:'json',
        	success:function(data){
        		console.log(data);
        		$('#newsTitle2').val(data[0].newstitle);
        		$('#newsType2').val(data[0].newstype);
        		$('#newsimg2').val(data[0].newsimg);
        		$('#newssource2').val(data[0].newssrc);
        		var uptime = data[0].newstime.split('T')[0];
        		$('#newsTime2').val(uptime);
        	}
        })

    });

    $('#updataModal #updataInfo').click(function(e) {
         console.log("11");

        $.ajax({
            url: 'admin/update',
            type: 'post',
            data: { 
            	newsid: upid,
            	newstitle:$('#newsTitle2').val(),
            	newstype:$('#newsType2').val(),
            	newsimg:$('#newsimg2').val(),
            	newstime:$('#newsTime2').val()
            	 },
            dataType:'json',
            success: function(data) {
                console.log('更新成功');
                $('#updataModal').modal('hide');
                refresh("");
            }

        })

    })





    //表格获取新闻列表
    function refresh(type) {
        $ref.empty();
        $.ajax({
            url: 'admin/getNews',
            type: 'get',
            dataType: 'json',
            data:{newstype:type},
            success: function(data) {
                console.log(data);

                data.forEach(function(item, index, array) {
                    console.log(index, item.newsid);
                    var $tdid = $('<td>').html(item.newsid);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    // var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(moment(item.newstime).format('YYYY-MM-DD HH:MM'));
                    var $tdctrl = $('<td>');
                    var $btnupdata = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndele = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdata);
                    $tdctrl.append($btndele);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdctrl);
                    $ref.append($tRow);
                })



            }
        })
    }
})
