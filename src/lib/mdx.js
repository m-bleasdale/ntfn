import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug'; 
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const postsDirectory = path.join(process.cwd(), 'articles');

export function getPostPreview(slug) {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);

	if (!fs.existsSync(fullPath)) {
    	throw new Error('NOT_FOUND');
  	}

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(fileContents);

	return data;
}

export async function getPostContent(slug) {
	const fullSlug = slug.join("/");
	const fullPath = path.join(postsDirectory, `${fullSlug}.mdx`);

	if (!fs.existsSync(fullPath)) {
    	throw new Error('NOT_FOUND');
  	}

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { content, data } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
		},
		scope: data
	});

	return {
		frontmatter: data,
		mdxSource
	};
}
