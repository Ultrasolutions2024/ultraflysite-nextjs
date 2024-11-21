import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BackendDevelopers = dynamic(() => import('./BackendDevelopers'), {
  ssr: false
});

export const metadata = {
  title: "Hire Backend Developers | Ultrafly Solutions for Scalable Apps",
  description:
    "Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!",
  openGraph: {
    title: "Hire Backend Developers | Ultrafly Solutions for Scalable Apps",
    description:
      "Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-back-end-developers", // Updated to match main content
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
      <BackendDevelopers />
    </>
  );
}

export default Page;
