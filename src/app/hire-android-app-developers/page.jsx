import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Android = dynamic(() => import('./Android'), {
  ssr: false
});

export const metadata = {
  title: "Hire Android App Developers | Ultrafly Solutions for Mobile",
  description:
    "Hire Android app developers from Ultrafly Solutions to build custom, high-performance mobile apps. Enhance user experience. Get in touch today!",
  openGraph: {
    title: "Hire Android App Developers | Ultrafly Solutions for Mobile",
    description:
      "Hire Android app developers from Ultrafly Solutions to build custom, high-performance mobile apps. Enhance user experience. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-android-app-developers", // Updated to match main content
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
      <Android />
    </>
  );
}

export default Page;
