'use client';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomeAuthButton() {
	const { data: session } = useSession();

	if (session) {
		console.log(session);
		return (
			<>
				<h3>You&apos;re signed in!</h3>
				<div className="flex gap-5">
					<button
						className="m-10 p-5 w-fit text-xl bg-black text-white rounded"
						onClick={() => signOut( { callbackUrl: '/' } )}>
							Click here to sign out!
					</button>

					<Link
						className="m-10 p-5 w-fit text-xl bg-black text-white rounded"
						href="/main/categories">
							Click here to go to your Bookshelf!
					</Link>
				</div>
			</>
		);
	} else {
		return (
			<button
				className="m-10 p-5 w-fit text-xl bg-black text-white rounded"
				onClick={() => signIn('google', { callbackUrl: '/main/profile' }) }>
					Click here to login with Google!
			</button>
		);
	}
}
