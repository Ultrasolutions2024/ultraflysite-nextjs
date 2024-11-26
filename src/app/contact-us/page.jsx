import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
});

export const metadata = {
  title: "Contact the Best Software Development Company in Coimbatore",
  description:
    "Reach out to Ultrafly Solutions, the top software development and digital marketing company in Coimbatore, for innovative solutions tailored to your needs.",
  keywords:
    "contact Ultrafly Solutions, get in touch, IT solutions, business inquiries",
  openGraph: {
    title: "Contact Us | Ultrafly Solutions",
    description:
      "Get in touch with Ultrafly Solutions for expert IT solutions and services. We're here to help your business grow and succeed.",
    images: [
      {
        url: "../images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/contact-us",
    // type: "article",
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
      <Contact />
    </>
  );
}

export default Page;
