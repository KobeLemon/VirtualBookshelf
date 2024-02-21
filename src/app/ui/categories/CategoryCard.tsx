import Link from 'next/link';
import { Category } from '@/app/lib/definitions';

export default function CategoryCard({ name }: Category) {
	const formattedName = name.trim().toLowerCase().replace(/\s/g, "-");

	return (
		<Link className='flex flex-col align-center justify-center border-2 p-10 text-center' href={`/main/${formattedName}`}>
			<li>
				<h3 className='m-0'>{name}</h3>
			</li>
		</Link>
	);
}
