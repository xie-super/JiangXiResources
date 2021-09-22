import { request } from "./request.js";

$(function () {
    //点击登录按钮
    $('#loginBtn').on('click',function (e) {
        let userId=$('#userId').val();
        let password=$('#password').val();
        loginCheck(userId,password);
    })
    //检查用户名和密码是不是正确
    async function loginCheck(userId,password) {
        const res=await request({url:'/account/checkLogin',data:{userId:userId,password:password},type:'GET'});
        if (res==='fail'){
            alert("用户名或密码错误");
            $('#password').val("");
            $('#password').focus();
        }else {
            $('#loginForm').submit();
        }
    }

    //检查用户名重复
    $('#regUserId').on('keyup',function () {
        let userId=$('#regUserId').val();
        checkUsername(userId);
    })
    async function checkUsername(userId){
        const res=await request({url:'/account/checkUser',data: {userId:userId},type:'GET'});
        if (res==='fail'){
            $('#userExist').text("用户名已存在");
        }else {
            $('#userExist').text("");
        }
    }

    //点击注册按钮
    $('#regBtn').on('click',function (e) {
        let userId=$('#regUserId').val();
        let password=$('#regPassword').val();
        register(userId,password);
    })
    //发起注册
    async function register(userId,password) {
        const res=await request({url:'/account/register',data:{userId:userId,password:password}});
        if (res==='fail'){
            alert("注册失败，请检查输入");
        }else{
            alert("注册成功，请登录");
            $('#regUserId').val("");
            $('#regPassword').val("");
            $('#comPassword').val("");
        }
    }
})