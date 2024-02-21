export type User = {
	user_id: string;
	name: string;
	email: string;
	image: string;
}

export type Book = {
  book_id: number;
  name: string;
  description: string;
  image: string;
	author: string
	publisher: string
	format: string;
	category_id: number;
	user_id: number;
};

export type Movie = {
	movie_id: number;
  name: string;
  description: string;
  image: string;
	director: string;
	distributor: string;
	format: string;
	category_id: number;
	user_id: number;
};

export type TVShow = {
  tv_id: number;
  name: string;
  description: string;
  image: string;
	network: string;
	format: string;
	category_id: number;
	user_id: number;
};

export type Game = {
  game_id: number;
  name: string;
  description: string;
  image: string;
	developer: string;
	publisher: string;
	format: string;
	category_id: number;
	user_id: number;
};

export type Music = {
	music_id: number;
	name: string;
	description: string;
	image: string;
	artist: string;
	studio: string;
	format: string;
	category_id: number;
	user_id: number
}

export type Website = {
  website_id: number;
  name: string;
	url: string;
  description: string;
	creator: string;
  image: string;
	category_id: number;
	user_id: number;
};

export type Category = {
    category_id: number;
    name: string;
  };

export type Genre = {
    genre_id: number;
    name: string;
  }