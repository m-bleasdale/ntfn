import Image from "next/image";
import Header from "@/components/header";
import ArticlePreviewLarge from "@/components/article-preview/article-preview-large";
import ArticlePreviewSmall from "@/components/article-preview/article-preview-small";

import { Footer } from "@/components/footer";
import { Community } from "@/components/community";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen pb-20 lg:gap-16 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[50px] items-center justify-center sm:items-start sm:w-full lg:w-[95%] xl:w-[90%] 2xl:w-[70%]">
				<ArticlePreviewLarge path="2025/07/voting-age-16"/>
				
				<div className="grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 md:gap-10 gap-15">
					<ArticlePreviewSmall path="2025/07/afghan-data-leak"/>
					<ArticlePreviewSmall path="can-jury-free-trials-save-uk-courts"/>
					<ArticlePreviewSmall path="what-went-wrong-with-kier-starmers-welfare-reform"/>					
				</div>

				<h2 className="text-5xl font-semibold">Top Stories</h2>

				<ArticlePreviewLarge path="2025/07/thames-water-hosepipe-ban"/>

				<div className="grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 md:gap-10 gap-15">
					<ArticlePreviewSmall path="2025/07/immunisation-crisis-2024"/>
					<ArticlePreviewSmall path="2025/07/uk-financial-services-reforms"/>
					<ArticlePreviewSmall path="2025/07/uk-inflation-surge"/>
				</div>

				<div className="w-full flex justify-center flex-col lg:gap-15 gap-12 lg:mb-20 mb-15 lg:mt-20 mt-15">
					<Community />
				</div>

				
			
			</main>
			<Footer />
		</div>
	);
}
