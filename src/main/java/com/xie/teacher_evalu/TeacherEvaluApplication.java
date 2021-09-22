package com.xie.teacher_evalu;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@MapperScan("com.xie.teacher_evalu.persistence")
public class TeacherEvaluApplication {

    public static void main(String[] args) {
        SpringApplication.run(TeacherEvaluApplication.class, args);
    }

}
