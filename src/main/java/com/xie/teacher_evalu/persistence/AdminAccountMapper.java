package com.xie.teacher_evalu.persistence;

import com.xie.teacher_evalu.domain.*;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Repository
public interface AdminAccountMapper {
    AdminAccount getAdminAccountByIdAndPassword(String admin_id,String password);




}
