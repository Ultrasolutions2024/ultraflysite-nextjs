import React from "react";
import Head from "next/head";

import Flutter from "./Flutter";
export const metadata = {
  title: "Hire Flutter Developers | Expert Resources for Your Projects",
  description:
    "Hire experienced Flutter developers for scalable, high-performing apps. Ultrafly Solutions provides expert resources to accelerate your development goals.",
  keywords: [
    "cross-platform Flutter app development",
    "hire dedicated Flutter developers",
  ],
  openGraph: {
    title: "Hire Flutter Developers | Ultrafly Solutions for Cross-Platform",
    description:
      "Ultrafly Solutions offers Flutter developers for seamless, cross-platform mobile apps. Build with us and boost your mobile presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", 
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-flutter-developers", 
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
      <Flutter />
    </>
  );
}

export default Page;
