package com.xie.teacher_evalu.persistence;


import com.xie.teacher_evalu.domain.*;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface StudentAccountMapper {
    StudentAccount getAccountByStudent_idAndPassword(String student_id,String password);









}

