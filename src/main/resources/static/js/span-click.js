$('#zhgl').on('click', function (e) {
    $.ajax({
        type: "post",
        url: "/main/userAndPwd",
        async: true,
        dataType: "html",//返回整合HTML
        // dataType: "json",//返回json格式设置
        data: {},
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $("#rightBody").html(data);//刷新整个body页面的html
        },
        error: function () {
            alert("请求失败")
        }
    })
})
$('#imgObj').on('click', function (e) {
    {
        var phone = $("#phoneNumber").val();
        $.ajax({
            url: '/aa/smsXxs',
            type: 'POST',
            data: {phone: phone},
            success: function (data) {
                if (data == "0") {
                    alert("短信发送失败")
                } else {
                    alert("短信发送成功")
                }
            },
            error: function () {
                alert("ajax请求失败")
                console.log(data);
            }
        })
    }
})