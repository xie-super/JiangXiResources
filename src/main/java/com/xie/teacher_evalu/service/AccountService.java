package com.xie.teacher_evalu.service;

import com.xie.teacher_evalu.domain.Account;
import com.xie.teacher_evalu.persistence.AccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    AccountMapper accountMapper;
    public Account getAccount(String username, String password) {
        return accountMapper.getAccountByUsernameAndPassword(username,password);
    }

}
