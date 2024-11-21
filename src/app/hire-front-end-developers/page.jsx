import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const FrontendDevelopers = dynamic(() => import('./FrontendDevelopers'), {
  ssr: false
});

export const metadata = {
  title: "Hire Frontend Developers | Ultrafly Solutions for Web Apps",
  description:
    "Hire frontend developers from Ultrafly Solutions for responsive, dynamic web apps. Deliver outstanding user experiences. Contact us today to learn more!",
  openGraph: {
    title: "Hire Frontend Developers | Ultrafly Solutions for Web Apps",
    description:
      "Hire frontend developers from Ultrafly Solutions for responsive, dynamic web apps. Deliver outstanding user experiences. Contact us today to learn more!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-front-end-developers", // Updated to match main content
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <FrontendDevelopers />
    </>
  );
}

export default Page;
