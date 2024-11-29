import React from "react";
import Head from "next/head"; 
import ChooseUs from "./ChooseUs";

const metadata = {
  title: "Why Choose Us | Ultrafly Solutions",
  description:
    "Discover why Ultrafly Solutions is the right choice for your software development needs. Our expertise and commitment ensure success.",
  keywords:
    "why choose us, Ultrafly Solutions, software development, reliable software services",
  openGraph: {
    title: "Why Choose Us | Ultrafly Solutions",
    description:
      "Learn why businesses trust Ultrafly Solutions for innovative and reliable software solutions tailored to their needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/why-choose-us-banner.webp", 
      },
    ],
    url: "https://www.ultraflysolutions.com/why-choose-us",
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
        <link
          rel="canonical"
          href="https://www.ultraflysolutions.com/why-choose-us"
        />
      </Head>
      <ChooseUs />
    </>
  );
}

export default Page;
