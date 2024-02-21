import Image from 'next/image';
import { Book } from '@/app/lib/definitions';
import Link from 'next/link';

export default function IndividualBookCard({ name, description, image, author, publisher, format }: Book) {
	return (
		<>
			<div className='flex justify-center gap-10'>
				<Image src={image} alt={`Cover art of ${name}`} width={150} height={250} />
				<div className='flex flex-col gap-2 items-center justify-center text-center'>
					<h2 className='text-2xl text-center m-0'>{name}</h2>
					<p>Written by {author}</p>
					<p>Published by {publisher}</p>
					<p>Format: {format}</p>
				</div>
			</div>
			<Link href={'/main/books'}>← Back to Books</Link>
			<p className='border-t-2 mt-5 pt-5'>{description}</p>
		</>

	);
}
