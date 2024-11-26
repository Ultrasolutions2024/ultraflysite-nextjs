import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Laravel = dynamic(() => import("./Laravel"), {
  ssr: false,
});

export const metadata = {
  title: "Hire Laravel Developers - Top Talent for Your Projects",
  description:
    "Hire Laravel developers from Ultrafly Solutions to build scalable, robust web applications. Get expert talent for your business success. Contact us today!",
  keywords: [
    "hire skilled Laravel developers",
    "custom Laravel web development",
  ],
  openGraph: {
    title: "Hire Laravel Developers | Ultrafly Solutions for Custom Web Apps",
    description:
      "Ultrafly Solutions offers skilled Laravel developers to create custom, scalable web apps. Elevate your business with our expert services. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-laravel-developers",
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
      <Laravel />
    </>
  );
}

export default Page;
