import Image from "next/image";
import Header from "@/components/header";
import ArticlePreviewLarge from "@/components/article-preview/article-preview-large";
import ArticlePreviewSmall from "@/components/article-preview/article-preview-small";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen pb-20 lg:gap-16 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-[50px] items-center justify-center sm:items-start sm:w-full lg:w-[70%]">
				<ArticlePreviewLarge path="2025/06/is-welsh-independence-possible"/>

				<div className="grid lg:grid-rows-1 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 gap-15">
					<ArticlePreviewSmall path="2025/06/why-is-britain-broke"/>
					<ArticlePreviewSmall path="2025/06/can-ukraine-win"/>
					<ArticlePreviewSmall path="2025/06/what-israel-wants"/>
				</div>
			
			</main>
		</div>
	);
}
