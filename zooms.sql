-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: zooms
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Animal`
--

DROP TABLE IF EXISTS `Animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Animal` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Gender` varchar(2) DEFAULT NULL,
  `weight` double NOT NULL,
  `DOB` datetime DEFAULT NULL,
  `AGE` int DEFAULT NULL,
  `class_id` int NOT NULL,
  `vet_id` int NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `class_id` (`class_id`),
  KEY `vet_id` (`vet_id`),
  CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classification` (`Class_ID`),
  CONSTRAINT `animal_ibfk_2` FOREIGN KEY (`vet_id`) REFERENCES `vet` (`vet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Animal`
--

LOCK TABLES `Animal` WRITE;
/*!40000 ALTER TABLE `Animal` DISABLE KEYS */;
INSERT INTO `Animal` VALUES (3,'Tiger','M',130,'2022-11-09 00:00:00',NULL,6,2,'https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg'),(4,'Elephant','M',4000,'2004-06-08 00:00:00',NULL,10,4,'https://s01.sgp1.cdn.digitaloceanspaces.com/article/162696-lrkfcomskj-1628694149.jpg'),(5,'Monkey','F',30,'2020-02-04 00:00:00',NULL,11,3,'https://images.indianexpress.com/2018/12/monkey.jpg'),(6,'Tiger','M',100,'2022-11-16 00:00:00',NULL,6,3,'https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg'),(7,'Deer','M',120,'2022-11-11 00:00:00',NULL,10,3,'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Red_Deer_in_Richmond_Park_-_geograph.org.uk_-_2025832.jpg/1200px-Red_Deer_in_Richmond_Park_-_geograph.org.uk_-_2025832.jpg'),(10,'Bear','M',200,'2022-11-02 00:00:00',NULL,11,3,'https://www.shutterstock.com/image-photo/protective-female-brown-bear-ursus-260nw-1725069664.jpg');
/*!40000 ALTER TABLE `Animal` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `animalToClassification` BEFORE INSERT ON `animal` FOR EACH ROW BEGIN
DECLARE count INT;
SELECT no_of_animals FROM classification WHERE Class_ID=new.class_id INTO count;
SET count = count+1;
UPDATE classification SET no_of_animals=count WHERE class_ID=new.class_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `enclosureAnimals` BEFORE INSERT ON `animal` FOR EACH ROW BEGIN DECLARE eid INT; DECLARE count INT; SELECT Encloser_id FROM eclosed_by WHERE eclosed_by.Animal_id=new.ID into eid; SELECT no_of_animals FROM enclosure WHERE Enclosure_id=eid into count; set count = count+1; UPDATE enclosure SET no_of_animals=count WHERE Enclosure_id=eid; END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `encloser` AFTER INSERT ON `animal` FOR EACH ROW BEGIN DECLARE eid INT; IF new.class_id=6 THEN SET eid=2 ;ELSEIF new.class_id=7 THEN SET eid=6; ELSEIF new.class_id=8 THEN SET eid=5; ELSEIF new.class_id=9 THEN SET eid=7; ELSEIF new.class_id=10 THEN SET eid=3; ELSEIF new.class_id=11 THEN SET eid=4; END IF; INSERT INTO eclosed_by VALUES(eid,new.ID); END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `animalSubClassification` AFTER DELETE ON `animal` FOR EACH ROW BEGIN DECLARE count INT; SELECT no_of_animals FROM classification WHERE Class_ID=old.class_id INTO count; SET count = count-1; UPDATE classification SET no_of_animals=count WHERE class_ID=old.class_id; END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Animal_food`
--

DROP TABLE IF EXISTS `Animal_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Animal_food` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `stock` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Animal_food`
--

LOCK TABLES `Animal_food` WRITE;
/*!40000 ALTER TABLE `Animal_food` DISABLE KEYS */;
INSERT INTO `Animal_food` VALUES (1,'sheep meat','10'),(2,'Sugar cane','100');
/*!40000 ALTER TABLE `Animal_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classification`
--

DROP TABLE IF EXISTS `classification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classification` (
  `Class_ID` int NOT NULL AUTO_INCREMENT,
  `Class_Name` varchar(40) DEFAULT NULL,
  `no_of_animals` int DEFAULT NULL,
  PRIMARY KEY (`Class_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classification`
--

LOCK TABLES `classification` WRITE;
/*!40000 ALTER TABLE `classification` DISABLE KEYS */;
INSERT INTO `classification` VALUES (6,'carnivores',2),(7,'birds',0),(8,'reptiles',0),(9,'primates',0),(10,'herbivores',2),(11,'omnivores',2);
/*!40000 ALTER TABLE `classification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `phone` (`phone`),
  CONSTRAINT `donations_ibfk_1` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
