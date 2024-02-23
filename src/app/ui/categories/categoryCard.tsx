import Link from 'next/link';
import { Category } from '@/app/lib/definitions';

export default function CategoryCard({category_id, name }: Category) {
	const formattedName = name.trim().toLowerCase().replace(/\s/g, "-");

	return (
		<Link className='rounded-md flex flex-col align-center justify-center border-2 p-10 text-center' href={`/main/categories/${category_id}`}>
			<li>
				<h3 className='m-0'>{name}</h3>
			</li>
		</Link>
	);
}
