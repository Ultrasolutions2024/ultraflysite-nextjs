import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BlockchainDevelopers = dynamic(() => import('./BlockchainDevelopers'), {
  ssr: false
});

export const metadata = {
  title: "Hire Blockchain Developers | Ultrafly Solutions for Secure Apps",
  description:
    "Hire blockchain developers from Ultrafly Solutions to build secure, decentralized applications. Leverage blockchain technology for secure and efficient solutions.",
  openGraph: {
    title: "Hire Blockchain Developers | Ultrafly Solutions for Secure Apps",
    description:
      "Hire blockchain developers from Ultrafly Solutions to build secure, decentralized applications. Leverage blockchain technology for secure and efficient solutions.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-blockchain-developers", // Updated to match main content
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
      <BlockchainDevelopers />
    </>
  );
}

export default Page;
