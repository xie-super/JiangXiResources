package com.xie.teacher_evalu.persistence;

import com.xie.teacher_evalu.domain.Account;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountMapper {
    Account getAccountByUsernameAndPassword(String username,String password);

}
