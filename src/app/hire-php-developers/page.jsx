import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const PHP = dynamic(() => import("./php"), {
  ssr: false,
});

export const metadata = {
  title: `Hire PHP Developers | Expert PHP Development Servic`,
  description:
    "Hire skilled PHP developers at Ultrafly Solutions for custom web development. Get top-notch software solutions with expert developers for your project needs.",
  keywords: [
    "hire expert PHP developers",
    "custom PHP web development solutions",
  ],
  openGraph: {
    title: `Hire PHP Developers | Ultrafly Solutions for Web Solutions`,
    description:
      "Hire PHP developers from Ultrafly Solutions for dynamic, secure, and scalable web apps. Boost your digital presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-php-developers",
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
      <PHP />
    </>
  );
}

export default Page;
