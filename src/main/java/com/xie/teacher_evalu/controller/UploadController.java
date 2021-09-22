package com.xie.teacher_evalu.controller;



import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.model.PutObjectRequest;
import com.qcloud.cos.model.PutObjectResult;
import com.qcloud.cos.region.Region;
import com.xie.teacher_evalu.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Controller
@RequestMapping("/upload/")
public class UploadController {

    @Autowired
    private MaterialService materialService;
    //密钥请前往腾讯云后台查询
    private static String secretId="AKIDqRkZEeDDJEvO49orY9VhdwIWeZO0OBrI";
    private static String secretKey="lJSUG9D5g2VyDcmJisAG52zmR0NgmdTs";
    private static String bucketName="yuntu-1305198966";
    private static String RegionName="ap-shanghai";
    private static String preUrl = "https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1";
    /**
     * 文件上传
     * @param file
     * @param session
     * @return
     */

    @RequestMapping(value = "upload_image_cos.do",method = RequestMethod.POST)
    @ResponseBody
    public Object Upload(@RequestParam(value = "file") MultipartFile file, HttpServletRequest request, HttpSession session){
        if(file == null){
            return new UploadMsg(0,"文件为空",null);
        }
        String title = request.getParameter("title");
        String name = request.getParameter("name");
        String category = request.getParameter("category");
        int flag;
        //判断地方志分类
        if(category.startsWith("省")){
            flag = 0;
        }else{
            flag = 1;
        }

        int no = Integer.parseInt(request.getParameter("no"));
        System.out.println(title+name+category+no);
        //获取文件上传原名
        String oldFileName = file.getOriginalFilename();
        String urlEncoder = new String();

        int index = oldFileName.indexOf(".");
        String eName = oldFileName.substring(0,index);
        try{
            urlEncoder = java.net.URLEncoder.encode(eName,"utf-8");
        }catch (Exception e){
            System.out.println(e);
        }
        urlEncoder+=oldFileName.substring(oldFileName.lastIndexOf("."));
        urlEncoder = preUrl+"/"+urlEncoder;
        //通过UUID随机生成新的文件名/
        String newFileName = oldFileName;

        // 1 初始化用户身份信息(secretId, secretKey)
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        // 2 设置bucket的区域, COS地域的简称请参照 https://cloud.tencent.com/document/product/436/6224
        ClientConfig clientConfig = new ClientConfig(new Region(RegionName));
        // 3 生成cos客户端
        COSClient cosclient = new COSClient(cred, clientConfig);
        // bucket的命名规则为{name}-{appid} ，此处填写的存储桶名称必须为此格式
        String bucketName = this.bucketName;

        // 简单文件上传, 最大支持 5 GB, 适用于小文件上传, 建议 20 M 以下的文件使用该接口
        // 大文件上传请参照 API 文档高级 API 上传
        File localFile = null;
        try {
            //创建临时文件
            localFile = File.createTempFile("temp",null);
            file.transferTo(localFile);
            // 指定要上传到 COS 上的路径
            String key = "/jiangxi/province1/"+newFileName;
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, localFile);
            PutObjectResult putObjectResult = cosclient.putObject(putObjectRequest);
            storgeResources(flag,name,no,title,urlEncoder);
            return new UploadMsg(0,"上传成功", newFileName);

        } catch (IOException e) {
            return new UploadMsg(-1,e.getMessage(),null);
        } finally {
            // 关闭客户端(关闭后台线程)
            cosclient.shutdown();
        }
    }


    private void storgeResources(int category,String name,int no, String title,String url){
        materialService.storgeResources(category,name,no,title,url);
    }
    //自定义JSON消息体
    private class UploadMsg {
        public int code;
        public String msg;
        public String path;

        public UploadMsg() {
            super();
        }

        public UploadMsg(int code, String msg,String path){
            this.code =code;
            this.msg =msg;
            this.path =path;
        }
    }

}


