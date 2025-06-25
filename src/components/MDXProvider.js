'use client';

import dynamic from 'next/dynamic';

const MDXRenderer = dynamic(() => import('@/components/MDXRenderer'), {
  ssr: false
});

export default function MDXProvider({ source, components }) {
  return <MDXRenderer source={source} components={components} />;
}