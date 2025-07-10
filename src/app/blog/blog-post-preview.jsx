import Link from 'next/link';

import {TheStartOfNTFN} from './posts/the-start-of-ntfn';

export default function BlogPostPreview ({path}) {
    let post;
    if(path === "the-start-of-ntfn") post = TheStartOfNTFN;
    

	return (

        <Link href={`/blog/${path}`} className="flex flex-col w-[full]">
            <div className='lg:pt-5 pt-2 flex flex-col gap-3'>
                <h2 className="group-hover:underline lg:text-2xl text-xl font-semibold">{post.title}</h2>
                <p className='group-hover:underline text-md'>{post.description}</p>
                <p className='group-hover:no-underline'>By {post.author}</p>
            </div>
        </Link>

	);

}
