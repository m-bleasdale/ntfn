import Header from "@/components/header";
import ArticlePreviewLarge from "@/components/article-preview/article-preview-large";
import ArticlePreviewSmall from "@/components/article-preview/article-preview-small";

import { Footer } from "@/components/footer";
import { Community } from "@/components/community";

export const metadata = {
  title: "No Time For News",
  description: "No Time For News is an independent, student-led UK news organisation delivering concise, factual, and bias-free reporting across politics, world affairs, and more.",
  openGraph: {
    title: "No Time For News",
    description: "Independent, student-led UK news. Factual. Concise. Bias-free.",
    url: "https://www.ntfn.co.uk",
    images: ["https://www.ntfn.co.uk/NTFNFavicon.png"], // replace if you have a better brand image
  },
  twitter: {
    card: "summary_large_image",
    title: "No Time For News",
    description: "Independent, student-led UK news. Factual. Concise. Bias-free.",
    images: ["https://www.ntfn.co.uk/NTFNFavicon.png"],
  },
  alternates: {
    canonical: "https://www.ntfn.co.uk",
  },
};


export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen pb-20 lg:gap-16 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[50px] items-center justify-center sm:items-start sm:w-full lg:w-[95%] xl:w-[90%] 2xl:w-[70%]">
				<ArticlePreviewLarge path="britains-online-safety-act"/>

				<div className="grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 md:gap-10 gap-15">
					<ArticlePreviewSmall path="2025/08/rachel-reeves-tax"/>
					<ArticlePreviewSmall path="2025/08/trump-moves-nuclear-submarines"/>
					<ArticlePreviewSmall path="2025/07/russia-earthquake"/>
				</div>

				<h2 className="text-5xl font-semibold">More News</h2>

				<ArticlePreviewLarge path="can-jury-free-trials-save-uk-courts"/>

				<div className="grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 md:gap-10 gap-15">
					<ArticlePreviewSmall path="2025/07/trump-and-epstein"/>
					<ArticlePreviewSmall path="2025/07/syrian-sectarian-conflict"/>		
					<ArticlePreviewSmall path="2025/07/un-warns-of-gaza"/>
				</div>

				<div className="grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 md:gap-10 gap-15">
					<ArticlePreviewSmall path="2025/07/voting-age-16"/>
					<ArticlePreviewSmall path="what-went-wrong-with-kier-starmers-welfare-reform"/>
					<ArticlePreviewSmall path="2025/07/afghan-data-leak"/>
				</div>

				<div className="w-full flex justify-center flex-col lg:gap-15 gap-12 lg:mb-20 mb-15 lg:mt-20 mt-15">
					<Community />
				</div>

				
			
			</main>
			<Footer />
		</div>
	);
}
