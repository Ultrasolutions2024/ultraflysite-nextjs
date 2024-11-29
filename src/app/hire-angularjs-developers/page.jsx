import React from "react";
import Head from "next/head";

import Angular from "./Angular";
export const metadata = {
  title: "Hire Angular Developers | Expert Angular Development Services",
  description:
    "Hire top Angular developers for your project. Our skilled team delivers high-quality, scalable, and innovative Angular solutions to drive your business forward.",
  keywords: ["hire Angular developers", "Expert Angular Development Services"],
  openGraph: {
    title: "Hire AngularJS Developers | Ultrafly Solutions for Web Apps",
    description:
      "Hire AngularJS developers from Ultrafly Solutions to build dynamic, scalable web apps. Improve the user experience with our expertise. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-angularjs-developers", 
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
      <Angular />
    </>
  );
}

export default Page;
