import React from "react";
import Head from "next/head";

import DevOps from "./DevOps";

export const metadata = {
  title: "Hire DevOps Developers - Expert DevOps Solutions",
  description:
    "Hire skilled DevOps developers for seamless CI/CD, cloud integration, and automation. Enhance efficiency and scalability with our expert DevOps solutions.",
  keywords: ["DevOps automation services", "hire cloud DevOps engineers"],
  openGraph: {
    title:
      "Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows",
    description:
      "Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", 
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-devops-developers"
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
      <DevOps />
    </>
  );
}

export default Page;
