import React from "react";
import Head from "next/head";
import About from "./About";

const metadata = {
  title: "Software Development Company Coimbatore | Ultrafly Solutions",
  description:
    "Ultrafly Solutions is one of the best software development company in Coimbatore offering software and digital marketing solutions for your business growth.",
  keywords:
    "about Ultrafly Solutions, IT company, tech solutions, company mission, expert team",
  openGraph: {
    title: "About Us | Ultrafly Solutions",
    description:
      "Learn more about Ultrafly Solutions, our mission, values, and the expert team driving innovative IT solutions for businesses worldwide.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/about-us",
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
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <About />
    </>
  );
}

export default Page;
