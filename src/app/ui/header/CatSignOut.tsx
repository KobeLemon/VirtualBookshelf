'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function CatSignOut() {
	const { data: session } = useSession();

	if (session) {
		console.log(session);
		return (
			<>
				<div className="flex flex-col">
					<button
						// className="text-sm border-b-[1px] pb-2"
						className="text-sm"
						onClick={() => { signOut({ callbackUrl: '/' }) }}>
							Sign Out
					</button>
					{/* <Link className="text-sm pt-2" href={'/main/profile'}>Go to Profile</Link> */}
				</div>
				<p>|</p>
			</>
		);
	}
}
