-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema test
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mydatabase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydatabase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydatabase` ;

-- -----------------------------------------------------
-- Table `mydatabase`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`hotels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `emailRception` VARCHAR(255) NULL DEFAULT NULL,
  `emailReservation` VARCHAR(255) NOT NULL,
  `images` TEXT NULL DEFAULT NULL,
  `category` VARCHAR(45) NOT NULL,
  `phone` INT NULL DEFAULT NULL,
  `chefResvervation` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydatabase`.`promotion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`promotion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `prmotion` DECIMAL(3,0) NOT NULL,
  `hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_promotion_hotels1_idx` (`hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_promotion_hotels1`
    FOREIGN KEY (`hotels_id`)
    REFERENCES `mydatabase`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydatabase`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydatabase`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `referance` VARCHAR(45) NULL DEFAULT NULL,
  `client` VARCHAR(255) NULL DEFAULT NULL,
  `teleClient` INT NULL DEFAULT NULL,
  `hotel` VARCHAR(255) NULL DEFAULT NULL,
  `dateReservation` DATE NULL DEFAULT NULL,
  `chekin` DATE NULL DEFAULT NULL,
  `checkout` DATE NULL DEFAULT NULL,
  `nombreJours` INT NULL DEFAULT NULL,
  `nombreChambres` INT NULL DEFAULT NULL,
  `total` INT NULL DEFAULT NULL,
  `payer` INT NULL DEFAULT NULL,
  `reste` INT NULL DEFAULT NULL,
  `cotisationHotel` INT NULL DEFAULT NULL,
  `admin_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservation_admin1_idx` (`admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_admin1`
    FOREIGN KEY (`admin_id`)
    REFERENCES `mydatabase`.`admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydatabase`.`chambres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`chambres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `promotion_id` INT NOT NULL,
  `Reservation_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Chambres_promotion1_idx` (`promotion_id` ASC) VISIBLE,
  INDEX `fk_Chambres_Reservation1_idx` (`Reservation_id` ASC) VISIBLE,
  CONSTRAINT `fk_Chambres_promotion1`
    FOREIGN KEY (`promotion_id`)
    REFERENCES `mydatabase`.`promotion` (`id`),
  CONSTRAINT `fk_Chambres_Reservation1`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `mydatabase`.`reservation` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydatabase`.`periods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`periods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `Hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Periods_Hotels_idx` (`Hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_Periods_Hotels`
    FOREIGN KEY (`Hotels_id`)
    REFERENCES `mydatabase`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydatabase`.`prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`prices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `periods_id` INT NOT NULL,
  `hotels_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Prices_periods1_idx` (`periods_id` ASC) VISIBLE,
  INDEX `fk_Prices_hotels1_idx` (`hotels_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prices_hotels1`
    FOREIGN KEY (`hotels_id`)
    REFERENCES `mydatabase`.`hotels` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Prices_periods1`
    FOREIGN KEY (`periods_id`)
    REFERENCES `mydatabase`.`periods` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
