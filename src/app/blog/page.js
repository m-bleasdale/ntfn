import Header from "@/components/header";

import BlogPostPreview from './blog-post-preview';

import { Footer } from "@/components/footer";
import { Community } from "@/components/community";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen pb-20 lg:gap-16 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[40px] items-center justify-center sm:items-start sm:w-full lg:w-[70%]">
                
                <h1 className="text-4xl font-medium">News About No Time For News</h1>

				<div className="grid lg:grid-rows-1 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 gap-15">
					<BlogPostPreview path="the-start-of-ntfn"/>
				</div>

				<div className="w-full flex justify-center flex-col lg:gap-15 gap-12 lg:mb-20 mb-15">
					<Community />
				</div>

				
			
			</main>
			<Footer />
		</div>
	);
}
