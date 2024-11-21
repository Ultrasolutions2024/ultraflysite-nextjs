import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Node = dynamic(() => import('./Node'), {
  ssr: false,
});

export const metadata = {
  title: "Hire Expert Node.JS Developer | Ultrafly Solutions for Scalable Apps",
  description:
    "Hire Node.js developers from Ultrafly Solutions for fast, efficient server-side apps. Optimize your backend with us. Reach out today to get started!",
  openGraph: {
    title: "Hire Node.JS Developers | Ultrafly Solutions for Full-Stack",
    description:
      "Hire Node.js developers from Ultrafly Solutions for fast, efficient server-side apps. Optimize your backend with us. Reach out today to get started!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-node-js-developers",
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Node />
    </>
  );
}

export default Page;
