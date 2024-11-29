import React from "react";
import Head from "next/head";

import Android from "./Android";
export const metadata = {
  title: "Hire Our Resources | Expert Software & Marketing Solutions",
  description:
    "Hire our resources for top-notch software developers & digital marketing experts. Boost your business with our standard solutions at Ultrafly Solutions.",
  keywords: ["Hire Our Resources", "Expert Software & Marketing Solutions"],
  openGraph: {
    title: "Hire Android App Developers | Ultrafly Solutions for Mobile",
    description:
      "Hire Android app developers from Ultrafly Solutions to build custom, high-performance mobile apps. Enhance user experience. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-android-app-developers",
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
      <Android />
    </>
  );
}

export default Page;
