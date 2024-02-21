import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/app/lib/definitions';

export default function CategoryBookCard({book_id, name, image}: Book) {
	return (
			<Link className='border-b-2 pb-5' href={`/main/books/${book_id}`}>
				<li className='flex flex-col items-center gap-2'>
					<Image src={image} alt={`Cover art of ${name}`} width={150} height={250} />
					<p className='w-6/12 text-center'>
						{name}
					</p>
				</li>
			</Link>
	);
}
