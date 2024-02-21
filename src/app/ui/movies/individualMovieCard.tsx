import Image from 'next/image';
import { Movie } from '@/app/lib/definitions';
import Link from 'next/link';

export default function IndividualMovieCard({ name, description, image, director, distributor,format}: Movie) {
	return (
		<>
			<div className='flex justify-center gap-10'>
				<Image src={image} alt={`Cover art of ${name}`} width={150} height={250} />
				<div className='flex flex-col gap-2 items-center justify-center text-center'>
					<h2 className='text-2xl text-center m-0'>{name}</h2>
					<p>Directed by {director}</p>
					<p>Distributed by {distributor}</p>
					<p>Format: {format}</p>
				</div>
			</div>
			<Link href={'/main/movies'}>← Back to Movies</Link>
			<p className='border-t-2 mt-5 pt-5'>{description}</p>
		</>

	);
}
