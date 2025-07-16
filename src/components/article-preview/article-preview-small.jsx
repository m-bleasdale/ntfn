import Link from 'next/link';
import { getPostPreview } from '@/lib/mdx';

import ImageWrapper from '@/components/image-wrapper';

import ArticleType from '@/components/article-preview/article-type';

import { Badge } from "@/components/ui/badge"

import * as motion from "motion/react-client"

export default function ArticlePreviewSmall ({path}) {
	const content = getPostPreview(path);

	return (

        <motion.div 
            key={content.path} 
            className="mb-4 hover:cursor-pointer group"
        >            
            <Link href={`/news/${content.path}`} className="flex flex-col w-[full]">
                <div className='container'>
                    <ImageWrapper credit={content.cover_credit} type={content.cover_credit_type}>
                        <img src={content.cover} alt={content.cover_alt} className='w-full lg:h-55 h-50 rounded-lg object-cover hover:cursor-pointer'/>
                    </ImageWrapper>
                </div>
                <div className='lg:pt-5 pt-2 flex flex-col gap-3'>
                    <h2 className="group-hover:underline lg:text-2xl text-xl font-semibold">{content.title}</h2>
                    <p className='group-hover:underline text-md'>{content.description}</p>
                    <div className='flex flex-row gap-2'>
                        {content.type && <ArticleType type={content.type} />}
                        {content.category && <Badge variant="outline">{content.category}</Badge>}
                    </div>
                    {content.author && <p className='group-hover:no-underline'>By {content.author}</p>}
                </div>
            </Link>
        </motion.div>

	);

}
