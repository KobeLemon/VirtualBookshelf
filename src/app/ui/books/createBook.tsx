import { Book } from "@/app/lib/definitions";
import { Metadata } from 'next';
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Book Creation',
};

export default function CreateBook() {

	const formSubmission = async(e:any) => {
		e.preventDefault()

		const formValues = new FormData(e.target);

		const bookData = {
			book_id: '20',
			name: formValues.get('name'),
			description: formValues.get('description'),
			image: formValues.get('image'),
			author: formValues.get('author'),
			publisher: formValues.get('publisher'),
			format: formValues.get('format'),
			category_id: '1',
			user_id: '1',
		}

		try{
			const results = await fetch('/api/createBook', {
				method:'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({Book: bookData})
			})
			window.location.href = `/main/books/${bookData.book_id}`
		} catch(error:any){
			console.error({message:'Error: could not create new user.'})
		}
	}

	return (
		<>
			<div className="flex flex-col items-center gap-4 p-16 md:gap-16">
				<div>
					<h1 className='text-center pt-10'>Add a Book!</h1>
					<h2 className='text-center m-2 text-2xl'>All fields are required</h2>
					<h3 className='text-center mt-5 mb-1 text-xl'>If you leave this page without completing the <br/>below form, your book will not be added.</h3>
				</div>

				<form id="creationForm"
				// onSubmit={formSubmission}
				>
					<fieldset className="flex flex-col gap-2 col-span-1 items-center">

							<label className="w-full" htmlFor="name" >Book Name:</label>
							<input className="w-80 rounded" name="name" type="text" id="name" required/>

							<label className="w-full" htmlFor="description" >Description:</label>
							<input className="w-80 rounded" name="description" type="text" id="description" required/>

							<label className="w-full" htmlFor="image" >Book Image:</label>
							<input className="w-80 rounded" name="image" type="text" id="image" required/>

							<label className="w-full" htmlFor="author" >Author:</label>
							<input className="w-80 rounded" name="author" type="text" id="author" required/>

							<label className="w-full">Format:</label>
							<div className="flex flex-col justify-start w-full">
								<div className="flex gap-1 w-full">
									<input className="rounded-full" name="format" value="Paper" type="radio" id="Paper" required/>
									<label className="w-full" htmlFor="Paper" >Paper</label>
								</div>


								<div className="flex gap-1 w-full">
									<input className="rounded-full" name="format" value="Digital" type="radio" id="Digital" required/>
									<label className="w-full" htmlFor="Digital" >Digital</label>
								</div>


								<div className="flex gap-1 w-full">
									<input className="rounded-full" name="format" value="Audiobook" type="radio" id="Audiobook" required/>
									<label className="w-full" htmlFor="Audiobook" >Audiobook</label>
								</div>


								<div className="flex gap-1 w-full">
									<input className="rounded-full" name="format" value="Other" type="radio" id="Other" required/>
									<label className="w-full" htmlFor="Other" >Other</label>
								</div>
							</div>


							{/* <label className="w-full" htmlFor="format" >Format:</label>
							<select className="w-80 rounded" name="format" id="format" required>
								<option value="Paper">Paper</option>
								<option value="Digital">Digital</option>
								<option value="Audiobook">Audiobook</option>
								<option value="Other">Other</option>
							</select> */}

						<button className="border border-gray-500 border-solid p-2 h-fit w-fit rounded" id="submit" type="submit">Add Book!</button>
					</fieldset>
				</form>
			</div>
		</>
	)
}