package com.xie.teacher_evalu.persistence;


import com.xie.teacher_evalu.domain.Collections;
import com.xie.teacher_evalu.domain.LocalRecords;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface MaterialMapper {
    List<LocalRecords> getAllKindsOfResources(int category);
    List<LocalRecords> getResourcesContent(String pdfName, int category);
    List<Collections> getCollection(int category);
    List<Collections> getAllCollections();
    Boolean delCollection(String isbn);
    Boolean updateCollection(String isbn,String col,String value);
    Boolean addCollections(String title,String isbn,String principal,String publisher,String date,int category);



    void insertResources(int category,String name,int no,String title,String url);


}
