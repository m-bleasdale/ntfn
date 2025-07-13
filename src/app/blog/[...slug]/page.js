import { notFound } from 'next/navigation';
import {TheStartOfNTFN} from '../posts/the-start-of-ntfn';

import Title from '../title';

import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Community } from '@/components/community';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    let post;
    if(slug[0] === "the-start-of-ntfn") post = TheStartOfNTFN;
    else return;

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.coverImage],
            publishedTime: post.created_at
        }
    }

}

export default async function Blog({ params }) {
    const { slug } = await params;

    let post;
    if(slug[0] === "the-start-of-ntfn") post = TheStartOfNTFN;
    else notFound();

    const day = new Date(post.created_at).getUTCDate();
    const month = new Date(post.created_at).getUTCMonth();
    const year = new Date(post.created_at).getUTCFullYear();

    return (
        <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <div className="container flex flex-col md:grid gap-12 md:grid-cols-10 md:gap-8">
            
                <div className="flex w-full flex-col items-center lg:gap-12 lg:pb-20 gap-8 w-full sm:px-20 md:col-span-6 md:col-start-3 lg:col-start-3">

                    <Title 
                        title={post.title}
                        author={post.author}
                        date={`${day}/${month}/${year}`}
                    />

                    
                    <div className="flex flex-col w-full">
                        {post.content}
                    </div>

                    <Community />
                </div>

            </div>

            <Footer />
        </div>
    )
    
}