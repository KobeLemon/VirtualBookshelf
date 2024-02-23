import { Metadata } from 'next';
import IndividualMovieCard from '@/app/ui/movies/individualMovieCard';
import { getMovieById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Individual movie',
};

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [movie] = await Promise.all([
    getMovieById(id),
  ]);

	if (!movie) {
		notFound();
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
