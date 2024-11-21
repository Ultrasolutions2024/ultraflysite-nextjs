import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";  // Import Head component for managing <head> elements

const Software = dynamic(() => import('./Software'), {
  ssr: false,
});

export const metadata = {
  title: `Software Development Company | Ultrafly Solutions`,
  description:
    "Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs.",
  keywords:
    "software development, custom software, software solutions, Ultrafly Solutions",
  openGraph: {
    title: `Software Development Company | Ultrafly Solutions`,
    description:
      "Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/software-development", // Updated to match main content
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
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <link
          rel="canonical"
          href={metadata.openGraph.url}
        />
      </Head>
      <Software />
    </>
  );
}

export default Page;
