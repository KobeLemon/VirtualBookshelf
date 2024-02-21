'use client';
import Link from "next/link";
import Logo from "@/app/ui/header/logo";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
	// const { data: session } = useSession();

	// if (session) {
		// console.log(session);
	// 	return (
	// 		<>
	// 			<div className="flex gap-5">
	// 				<button onClick={() => signOut()}>Sign Out</button>
	// 				<p>|</p>
	// 				<a href="/">Go to my Bookshelf</a>
	// 			</div>
	// 		</>
	// 	);
	// } else {
	// 	return (
	// 		<>
	// 			<div className="flex gap-5">
	// 				<button onClick={() => signIn() }>Sign In</button>
	// 			</div>
	// 		</>
	// 	);
	// }
}

export default function Nav() {
    return (
			<header className="bg-light-grayish-blue col-span-full">
				<nav className="flex justify-between h-full items-center">
					<Logo/>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/books">Books</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/movies">Movies</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/tv-shows">TV Shows</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/video-games">Video Games</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/card-games">Card Games</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/board-games">Board Games</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/music">Music</Link>

					<p>|</p>

					<Link className="text-xs hover:underline underline-offset-4" href="/main/websites">Websites</Link>

					<p>|</p>

					{/* <div className="flex me-5 gap-5 justify-around md:me-10 md:gap-10"> */}
							{/* <AuthButton/> */}
					{/* </div> */}

				</nav>
			</header>
    )
}