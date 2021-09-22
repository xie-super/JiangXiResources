//江西概览
$('#jxgl').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/history',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            $("#contentBody").css("background-color","#5ebdbd")
            $("#contentBody").html(data);
        }
    })
})

$('#gpwh').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/culture',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            //$("#contentBody").css("background-color","#5ebdbd")
            $("#contentBody").html(data);
        }
    })
})
$('#gcml').on('click',function(e) {
    $.ajax({
        type: 'GET',
        url: '/material/collection',
        dataType: "html",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
        //$("#contentBody").css("background-color","#5ebdbd")
        $("#contentBody").html(data);
        }
    })
})
$('#sdfz').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/province',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            $("#contentBody").css("background-color","#738cbd")
            $("#contentBody").html(data);
        }
    })
})
$('#ldfz').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/local',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            $("#contentBody").css("background-color","#889cc4")
            $("#contentBody").html(data);
        }
    })
})
$('#zhishu').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/collectionDetails',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        data:{
            'category':'book'
        },
        success: function(data){
            $("#contentBody").css("background-color","#889cc4")
            $("#contentBody").html(data);
        }
    })
})
$('#qikan').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/material/collectionDetails',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',
        data:{
            'category':'magazine'
        },
        success: function(data){
           // $("#contentBody").css("background-color","#889cc4")
            $("#contentBody").html(data);
        }
    })
})

// 管理员模块
$('#adminzhxx').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/admin/getProfile',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',

        success: function(data){
            // $("#contentBody").css("background-color","#889cc4")
            $("#rightBody").html(data);
        }
    })
})
//新增地方志
$('#uploadResources').on('click',function(e) {
    $.ajax({
        type:'GET',
        url:'/admin/uploadResources',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',

        success: function(data){
            // $("#contentBody").css("background-color","#889cc4")
            $("#rightBody").html(data);
        }
    })
})
//编辑馆藏资料
$("#editCollections").on('click',function(e){

    $.ajax({
        type:'GET',
        url:'/admin/editCollections',
        dataType:"html",
        contentType: 'application/json; charset=utf-8',

        success: function(data){
            // $("#contentBody").css("background-color","#889cc4")
            $("#rightBody").html(data);
        }
    })
})

//账号密码信息管理
$('#zhgl').on('click', function (e) {

    var data1;
    $.ajax({

        type: "GET",
        url: "/account/manageaccount",
        async: true,
        dataType: "json",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data1: JSON.stringify('jsonObject'),
        // contentType: 'application/json; charset=utf-8',

        success: function (data1) {
            $.ajax({
                type: "get",
                url: "/account/accountMessage",
                async: true,
                dataType: "html",//返回整合HTML
                // dataType: "json",//返回json格式设置
                data2: {},
                contentType: 'application/json; charset=utf-8',
                success: function (data2) {
                    $("#rightBody").html(data2);//刷新整个body页面的html
                    $.each(data1, function (commentIndex, comment) {//account,与账号信息

                        $('#s_account').text(comment['student_id']);
                        $('#s_name').text(comment['student_name']);
                        $('#s_academe').text(comment['academe']);
                        $('#s_class_number').text(comment['class_number']);
                        $('#s_major').text(comment['major']);
                        $('#s_sex').text(comment['sex']);
                        $('#s_time_of_enrollment').text(comment['time_of_enrollment']);

                    })


                },
                error: function () {
                    alert(data1.student_id);
                }
            })

        },
        error: function () {
            alert("服务器超时")
        }
    })
});


