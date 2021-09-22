package com.xie.teacher_evalu.controller;

import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;

import com.google.gson.JsonArray;
import com.xie.teacher_evalu.domain.*;
import com.xie.teacher_evalu.persistence.StudentAccountMapper;
import com.xie.teacher_evalu.service.AccountService;
import com.xie.teacher_evalu.service.StudentAccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/account")
@SessionAttributes({"account", "student_id", "teacher_name", "comment_time", "teacher_id", "admin_id", "classname"})

public class AccountController {


    @Autowired
    AccountService accountService;



    //    登陆界面
    @GetMapping("/main_login")
    public String loginmain() {
        return "account_system/student_login";
    }

    @GetMapping("/mainPage")
    public String loginmain1() {
        return "account_system/student_main";
    }
    //xie主页面
    @PostMapping("/login")
    public String student_main(String username, String password, Model model) {
        Account account = accountService.getAccount(username,password);
        if (account != null) {
            model.addAttribute("account", account);
            model.addAttribute("username", username);
            return "account_system/student_main";
        } else {
            String message = "账号或者密码不正确";
            model.addAttribute("message", message);
        }
        return "account_system/student_login";
    }

    @GetMapping("/exitSystem")
    public String exitSystem(HttpSession httpSession) {
        httpSession.setAttribute("student_id", null);
        httpSession.setAttribute("student_account", null);
        return "common/404";
    }

    //管理员登录页面
    @GetMapping("/admin")
    public String adminLogin() {
        return "admin_system/adminLogin";
    }




}
