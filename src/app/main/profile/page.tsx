'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Profile() {
	const [userExists, setUserExists] = useState();
	const { data: session } = useSession();

	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await fetch('/api/getUser', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(session?.user?.email) });
				const response = await user.json();
				if (!response) {
					try {
						console.log(response);
						await fetch('/api/createUser', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({ User: session }),
						});
						setUserExists(response);
						router.push('/main/categories');
					} catch (error: any) {
						console.error({ message: 'Error: could not create new user.' });
					}
				} else {
					console.log(response);
					router.push('/main/categories');
				}
			} catch (error) {
				console.error('Failed to fetch data', error);
			}
		};

		fetchData();
	}, [router, session]);

	return (
		userExists ? (
		router.push('/main/categories')
	) : (
		// <h1 className='text-center pt-10 col-span-full'>User Exists</h1>
		<h1 className='text-center pt-10 col-span-full'>Loading...</h1>
	)
	)
}
