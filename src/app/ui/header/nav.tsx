'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/app/ui/header/logo';
import CatSignOut from './CatSignOut';

export default function Nav() {
	return (
		<header className='bg-light-grayish-blue col-span-full'>
			<nav className='flex justify-around h-full items-center'>
				<Logo />

				<p>|</p>

				<CatSignOut/>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/1'>
					Books
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/2'>
					Movies
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/3'>
					TV Shows
				</Link>

				{/* <p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/4'>
					Video Games
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/5'>
					Card Games
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/6'>
					Board Games
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/7'>
					Music
				</Link>

				<p>|</p>

				<Link className='text-sm hover:underline underline-offset-4' href='/main/categories/8'>
					Websites
				</Link> */}

			</nav>
		</header>
	);
}
