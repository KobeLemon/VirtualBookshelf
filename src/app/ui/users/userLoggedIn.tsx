import { notFound } from 'next/navigation';
import { getUserById, getCategories, getItemsByUser } from '../../lib/data';
import UserProfileEdit from '../../ui/users/userProfileEdit';
import CreateItemButton from '@/app/ui/items/itemContainerButton';
import ItemListEdit from '@/app/ui/items/ItemListEdit';

export default async function UserLoggedIn({ params }: { params: { id: string } }) {
	const id = params.id;
	const items = await getItemsByUser(id);
	const categories = await getCategories()
	const [user] = await Promise.all([
    getUserById(id),
  ]);

	if (!user) {
		notFound();
	}

  return (
    <main className='relative'>
			<UserProfileEdit

				key={user.id}

				id={user.id}

				name={user.name}

				pictures={user.pictures}

				description={user.description}

				collection=""

			/>

			<div className="border-t-2 p-5">
				<h3 className="text-center mb-1 p-5">Your Items</h3>
				<CreateItemButton id={user.id} collection={user.collection} categories={categories}/>
				<ItemListEdit items={items} categories={categories}/>
			</div>
    </main>
  );
}