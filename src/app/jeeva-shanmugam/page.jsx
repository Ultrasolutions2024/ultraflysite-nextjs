import React from "react";
import Head from "next/head";

import JeevaBlogs from "./JeevaBlogs";

export const metadata = {
  title: "Top 05 Mobile App Development Frameworks in 2024",
  description: "Top 05 Mobile App Development Frameworks in 2024",
  openGraph: {
    title: "Top 05 Mobile App Development Frameworks in 2024",
    description: "Top 05 Mobile App Development Frameworks in 2024",
    images: [
      {
        url: "/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/top-mobile-development-framework",
    type: "article",
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link
          rel="canonical"
          href="https://www.ultraflysolutions.com/top-mobile-development-framework"
        />
      </Head>
      <JeevaBlogs />
    </>
  );
}

export default Page;
