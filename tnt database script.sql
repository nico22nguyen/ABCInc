-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tnt
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tnt
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tnt` DEFAULT CHARACTER SET utf8 ;
USE `tnt` ;

-- -----------------------------------------------------
-- Table `tnt`.`accesslog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tnt`.`accesslog` (
  `idAccess Log` INT NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `date added` DATETIME NULL DEFAULT NULL,
  `Last updated/Edited` DATETIME NULL DEFAULT NULL,
  `Item` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `date created` DATETIME NULL DEFAULT NULL,
  `last motified` DATETIME NULL DEFAULT NULL,
  `Time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idAccess Log`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `tnt`.`clientcontacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tnt`.`clientcontacts` (
  `idClient Contacts` INT NOT NULL,
  `Email` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  ` Phone number` VARCHAR(45) NULL DEFAULT NULL,
  `Contact Name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`idClient Contacts`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `tnt`.`inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tnt`.`inventory` (
  `idInventory` INT NOT NULL,
  `Name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `storagetype` VARCHAR(45) NULL DEFAULT NULL,
  `maxitem` VARCHAR(45) NULL DEFAULT NULL,
  `Access Log_idAccess Log` INT NOT NULL,
  PRIMARY KEY (`idInventory`, `Access Log_idAccess Log`),
  INDEX `fk_Inventory_Access Log1_idx` (`Access Log_idAccess Log` ASC) VISIBLE,
  CONSTRAINT `fk_Inventory_Access Log1`
    FOREIGN KEY (`Access Log_idAccess Log`)
    REFERENCES `tnt`.`accesslog` (`idAccess Log`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `tnt`.`resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tnt`.`resources` (
  `idResources` INT NOT NULL,
  `Name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `type` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `Maxresources` VARCHAR(45) NULL DEFAULT NULL,
  `Currentresources` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idResources`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `tnt`.`clientinfomation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tnt`.`clientinfomation` (
  `idClient information` INT NOT NULL,
  `ClientName` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `Company Address` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `CompanyContacts` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `Client Contacts_idClient Contacts` INT NOT NULL,
  `Resources_idResources` INT NOT NULL,
  `Inventory_idInventory` INT NOT NULL,
  PRIMARY KEY (`idClient information`, `Client Contacts_idClient Contacts`, `Resources_idResources`, `Inventory_idInventory`),
  INDEX `fk_Client information_Client Contacts_idx` (`Client Contacts_idClient Contacts` ASC) VISIBLE,
  INDEX `fk_Client information_Resources1_idx` (`Resources_idResources` ASC) VISIBLE,
  INDEX `fk_Client information_Inventory1_idx` (`Inventory_idInventory` ASC) VISIBLE,
  CONSTRAINT `fk_Client information_Client Contacts`
    FOREIGN KEY (`Client Contacts_idClient Contacts`)
    REFERENCES `tnt`.`clientcontacts` (`idClient Contacts`),
  CONSTRAINT `fk_Client information_Inventory1`
    FOREIGN KEY (`Inventory_idInventory`)
    REFERENCES `tnt`.`inventory` (`idInventory`),
  CONSTRAINT `fk_Client information_Resources1`
    FOREIGN KEY (`Resources_idResources`)
    REFERENCES `tnt`.`resources` (`idResources`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `tnt` ;

-- -----------------------------------------------------
-- procedure GetAllaccesslog
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllaccesslog`()
begin 
	select * from accesslog;
    end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetAllclientcontacts
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllclientcontacts`()
begin 
	select * from clientcontacts;
    end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetAllclientinfomation
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllclientinfomation`()
begin 
	select * from clientinfomation;
    end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetAllinventory
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllinventory`()
begin 
	select * from inventory ;
    end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetAllresources
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllresources`()
begin 
	select * from resources  ;
    end$$

DELIMITER ;

-- -----------------------------------------------------
-- function companyaddress
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `companyaddress`(companyaddress char(45)) RETURNS char(45) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(companyaddress, ' ')$$

DELIMITER ;

-- -----------------------------------------------------
-- function companycontacts
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `companycontacts`(companycontacts char(45)) RETURNS char(45) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(companycontacts, ' ')$$

DELIMITER ;

-- -----------------------------------------------------
-- function email
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `email`(email char(45)) RETURNS char(45) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(email, ' ')$$

DELIMITER ;

-- -----------------------------------------------------
-- function name
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `name`(Name char(60)) RETURNS char(60) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(Name , ' ')$$

DELIMITER ;

-- -----------------------------------------------------
-- function phonenumber
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `phonenumber`(phonenumber  char(45)) RETURNS char(45) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(phonenumber, ' ')$$

DELIMITER ;

-- -----------------------------------------------------
-- function type
-- -----------------------------------------------------

DELIMITER $$
USE `tnt`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `type`(type char(45)) RETURNS char(45) CHARSET utf8mb3
    DETERMINISTIC
RETURN CONCAT(type, ' ')$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
