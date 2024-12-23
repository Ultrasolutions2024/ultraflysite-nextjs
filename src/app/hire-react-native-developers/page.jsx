import React from "react";
import Head from "next/head";

import ReactNative from "./ReactNative";

export const metadata = {
  title: "Hire ReactNative Developers | Ultrafly Solutions",
  description:
    "Hire top ReactNative developers from Ultrafly Solutions for custom, scalable, and high-performance mobile app solutions tailored to your business needs.",
    keywords: [
      "hire skilled React Native developers",
      "cross-platform mobile app development",
    ],
  openGraph: {
    title: "Hire React Native Developers | Ultrafly Solutions for Fast Apps",
    description:
      "Ultrafly Solutions offers React Native developers to build fast, cross-platform mobile apps. Optimize your mobile presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-react-native-developers",
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
      <ReactNative />
    </>
  );
}

export default Page;
