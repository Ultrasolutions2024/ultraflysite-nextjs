import React from "react";
import Head from "next/head";

import AidrivenDigital from "./AidrivenDigital";

export const metadata = {
  title: "AI-Driven Digital Marketing Trends in 2024",
  description: "Explore the top AI-driven digital marketing trends reshaping the industry in 2024.",
  openGraph: {
    title: "AI-Driven Digital Marketing Trends in 2024",
    description: "Discover how AI is transforming digital marketing strategies in 2024 and beyond.",
    images: [
      {
        url: "/images/blog/ai-digital-marketing.webp", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/ai-digital-marketing-trends",
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
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <AidrivenDigital />
    </>
  );
}

export default Page;
