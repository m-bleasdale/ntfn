import Link from 'next/link';
import { getPostPreview } from '@/lib/mdx';

import * as motion from "motion/react-client"

import ImageWrapper from "@/components/image-wrapper";

import { Badge } from "@/components/ui/badge"

export default function ArticlePreviewLarge ({path}) {
	const content = getPostPreview(path);

	return (
		<motion.div key={content.path} className="mb-4 hover:cursor-pointer group">
			<Link href={`/news/${content.path}`} className="grid w-[full] lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 lg:gap-10">
				<div className='container'>
					<ImageWrapper credit={content.cover_credit} type={content.cover_credit_type}>
						<img src={content.cover} alt={content.cover_alt} className='rounded-lg lg:h-90 h-65 w-full object-cover hover:cursor-pointer'/>
					</ImageWrapper>
				</div>
				<div className='lg:pt-10 pt-5 flex flex-col gap-5'>
					<h2 className="group-hover:underline text-4xl font-semibold">{content.title}</h2>
					<p className='group-hover:underline text-lg'>{content.description}</p>
					<Badge variant="default">{content.category}</Badge>
					<p className='group-hover:no-underline'>By {content.author}</p>
				</div>
			</Link>
		</motion.div>

	);


}
