import Link from 'next/link';
import { Metadata } from 'next';
import IndividualBookCard from '@/app/ui/books/individualBookCard';

export const metadata: Metadata = {
	title: 'Individual Book',
};

export default async function Page() {

	// const book = await getBookByID();
	const book = {
		book_id: 1,
    name: 'The Lord of The Rings: Fellowship of the Ring',
    description: 'In "The Fellowship of the Ring," Frodo Baggins inherits the One Ring, setting off a perilous quest to destroy it. Joined by a diverse group, the Fellowship faces trials, betrayal, and the growing threat of Sauron. Through courage and sacrifice, they confront evil while forging unbreakable bonds of friendship.',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
    author: 'J.R.R. Tolkien',
		publisher: 'Allen & Unwin',
		format: 'Paper',
    category_id: 1,
    user_id: 1
	}

	return (
		<main className='p-8 col-span-full'>
			{/* <h2 className='text-center'>My Books</h2>
			<Link href={'/main/categories'}>← Back to Categories</Link> */}
			<IndividualBookCard
				key={book.book_id}
				book_id={book.book_id}
				name={book.name}
				description={book.description}
				image={book.image}
				author={book.author}
				publisher={book.publisher}
				format={book.format}
				category_id={book.category_id}
				user_id={book.user_id}
			/>
		</main>
	);
}
