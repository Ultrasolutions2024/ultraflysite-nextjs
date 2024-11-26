import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Reactjs = dynamic(() => import("./React"), {
  ssr: false,
});

export const metadata = {
  title: "Hire ReactJS Developers for Robust Web Solutions | Ultrafly",
  description:
    "Looking to hire ReactJS developers? Get expert developers for scalable, high-performance web apps at Ultrafly Solutions. Hire now for top-quality results",
  keywords: [
    "hire expert ReactJS developers",
    "scalable frontend web applications",
  ],
  openGraph: {
    title: "Hire ReactJS Developers | Ultrafly Solutions for Frontend Apps",
    description:
      "Hire ReactJS developers from Ultrafly Solutions to build fast, scalable frontend apps. Boost your digital experience. Contact us to get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-reactjs-developers",
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
      <Reactjs />
    </>
  );
}

export default Page;
