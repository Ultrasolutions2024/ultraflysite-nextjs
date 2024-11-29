import React from "react";
import Head from "next/head";

import Software from "./Software";

export const metadata = {
  title: `
Ultrafly Solutions | Software Development Company Coimbatore
 `,
  description:
    "Ultrafly Solutions is one the best software development companies in Coimbatore. Grow your business with our efficient software solutions in affordable price",
  keywords:
    "software development, custom software, software solutions, Ultrafly Solutions",
  openGraph: {
    title: `Software Development Company | Ultrafly Solutions`,
    description:
      "Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/software-development",
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
          href="https://www.ultraflysolutions.com/software-development"
        />
      </Head>
      <Software />
    </>
  );
}

export default Page;
