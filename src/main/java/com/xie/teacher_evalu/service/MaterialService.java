package com.xie.teacher_evalu.service;

import com.sun.org.apache.xpath.internal.operations.Bool;
import com.xie.teacher_evalu.domain.Collections;
import com.xie.teacher_evalu.domain.LocalRecords;
import com.xie.teacher_evalu.persistence.MaterialMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaterialService {

    @Autowired
    MaterialMapper materialMapper;
    public List<LocalRecords> getAllKindsOfResources(int category){
        return materialMapper.getAllKindsOfResources(category);
    }
    public List<LocalRecords> getResourcesContent(String pdfName, int category){
        return materialMapper.getResourcesContent(pdfName, category);
    }
    public List<Collections> getCollection(int category){
        return materialMapper.getCollection(category);
    }

    public void storgeResources(int category,String name,int no,String title,String url){
        materialMapper.insertResources(category,name,no,title,url);
    }

    public List<Collections> getAllCollections(){
        return materialMapper.getAllCollections();

    }
    public Boolean delCollection(String isbn){
        if(materialMapper.delCollection(isbn)){
            return true;
        }
        return false;
    }
    public Boolean editCollection(String isbn,String col,String value){
        if(materialMapper.updateCollection(isbn,col,value)){
            return true;
        }
        return false;
    }
   public Boolean addCollections(String title,String isbn,String principal,String publisher,String date,int category){
        if(materialMapper.addCollections(title,isbn,principal,publisher,date,category)){
            return true;
        }
        return false;
   }

}
