import React from "react";
import Head from "next/head";

import UnlockingFuture from "./UnlockingFuture";

export const metadata = {
  title: "Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology",
  description: "Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.",
  openGraph: {
    title: "Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology",
    description: "Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.",
    // Uncomment and provide the correct image URL if necessary
    // images: [
    //   {
    //     url: Fimg, // Ensure Fimg is a valid path or variable that references the image
    //   },
    // ],
    url: "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation",
    type: "article",
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
        {/* Uncomment if using an image for Open Graph */}
        {/* <meta property="og:image" content={metadata.openGraph.images[0].url} /> */}
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <UnlockingFuture />
    </>
  );
}

export default Page;
