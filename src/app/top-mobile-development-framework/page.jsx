import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileDevelopment = dynamic(() => import("./MobileDevelopment"), {
  ssr: false,
});

export const metadata = {
  title: "Best Mobile App Development Company in Coimbatore | Ultrafly",
  description:
    "Looking for Top-notch mobile app development services at an affordable price? Ultrafly Solutions in Coimbatore delivers innovative apps based on your needs.",
  openGraph: {
    title: "Top 05 Mobile App Development Frameworks in 2024",
    description: "Top 05 Mobile App Development Frameworks in 2024",
    images: [
      {
        url: "/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/top-mobile-development-framework",
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
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <MobileDevelopment />
    </>
  );
}

export default Page;
