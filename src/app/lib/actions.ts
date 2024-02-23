import * as crypto from 'crypto';
import { sql } from '@vercel/postgres';
import { User, Book, Movie, TVShow, Game, Music, Website, Category, Genre } from './definitions';
export const runtime = 'edge';

export async function deleteItemById(itemID: string, tableName: string) {
	try {
		await sql`DELETE FROM public.${tableName} WHERE ${tableName}_id = ${itemID}`;
	} catch (error: any) {
		console.log('error occurred');
		console.error(error);
	}
}

export async function editUser(user: User) {
	try {
		await sql`
			UPDATE user
				SET
					name = ${user.name},
					email = ${user.email},
					image = ${user.image}
				WHERE user_id = ${user.user_id};`;
	} catch (error) {
		console.log('error occurred');
		console.error(error);
	}
}

export async function createUser(user : User) {
	console.log(user);
	try {
		await sql`
			INSERT INTO public.user
				VALUES (${user.user_id}, ${user.name}, ${user.email}, ${user.image});
			`;
	} catch (error) {
		console.error(error);
		// If a database error occurs, return a more specific error.
		await deleteItemById(user.user_id, 'user');
		console.log(`User was deleted`);
		return {
			message: `Database Error: Failed to Create User.`,
		};
	}
}

export async function createBook(book : Book) {
	console.log(book);
	try {
		await sql`
			INSERT INTO public.book
				VALUES (${book.book_id}, ${book.name}, ${book.description}, ${book.image}, ${book.author}, ${book.publisher}, ${book.format}, ${book.category_id}, ${book.user_id});
			`;
	} catch (error) {
		console.error(error);
		// If a database error occurs, return a more specific error.
		await deleteItemById(book.book_id, 'book');
		console.log(`Book: ${book.name} was deleted`);
		return {
			message: `Database Error: Failed to Create Book: ${book.name}.`,
	}
}}

export async function createMovie(movie : Movie) {
	console.log(movie);
	try {
		await sql`
			INSERT INTO public.movie
				VALUES (${movie.movie_id}, ${movie.name}, ${movie.description}, ${movie.image}, ${movie.director}, ${movie.distributor},${movie.format}, ${movie.category_id}, ${movie.user_id});
			`;
	} catch (error) {
		console.error(error);
		// If a database error occurs, return a more specific error.
		await deleteItemById(movie.movie_id, 'movie');
		console.log(`Movie: ${movie.name} was deleted`);
		return {
			message: `Database Error: Failed to Create Movie: ${movie.name}.`,
	}
}}

export async function createTvshow(tvshow : TVShow) {
	console.log(tvshow);
	try {
		await sql`
			INSERT INTO public.tvshow
				VALUES (${tvshow.tvshow_id}, ${tvshow.name}, ${tvshow.description}, ${tvshow.image}, ${tvshow.network}, ${tvshow.format}, ${tvshow.category_id}, ${tvshow.user_id});
			`;
	} catch (error) {
		console.error(error);
		// If a database error occurs, return a more specific error.
		await deleteItemById(tvshow.tvshow_id, 'tvshow');
		console.log(`TVShow: ${tvshow.name} was deleted`);
		return {
			message: `Database Error: Failed to Create TVShow: ${tvshow.name}.`,
		};
	}
}
