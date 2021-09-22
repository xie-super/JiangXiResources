package com.xie.teacher_evalu.domain;

import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Data
public class AdminAccount {
    public String admin_id;
    public String password;
}
