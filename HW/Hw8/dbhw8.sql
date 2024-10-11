CREATE DATABASE dbhw8;

USE dbhw8;

CREATE TABLE members (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(30) NOT NULL,
    lname VARCHAR(30) NOT NULL,
    dob DATE NOT NULL,
    age INT NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(15),
    address VARCHAR(100),
    education VARCHAR(50),
    business VARCHAR(50),
    position VARCHAR(50)
);
