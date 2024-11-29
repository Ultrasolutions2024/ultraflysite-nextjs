import React from "react";
import Head from "next/head";

import Javascript from "./Javascript";

export const metadata = {
  title: "Hire JavaScript Developers for Custom Web Solutions",
  description:
    "Hire expert JavaScript developers from Ultrafly Solutions for high-quality, scalable web development. Enhance your projects with skilled professionals today",
  keywords: [
    "hire skilled JavaScript developers",
    "custom JavaScript web development",
  ],
  openGraph: {
    title:
      "Hire JavaScript Developers | Ultrafly Solutions for Interactive Apps",
    description:
      "Ultrafly Solutions offers expert JavaScript developers to create interactive, high-performance apps. Enhance engagement. Get in touch now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-javascript-developers",
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
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Javascript />
    </>
  );
}

export default Page;
