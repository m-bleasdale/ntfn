import { getPostContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import MDXProvider from '@/components/MDXProvider';
import Header from '@/components/header';
import ImageWrapper from '@/components/image-wrapper'
import Notice from '@/components/notice';
import Sidebar from "@/components/sidebar";
import { Footer } from '@/components/footer';

export default async function Page({ params }) {
    const { slug } = await params;

    try {
        const { frontmatter, mdxSource } = await getPostContent(slug);

        const day = new Date(frontmatter.created_at).getUTCDate();
        const month = new Date(frontmatter.created_at).getUTCMonth();
        const year = new Date(frontmatter.created_at).getUTCFullYear();

        return (
            <div className="flex flex-col items-center min-h-screen pb-20 lg:gap-12 gap-8 p-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
                <Header />

                <div className="container grid gap-12 md:grid-cols-10 md:gap-8">

                    <Sidebar title={frontmatter.title} description={frontmatter.description} category={frontmatter.category} author={frontmatter.author}/>
                
                    <div className="flex w-full flex-col items-center pb-20 lg:gap-12 gap-8 sm:px-20 md:col-span-6 md:col-start-3 lg:col-start-3">
                        {frontmatter.notice && <Notice code={frontmatter.notice} />}

                        <div className='flex flex-col w-full gap-5'>
                            <h1 className='text-4xl font-semibold'>{frontmatter.title}</h1>
                            <h2 className='text-lg'>By {frontmatter.author}</h2>
                            <h2>Created {day}/{month}/{year}</h2>
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
                            <div className="flex flex-col">
                                <h2 id="Bibliography" className="text-4xl font-semibold my-10">Bibliography</h2>
                                <ul>
                                    {frontmatter.references.map((ref, index) => (
                                        <li key={index} className='flex items-start gap-2 mb-2'>
                                            <span className='font-semibold'>[{index + 1}]</span>
                                            <span>
                                                {ref[0]}{" "}
                                                <a 
                                                    href={ref[1]} 
                                                    className='underline text-blue-800'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {ref[1]}
                                                </a>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>

        )
    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            notFound();
        }

        throw error;
    }

    
}