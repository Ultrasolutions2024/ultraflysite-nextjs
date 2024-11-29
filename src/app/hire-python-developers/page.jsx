import React from "react";
import Head from "next/head";

import Python from "./Python";

export const metadata = {
  title: "Hire Python Developers | Expert Solutions for Your Business",
  description:
    "Looking to hire Python developers? Get skilled professionals for your projects with Ultrafly Solutions. Drive success with our expert Python developmers",
    keywords: [
      "hire expert Python developers",
      "secure Python app development",
    ],
  openGraph: {
    title: "Hire Python Developers | Ultrafly Solutions for Secure Apps",
    description:
      "Ultrafly Solutions offers skilled Python developers to create scalable, secure solutions. Drive growth with our expert services. Get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-python-developers",
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
      <Python />
    </>
  );
}

export default Page;
