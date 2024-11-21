import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const MernFullStack = dynamic(() => import('./MernFullStack'), {
  ssr: false,
});

export const metadata = {
  title: "Hire MERN Stack Developers | Ultrafly Solutions for Full-Stack",
  description:
    "Hire MERN stack developers from Ultrafly Solutions for fast, full-stack apps. Seamlessly integrate frontend and backend. Contact us today!",
  openGraph: {
    title: "Hire MERN Stack Developers | Ultrafly Solutions for Full-Stack",
    description:
      "Hire MERN stack developers from Ultrafly Solutions for fast, full-stack apps. Seamlessly integrate frontend and backend. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-mernstack-developers",
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
      <MernFullStack />
    </>
  );
}

export default Page;
