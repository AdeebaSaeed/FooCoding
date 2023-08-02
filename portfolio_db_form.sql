-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio_db
-- ------------------------------------------------------
-- Server version	5.7.42-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form` (
  `full_name` varchar(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `mobile_number` varchar(15) NOT NULL,
  `email_subject` varchar(100) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form`
--

LOCK TABLES `form` WRITE;
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
INSERT INTO `form` VALUES ('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('ali hassan ','ali@gmail.com','56456454','hello','hello how are you'),('huma ehsan','huma.ehsan@gmail.com','076455033','hello','hello how are you . i have some issues'),('huma ehsan','huma.ehsan@gmail.com','076455033','hello','hello how are you . i have some issues'),('subham','subham@gmail.com','67575778688','hello','i am sending this email'),('subham','subham@gmail.com','67575778688','hello','i am sending this email'),('subham','subham@gmail.com','4632756873','hello','hdfjgfjg'),('subham','subham@gmail.com','4632756873','hello','hdfjgfjg'),('ali hassan ','ali@gmail.com','3343345','hello','sbdashhjgjghdjasg'),('sdsd','dfsfs@gmail.com','433434','dsffadsf','fdssafsf'),('huma','huma@gmail.com','653465273','hello mail','i am working '),('ali hassan ','ali@gmail.com','6767576575','hello','hdsjkhshdjsagdhgjdgsdjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('ali hassan ','subham@gmail.com','3648632864','mission','ahfwghjefjegwfjg today'),('nazia','nazia@gmail.com','6757576','jdggdaj','dhgjhdgjh'),('nazia','nazia@gmail.com','6757576','jdggdaj','dhgjhdgjh'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('haleema','haleema@gmail.com','35462536725463','form submit','bgdghjdgjsagdj'),('haleema','haleema@gmail.com','35462536725463','form submit','bgdghjdgjsagdj'),('haleema','haleema@gmail.com','35462536725463','form submit','bgdghjdgjsagdj'),('haleema','haleema@gmail.com','35462536725463','form submit','bgdghjdgjsagdj'),('new','new@gmail.com','434252454','hello','hfjadshjahj'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('new','new@gmail.com','434252454','hello','hfjadshjahj'),('new','new@gmail.com','434252454','hello','hfjadshjahj'),('new','new@gmail.com','434252454','hello','hfjadshjahj'),('new1','new1@gmail.com','643876286','hello','gfjgdjgfjd'),('John Doe','johndoe@example.com','1234567890','Test Subject','This is a test message.'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('tina','tina@gmail.com','543646','tina mail','fdgsdgdsg'),('hkhfkjh','hjgdsfd@gmail.com','657676','hehejg','jgdshgdjsgd'),('tertr','gg@gmail.com','43536','fdgdfd','gfsfd'),('ali hassan ','ali@gmail.com','656565','hgg','ghghg'),('ali hassan ','ali@gmail.com','656565','hgg','ghghg'),('sulaiman','sulaiman@gmail.com','784687264','dgahgdj','jdgshgvjhdsg'),('sana ','sana@gmail.com','254426575','hekllo','dgjhdgagdhgdjga'),('fdsdssddsfddff','dgajghfhgs@gmail.com','6478278356','fdhasg','dhsbasjgjfasgfjsgdgsjfh  '),('ali hassan ','subham@gmail.com','4567890','hello','this is my email'),('huma','huma@gmail.com','07867456','hello','this is my message'),('nazia','nazia@gmail.com','6473784832','helllo','jkeahwgfjkagdjgasfgads'),('subham ali kamal','kamal@gmail.com','75765765756756','hello','this is new message');
/*!40000 ALTER TABLE `form` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 21:12:02
