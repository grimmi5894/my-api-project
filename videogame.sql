CREATE DATABASE videogames;

CREATE USER 'videogames'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';

GRANT ALL ON videogames.* TO 'videogames'@'localhost';

USE videogames;

CREATE TABLE systems (
  id INT auto_increment,
  gameSystem VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE games (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  yearReleased INT NOT NULL,
  multiplayer VARCHAR(255) NOT NULL,
  systemId INT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY(systemId) REFERENCES systems(id)
);

INSERT INTO systems (gameSystem) VALUES ('Nintendo');
INSERT INTO systems (gameSystem) VALUES ('Super Nintendo');
INSERT INTO systems (gameSystem) VALUES ('Playstation');
INSERT INTO systems (gameSystem) VALUES ('Xbox 360');


INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Super Mario Bros', 'action/adventure', 1985, 'yes', 1);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Final Fantasy', 'rpg', 1990, 'no', 1);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Donkey Kong', 'action/adventure', 1986, 'no', 1);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Dr. Mario', 'puzzles/strategy', 1990, 'yes', 1);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Dragon Warrior', 'rpg', 1989, 'no', 1);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Super Mario World', 'platform', 1991, 'yes', 2);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Final Fantasy 2', 'rpg', 1991, 'yes', 2);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Monopoly', 'board game', 1991, 'yes', 2);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Kirbys Dreamland 3', 'platform', 1997, 'yes', 2);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Secret of Mana', 'rpg', 1993, 'no', 2);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Final Fantasy VII', 'rpg', 1997, 'no', 3);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Tomb Raider', 'action/adventure', 1996, 'no', 3);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Tony Hawks Pro Skater 2', 'sports', 2000, 'yes', 3);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Tekken', 'fighting', 1995, 'yes', 3);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Bioshock', 'first person shooter', 2007, 'no', 4);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Rock Band', 'rhythm game', 2007, 'yes', 4);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Burnout Revenge', 'racing', 2008, 'yes', 4);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Fable II', 'rpg', 2008, 'no', 4);
INSERT INTO games (title, genre, yearReleased, multiplayer, systemId) VALUES ('Laura Croft: Tomb Raider', 'action/adventure', 2013, 'yes', 4);
