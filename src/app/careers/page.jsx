import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Web = dynamic(() => import("./web/Web"), {
  ssr: false,
});

export const metadata = {
  title: "Careers | Ultrafly Solutions",
  description:
    "Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today.",
  keywords: "careers, job openings, tech jobs, Ultrafly Solutions careers",
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
