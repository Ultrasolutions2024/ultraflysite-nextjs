import React from "react";
import Head from "next/head";
import Java from "./Java";

export const metadata = {
  title: "Hire Java Developers - Java Solutions for Your Projects",
  description:
    "Hire Java developers from Ultrafly Solutions for expert, scalable, and cost-effective solutions. Boost your projects with top-notch Java expertise today!",
  keywords: ["hire expert Java developers", "scalable Java app development"],
  openGraph: {
    title: "Hire Java Developers | Ultrafly Solutions for Performance Apps",
    description:
      "Hire Java developers from Ultrafly Solutions for robust, secure, high-performance applications. Drive business success with us. Get started now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-java-developers",
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
      <Java />
    </>
  );
}

export default Page;
