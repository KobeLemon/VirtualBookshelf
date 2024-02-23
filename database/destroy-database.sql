-- THE DATABASE ITSELF WILL STILL EXIST, BUT THIS FILE WILL
--   COMPLETELY DESTROY ALL DATA INSIDE OF THE DATABASE

-- VirtualBookshelf Drop Tables

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
-- Drop Types
-- -----------------------------------------------------

DROP TYPE IF EXISTS public.book_type;
DROP TYPE IF EXISTS public.movie_type;
DROP TYPE IF EXISTS public.tvshow_type;
DROP TYPE IF EXISTS public.music_type;
DROP TYPE IF EXISTS public.video_game_type;