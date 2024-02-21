import { Metadata } from 'next';
import IndividualMovieCard from '@/app/ui/movies/individualMovieCard';

export const metadata: Metadata = {
	title: 'Individual movie',
};

export default async function Page() {

	// const movie = await getmovieByID();
	const movie = {
		movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    distributor: 'Paramount Pictures',
		format: 'DVD',
    category_id: 2,
    user_id: 1
	}

	return (
		<main className='p-8 col-span-full'>
			<IndividualMovieCard
				key={movie.movie_id}
				movie_id={movie.movie_id}
				name={movie.name}
				description={movie.description}
				image={movie.image}
				director={movie.director}
				distributor={movie.distributor}
				format={movie.format}
				category_id={movie.category_id}
				user_id={movie.user_id}
			/>
		</main>
	);
}
