import { Metadata } from 'next';
import IndividualBookCard from '@/app/ui/books/individualBookCard';
import { getBookById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Individual Book',
};

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [book] = await Promise.all([
    getBookById(id),
  ]);

	if (!book) {
		notFound();
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
