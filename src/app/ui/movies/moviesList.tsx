import CategoryMovieCard from './categoryMovieCard';
import { Movie } from '@/app/lib/definitions';

export default function MoviesList({ movies }: { movies: Movie[] }) {
	if (movies.length == 0) {
		return <h3 className='text-center border rounded p-10'>No Movies yet</h3>;
	} else {
		return (
			<>
				<ul className='grid grid-cols-4 gap-y-10 border rounded p-10'>
					{movies.map((movie: Movie) => (
						<CategoryMovieCard
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
					))}
				</ul>
			</>
		);
	}
}
