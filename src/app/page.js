import Image from "next/image";
import Header from "@/components/header";
import ArticlePreviewLarge from "@/components/article-preview/article-preview-large";
import ArticlePreviewSmall from "@/components/article-preview/article-preview-small";

import { Button } from "@/components/ui/button";
import { HeartHandshake } from 'lucide-react'
import { Footer } from "@/components/footer";
import { Community } from "@/components/community";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen pb-20 lg:gap-16 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[50px] items-center justify-center sm:items-start sm:w-full lg:w-[70%]">
				<ArticlePreviewLarge path="can-jury-free-trials-save-uk-courts"/>

				<div className="grid lg:grid-rows-1 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 gap-15">
					<ArticlePreviewSmall path="what-went-wrong-with-kier-starmers-welfare-reform"/>
				</div>

				<div className="w-full flex justify-center flex-col lg:gap-15 gap-12 lg:mb-20 mb-15">
					<div className="flex flex-col gap-6">
						<h1 className="lg:text-5xl text-3xl lg:mt-10 text-center font-semibold">More to Come</h1>
						<p className="text-center font-medium text-muted-foreground">We only have a few articles at the moment, but are working on much more. Find out how you can help.</p>
						<div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
							<Button size="lg" asChild>
								<a href="/get-involved">
								Get Involved <HeartHandshake className="ml-2 size-4" />
								</a>
							</Button>
							<div className="text-xs text-muted-foreground text-center">No contract. No commitment. Just contribute what you can.</div>
						</div>
					</div>

					<Community />

				</div>

				
			
			</main>
			<Footer />
		</div>
	);
}
