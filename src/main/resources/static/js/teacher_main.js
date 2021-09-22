$('#primaryComment').on('click', function (e) {


    var data1;
    $.ajax({

        type: "GET",
        url: "/teacher/commentData",
        async: true,
        dataType: "html",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data:{
            'comment_time':'primary'
        },
        // contentType: 'application/json; charset=utf-8',

        success: function (data) {
            $('#rightBody').html(data)

        },
        error: function () {
            alert("失败");
        }

    })

});
$('#midmaryComment').on('click', function (e) {


    var data1;
    $.ajax({

        type: "GET",
        url: "/teacher/commentData",
        async: true,
        dataType: "html",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data:{
            'comment_time':'medium'
        },
        // contentType: 'application/json; charset=utf-8',

        success: function (data) {
            $('#rightBody').html(data)

        },
        error: function () {
            alert("失败");
        }

    })

});
$('#finmaryComment').on('click', function (e) {


    var data1;
    $.ajax({

        type: "GET",
        url: "/teacher/commentData",
        async: true,
        dataType: "html",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data:{
            'comment_time':'final'
        },
        // contentType: 'application/json; charset=utf-8',

        success: function (data) {
            $('#rightBody').html(data)

        },
        error: function () {
            alert("失败");
        }

    })

});

$('#commentComparison').on('click', function (e) {



    $.ajax({

        type: "GET",
        url: "/teacher/commentData",
        async: true,
        dataType: "html",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data:{
            'comment_time':'comparison'
        },
        // contentType: 'application/json; charset=utf-8',

        success: function (data) {
            $('#rightBody').html(data)

        },
        error: function () {
            alert("失败");
        }

    })

});
$('#leaveMessage').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/teacher/showLeaveMessageOfTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {

        },
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $("#rightBody").html(data);//刷新整个body页面的html
        },
        error: function () {
            alert("请求失败")
        }
    })
});
