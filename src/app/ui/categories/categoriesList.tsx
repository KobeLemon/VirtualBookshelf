import CategoryCard from './categoryCard';
import { Category } from '@/app/lib/definitions';

export default function CategoriesList({ categories }: { categories: Category[] }) {
	if (categories.length == 0) {
		return <h3>No Categories yet</h3>;
	} else {
		return (
			<>
				<ul className='grid grid-cols-4 gap-10 border rounded-md p-10 mt-5'>
					{categories.map((category: Category) => (
						<CategoryCard
							key={category.category_id}
							category_id={category.category_id}
							name={category.name}
						/>
					))}
				</ul>
			</>
		);
	}
}
