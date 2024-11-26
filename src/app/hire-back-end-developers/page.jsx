import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BackendDevelopers = dynamic(() => import("./BackendDevelopers"), {
  ssr: false,
});

export const metadata = {
  title: "Hire Skilled Backend Developers for Your Projects",
  description:
    "Hire experienced backend developers to build robust, scalable, and efficient solutions tailored to your business needs. Contact Ultrafly Solutions today",
  keywords: ["hire backend developers", "backend development services"],
  openGraph: {
    title: "Hire Backend Developers | Ultrafly Solutions for Scalable Apps",
    description:
      "Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", 
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-back-end-developers",
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
      <BackendDevelopers />
    </>
  );
}

export default Page;
