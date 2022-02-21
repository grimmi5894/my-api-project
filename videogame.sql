CREATE DATABASE videogames;

CREATE USER 'videogames'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';

GRANT ALL ON videogames.* TO 'videogames'@'localhost';

USE videogames;

CREATE TABLE systems (
  id INT auto_increment,
  gameSystem VARCHAR(255), NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
);

CREATE TABLE games (
  id INT auto_increment,
  title VARCHAR(255), NOT NULL,
  gameSystemId INT,
  genre VARCHAR(255) NOT NULL,
  yearReleased INT, NOT NULL,
  multiplayer VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY(gameSystemId) REFERENCES systems(id)
);

INSERT INTO systems (gameSystem) VALUES ('Nintendo');
INSERT INTO systems (gameSystem) VALUES ('Super Nintendo');
INSERT INTO systems (gameSystem) VALUES ('Playstation');
INSERT INTO systems (gameSystem) VALUES ('Xbox 360');


INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Super Mario Bros', 1, 'action/adventure', 1985, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Final Fantasy', 1, 'rpg', 1990, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Donkey Kong', 1, 'action/adventure', 1986, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Dr. Mario', 1, 'puzzles/strategy', 1990, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Dragon Warrior', 1, 'rpg', 1989, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Super Mario World', 2, 'platform', 1991, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Final Fantasy 2', 2, 'rpg', 1991, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Monopoly', 2, 'board game', 1991, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Kirbys Dreamland 3', 2, 'platform', 1997, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Secret of Mana', 2, 'rpg', 1993, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Final Fantasy VII', 3, 'rpg', 1997, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Tomb Raider', 3, 'action/adventure', 1996, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Tony Hawks Pro Skater 2', 3, 'sports', 2000, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Tekken', 3, 'fighting', 1995, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Bioshock', 4, 'first person shooter', 2007, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Rock Band', 4, 'rhythm game', 2007, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Burnout Revenge', 4, 'racing', 2008, 'yes');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Fable II', 4, 'rpg', 2008, 'no');
INSERT INTO games (title, gameSystemId, genre, yearReleased, multiplayer) VALUES ('Laura Croft: Tomb Raider', 4, 'action/adventure', 2013, 'yes');
