-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema elbaytravel
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema elbaytravel
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `elbaytravel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `imgage` VARCHAR(500) NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`acchat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`acchat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NOT NULL,
  `time` TIME NOT NULL,
  `Admin_id` INT NOT NULL,
  `Client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Admin_id`, `Client_id`),
  INDEX `fk_ACchat_Admin1_idx` (`Admin_id` ASC) VISIBLE,
  INDEX `fk_ACchat_Client1_idx` (`Client_id` ASC) VISIBLE,
  CONSTRAINT `fk_ACchat_Admin1`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `mydb`.`admin` (`id`),
  CONSTRAINT `fk_ACchat_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`seller`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`seller` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`aschat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aschat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(250) NOT NULL,
  `time` TIME NOT NULL,
  `Admin_id` INT NOT NULL,
  `Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Admin_id`, `Seller_id`),
  INDEX `fk_ASchat_Admin1_idx` (`Admin_id` ASC) VISIBLE,
  INDEX `fk_ASchat_Seller1_idx` (`Seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_ASchat_Admin1`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `mydb`.`admin` (`id`),
  CONSTRAINT `fk_ASchat_Seller1`
    FOREIGN KEY (`Seller_id`)
    REFERENCES `mydb`.`seller` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favorite` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Client_id` INT NOT NULL,
  `place id` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `Client_id`),
  INDEX `fk_Favorite_Client1_idx` (`Client_id` ASC) VISIBLE,
  CONSTRAINT `fk_Favorite_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`menu` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `images` VARCHAR(45) NOT NULL,
  `descreption` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `mapLocation` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `Seller_id` INT NOT NULL,
  `Favorite_id` INT NOT NULL,
  `Favorite_Client_id` INT NOT NULL,
  `Menu_id` INT NOT NULL,
  `approved` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`, `Seller_id`, `Favorite_id`, `Favorite_Client_id`, `Menu_id`),
  INDEX `fk_Places_Seller_idx` (`Seller_id` ASC) VISIBLE,
  INDEX `fk_Places_Favorite1_idx` (`Favorite_id` ASC, `Favorite_Client_id` ASC) VISIBLE,
  INDEX `fk_Places_Menu1_idx` (`Menu_id` ASC) VISIBLE,
  CONSTRAINT `fk_Places_Favorite1`
    FOREIGN KEY (`Favorite_id` , `Favorite_Client_id`)
    REFERENCES `mydb`.`favorite` (`id` , `Client_id`),
  CONSTRAINT `fk_Places_Menu1`
    FOREIGN KEY (`Menu_id`)
    REFERENCES `mydb`.`menu` (`id`),
  CONSTRAINT `fk_Places_Seller`
    FOREIGN KEY (`Seller_id`)
    REFERENCES `mydb`.`seller` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`claim`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`claim` (
  `id` INT NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `Client_id` INT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Client_id`, `Places_id`, `Places_Seller_id`),
  INDEX `fk_Claim_Client1_idx` (`Client_id` ASC) VISIBLE,
  INDEX `fk_Claim_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_Claim_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`),
  CONSTRAINT `fk_Claim_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`commentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`commentes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(500) NULL DEFAULT 'null',
  `rating` INT NULL DEFAULT '0',
  `Client_id` INT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Client_id`, `Places_id`, `Places_Seller_id`),
  INDEX `fk_Commentes_Client1_idx` (`Client_id` ASC) VISIBLE,
  INDEX `fk_Commentes_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_Commentes_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`),
  CONSTRAINT `fk_Commentes_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`hotels` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `manager` VARCHAR(45) NOT NULL,
  `logo` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orderdate` DATETIME NOT NULL,
  `totalamount` INT NOT NULL,
  `paymentstatus` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Client_id`),
  INDEX `fk_Order_Client1_idx` (`Client_id` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`places_has_client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`places_has_client` (
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  `Places_Favorite_id` INT NOT NULL,
  `Places_Favorite_Client_id` INT NOT NULL,
  `Places_Menu_id` INT NOT NULL,
  `Client_id` INT NOT NULL,
  PRIMARY KEY (`Places_id`, `Places_Seller_id`, `Places_Favorite_id`, `Places_Favorite_Client_id`, `Places_Menu_id`, `Client_id`),
  INDEX `fk_Places_has_Client_Client1_idx` (`Client_id` ASC) VISIBLE,
  INDEX `fk_Places_has_Client_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC, `Places_Favorite_id` ASC, `Places_Favorite_Client_id` ASC, `Places_Menu_id` ASC) VISIBLE,
  CONSTRAINT `fk_Places_has_Client_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`),
  CONSTRAINT `fk_Places_has_Client_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id` , `Places_Favorite_id` , `Places_Favorite_Client_id` , `Places_Menu_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id` , `Favorite_id` , `Favorite_Client_id` , `Menu_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`prodacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`prodacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Places_id`, `Places_Seller_id`),
  INDEX `fk_Prodacts_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prodacts_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL DEFAULT NULL,
  `numberofperson` INT NULL DEFAULT NULL,
  `Client_id` INT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Client_id`, `Places_id`, `Places_Seller_id`),
  INDEX `fk_Reservation_Client1_idx` (`Client_id` ASC) VISIBLE,
  INDEX `fk_Reservation_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_Reservation_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`),
  CONSTRAINT `fk_Reservation_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`scchat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`scchat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NOT NULL,
  `time` TIME NOT NULL,
  `Seller_id` INT NOT NULL,
  `Client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Seller_id`, `Client_id`),
  INDEX `fk_SCchat_Seller1_idx` (`Seller_id` ASC) VISIBLE,
  INDEX `fk_SCchat_Client1_idx` (`Client_id` ASC) VISIBLE,
  CONSTRAINT `fk_SCchat_Client1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `mydb`.`client` (`id`),
  CONSTRAINT `fk_SCchat_Seller1`
    FOREIGN KEY (`Seller_id`)
    REFERENCES `mydb`.`seller` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`tables`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tables` (
  `id` INT NOT NULL,
  `number` INT NOT NULL,
  `numberofchairs` INT NOT NULL,
  `reserved` TINYINT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  `Order_id` INT NOT NULL,
  `Order_Client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Places_id`, `Places_Seller_id`, `Order_id`, `Order_Client_id`),
  INDEX `fk_Tables_Places1_idx` (`Places_id` ASC, `Places_Seller_id` ASC) VISIBLE,
  INDEX `fk_Tables_Order1_idx` (`Order_id` ASC, `Order_Client_id` ASC) VISIBLE,
  CONSTRAINT `fk_Tables_Order1`
    FOREIGN KEY (`Order_id` , `Order_Client_id`)
    REFERENCES `mydb`.`order` (`id` , `Client_id`),
  CONSTRAINT `fk_Tables_Places1`
    FOREIGN KEY (`Places_id` , `Places_Seller_id`)
    REFERENCES `mydb`.`places` (`id` , `Seller_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `tawelti` ;

-- -----------------------------------------------------
-- Table `tawelti`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` VARCHAR(500) NULL DEFAULT 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`sellers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`sellers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` VARCHAR(500) NULL DEFAULT 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png',
  `patentimage` VARCHAR(500) NULL DEFAULT NULL,
  `approved` TINYINT NOT NULL DEFAULT '0',
  `payed` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `descreption` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `mapLocation` VARCHAR(255) NOT NULL,
  `Latitude` INT NOT NULL,
  `Longitude` INT NOT NULL,
  `patentimage` VARCHAR(500) NULL DEFAULT NULL,
  `approved` TINYINT NOT NULL DEFAULT '0',
  `category` ENUM('coffe', 'Restaurent', 'Lounge') NOT NULL,
  `type` ENUM('normal', 'VIP') NOT NULL,
  `Seller_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `Seller_id` (`Seller_id` ASC) VISIBLE,
  CONSTRAINT `places_ibfk_1`
    FOREIGN KEY (`Seller_id`)
    REFERENCES `tawelti`.`sellers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`claims` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  `Client_id` INT NULL DEFAULT NULL,
  `Places_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `Client_id` (`Client_id` ASC) VISIBLE,
  INDEX `Places_id` (`Places_id` ASC) VISIBLE,
  CONSTRAINT `claims_ibfk_1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `claims_ibfk_2`
    FOREIGN KEY (`Places_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`clientplaces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`clientplaces` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `Client_id` INT NOT NULL,
  `Place_id` INT NOT NULL,
  PRIMARY KEY (`Client_id`, `Place_id`),
  INDEX `Place_id` (`Place_id` ASC) VISIBLE,
  CONSTRAINT `clientplaces_ibfk_1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `clientplaces_ibfk_2`
    FOREIGN KEY (`Place_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`commentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`commentes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(500) NULL DEFAULT 'null',
  `rating` INT NULL DEFAULT '0',
  `Client_id` INT NOT NULL,
  `Places_id` INT NOT NULL,
  `Places_Seller_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `Client_id` (`Client_id` ASC) VISIBLE,
  INDEX `Places_id` (`Places_id` ASC) VISIBLE,
  CONSTRAINT `commentes_ibfk_1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `commentes_ibfk_2`
    FOREIGN KEY (`Places_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Client_id` INT NOT NULL,
  `Places_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `Client_id` (`Client_id` ASC) VISIBLE,
  INDEX `Places_id` (`Places_id` ASC) VISIBLE,
  CONSTRAINT `favorites_ibfk_1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `favorites_ibfk_2`
    FOREIGN KEY (`Places_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(500) NULL DEFAULT NULL,
  `category` ENUM('Drinks', 'Food', 'Chicha', 'Dessert') NOT NULL,
  `Places_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `Places_id` (`Places_id` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`Places_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`reservations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`reservations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL DEFAULT NULL,
  `numberofperson` INT NULL DEFAULT NULL,
  `Client_id` INT NULL DEFAULT NULL,
  `Places_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `Client_id` (`Client_id` ASC) VISIBLE,
  INDEX `Places_id` (`Places_id` ASC) VISIBLE,
  CONSTRAINT `reservations_ibfk_1`
    FOREIGN KEY (`Client_id`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `reservations_ibfk_2`
    FOREIGN KEY (`Places_id`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `totalamount` INT NOT NULL,
  `paymentstatus` VARCHAR(45) NOT NULL DEFAULT 'false',
  `ClientId` INT NULL DEFAULT NULL,
  `Products_id` INT NULL DEFAULT NULL,
  `Reservation_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `ClientId` (`ClientId` ASC) VISIBLE,
  INDEX `Products_id` (`Products_id` ASC) VISIBLE,
  INDEX `Reservation_id` (`Reservation_id` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`ClientId`)
    REFERENCES `tawelti`.`clients` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`Products_id`)
    REFERENCES `tawelti`.`products` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_3`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `tawelti`.`reservations` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tawelti`.`tables`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tawelti`.`tables` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `numberofchairs` INT NOT NULL,
  `reserved` TINYINT NOT NULL,
  `PlaceId` INT NULL DEFAULT NULL,
  `Order_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `PlaceId` (`PlaceId` ASC) VISIBLE,
  INDEX `Order_id` (`Order_id` ASC) VISIBLE,
  CONSTRAINT `tables_ibfk_1`
    FOREIGN KEY (`PlaceId`)
    REFERENCES `tawelti`.`places` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `tables_ibfk_2`
    FOREIGN KEY (`Order_id`)
    REFERENCES `tawelti`.`orders` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `elbaytravel` ;

-- -----------------------------------------------------
-- Table `elbaytravel`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`hotels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `emailRception` VARCHAR(255) NULL DEFAULT NULL,
  `emailReservation` VARCHAR(255) NOT NULL,
  `images` TEXT NULL DEFAULT NULL,
  `category` VARCHAR(45) NOT NULL,
  `phone` INT NULL,
  `chefResvervation` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `elbaytravel`.`periods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`periods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `Hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Periods_Hotels_idx` (`Hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_Periods_Hotels`
    FOREIGN KEY (`Hotels_id`)
    REFERENCES `elbaytravel`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `elbaytravel`.`Prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`Prices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `periods_id` INT NOT NULL,
  `hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Prices_periods1_idx` (`periods_id` ASC) VISIBLE,
  INDEX `fk_Prices_hotels1_idx` (`hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prices_periods1`
    FOREIGN KEY (`periods_id`)
    REFERENCES `elbaytravel`.`periods` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Prices_hotels1`
    FOREIGN KEY (`hotels_id`)
    REFERENCES `elbaytravel`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbaytravel`.`promotion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`promotion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `prmotion` DECIMAL(3) NOT NULL,
  `hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_promotion_hotels1_idx` (`hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_promotion_hotels1`
    FOREIGN KEY (`hotels_id`)
    REFERENCES `elbaytravel`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbaytravel`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`Reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `referance` VARCHAR(45) NULL,
  `client` VARCHAR(255) NULL,
  `teleClient` INT NULL,
  `hotel` VARCHAR(255) NULL,
  `dateReservation` DATE NULL,
  `chekin` DATE NULL,
  `checkout` DATE NULL,
  `nombreJours` INT NULL,
  `nombreChambres` INT NULL,
  `total` INT NULL,
  `payer` INT NULL,
  `reste` INT NULL,
  `cotisationHotel` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbaytravel`.`Chambres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbaytravel`.`Chambres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NULL,
  `promotion_id` INT NOT NULL,
  `Reservation_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Chambres_promotion1_idx` (`promotion_id` ASC) VISIBLE,
  INDEX `fk_Chambres_Reservation1_idx` (`Reservation_id` ASC) VISIBLE,
  CONSTRAINT `fk_Chambres_promotion1`
    FOREIGN KEY (`promotion_id`)
    REFERENCES `elbaytravel`.`promotion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chambres_Reservation1`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `elbaytravel`.`Reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
