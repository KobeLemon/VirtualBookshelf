import SocialSection from "@/app/ui/home/social"
import Footer from "@/app/ui/home/footer"
import Link from "next/link"
import RootLayout from "./layout"
import HomeAuthButton from "./ui/header/HomeAuthButton";

export default async function Page() {

	return (
			<RootLayout>
				<main className="col-span-full p-10">
					<div className=" flex flex-col gap-2 items-center text-center">
						<h1 className="mt-10">Welcome to Virtual Bookshelf!</h1>
						<HomeAuthButton/>
						<p>This is a virtual bookshelf that will allow you to organize and view your media such as books, movies, TV shows, and more in one place!</p>
						<p>This is not a streaming app, it is solely for organization.</p>
					</div>
					<SocialSection/>
					<Footer/>
				</main>
			</RootLayout>
	)
}