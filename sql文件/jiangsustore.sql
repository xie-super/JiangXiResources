/*
Navicat MySQL Data Transfer

Source Server         : smarthome
Source Server Version : 50733
Source Host           : 150.158.173.160:3306
Source Database       : jiangsustore

Target Server Type    : MYSQL
Target Server Version : 50733
File Encoding         : 65001

Date: 2021-09-22 14:04:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `username` varchar(20) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('2507062649', '123456');

-- ----------------------------
-- Table structure for admin_account
-- ----------------------------
DROP TABLE IF EXISTS `admin_account`;
CREATE TABLE `admin_account` (
  `admin_id` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_account
-- ----------------------------
INSERT INTO `admin_account` VALUES ('admin1', '123456789');

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `title` varchar(100) NOT NULL,
  `ISBN` varchar(100) NOT NULL,
  `principal` varchar(20) DEFAULT NULL,
  `publisher` varchar(30) DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `category` int(1) NOT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('新疆地方史', '45435', '解梦华', '新华出版社', '2009年', '0');
INSERT INTO `collection` VALUES ('中铁隧道集团职工大学', '978-7-113-08945-0', '《中铁隧道集团职工大学志》编纂委员会编', '中国铁道出版社', '2008年', '0');
INSERT INTO `collection` VALUES ('中国国际航空股份有限公司志', '978-7-80110-857-9', '胡栓良主编', '中国民航出版社', '2008年', '0');
INSERT INTO `collection` VALUES ('dfv', 'efrefer', 'efv', 'sfdsv,sdfvsd', null, '0');
INSERT INTO `collection` VALUES ('孟兆臣主编', '中国近代各地小报汇刊．第一辑97．第七十三册——第九十七册：新世界二十五	', null, null, null, '1');
INSERT INTO `collection` VALUES ('孟兆臣主编；安艳梅辑主编', '中国近代各地小报汇刊．第二辑7．第一册－第三十册：大世界7	', null, null, null, '1');

-- ----------------------------
-- Table structure for local_records
-- ----------------------------
DROP TABLE IF EXISTS `local_records`;
CREATE TABLE `local_records` (
  `pdfName` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `no` int(5) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `category` int(1) DEFAULT NULL,
  PRIMARY KEY (`pdfName`,`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of local_records
-- ----------------------------
INSERT INTO `local_records` VALUES ('南昌市志(壹)', '封面', '1', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%B0%81%E9%9D%A2.pdf', '1');
INSERT INTO `local_records` VALUES ('南昌市志(壹)', '序', '2', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%BA%8F.pdf', '1');
INSERT INTO `local_records` VALUES ('南昌市志(壹)', '凡例', '3', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%87%A1%E4%BE%8B.pdf', '1');
INSERT INTO `local_records` VALUES ('江西省', '序', '1', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%BA%8F.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省地方志', '序', '1', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%BA%8F.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '扉页', '2', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E6%89%89%E9%A1%B5.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '序', '3', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%BA%8F.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '凡例', '4', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%87%A1%E4%BE%8B.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '先秦', '5', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%85%88%E7%A7%A6.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '西汉', '6', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E8%A5%BF%E6%B1%89.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '东汉', '7', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E4%B8%9C%E6%B1%89.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '三国 吴', '8', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E4%B8%89%E5%9B%BD%20%E5%90%B4.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '隋', '9', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E9%9A%8B.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '唐', '10', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%94%90.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '北宋', '11', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%8C%97%E5%AE%8B.pdf', '0');
INSERT INTO `local_records` VALUES ('江西省大事记', '南宋', '12', 'https://yuntu-1305198966.cos.ap-shanghai.myqcloud.com/jiangxi/province1/%E5%8D%97%E5%AE%8B.pdf', '0');

-- ----------------------------
-- Table structure for student_account
-- ----------------------------
DROP TABLE IF EXISTS `student_account`;
CREATE TABLE `student_account` (
  `student_id` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_account
-- ----------------------------
INSERT INTO `student_account` VALUES ('20192501347', '123456');
INSERT INTO `student_account` VALUES ('20192501343', '123456');
INSERT INTO `student_account` VALUES ('20192501344', '123456');
INSERT INTO `student_account` VALUES ('20192501348', '123456');
