//初次问卷数据
$('#primaryComment').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'primary',
            'method':'indistinct'
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

$('#primaryCommentscore').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'primary',
            'evaluateDetails':'true'
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
$('#midmaryComment').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'medium'
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
$('#midmaryCommentscore').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'medium',
            'evaluateDetails':'true'
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
$('#finmaryComment').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'final'
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
$('#finmaryCommentscore').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'final',
            'evaluateDetails':'true'
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
$('#commentComparison').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'comparison'
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

$('#zhexiantu').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacher",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {
            'comment_time':'zhexiantu'
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
$('#selectTeacherToCompare').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/selectTeacherToCompare",
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





$('#leaveMessage').on('click', function (e) {
    $.ajax({
        type: "GET",
        url: "/admin/showLeaveMessageOfAdmin",
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



