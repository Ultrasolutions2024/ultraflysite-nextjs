import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ITStaffing = dynamic(() => import("./ITStaffing"), {
  ssr: false,
});

export const metadata = {
  title: "Expert IT Staffing Solutions Coimbatore | Ultrafly Solutions",
  description: "Find skillfull talent with the help of Ultrafly Solutions. We offer industry expert IT staffing solutions in Coimbatore to meet your business needs efficiently",
  keywords: "IT staffing, IT talent, staffing services, IT professionals, Ultrafly Solutions",
  openGraph: {
    title: "IT Staffing Solutions | Ultrafly Solutions",
    description: "Find the right IT talent with Ultrafly Solutions' staffing services. We connect businesses with skilled professionals to meet their IT needs.",
    images: [
      {
        url: 'https://www.ultraflysolutions.com/images/blog/timg.webp',
      },
    ],
    url: "https://www.ultraflysolutions.com/it-staffing",
    type: "website",
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
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <ITStaffing />
    </>
  );
}

export default Page;
