'use client';

import Link from 'next/link';

import {TheStartOfNTFN} from './posts/the-start-of-ntfn';

import { motion } from "framer-motion";

export default function BlogPostPreview ({path}) {
    let post;
    if(path === "the-start-of-ntfn") post = TheStartOfNTFN;
    
	return (

        <motion.div
            whileHover={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            className='group border rounded-lg'
        >
            <Link href={`/blog/${path}`} className="flex flex-col w-[full] ">
                <div className='lg:p-5 p-2 flex flex-col gap-3'>
                    <h2 className="lg:text-2xl text-xl font-semibold">{post.title}</h2>
                    <p className='text-md'>{post.description}</p>
                    <p>By {post.author}</p>
                </div>
            </Link>

        </motion.div>

	);

}
