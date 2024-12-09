import React from "react";
import Head from "next/head";

import Seo from "./Seo";

export const metadata = {
  title: "Search Engine Optimizations",
  description:
    "Boost your online presence with Ultrafly Solutions, We're a leading SEO & Digital Marketing company in Coimbatore. We offer expert strategies for proven results",
  keywords:
    "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "SEO  | Ultrafly Solutions",
    description:
      "Boost your online presence with our SEO and digital marketing services. Ultrafly Solutions helps your business reach its full potential.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/digital-marketing-company",
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
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Seo />
    </>
  );
}

export default Page;
