import Image from 'next/image';
import { Book } from '@/app/lib/definitions';
import Link from 'next/link';

export default function IndividualBookCard({ book_id, name, description, image, author, publisher, format, category_id, user_id }: Book) {
	return (
		<>
			<div className='flex justify-center gap-10'>
				<Image className='rounded-md shadow-[0_0_10px_rgba(0,0,0,0.8);]' src={image} alt={`Cover art of ${name}`} width={200} height={300} />
				<div className='flex flex-col gap-2 items-center justify-center text-center'>
					<h2 className='text-2xl text-center m-0'>{name}</h2>
					<p>Written by {author}</p>
					<p>Published by {publisher}</p>
					<p>Format: {format}</p>
				</div>
			</div>
			<Link href={`/main/categories/${category_id}`}>← Back to Books</Link>
			<p className='border-t-2 mt-5 pt-5'>{description}</p>
		</>
	);
}
