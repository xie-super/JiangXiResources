/*
Navicat MySQL Data Transfer

Source Server         : login
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : teacher_evaluation

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-04-03 13:18:08
*/

SET FOREIGN_KEY_CHECKS=0;

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
INSERT INTO `admin_account` VALUES ('admin1', '456789');

-- ----------------------------
-- Table structure for class_list_message
-- ----------------------------
DROP TABLE IF EXISTS `class_list_message`;
CREATE TABLE `class_list_message` (
  `classname` varchar(30) NOT NULL,
  `start_time` varchar(30) DEFAULT NULL,
  `end_time` varchar(30) DEFAULT NULL,
  `teacher_name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_list_message
-- ----------------------------
INSERT INTO `class_list_message` VALUES ('高等数学', '2019.9.1', '2020.1.1', '张宏');
INSERT INTO `class_list_message` VALUES ('线性代数', '2020.1.1', '2020.7.1', '王亚丽');
INSERT INTO `class_list_message` VALUES ('离散数学', '2020.1.1', '2020.7.1', '流进');
INSERT INTO `class_list_message` VALUES ('软件工程', '2019.9.1', '2020.1.1', '田生伟');
INSERT INTO `class_list_message` VALUES ('Javaweb', '2020.9.1', '2021.1.1', '宋铁');
INSERT INTO `class_list_message` VALUES ('软件开发架构', '2020.9.1', '2021.1.1', '宋铁');

-- ----------------------------
-- Table structure for endtime
-- ----------------------------
DROP TABLE IF EXISTS `endtime`;
CREATE TABLE `endtime` (
  `endTimeOfPrimary` date DEFAULT NULL,
  `endTimeOfMiddle` date DEFAULT NULL,
  `endTimeOfFinal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of endtime
-- ----------------------------
INSERT INTO `endtime` VALUES ('2021-04-15', '2021-04-03', '2021-04-03');

-- ----------------------------
-- Table structure for final_comment
-- ----------------------------
DROP TABLE IF EXISTS `final_comment`;
CREATE TABLE `final_comment` (
  `teacher_id` varchar(30) NOT NULL,
  `teacher_name` varchar(30) DEFAULT NULL,
  `classname` varchar(30) DEFAULT NULL,
  `excellent_degree` int(5) DEFAULT NULL,
  `good_degree` int(5) DEFAULT NULL,
  `medium_degree` int(5) DEFAULT NULL,
  `bad_degree` int(5) DEFAULT NULL,
  `evaluate_number` int(2) DEFAULT NULL,
  `evaluate1` int(2) DEFAULT NULL,
  `evaluate2` int(2) DEFAULT NULL,
  `evaluate3` int(2) DEFAULT NULL,
  `evaluate4` int(2) DEFAULT NULL,
  `evaluate5` int(2) DEFAULT NULL,
  `evaluate6` int(2) DEFAULT NULL,
  `evaluate7` int(2) DEFAULT NULL,
  `evaluate8` int(2) DEFAULT NULL,
  `evaluate9` int(2) DEFAULT NULL,
  `evaluate10` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of final_comment
-- ----------------------------
INSERT INTO `final_comment` VALUES ('101', '宋铁', 'Javaweb', '8', '6', '4', '2', '2', '100', '100', '100', '100', '75', '75', '75', '60', '60', '40');
INSERT INTO `final_comment` VALUES ('102', '无敌', 'Javaweb', '6', '4', '8', '2', '2', '100', '100', '100', '75', '75', '75', '75', '60', '60', '40');
INSERT INTO `final_comment` VALUES ('101', '宋铁', '软件开发架构', '8', '6', '4', '2', '2', '100', '100', '100', '100', '75', '75', '75', '60', '60', '40');
INSERT INTO `final_comment` VALUES ('103', '王亚丽', '线性代数', '3', '3', '3', '1', '1', '75', '60', '40', '60', '75', '75', '60', '100', '100', '100');
INSERT INTO `final_comment` VALUES ('105', '田生伟', '软件工程', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for leave_message_admin
-- ----------------------------
DROP TABLE IF EXISTS `leave_message_admin`;
CREATE TABLE `leave_message_admin` (
  `admin_id` varchar(30) DEFAULT NULL,
  `student_id` varchar(30) DEFAULT NULL,
  `leave_message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave_message_admin
-- ----------------------------
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', '管理员麻烦给web老师多发一些工资');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501243', '希望老师可以教授一些企业项目所需要的一些使用知识，以及一些毕业后面试时的一些技巧好不好QAQ');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', 'adminadmin暗室逢灯按时');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', '艾弗森三个地方官东方红过分的话规定符合');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', '二娃发官网上分为儿童提供惹我 ');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', 'srgerdhrthjtyjuytkjuyilok');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', '五色饭个个人 ');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', 'easfffffeas');
INSERT INTO `leave_message_admin` VALUES ('admin1', '20192501347', '耳钉韩国访谈法');

-- ----------------------------
-- Table structure for leave_message_teacher
-- ----------------------------
DROP TABLE IF EXISTS `leave_message_teacher`;
CREATE TABLE `leave_message_teacher` (
  `teacher_id` varchar(30) DEFAULT NULL,
  `student_id` varchar(30) DEFAULT NULL,
  `leave_message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave_message_teacher
-- ----------------------------
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', '老师您讲的真好');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', '老师辛苦了');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', '铁哥带飞666');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', 'fesdfweroifgtjeworitjgeopirghtrehytrhytj');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', '老师好阿萨德企鹅窝如风达');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', 'sgdrdrdrdrdrdrdrdrdr');
INSERT INTO `leave_message_teacher` VALUES ('101', '20192501347', '大佬救命');

-- ----------------------------
-- Table structure for mid_comment
-- ----------------------------
DROP TABLE IF EXISTS `mid_comment`;
CREATE TABLE `mid_comment` (
  `teacher_id` varchar(30) NOT NULL,
  `teacher_name` varchar(30) DEFAULT NULL,
  `classname` varchar(30) DEFAULT NULL,
  `excellent_degree` int(5) DEFAULT NULL,
  `good_degree` int(5) DEFAULT NULL,
  `medium_degree` int(5) DEFAULT NULL,
  `bad_degree` int(5) DEFAULT NULL,
  `evaluate_number` int(2) DEFAULT NULL,
  `evaluate1` int(2) DEFAULT NULL,
  `evaluate2` int(2) DEFAULT NULL,
  `evaluate3` int(2) DEFAULT NULL,
  `evaluate4` int(2) DEFAULT NULL,
  `evaluate5` int(2) DEFAULT NULL,
  `evaluate6` int(2) DEFAULT NULL,
  `evaluate7` int(2) DEFAULT NULL,
  `evaluate8` int(2) DEFAULT NULL,
  `evaluate9` int(2) DEFAULT NULL,
  `evaluate10` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mid_comment
-- ----------------------------
INSERT INTO `mid_comment` VALUES ('101', '宋铁', 'Javaweb', '8', '6', '4', '2', '2', '100', '100', '100', '100', '75', '75', '75', '60', '60', '40');
INSERT INTO `mid_comment` VALUES ('102', '无敌', 'Javaweb', '6', '4', '8', '2', '2', '100', '100', '100', '75', '75', '75', '75', '60', '60', '40');
INSERT INTO `mid_comment` VALUES ('101', '宋铁', '软件开发架构', '8', '6', '4', '2', '2', '100', '100', '100', '100', '75', '75', '75', '60', '60', '40');
INSERT INTO `mid_comment` VALUES ('103', '王亚丽', '线性代数', '0', '4', '3', '3', '1', '60', '60', '60', '75', '75', '75', '40', '40', '75', '40');
INSERT INTO `mid_comment` VALUES ('105', '田生伟', '软件工程', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for primary_comment
-- ----------------------------
DROP TABLE IF EXISTS `primary_comment`;
CREATE TABLE `primary_comment` (
  `teacher_id` varchar(30) NOT NULL,
  `teacher_name` varchar(30) DEFAULT NULL,
  `classname` varchar(30) DEFAULT NULL,
  `excellent_degree` int(5) DEFAULT NULL,
  `good_degree` int(5) DEFAULT NULL,
  `medium_degree` int(5) DEFAULT NULL,
  `bad_degree` int(5) DEFAULT NULL,
  `evaluate_number` int(2) DEFAULT NULL,
  `evaluate1` int(2) DEFAULT NULL,
  `evaluate2` int(2) DEFAULT NULL,
  `evaluate3` int(2) DEFAULT NULL,
  `evaluate4` int(2) DEFAULT NULL,
  `evaluate5` int(2) DEFAULT NULL,
  `evaluate6` int(2) DEFAULT NULL,
  `evaluate7` int(2) DEFAULT NULL,
  `evaluate8` int(2) DEFAULT NULL,
  `evaluate9` int(2) DEFAULT NULL,
  `evaluate10` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of primary_comment
-- ----------------------------
INSERT INTO `primary_comment` VALUES ('101', '宋铁', 'Javaweb', '15', '12', '20', '3', '5', '38', '41', '36', '43', '46', '51', '36', '32', '46', '54');
INSERT INTO `primary_comment` VALUES ('102', '无敌', 'Javaweb', '6', '4', '8', '2', '2', '100', '100', '100', '75', '75', '75', '75', '60', '60', '40');
INSERT INTO `primary_comment` VALUES ('101', '宋铁', '软件开发架构', '13', '11', '9', '7', '4', '100', '100', '100', '100', '75', '75', '75', '60', '60', '40');
INSERT INTO `primary_comment` VALUES ('103', '王亚丽', '线性代数', '0', '7', '1', '2', '1', '75', '75', '75', '75', '60', '75', '75', '75', '40', '40');
INSERT INTO `primary_comment` VALUES ('105', '田生伟', '软件工程', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

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

-- ----------------------------
-- Table structure for student_class_message
-- ----------------------------
DROP TABLE IF EXISTS `student_class_message`;
CREATE TABLE `student_class_message` (
  `student_id` varchar(30) NOT NULL,
  `classname` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_class_message
-- ----------------------------
INSERT INTO `student_class_message` VALUES ('20192501347', '线性代数', '103');
INSERT INTO `student_class_message` VALUES ('20192501347', '软件工程', '105');
INSERT INTO `student_class_message` VALUES ('20192501347', 'Javaweb', '101');
INSERT INTO `student_class_message` VALUES ('20192501347', '软件开发架构', '101');

-- ----------------------------
-- Table structure for student_message
-- ----------------------------
DROP TABLE IF EXISTS `student_message`;
CREATE TABLE `student_message` (
  `student_id` varchar(30) NOT NULL,
  `academe` varchar(30) DEFAULT NULL,
  `student_name` varchar(30) DEFAULT NULL,
  `major` varchar(30) DEFAULT NULL,
  `sex` varchar(30) DEFAULT NULL,
  `time_of_enrollment` varchar(30) DEFAULT NULL,
  `class_number` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_message
-- ----------------------------
INSERT INTO `student_message` VALUES ('20192501347', '计算机', '吴奇隆', '软件工程', '男', '2019.9.1', '1906');
INSERT INTO `student_message` VALUES ('20192501343', '金融学院', '张三', '经济管理', '男', '2019.3.1', '19.1');

-- ----------------------------
-- Table structure for teacher_account
-- ----------------------------
DROP TABLE IF EXISTS `teacher_account`;
CREATE TABLE `teacher_account` (
  `teacher_name` varchar(30) DEFAULT NULL,
  `teacher_id` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_account
-- ----------------------------
INSERT INTO `teacher_account` VALUES ('宋铁', '101', '123456');
INSERT INTO `teacher_account` VALUES ('无敌', '102', '123456');
INSERT INTO `teacher_account` VALUES ('王亚丽', '103', '123456');
INSERT INTO `teacher_account` VALUES ('田生伟', '105', '123456');
INSERT INTO `teacher_account` VALUES ('刘瑾', '104', '123456');

-- ----------------------------
-- Table structure for teacher_message
-- ----------------------------
DROP TABLE IF EXISTS `teacher_message`;
CREATE TABLE `teacher_message` (
  `teacher_id` varchar(30) NOT NULL,
  `teacher_name` varchar(30) DEFAULT NULL,
  `academe` varchar(30) DEFAULT NULL,
  `sex` varchar(30) DEFAULT NULL,
  `classname` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_message
-- ----------------------------
INSERT INTO `teacher_message` VALUES ('101', '宋铁', '计算机学院', '男', 'Javaweb');
INSERT INTO `teacher_message` VALUES ('103', '王亚丽', '计算机学院', '女', '线性代数');
INSERT INTO `teacher_message` VALUES ('105', '田生伟', '计算机学院', '男', '软件工程');
INSERT INTO `teacher_message` VALUES ('104', '刘瑾', '金融管理', '男', '离散数学');
INSERT INTO `teacher_message` VALUES ('102', '无敌', '计算机学院', '男', 'Javaweb');
INSERT INTO `teacher_message` VALUES ('101', '宋铁', '计算机学院', '男', '软件开发架构');