//课程信息
$('#kcxx').on('click', function (e) {

    $.ajax({

        type: "GET",
        url: "/account/class_json",
        async: true,
        dataType: "json",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data1: JSON.stringify('jsonArray'),
        // contentType: 'application/json; charset=utf-8',

        success: function (data1) {
            $.ajax({
                type: "get",
                url: "/account/showClassList",
                async: true,
                dataType: "html",//返回整合HTML

                data2: {},
                contentType: 'application/json; charset=utf-8',
                success: function (data2) {
                    $("#rightBody").html(data2);//刷新整个body页面的html
                    var html = '';
                    for (var i = 0; i < data1.length; i++) {//循环json对象，拼接tr,td的html
                        html = html + '<tr>';
                        html = html + '<td>' + data1[i].classname + '</td>';
                        html = html + '<td>' + data1[i].teacher_name + '</td>';
                        html = html + '<td>' + data1[i].start_time + '</td>';
                        html = html + '<td>' + data1[i].end_time + '</td>';

                        html = html + '</tr>';
                    }
                    $('#class_list').html(html);

                    /*$.each(data1,function (commentIndex, comment) {//commentIndex:索引下标,
                        alert(data1[1].teacher_name);
                       /!* $('#s_account').text(comment['student_id']);
                        $('#s_name').text(comment['student_name']);
                        $('#s_academe').text(comment['academe']);
                        $('#s_class_number').text(comment['class_number']);
                        $('#s_major').text(comment['major']);
                        $('#s_sex').text(comment['sex']);
                        $('#s_time_of_enrollment').text(comment['time_of_enrollment']);*!/

                    })*/


                },
                error: function () {
                    alert("失败");
                }
            })

        },
        error: function () {
            alert("服务器超时")
        }
    })
});


//课程信息
$('#preeva').on('click', function (e) {
    var data1;
    $.ajax({
        type: "Get",
        url: "/account/json_teacherList",
        async: true,
        dataType: "json",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data1: JSON.stringify('jsonArray'),
        // contentType: 'application/json; charset=utf-8',
        data: {
            'comment_time': 'primary'
        },
        success: function (data1) {
            data = data1;
            if(data.openTime==="notOpen"){
                alert("评卷未开启")
            }
            else {
            $.ajax({
                type: "get",
                url: "/account/selectTeacher",
                async: true,
                dataType: "html",//返回整合HTML

                data2: {},
                contentType: 'application/json; charset=utf-8',
                success: function (data2) {
                    $("#rightBody").html(data2);//刷新整个body页面的html
                    var html = '';

                    for (var i = 0; i < data.length; i++) {//循环json对象，拼接tr,td的html
                        var teacher_name = data[i].teacher_name;
                        var classname=data[i].classname;

                        var str = "<td id=\"" + teacher_name + "\"><a href=\"showEvaluatePage?teacher_name=" + teacher_name +"&classname="+ classname+"\">" + data[i].teacher_name + "<td>" + data[i].classname + "</td></a></td>";

                        html = html + '<tr>';
                        html = html + str;
                        html = html + '</tr>';
                    }
                    $('#teacher_list').html(html);
                },
                error: function () {
                    alert("失败");
                }
            })}

        },
        error: function () {
            alert("服务器超时")
        }
    })
});


//课程信息
$('#mideva').on('click', function (e) {
    var data1;
    $.ajax({

        type: "Get",
        url: "/account/json_teacherList",
        async: true,
        dataType: "json",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data1: JSON.stringify('jsonArray'),
        // contentType: 'application/json; charset=utf-8',
        data: {
            'comment_time': 'medium'
        },
        success: function (data1) {

            data = data1;


            $.ajax({
                type: "get",
                url: "/account/selectTeacher",
                async: true,
                dataType: "html",//返回整合HTML

                data2: {},
                contentType: 'application/json; charset=utf-8',
                success: function (data2) {
                    $("#rightBody").html(data2);//刷新整个body页面的html
                    var html = '';

                    for (var i = 0; i < data.length; i++) {//循环json对象，拼接tr,td的html
                        var teacher_name = data[i].teacher_name;

                        var str = "<td id=\"" + teacher_name + "\"><a href=\"showEvaluatePage?teacher_name=" + teacher_name + "\">" + data[i].teacher_name + "<td>" + data[i].classname + "</td></a></td>";


                        html = html + '<tr>';

                        html = html + str;


                        html = html + '</tr>';
                    }
                    $('#teacher_list').html(html);


                },
                error: function () {
                    alert("失败");
                }
            })

        },
        error: function () {
            alert("服务器超时")
        }
    })
});


