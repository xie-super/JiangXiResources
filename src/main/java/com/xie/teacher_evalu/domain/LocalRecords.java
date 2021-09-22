package com.xie.teacher_evalu.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class LocalRecords {
    public String pdfName;
    public String name;
    public String no;
    public int category;
    public String url;
}
