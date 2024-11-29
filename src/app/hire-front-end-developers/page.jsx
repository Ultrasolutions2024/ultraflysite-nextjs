import React from "react";
import Head from "next/head";

import FrontendDevelopers from "./FrontendDevelopers";

export const metadata = {
  title: "Hire Expert Frontend Developers | Ultrafly Solutions",
  description:
    "Hire our skilled frontend developers for custom software solutions. Boost your digital presence with responsive, user-friendly, and cutting-edge designs.",
  keywords: [
    "responsive frontend development services",
    "hire dedicated frontend developers",
  ],
  openGraph: {
    title: "Hire Frontend Developers | Ultrafly Solutions for Web Apps",
    description:
      "Hire frontend developers from Ultrafly Solutions for responsive, dynamic web apps. Deliver outstanding user experiences. Contact us today to learn more!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-front-end-developers",
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
      <FrontendDevelopers />
    </>
  );
}

export default Page;