//课程信息
$('#fineva').on('click', function (e) {
    var data1;
    $.ajax({

        type: "Get",
        url: "/account/json_teacherList",
        async: true,
        dataType: "json",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data1: JSON.stringify('jsonArray'),
        // contentType: 'application/json; charset=utf-8',
        data: {
            'comment_time': 'final'
        },
        success: function (data1) {

            data = data1;


            $.ajax({
                type: "get",
                url: "/account/selectTeacher",
                async: true,
                dataType: "html",//返回整合HTML

                data2: {},
                contentType: 'application/json; charset=utf-8',
                success: function (data2) {
                    $("#rightBody").html(data2);//刷新整个body页面的html
                    var html = '';

                    for (var i = 0; i < data.length; i++) {//循环json对象，拼接tr,td的html
                        var teacher_name = data[i].teacher_name;

                        var str = "<td id=\"" + teacher_name + "\"><a href=\"showEvaluatePage?teacher_name=" + teacher_name + "\">" + data[i].teacher_name + "<td>" + data[i].classname + "</td></a></td>";


                        html = html + '<tr>';

                        html = html + str;


                        html = html + '</tr>';
                    }
                    $('#teacher_list').html(html);


                },
                error: function () {
                    alert("失败");
                }
            })

        },
        error: function () {
            alert("服务器超时")
        }
    })
});

//提交评价表单
$('#comment_submit').on('click', function (e) {
    var excellent = 0;
    var good = 0;
    var medium = 0;
    var bad = 0;

    var evaluate = new Array();


    for (var i = 1; i <= 10; i++) {
        if ($('#test' + i + ' span').text() === "极好") {
            excellent = excellent + 1;
            evaluate.push(100);
        } else if ($('#test' + i + ' span').text() === "较好") {
            good = good + 1;
            evaluate.push(75);
        } else if ($('#test' + i + ' span').text() === "及格") {
            medium = medium + 1;
            evaluate.push(60);
        } else {
            bad = bad + 1;
            evaluate.push(40);
        }
    }

    $.ajax({

        type: "Get",
        url: "/account/comment_submit",
        async: true,
        traditional: true,//这里设置为true,不然后台接收到的参数会带上[]，导致数据无法正常接收
        dataType:"",
        /*dataType: "json",//返回整合HTML*/
        // dataType: "json",//返回json格式设置
        data: {
            'excellent': excellent,
            'good': good,
            'medium': medium,
            'bad': bad,
            'evaluateArray':evaluate
        },
        contentType: 'application/json; charset=utf-8',
        success: function () {
            alert("提交成功");

        },
        error: function () {
            alert("请查看数据库 ");
        }

    })
});


$('#submitMessageTeacher').on('click', function (e) {
    var leaveText=$('#leaveText').val();

    var data1;
    $.ajax({

        type: "GET",
        url: "/account/messageToDatabase",
        async: true,
        dataType: "",//返回整合JSON
        // dataType: "json",//返回json格式设置
       data:{
            'leaveTo':'teacher',
           'leaveText':leaveText
       },
        // contentType: 'application/json; charset=utf-8',

        success: function () {
            alert("留言成功")

        },
        error: function () {
            alert("留言失败");
        }

    })

});


$('#submitMessageAdmin').on('click', function (e) {
    var leaveText=$('#leaveText').val();
    alert(leaveText);
    var data1;
    $.ajax({

        type: "GET",
        url: "/account/messageToDatabase",
        async: true,
        dataType: "",//返回整合JSON
        // dataType: "json",//返回json格式设置
        data:{
            'leaveTo':'admin',
            'leaveText':leaveText

        },
        // contentType: 'application/json; charset=utf-8',

        success: function () {
            alert("留言成功")

        },
        error: function () {
            alert("留言失败");
        }

    })

});
