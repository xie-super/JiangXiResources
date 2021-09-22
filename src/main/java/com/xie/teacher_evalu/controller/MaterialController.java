package com.xie.teacher_evalu.controller;

import com.xie.teacher_evalu.domain.Collections;
import com.xie.teacher_evalu.domain.LocalRecords;
import com.xie.teacher_evalu.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Controller
@RequestMapping("/material")
public class MaterialController {

    @Autowired
    MaterialService materialService;
    @GetMapping("/mainPage")
    public String getMainPage(){
        return "account_system/student_main";
    }
    @GetMapping("/history")
    public String getJiangXiHistory(){
        return "material_system/history";
    }

    @GetMapping("/culture")
    public String getGanPoCulture(){
        return "material_system/culture";
    }

    @GetMapping("/province")
    public String getPrinvinceHistory(Model model){

        // 0 代表省地方志， 1 代表市地方志
        List<LocalRecords> localRecordsList= materialService.getAllKindsOfResources(0);
        model.addAttribute("localRecordsList",localRecordsList);
        return "material_system/province";
    }
    @GetMapping("/local")
    public String getLocalHistory(Model model){
        List<LocalRecords> localRecordsList= materialService.getAllKindsOfResources(1);
        model.addAttribute("localRecordsList",localRecordsList);
        return "material_system/local";
    }
    @GetMapping("/resourcesContent")
    public String getResourcesContent(String pdfName, int category, Model model){
        List<LocalRecords> recordsList= materialService.getResourcesContent(pdfName,category);
        model.addAttribute("localRecordsList",recordsList);

        return "material_system/localResources";
     }
    @GetMapping("/collection")
    public String getColection(){
        return "material_system/collection";
     }

     @GetMapping("/collectionDetails")
    public String getCollectionDetails(String category,Model model){
         List<Collections> collectionList = new ArrayList<>();
         //志书
        if(category.startsWith("book")){
            collectionList= materialService.getCollection(0);
        }//期刊
        else{
            collectionList = materialService.getCollection(1);
        }
        model.addAttribute("collectionList",collectionList);
         return "material_system/collectionDetails";
     }
     @GetMapping("/getAllCollections")
     @ResponseBody
     @CrossOrigin(allowedHeaders = "*",allowCredentials = "true")
    public LinkedHashMap<String,Object> getAllCollections(){
        List<Collections> collectionsList = materialService.getAllCollections();
        LinkedHashMap<String,Object> linkedHashMap = new LinkedHashMap<>();

        linkedHashMap.put("code",0);
        linkedHashMap.put("msg","");
        linkedHashMap.put("count",10);
        linkedHashMap.put("data",collectionsList);

        return linkedHashMap;

     }
     @GetMapping("/delCollection")
     @ResponseBody
    public Boolean delCollention(String isbn){
        if(materialService.delCollection(isbn))
        {
            return true;
        }
       return false;
     }
     @GetMapping("/editCollection")
    @ResponseBody
    public Boolean editCollection(String isbn,String col,String value){
        if(materialService.editCollection(isbn,col,value)){
            return true;
        }else{
            return false;
        }
     }
     //添加志书或期刊
     @PostMapping("/addCollections")
    public String addCollections(String title,String isbn,String principal,String publisher,String date,String category,Model model){
        int flag;
        if(category.startsWith("志书")){
            flag = 0;
        }else{
            flag = 1;
        }
        if(materialService.addCollections(title,isbn,principal,publisher,date,flag)){
            model.addAttribute("addMessage","添加成功");
        }else {
            model.addAttribute("addMessage","添加失败");
        }

         return "admin_system/editCollections";
     }

}
