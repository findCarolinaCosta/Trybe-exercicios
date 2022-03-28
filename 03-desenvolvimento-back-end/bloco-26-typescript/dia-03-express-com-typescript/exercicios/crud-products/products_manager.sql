CREATE DATABASE IF NOT EXISTS products_manager;

CREATE TABLE IF NOT EXISTS products_manager.product
(
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    brand_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    manufacturing_date DATE NOT NULL,
    expiration_date DATE NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products_manager.product (`name`, brand_name, price, manufacturing_date, expiration_date)
VALUES ('iphone', 'apple', '3.500', '2007/07/29', '2019/07/09');