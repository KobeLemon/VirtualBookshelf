import { Metadata } from 'next';
import IndividualTVShowCard from '@/app/ui/tv-shows/individualTVShowCard';
import { getTVShowById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Individual Tvshow',
};

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [tvshow] = await Promise.all([
    getTVShowById(id),
  ]);

	if (!tvshow) {
		notFound();
	}

	return (
		<main className='p-8 col-span-full'>
			{/* <h2 className='text-center'>My Tvshows</h2>
			<Link href={'/main/categories'}>← Back to Categories</Link> */}
			<IndividualTVShowCard
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
		</main>
	);
}
