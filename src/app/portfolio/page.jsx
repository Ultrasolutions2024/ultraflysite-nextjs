import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Portfolio = dynamic(() => import('./portfolio'), {
  ssr: false,
});

export const metadata = {
  title: `Our Portfolio | Ultrafly Solutions`,
  description:
    "Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions.",
  keywords:
    "portfolio, project showcase, case studies, Ultrafly Solutions",
  openGraph: {
    title: `Our Portfolio | Ultrafly Solutions`,
    description:
      "Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/portfolio", // Updated to match main content
    // type: "website",
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Portfolio />
    </>
  );
}

export default Page;
