'use client';

import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from '@/components/MDXComponents';

export default function MDXRenderer({ source }) {
    return <MDXRemote {...source} components={MDXComponents} />
}