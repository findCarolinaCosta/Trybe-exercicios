CREATE DATABASE IF NOT EXISTS blog;

USE blog;

CREATE TABLE IF NOT EXISTS blog.post
(
    id INT NOT NULL AUTO_INCREMENT,
    author_name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at DATE NOT NULL DEFAULT (NOW()),
    PRIMARY KEY(id)
);

INSERT INTO blog.post (author_name, title, category)
VALUES ('Undefined', 'New Post', 'post');