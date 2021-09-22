package com.xie.teacher_evalu.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Collections {
    String title;
    String ISBN;
    String principal;
    String publisher;
    String date;
    int category;
}
