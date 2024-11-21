import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Java = dynamic(() => import('./Java'), {
  ssr: false,
});

export const metadata = {
  title: "Hire Java Developers | Ultrafly Solutions for Performance Apps",
  description:
    "Hire Java developers from Ultrafly Solutions for robust, secure, high-performance applications. Drive business success with us. Get started now!",
  openGraph: {
    title: "Hire Java Developers | Ultrafly Solutions for Performance Apps",
    description:
      "Hire Java developers from Ultrafly Solutions for robust, secure, high-performance applications. Drive business success with us. Get started now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-java-developers",
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
      <Java />
    </>
  );
}

export default Page;
