import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Javascript = dynamic(() => import('./Javascript'), {
  ssr: false,
});

export const metadata = {
  title: "Hire JavaScript Developers | Ultrafly Solutions for Interactive Apps",
  description:
    "Ultrafly Solutions offers expert JavaScript developers to create interactive, high-performance apps. Enhance engagement. Get in touch now!",
  openGraph: {
    title: "Hire JavaScript Developers | Ultrafly Solutions for Interactive Apps",
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
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <Javascript />
    </>
  );
}

export default Page;
