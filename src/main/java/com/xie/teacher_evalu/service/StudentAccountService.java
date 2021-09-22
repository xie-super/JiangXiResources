package com.xie.teacher_evalu.service;

import com.xie.teacher_evalu.domain.*;
import com.xie.teacher_evalu.persistence.StudentAccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentAccountService {


    @Autowired
    private StudentAccountMapper accountMapper;



    public StudentAccount login(String student_id, String password) {


        return accountMapper.getAccountByStudent_idAndPassword(student_id,password);

    }







}
