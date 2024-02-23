'use server'
import { createUser } from "@/app/lib/actions";
import { randomUUID } from 'crypto';
const bcrypt = require('bcrypt');

export async function POST(req:Request){
    if(req.method !== 'POST'){
        return new Response(JSON.stringify({ message: 'Method Not Allowed' }),{
            status:500,
            statusText:'Internal Server Error',
            headers: {
            'Content-Type': 'application/json',
            }
        });
    }
    const {User} = await req.json();

		const newUser = {
			// user_id: randomUUID(),
			user_id: '2',
			name: User.user.name,
			email: User.user.email,
			image: User.user.image
		}

    try {
			console.log('newUser:', newUser);
			await createUser(newUser);

			return new Response(JSON.stringify({ message: 'User was created.' }),{
					status:200,
					statusText:'OK',
					headers: {
					'Content-Type': 'application/json',
					}
			})

	} catch(error){
			console.error('Error creating user profile:', error);
			return new Response(JSON.stringify({ message: 'User failed to be created.' }),{
					status:500,
					statusText:'INTERNAL SERVER ERROR',
					headers: {
					'Content-Type': 'application/json',
					}
			})
	}
}