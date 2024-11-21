import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";  // Don't forget to import Head for dynamic metadata

const UnlockingSuccess = dynamic(() => import('./UnlockingSuccess'), {
  ssr: false
});

export const metadata = {
  title:
    "Unlocking Success: Why SEO Is Important in Business and How to Leverage It Today!", // Page title
  openGraph: {
    title:
      "Unlocking Success: Why SEO Is Important in Business and How to Leverage It Today!", // Open Graph title
    description:
      "Discover why SEO is crucial for business success and learn strategies to leverage it for maximum growth.", // Open Graph description
    // images: [
    //   {
    //     url: Simg, // Ensure Simg is defined or points to the correct image path
    //   },
    // ],
    url: "https://www.ultraflysolutions.com/unlocking-seo-success", // Updated Open Graph URL
    type: "article", // Content type
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        {/* Uncomment if using an image for Open Graph */}
        {/* <meta property="og:image" content={metadata.openGraph.images[0].url} /> */}
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <UnlockingSuccess />
    </>
  );
}

export default Page;
