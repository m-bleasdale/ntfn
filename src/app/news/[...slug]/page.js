import { getPostContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import MDXProvider from '@/components/MDXProvider';
import Header from '@/components/header';
import ImageWrapper from '@/components/image-wrapper'
import Notice from '@/components/notice';
import Sidebar from "@/components/sidebar";
import { Footer } from '@/components/footer';

export async function generateMetadata({ params }) {
  const { slug } = await params;

    try {
        const { frontmatter } = await getPostContent(slug);

        return {
            title: frontmatter.title,
            description: frontmatter.description,
            openGraph: {
                title: frontmatter.title,
                description: frontmatter.description,
                type: 'article',
                url: `https://www.ntfn.co.uk/news/${slug}`,
                images: [frontmatter.coverImage],
                publishedTime: frontmatter.created_at
            },
            twitter: {
                card: 'summary_large_image',
                title: frontmatter.title,
                description: frontmatter.description,
                images: [frontmatter.coverImage]
            },
            alternates: {
                canonical: `https://www.ntfn.co.uk/news/${slug}`
            }
        }
    } catch (error) {
        throw error;
    }

}


export default async function Page({ params }) {
    const { slug } = await params;

    try {
        const { frontmatter, mdxSource } = await getPostContent(slug);

        const day = new Date(frontmatter.created_at).getUTCDate();
        const month = new Date(frontmatter.created_at).getUTCMonth();
        const year = new Date(frontmatter.created_at).getUTCFullYear();

        return (
            <main className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
                <Header />

                <article className="container flex flex-col md:flex-col-reverse xl:grid gap-12 xl:grid-cols-10 xl:gap-8">

                    <Sidebar title={frontmatter.title} description={frontmatter.description} category={frontmatter.category} type={frontmatter.type} author={frontmatter.author}/>
                
                    <div className="flex w-full flex-col items-center lg:gap-12 lg:pb-20 gap-8 w-full lg:px-20 md:col-span-6 md:col-start-3 lg:col-start-3">
                        {frontmatter.notice && <Notice code={frontmatter.notice} />}

                        <div className='flex flex-col w-full gap-5'>
                            <h1 className='text-4xl font-semibold'>{frontmatter.title}</h1>
                            {frontmatter.author && <h2 className='text-lg'>By {frontmatter.author}</h2>}
                            <h2>Written {day}/{month + 1}/{year}</h2>
                        </div>

                        <div>
                            <ImageWrapper credit={frontmatter.cover_credit} type={frontmatter.cover_credit_type}>
                                <img src={frontmatter.cover} alt={frontmatter.cover_alt} className='rounded-lg lg:h-100 h-65 w-full object-cover hover:cursor-pointer'/>
                            </ImageWrapper>
                        </div>
                        <div className="flex flex-col w-full">
                            <div>
                                <MDXProvider source={mdxSource} />
                            </div>
                            <div className="flex flex-col w-full">
                                <h2 id="Bibliography" className="text-4xl font-semibold my-10">Bibliography</h2>
                                {frontmatter.references.map((ref, index) => (
                                    <p key={index} className='flex items-start gap-2 mb-2'>
                                        <span className='font-semibold'>[{index + 1}]</span>
                                        <span className=''>
                                            {ref[0]}{" "}
                                            <a 
                                                href={ref[1]} 
                                                className='underline text-blue-800 break-all'
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {ref[1]}
                                            </a>
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                </article>

                <Footer />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": frontmatter.title,
                        "description": frontmatter.description,
                        "image": [frontmatter.coverImage],
                        "datePublished": frontmatter.created_at,
                        "isAccessibleForFree": true,
                        "author": {
                            "@type": "Person",
                            "name": "No Time For News",
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "No Time For News",
                            "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.ntfn.co.uk/NTFNFavicon.png", // update this
                            },
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.ntfn.co.uk/news/${slug}`,
                        },
                        }),
                    }}
                    />

            </main>

        )
    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            notFound();
        }

        throw error;
    }

    
}