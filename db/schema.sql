CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int(11) AUTO_INCREMENT NOT NULL,
	burger_name varchar(50) NOT NULL,
	devoured boolean NOT NULL,
	burger_date date NOT NULL,
	PRIMARY KEY (id)
)