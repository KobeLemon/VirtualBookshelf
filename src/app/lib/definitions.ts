export type User = {
	user_id: string;
	name: string;
	email: string;
	image: string;
}

export type Book = {
  book_id: string;
  name: string;
  description: string;
  image: string;
	author: string
	publisher: string
	format: string;
	category_id: string;
	user_id: string;
};

export type Movie = {
	movie_id: string;
  name: string;
  description: string;
  image: string;
	director: string;
	distributor: string;
	format: string;
	category_id: string;
	user_id: string;
};

export type TVShow = {
  tvshow_id: string;
  name: string;
  description: string;
  image: string;
	network: string;
	format: string;
	category_id: string;
	user_id: string;
};

export type Game = {
  game_id: string;
  name: string;
  description: string;
  image: string;
	developer: string;
	publisher: string;
	format: string;
	category_id: string;
	user_id: string;
};

export type Music = {
	music_id: string;
	name: string;
	description: string;
	image: string;
	artist: string;
	studio: string;
	format: string;
	category_id: string;
	user_id: string
}

export type Website = {
  website_id: string;
  name: string;
	url: string;
  description: string;
	creator: string;
  image: string;
	category_id: string;
	user_id: string;
};

export type Category = {
    category_id: string;
    name: string;
  };

export type Genre = {
    genre_id: string;
    name: string;
  }