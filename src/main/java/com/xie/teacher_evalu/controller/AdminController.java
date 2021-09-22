package com.xie.teacher_evalu.controller;


import com.xie.teacher_evalu.domain.*;
import com.xie.teacher_evalu.persistence.AdminAccountMapper;
import com.xie.teacher_evalu.service.AdminAccountService;
import com.xie.teacher_evalu.service.StudentAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
@SessionAttributes({"adminAccount", "admin_id","comment_time","evaluateDetails"})
public class AdminController {
    @Autowired
    private AdminAccountService adminAccountService;
    @Autowired
    private StudentAccountService studentAccountService;

    @Autowired
    AdminAccountMapper adminAccountMapper;
    @PostMapping("/login")
    public String login(Model model,String admin_id,String password){
        AdminAccount account=adminAccountService.login(admin_id,password);
        model.addAttribute("message","请输入正确的账号和密码");
        if(account!=null) {
            model.addAttribute("adminAccount", account);
            model.addAttribute("admin_id",admin_id);
            return "admin_system/admin_main";
        }
        else{
            String message="请输入正确的账号和密码";
            model.addAttribute("message",message);

        }
        return "admin_system/adminLogin";

    }
    @GetMapping("/mainPage")
    public String returnMainPage(){
        return "admin_system/admin_main";
    }
    @GetMapping("/getProfile")
    public String getProfile(){
        return "admin_system/profile";
    }

    //跳转新增地方志界面
    @GetMapping("/uploadResources")
    public String uploadResources(){
        return "admin_system/uploadResources";
    }

    @GetMapping("/editCollections")
    public String editCollections(Model model){
        model.addAttribute("addMessage","");
        return "admin_system/editCollections";
    }














}
