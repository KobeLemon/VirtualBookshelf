import CategoryBookCard from './categoryBookCard';
import { Book } from '@/app/lib/definitions';

export default function BooksList({ books }: { books: Book[] }) {
	if (books.length == 0) {
		return <h3 className='text-center border rounded p-10'>No Books yet</h3>;
	} else {
		return (
			<>
				<ul className='grid grid-cols-4 gap-y-10 border rounded p-10'>
					{books.map((book: Book) => (
						<CategoryBookCard
							key={book.book_id}
							book_id={book.book_id}
							name={book.name}
							description={book.description}
							image={book.image}
							author={book.author}
							publisher={book.publisher}
							category_id={book.category_id}
							user_id={book.user_id}
						/>
					))}
				</ul>
			</>
		);
	}
}
