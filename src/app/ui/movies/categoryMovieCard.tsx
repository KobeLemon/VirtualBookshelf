import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/app/lib/definitions';

export default function CategoryMovieCard({ movie_id, name, image }: Movie) {
	return (
		<Link className='border-b-2 pb-5' href={`/main/movies/${movie_id}`}>
			<li className='grid grid-rows-[300px_90px] items-center justify-center justify-items-center'>
				<Image className='rounded-md shadow-[0_0_10px_rgba(0,0,0,0.8);]' src={image} alt={`Cover art of ${name}`} width={150} height={250} />
				<p className='flex items-center justify-center border-t-2 text-balance text-center p-2 h-24 w-11/12'>{name}</p>
			</li>
		</Link>
	);
}
