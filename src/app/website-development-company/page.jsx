import React from "react";
import Head from "next/head";

import Website from "./Website";

export const metadata = {
  title: "Website Development Company Coimbatore | Ultrafly Solutions",
  description:
    "Ultrafly Solutions create enterprise curated website development services in Coimbatore. we offer modern, responsive websites to grow your business online.",
  keywords:
    "website development, responsive websites, web design, Ultrafly Solutions",
  openGraph: {
    title: "Website Development Services by Ultrafly Solutions",
    description:
      "Discover our professional website development services. We create responsive and user-friendly websites tailored to your business needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/website-development-company",
    type: "website",
  },
};

function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link
          rel="canonical"
          href="https://www.ultraflysolutions.com/website-development-company"
        />
      </Head>
      <Website />
    </>
  );
}

export default Page;
