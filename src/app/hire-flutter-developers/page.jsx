import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Flutter = dynamic(() => import('./Flutter'), {
  ssr: false
});

export const metadata = {
  title: "Hire Flutter Developers | Ultrafly Solutions for Cross-Platform",
  description:
    "Ultrafly Solutions offers Flutter developers for seamless, cross-platform mobile apps. Build with us and boost your mobile presence. Contact us today!",
  openGraph: {
    title: "Hire Flutter Developers | Ultrafly Solutions for Cross-Platform",
    description:
      "Ultrafly Solutions offers Flutter developers for seamless, cross-platform mobile apps. Build with us and boost your mobile presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-flutter-developers", // Updated to match main content
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
      <Flutter />
    </>
  );
}

export default Page;
