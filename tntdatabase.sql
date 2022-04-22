-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema TNT
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema TNT
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TNT` DEFAULT CHARACTER SET utf8 ;
USE `TNT` ;

-- -----------------------------------------------------
-- Table `TNT`.`Access Log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`Access Log` (
  `idAccess Log` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `date added` DATETIME NULL,
  `Last updated/Edited` DATETIME NULL,
  `Inventory` VARCHAR(45) NOT NULL,
  `Item` VARCHAR(45) NULL,
  `date created` DATETIME NULL,
  `last motified` DATETIME NULL,
  `Time` DATETIME NULL,
  PRIMARY KEY (`idAccess Log`, `Inventory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TNT`.`Client Contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`Client Contacts` (
  `idClient Contacts` INT NOT NULL,
  `Email Address` VARCHAR(45) NULL,
  `Client Phone Number` INT NULL,
  `Contact Name` VARCHAR(45) NULL,
  PRIMARY KEY (`idClient Contacts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TNT`.`Resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`Resources` (
  `idResources` INT NOT NULL,
  `Resource Name` VARCHAR(45) NULL,
  `Resource Type` VARCHAR(45) NULL,
  `Max Number of Resources` INT NULL,
  `Current Number of Resources` INT NULL,
  PRIMARY KEY (`idResources`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TNT`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`Inventory` (
  `idInventory` INT NOT NULL,
  `Name` VARCHAR(45) NULL,
  `Storage Type` INT NULL,
  `Max Item Capacity` INT NULL,
  `Access Log_idAccess Log` INT NOT NULL,
  PRIMARY KEY (`idInventory`, `Access Log_idAccess Log`),
  INDEX `fk_Inventory_Access Log1_idx` (`Access Log_idAccess Log` ASC) VISIBLE,
  CONSTRAINT `fk_Inventory_Access Log1`
    FOREIGN KEY (`Access Log_idAccess Log`)
    REFERENCES `TNT`.`Access Log` (`idAccess Log`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TNT`.`Client information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`Client information` (
  `idClient information` INT NOT NULL,
  `Client Name` VARCHAR(45) NULL,
  `Company Address` VARCHAR(45) NULL,
  `Company Contacts` VARCHAR(45) NULL,
  `Client Contacts_idClient Contacts` INT NOT NULL,
  `Resources_idResources` INT NOT NULL,
  `Inventory_idInventory` INT NOT NULL,
  PRIMARY KEY (`idClient information`, `Client Contacts_idClient Contacts`, `Resources_idResources`, `Inventory_idInventory`),
  INDEX `fk_Client information_Client Contacts_idx` (`Client Contacts_idClient Contacts` ASC) VISIBLE,
  INDEX `fk_Client information_Resources1_idx` (`Resources_idResources` ASC) VISIBLE,
  INDEX `fk_Client information_Inventory1_idx` (`Inventory_idInventory` ASC) VISIBLE,
  CONSTRAINT `fk_Client information_Client Contacts`
    FOREIGN KEY (`Client Contacts_idClient Contacts`)
    REFERENCES `TNT`.`Client Contacts` (`idClient Contacts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Client information_Resources1`
    FOREIGN KEY (`Resources_idResources`)
    REFERENCES `TNT`.`Resources` (`idResources`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Client information_Inventory1`
    FOREIGN KEY (`Inventory_idInventory`)
    REFERENCES `TNT`.`Inventory` (`idInventory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TNT`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TNT`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
