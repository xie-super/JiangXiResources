package com.xie.teacher_evalu.service;

import com.xie.teacher_evalu.domain.*;
import com.xie.teacher_evalu.persistence.AdminAccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminAccountService {
    @Autowired
    AdminAccountMapper adminAccountMapper;
    public AdminAccount login(String admin_id,String password){
        return adminAccountMapper.getAdminAccountByIdAndPassword(admin_id,password);
    }






}
