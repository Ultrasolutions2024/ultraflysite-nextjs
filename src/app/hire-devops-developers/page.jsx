import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const DevOps = dynamic(() => import('./DevOps'), {
  ssr: false
});

export const metadata = {
  title: "Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows",
  description:
    "Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!",
  openGraph: {
    title: "Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows",
    description:
      "Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-devops-developers", // Updated to match main content
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
      <DevOps />
    </>
  );
}

export default Page;
