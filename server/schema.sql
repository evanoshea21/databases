drop database if exists chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomName varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  messageText varchar(200),
  room_id int NOT NULL,
  username_id int NOT NULL,
  FOREIGN KEY (username_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  PRIMARY KEY (id)
  /* Describe your table here.*/
);
/* Create other tables and define schemas for them here! */


INSERT INTO users (username)
  Values ('bob'), ('Josh'), ('Evan');

  INSERT INTO rooms (roomName)
  Values ('lobby');
  INSERT INTO rooms (roomName)
  Values ('room2');

INSERT INTO messages (messageText, room_id, username_id)
  Values ('hello', 1, 1);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

