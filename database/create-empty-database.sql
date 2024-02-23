-- VirtualBookshelf Database Initial Creation

DROP TABLE IF EXISTS public.website;
DROP TABLE IF EXISTS public.board_game;
DROP TABLE IF EXISTS public.card_game;
DROP TABLE IF EXISTS public.video_game;
DROP TABLE IF EXISTS public.music;
DROP TABLE IF EXISTS public.tvshow;
DROP TABLE IF EXISTS public.movie;
DROP TABLE IF EXISTS public.book;
DROP TABLE IF EXISTS public.genre;
DROP TABLE IF EXISTS public.category;
DROP TABLE IF EXISTS public.user;

-- -----------------------------------------------------
-- Create Type
-- -----------------------------------------------------

DROP TYPE IF EXISTS public.book_type;
CREATE TYPE public.book_type AS ENUM
  ('Paper', 'Digital', 'Audiobook', 'Other');


DROP TYPE IF EXISTS public.movie_type;
CREATE TYPE public.movie_type AS ENUM
  ('DVD', 'Blu-Ray', 'Digital', 'VHS', 'Other');


DROP TYPE IF EXISTS public.tvshow_type;
CREATE TYPE public.tvshow_type AS ENUM
  ('DVD', 'Blu-Ray', 'Digital', 'VHS', 'Other');


DROP TYPE IF EXISTS public.music_type;
CREATE TYPE public.music_type AS ENUM
  ('CD', 'Digital', '8-Track', 'Vinyl', 'Other');


DROP TYPE IF EXISTS public.video_game_type;
CREATE TYPE public.video_game_type AS ENUM
  ('Disc', 'Digital', 'External Drive', 'Other');


-- -----------------------------------------------------
-- Table public.user
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user (
  "user_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "email" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL
);


-- -----------------------------------------------------
-- Table public.category
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.category (
  "category_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL
);


-- -----------------------------------------------------
-- Table public.genre
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.genre (
  "genre_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL
);


-- -----------------------------------------------------
-- Table public.book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.book (
  "book_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "author" CHARACTER VARYING NOT NULL,
  "publisher" CHARACTER VARYING NOT NULL,
  "format" book_type NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_book_user"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_book_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.movie
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.movie (
  "movie_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "director" CHARACTER VARYING NOT NULL,
  "distributor" CHARACTER VARYING NOT NULL,
  "format" movie_type NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_movie_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_movie_user1"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.tvshow
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tvshow (
  "tvshow_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "network" CHARACTER VARYING NOT NULL,
  "format" tvshow_type NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_tvshow_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_tvshow_user1"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.video_game
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.video_game (
  "video_game_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "developer" CHARACTER VARYING NOT NULL,
  "publisher" CHARACTER VARYING NOT NULL,
  "format" video_game_type NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_video_game_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_video_game_user1"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.card_game
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.card_game (
  "card_game_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "developer" CHARACTER VARYING NOT NULL,
  "publisher" CHARACTER VARYING NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_card_game_category11"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_card_game_user11"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.board_game
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.board_game (
  "board_game_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "developer" CHARACTER VARYING NOT NULL,
  "publisher" CHARACTER VARYING NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_board_game_category12"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_board_game_user12"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.music
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.music (
  "music_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "artist" CHARACTER VARYING NOT NULL,
	"album" CHARACTER VARYING NOT NULL,
  "studio" CHARACTER VARYING NOT NULL,
  "format" music_type NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_music_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_music_user1"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table public.website
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.website (
  "website_id" CHARACTER VARYING NOT NULL PRIMARY KEY,
  "name" CHARACTER VARYING NOT NULL,
  "url" CHARACTER VARYING NOT NULL,
  "description" CHARACTER VARYING NOT NULL,
  "creator" CHARACTER VARYING NOT NULL,
  "image" CHARACTER VARYING NOT NULL,
  "category_id" CHARACTER VARYING NOT NULL,
  "user_id" CHARACTER VARYING NOT NULL,
  CONSTRAINT "fk_website_category1"
    FOREIGN KEY ("category_id")
    REFERENCES public.category ("category_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_website_user1"
    FOREIGN KEY ("user_id")
    REFERENCES public.user ("user_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

