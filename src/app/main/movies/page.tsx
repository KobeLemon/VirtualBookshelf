import MoviesList from '@/app/ui/movies/moviesList';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Movies',
};

export default async function Page() {

// const movies = await getMoviesByUserID();
let movies: Array<any> = [
	{
    movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 2,
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    director: 'Francis Ford Coppola',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
	{
    movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 2,
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    director: 'Francis Ford Coppola',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
	{
    movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 2,
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    director: 'Francis Ford Coppola',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
	{
    movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 2,
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    director: 'Francis Ford Coppola',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
  },
];

	return (
		<main className='p-8 col-span-full'>
			<h2 className='text-center'>My Movies</h2>
			<Link href={'/main/categories'}>← Back to Categories</Link>
			<MoviesList movies={movies}/>
		</main>
	);
}
