export type User = {
	user_id: string; // PRIMARY KEY | NOT NULL
	name: string; // NOT NULL
	email: string; // NOT NULL
	image: string; // NOT NULL
}

export type Book = {
  book_id: number; // PRIMARY KEY | NOT NULL
  name: string; // NOT NULL
  description: string; // CAN BE NULL
  image: string; // CAN BE NULL
	author: string // NOT NULL
	publisher: string // CAN BE NULL
	format: string;
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number; // FOREIGN KEY | NOT NULL
};

export type Movie = {
	movie_id: number; // PRIMARY KEY | NOT NULL
  name: string; // NOT NULL
  description: string; // CAN BE NULL
  image: string; // CAN BE NULL
	director: string; // CAN BE NULL
	distributor: string; // CAN BE NULL
	format: string;
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number; // FOREIGN KEY | NOT NULL
};

export type TVShow = {
  tv_id: number; // PRIMARY KEY | NOT NULL
  name: string; // NOT NULL
  description: string; // CAN BE NULL
  image: string; // CAN BE NULL
	network: string; // CAN BE NULL
	format: string;
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number; // FOREIGN KEY | NOT NULL
};

export type Game = {
  game_id: number; // PRIMARY KEY | NOT NULL
  name: string; // NOT NULL
  description: string; // CAN BE NULL
  image: string; // CAN BE NULL
	developer: string; // CAN BE NULL
	publisher: string; // CAN BE NULL
	format: string;
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number; // FOREIGN KEY | NOT NULL
};

export type Music = {
	music_id: number; // PRIMARY KEY | NOT NULL
	name: string; // NOT NULL
	description: string; // CAN BE NULL
	image: string; // CAN BE NULL
	artist: string; // CAN BE NULL
	studio: string; // CAN BE NULL
	format: string;
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number // FOREIGN KEY | NOT NULL
}

export type Website = {
  website_id: number; // PRIMARY KEY | NOT NULL
  name: string; // NOT NULL
	url: string; // NOT NULL
  description: string; // CAN BE NULL
	creator: string; // CAN BE NULL
  image: string; // CAN BE NULL
	category_id: number; // FOREIGN KEY | NOT NULL
	user_id: number; // FOREIGN KEY | NOT NULL
};

export type Category = {
    category_id: number; // PRIMARY KEY | NOT NULL
    name: string; // NOT NULL
  };

export type Genre = {
    genre_id: number; // PRIMARY KEY | NOT NULL
    name: string; // NOT NULL
  }