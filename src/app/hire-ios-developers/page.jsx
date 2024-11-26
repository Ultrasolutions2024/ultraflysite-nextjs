import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const IOS = dynamic(() => import("./IOS"), {
  ssr: false,
});

export const metadata = {
  title: "Hire Expert iOS Developers | Custom iOS App Development",
  description:
    "Boost your business with our iOS developers. Get custom iOS apps tailored to your needs. Hire professionals today for quality results at Ultrafly Solutions",
  keywords: [
    "hire professional iOS developers",
    "custom iOS app development services",
  ],
  openGraph: {
    title: "Hire iOS Developers | Ultrafly Solutions for Innovative Apps",
    description:
      "Hire expert iOS developers from Ultrafly Solutions for high-performance, user-friendly mobile apps. Elevate your mobile strategy. Get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-ios-developers",
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
      <IOS />
    </>
  );
}

export default Page;
