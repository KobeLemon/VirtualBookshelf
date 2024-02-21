import '@/app/ui/global.css'
import type { Metadata } from 'next';
import { kumbhSans } from '@/app/ui/fonts';
import Nav from '@/app/ui/header/nav';
import { getServerSession } from 'next-auth';
import SessionProvider from '../components/SessionProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Virtual Bookshelf',
    default: 'My Bookshelf',
  },
  description: 'This is a virtual bookshelf that will allow a user to organize and view their media such as books, movies, TV shows, and more in one place! This is not a streaming app, it is solely for organization.',
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	// const session = await getServerSession();

  return (
    <html lang="en">

      <body className={`${kumbhSans.className} antialiased grid h-screen grid-cols-[4rem_1fr] grid-rows-[5rem_1fr] md:flex-row md:grid-cols-[6rem_1fr] lg:grid-cols-[10rem_1fr] max-w-[1440px] mx-auto`}>
      {/* <SessionProvider session={session}> */}
				<Nav />
				{children}
      {/* </SessionProvider> */}
      </body>

    </html>
  );
}