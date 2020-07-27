DROP DATABASE IF EXISTS burgersdb;

CREATE DATABASE burgersdb;

USE burgersdb;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burgerType VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);