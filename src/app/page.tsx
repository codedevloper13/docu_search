/** @format */

import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { MessagesSquare, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const { userId } = await auth();
	const isAuth = !!userId;
	return (
		<div className='w-screen min-h-screen bg-gradient-to-tr from-indigo-300 via-emerald-100 to-orange-100'>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<div className='flex flex-col items-center text-center'>
					<div className='flex items-center'>
						<h1 className='mr-3 text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 bg-clip-text text-transparent'>
							Explore, Discover, Answer
						</h1>
						<UserButton afterSignOutUrl='/' />
					</div>
					<div className='flex mt-2'>
						{isAuth && (
							<Button>
								<MessagesSquare className='w-4 h-4 flex justify-between mr-2 ' />
								Chat With Doc
							</Button>
						)}
					</div>
					<p className='max-w-xl mt-1 text-lg'>
						<strong className=''>DocuSearch AI</strong> empowers you to explore, discover, and answer questions within your text documents
						with unprecedented speed and accuracy. Say goodbye to tedious manual searches and hello to a new era of efficient knowledge
						extraction.
					</p>
					<div className='w-ful mt-4'>
						{isAuth ? (
							<h1>File Upload</h1>
						) : (
							<Link href='/sign-in'>
								<Button className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:border-b-2 hover:border-violet-600'>
									{" "}
									Login To get Startted! <LogIn className='w-4 h-4 ml-2' />
								</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