INSERT INTO `donations` VALUES (9,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',1000,'2022-11-13 12:46:08'),(10,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',5000,'2022-11-13 12:51:38'),(21,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',5000,'2022-11-20 00:13:10'),(22,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',10000,'2022-11-23 20:32:58'),(23,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',25000,'2022-11-23 22:35:01'),(25,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',25000,'2022-11-23 22:43:10'),(26,'Appala Avinash','avinash9605@gmail.com','Ongole','9391037339',5000,'2022-11-23 23:01:56'),(27,'Appala Avinash','avinash9605@gmail.com','Ongole','9989986405',10000,'2022-11-24 00:21:12'),(29,'Appala Avinash','avinash9605@gmail.com','Ongole','9100287741',10000,'2022-11-27 18:53:03'),(30,'Saketh','saketh6669@gmail.com','Nandyal','9100287741',25000,'2022-11-27 18:57:35'),(31,'saideep','saidep1212@gmail.com','hyderabad','9100287741',25000,'2022-11-27 19:29:54'),(32,'Appala Avinash','avinash9605@gmail.com','Ongole','9100287741',10000,'2022-11-27 19:38:45');
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Eats`
--

DROP TABLE IF EXISTS `Eats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Eats` (
  `Food_ID` int NOT NULL,
  `Animal_ID` int NOT NULL,
  KEY `Food_ID` (`Food_ID`),
  KEY `Animal_ID` (`Animal_ID`),
  CONSTRAINT `eats_ibfk_1` FOREIGN KEY (`Food_ID`) REFERENCES `Animal_food` (`food_id`),
  CONSTRAINT `eats_ibfk_2` FOREIGN KEY (`Animal_ID`) REFERENCES `Animal` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Eats`
--

LOCK TABLES `Eats` WRITE;
/*!40000 ALTER TABLE `Eats` DISABLE KEYS */;
/*!40000 ALTER TABLE `Eats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eclosed_by`
--

DROP TABLE IF EXISTS `eclosed_by`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eclosed_by` (
  `Encloser_id` int NOT NULL,
  `Animal_id` int NOT NULL,
  KEY `Encloser_id` (`Encloser_id`),
  KEY `Animal_id` (`Animal_id`),
  CONSTRAINT `eclosed_by_ibfk_1` FOREIGN KEY (`Encloser_id`) REFERENCES `Enclosure` (`Enclosure_id`),
  CONSTRAINT `eclosed_by_ibfk_2` FOREIGN KEY (`Animal_id`) REFERENCES `Animal` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eclosed_by`
--

LOCK TABLES `eclosed_by` WRITE;
/*!40000 ALTER TABLE `eclosed_by` DISABLE KEYS */;
INSERT INTO `eclosed_by` VALUES (2,3),(3,4),(4,5),(2,6),(3,7),(4,10);
/*!40000 ALTER TABLE `eclosed_by` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employee` (
  `E_ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `job_title` varchar(30) DEFAULT NULL,
  `SID` int DEFAULT NULL,
  PRIMARY KEY (`E_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (1,'saketh ','Manager',3),(2,'Siraj ','Asst Manager',2),(3,'gopal','carni head',3);
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Enclosure`
--

DROP TABLE IF EXISTS `Enclosure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Enclosure` (
  `Enclosure_id` int NOT NULL AUTO_INCREMENT,
  `size` int NOT NULL,
  `no_of_animals` int DEFAULT '0',
  `location` varchar(20) DEFAULT 'ZOOMS',
  PRIMARY KEY (`Enclosure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Enclosure`
--

LOCK TABLES `Enclosure` WRITE;
/*!40000 ALTER TABLE `Enclosure` DISABLE KEYS */;
INSERT INTO `Enclosure` VALUES (2,3000,0,'carni zone'),(3,4000,0,'herbi zone'),(4,3500,0,'onmi zone'),(5,2000,0,'rept zone'),(6,3000,0,'bird zone'),(7,4000,0,'primate zone');
/*!40000 ALTER TABLE `Enclosure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tickets`
--

DROP TABLE IF EXISTS `Tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tickets` (
  `Phone` varchar(14) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `City` varchar(20) DEFAULT NULL,
  `Email` varchar(39) DEFAULT NULL,
  `Date` datetime NOT NULL,
  `adult` int DEFAULT '0',
  `child` int DEFAULT '0',
  `total_price` double DEFAULT NULL,
  KEY `Phone` (`Phone`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`Phone`) REFERENCES `users` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tickets`
--

LOCK TABLES `Tickets` WRITE;
/*!40000 ALTER TABLE `Tickets` DISABLE KEYS */;
INSERT INTO `Tickets` VALUES ('9391037339','Bhanu Satwik','Hyderabad','bhanu@gmail.com','2022-11-25 00:00:00',5,2,600),('9989986405','Appala Avinash','Ongole','avinash9605@gmail.com','2022-11-26 00:00:00',2,2,300),('9100287741','Appala Avinash','Ongole','avinash9605@gmail.com','2022-11-30 00:00:00',1,2,200),('9100287741','Appala Avinash','Ongole','avinash9605@gmail.com','2022-12-01 00:00:00',1,2,200);
/*!40000 ALTER TABLE `Tickets` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `total_price` BEFORE INSERT ON `tickets` FOR EACH ROW BEGIN
SET new.total_price = new.adult * 100 + new.child * 50;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `phone` varchar(14) NOT NULL,
  `role` varchar(20) DEFAULT 'visitor',
  PRIMARY KEY (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('7416951019','visitor'),('8977453132','admin'),('9100287741','visitor'),('9391037339','admin'),('9989986405','visitor');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vet`
--

DROP TABLE IF EXISTS `vet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vet` (
  `vet_id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) DEFAULT NULL,
  `qualification` varchar(50) DEFAULT NULL,
  `salary` double DEFAULT NULL,
  PRIMARY KEY (`vet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vet`
--

LOCK TABLES `vet` WRITE;
/*!40000 ALTER TABLE `vet` DISABLE KEYS */;
INSERT INTO `vet` VALUES (2,'saran','BVSc',80000),(3,'posam','MVSc',120000),(4,'saideep','BVSc',80000),(5,'jeswanth','BVSc',80000),(6,'sid','BVSc',30000);
/*!40000 ALTER TABLE `vet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-27 22:28:45
