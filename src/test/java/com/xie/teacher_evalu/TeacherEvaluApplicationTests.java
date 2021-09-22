package com.xie.teacher_evalu;

import com.xie.teacher_evalu.domain.StudentAccount;
import com.xie.teacher_evalu.persistence.StudentAccountMapper;
import com.xie.teacher_evalu.service.StudentAccountService;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@MapperScan("com.xie.teacher_evalu.persistence")
class TeacherEvaluApplicationTests {
    @Autowired
    StudentAccountService studentAccountService;
    @Autowired
    StudentAccountMapper studentAccountMapper;


}
