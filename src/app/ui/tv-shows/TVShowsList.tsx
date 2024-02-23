import CategoryTVShowCard from './categoryTVShowCard';
import { TVShow } from '@/app/lib/definitions';

export default function TVShowsList({ tvshows }: { tvshows: TVShow[] }) {
	if (tvshows.length == 0) {
		return <h3 className='text-center border rounded p-10'>No TVShows yet</h3>;
	} else {
		return (
			<>
				<ul className='grid grid-cols-4 gap-y-10 border rounded p-10 mt-5'>
					{tvshows.map((tvshow: TVShow) => (
						<CategoryTVShowCard
							key={tvshow.tvshow_id}
							tvshow_id={tvshow.tvshow_id}
							name={tvshow.name}
							description={tvshow.description}
							image={tvshow.image}
							network={tvshow.network}
							format={tvshow.format}
							category_id={tvshow.category_id}
							user_id={tvshow.user_id}
						/>
					))}
				</ul>
			</>
		);
	}
}
