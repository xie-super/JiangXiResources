package com.xie.teacher_evalu.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Account {

    public String username;
    public String password;
}
