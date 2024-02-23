import CategoriesList from '@/app/ui/categories/categoriesList';
import { Metadata } from 'next';
// import { getCategories } from '../lib/data';


export const metadata: Metadata = {
  title: 'Categories',
};

export default async function Page() {

// const categories = await getCategories();
let categories: Array<any> = [
	{
		category_id: 1,
		name: 'Books',
	},
	{
		category_id: 2,
		name: 'Movies',
	},
	{
		category_id: 3,
		name: 'TV Shows',
	},
	// {
	// 	category_id: 4,
	// 	name: 'Video Games',
	// },
	// {
	// 	category_id: 5,
	// 	name: 'Card Games',
	// },
	// {
	// 	category_id: 6,
	// 	name: 'Board Games',
	// },
	// {
	// 	category_id: 7,
	// 	name: 'Music',
	// },
	// {
	// 	category_id: 8,
	// 	name: 'Websites',
	// },
];

return (
	<main className='p-8 col-span-full'>
		<h2 className='text-center'>My Bookshelf</h2>
		<div className='flex flex-col items-center gap-4'>
			<div className='py-4'>
				<CategoriesList categories={categories}/>
			</div>
		</div>
	</main>
);
}