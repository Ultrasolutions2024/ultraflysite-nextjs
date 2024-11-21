import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const ReactNative = dynamic(() => import('./ReactNative'), {
  ssr: false,
});

export const metadata = {
  title: "Hire React Native Developers | Ultrafly Solutions for Fast Apps",
  description:
    "Ultrafly Solutions offers React Native developers to build fast, cross-platform mobile apps. Optimize your mobile presence. Contact us today!",
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
