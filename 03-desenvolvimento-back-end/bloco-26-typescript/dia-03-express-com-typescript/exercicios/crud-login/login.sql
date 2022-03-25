CREATE DATABASE IF NOT EXISTS Users;

USE Users;

CREATE TABLE IF NOT EXISTS Users.login
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO Users.login (name, password, email)
VALUES ('username', 'password123', 'user@user.dev');