import React from "react";
import Head from "next/head";

import Web from "./web/Web";

export const metadata = {
  title: "Join Our Skillful Team at Ultrafly Solutions | Careers",
  description:
    "Explore career opportunities at Ultrafly Solutions. Join our team of innovators and achieve professional growth in software development and digital marketing.",
    keywords: [
      "careers",
      "job openings",
      "tech jobs",
      "Ultrafly Solutions careers",
      "software development jobs",
      "digital marketing careers",
      "Ultrafly Solutions job openings",
      "career growth opportunities",
      "tech industry careers",
      "software engineering jobs",
    ],
  openGraph: {
    title: "Careers | Ultrafly Solutions",
    description:
      "Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/careers",
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
      <Web />
    </>
  );
}

export default Page;
