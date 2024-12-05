import React from "react";
import Head from "next/head";

import AidrivenDigital from "./career-in-digital-marketing-2025";

export const metadata = {
  title: "How to Build a Career in Digital Marketing in 2025?",
  description:
    "Get to know how you can become a digital marketing expertand make a living in 2025 with these useful tips",
  openGraph: {
    title: "How to Build a Career in Digital Marketing in 2025?",
    description:
      "How to get started with digital marketing in 2025? with tese useful tips and make a money in digital marketing",
    images: [
      {
        url: "/images/blog/ai-digital-marketing.webp", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/career-in-digital-marketing-2025",
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
