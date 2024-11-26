import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Ionic = dynamic(() => import("./Ionic"), {
  ssr: false,
});

export const metadata = {
  title: "Hire Ionic Developers | Top-Rated Ionic Development Services",
  description:
    "Hire skilled Ionic developers for robust mobile app solutions. Ultrafly Solutions offers expert resources to transform your ideas into high-performing apps.",
  keywords: [
    "hire expert Ionic app developers",
    "hybrid mobile app development with Ionic",
  ],
  openGraph: {
    title: "Hire Ionic Developers | Ultrafly Solutions for Hybrid Apps",
    description:
      "Hire Ionic developers from Ultrafly Solutions to build secure, versatile hybrid mobile apps. Reach your audience on all platforms. Contact us now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-ionic-developers",
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
      <Ionic />
    </>
  );
}

export default Page;
