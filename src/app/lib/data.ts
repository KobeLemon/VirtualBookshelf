import { sql } from '@vercel/postgres';
import {
	User,
	Book,
	Movie,
	TVShow,
	Game,
	Music,
	Website,
	Category,
	Genre
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUserByEmail(email:string) {
  noStore();
  try {
		let response;
    const user = await sql`SELECT user_id, email FROM public.user WHERE email=${email}`;
		if (user.rows.length > 0 ) {
			response = user.rows[0] as User;
		} else {
			response = false;
		}
		return response;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getIDNameImageByBookID() {
	noStore();
	try {
      const items = await sql`SELECT book_id, name, image FROM public.book;`

      const results = items.rows;

      const processed = results.map(item => {
				return item as Book;
			});

			return processed as Array<Book>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getIDNameImageByMovieID() {
	noStore();
	try {
      const items = await sql`SELECT movie_id, name, image FROM public.movie;`

      const results = items.rows;

      const processed = results.map(item => {
				return item as Movie;
			});

			return processed as Array<Movie>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getIDNameImageByTVShowID() {
	noStore();
	try {
      const items = await sql`SELECT tvshow_id, name, image FROM public.tvshow;`

      const results = items.rows;

      const processed = results.map(item => {
				return item as TVShow;
			});

			return processed as Array<TVShow>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getIDNameImageByGameID(tableName: string) {
	noStore();
	try {
      const items = await sql`SELECT ${tableName}_id, name, image FROM public.${tableName};`

      const results = items.rows;

      const processed = results.map(item => {
				return item as Game;
			});

			return processed as Array<Game>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getIDNameImageByMusicID() {
	noStore();
	try {
      const items = await sql`SELECT music_id, name, image FROM public.music;`

      const results = items.rows;

      const processed = results.map(item => {
				return item as Music;
			});

			return processed as Array<Music>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getIDNameImageByWebsiteID() {
	noStore();
	try {
      const items = await sql`SELECT website_id, name, image FROM public.website;`

      const results = items.rows;

      const processed = results.map(item => {
				return item as Website;
			});

			return processed as Array<Website>;

  } catch (error) {
      console.error('Failed to fetch item:', error);
      throw new Error('Failed to fetch item.');
  }
}

export async function getBookById(id: string){
  noStore();
  try {
		const book = await sql`SELECT * FROM public.book WHERE book_id=${id};`
		const bookItem = book.rows[0];
    return bookItem as Book;
  } catch (error) {
    console.error('Failed to fetch book:', error);
    throw new Error('Failed to fetch book.');
  }
}

export async function getMovieById(id: string){
  noStore();
  try {
		const movie = await sql`SELECT * FROM public.movie WHERE movie_id=${id};`
		const movieItem = movie.rows[0];
    return movieItem as Movie;
  } catch (error) {
    console.error('Failed to fetch movie:', error);
    throw new Error('Failed to fetch movie.');
  }
}

export async function getTVShowById(id: string){
  noStore();
  try {
		const tvshow = await sql`SELECT * FROM public.tvshow WHERE tvshow_id=${id};`
		const tvshowItem = tvshow.rows[0];
    return tvshowItem as TVShow;
  } catch (error) {
    console.error('Failed to fetch tvshow:', error);
    throw new Error('Failed to fetch tvshow.');
  }
}

export async function getGameById(id: string, tableName: string){
  noStore();
  try {
		const game = await sql`SELECT * FROM public.${tableName} WHERE ${tableName}_id=${id};`
		const gameItem = game.rows[0];
    return gameItem as Game;
  } catch (error) {
    console.error(`Failed to fetch ${tableName}:`, error);
    throw new Error(`Failed to fetch ${tableName}.`);
  }
}

export async function getMusicById(id: string){
  noStore();
  try {
		const music = await sql`SELECT * FROM public.music WHERE music_id=${id};`
		const musicItem = music.rows[0];
    return musicItem as Music;
  } catch (error) {
    console.error('Failed to fetch music:', error);
    throw new Error('Failed to fetch music.');
  }
}

export async function getWebsiteById(id: string){
  noStore();
  try {
		const website = await sql`SELECT * FROM public.website WHERE website_id=${id};`
		const websiteItem = website.rows[0];
    return websiteItem as Website;
  } catch (error) {
    console.error('Failed to fetch website:', error);
    throw new Error('Failed to fetch website.');
  }
}