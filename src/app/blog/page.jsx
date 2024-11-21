import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Blog = dynamic(() => import('./Blog'), {
  ssr: false,
});

export const metadata = {
  title: "Ultrafly Solutions Blog – Latest Tech Insights & Innovations",
  description:
    "Discover the Ultrafly Solutions blog for expert insights on tech trends, industry innovations, and our cutting-edge solutions. Stay informed and ahead in the digital world.",
  keywords:
    "Ultrafly Solutions, tech insights, industry innovations, digital solutions, technology trends, business solutions, tech blog",
  openGraph: {
    title: "Ultrafly Solutions Blog – Latest Tech Insights & Innovations",
    description:
      "Discover the Ultrafly Solutions blog for expert insights on tech trends, industry innovations, and our cutting-edge solutions. Stay informed and ahead in the digital world.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/blog",
    type: "article",
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
      <Blog />
    </>
  );
}

export default Page;
