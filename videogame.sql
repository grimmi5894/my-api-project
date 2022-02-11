CREATE DATABASE videogames;

CREATE USER 'videogames'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';

GRANT ALL ON videogames.* TO 'videogames'@'localhost';

USE videogames;

CREATE TABLE games (
  id INT auto_increment,
  title VARCHAR(255), NOT NULL,
  gameSystem VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  yearReleased INT, NOT NULL,
  multiplayer VARCHAR(255) NOT NULL,
);

INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Super Mario Bros', 'Nintendo', 'action/adventure', 1985, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Final Fantasy', 'Nintendo', 'rpg', 1990, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Donkey Kong', 'Nintendo', 'action/adventure', 1986, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Dr. Mario', 'Nintendo', 'puzzles/strategy', 1990, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Dragon Warrior', 'Nintendo', 'rpg', 1989, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Super Mario World', 'Super Nintendo', 'platform', 1991, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Final Fantasy 2', 'Super Nintendo', 'rpg', 1991, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Monopoly', 'Super Nintendo', 'board game', 1991, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Kirbys Dreamland 3', 'Super Nintendo', 'platform', 1997, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Secret of Mana', 'Super Nintendo', 'rpg', 1993, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Final Fantasy VII', 'Playstation', 'rpg', 1997, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Tomb Raider', 'Playstation', 'action/adventure', 1996, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Tony Hawks Pro Skater 2', 'Playstation', 'sports', 2000, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Tekken', 'Playstation', 'fighting', 1995, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Bioshock', 'Xbox 360', 'first person shooter', 2007, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Rock Band', 'Xbox 360', 'rhythm game', 2007, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Burnout Revenge', 'Xbox 360', 'racing', 2008, 'yes');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Fable II', 'Xbox 360', 'rpg', 2008, 'no');
INSERT INTO games (title, gameSystem, genre, yearReleased, multiplayer) VALUES ('Laura Croft: Tomb Raider', 'Xbox 360', 'action/adventure', 2013, 'yes');
