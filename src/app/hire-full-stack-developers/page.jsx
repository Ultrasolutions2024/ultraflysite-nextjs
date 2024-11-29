import React from "react";
import Head from "next/head";

import FullstackDevelopers from "./FullstackDevelopers";

export const metadata = {
  title: "Hire Expert Full-Stack Developers | Ultrafly Solutions",
  description:
    "Boost your business with Ultrafly Solutions! Hire skilled full-stack developers for seamless, scalable, and efficient software solutions. Get started today",
  keywords: [
    "hire experienced full stack developers",
    "end-to-end web app development",
  ],
  openGraph: {
    title: "Hire Full Stack Developers | Ultrafly Solutions for Web Apps",
    description:
      "Ultrafly Solutions offers full stack developers for end-to-end solutions. Build comprehensive web apps with us. Reach out today to get started!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-full-stack-developers",
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
      <FullstackDevelopers />
    </>
  );
}

export default Page;
