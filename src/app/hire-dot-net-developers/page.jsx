import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Dotnet = dynamic(() => import("./Dotnet"), {
  ssr: false,
});

export const metadata = {
  title: `Hire .NET Developers – Expert Resources for Your Projects`,
  description:
    "Hire skilled .NET developers to accelerate your projects. Get top-notch resources, custom solutions, and exceptional results tailored to your business needs.",
  keywords: [
    "hire dedicated .NET developers",
    "custom .NET application development",
  ],
  openGraph: {
    title: `Hire Expert .NET Developers | Ultrafly Solutions for Scalable Apps`,
    description:
      "Hire skilled .NET developers from Ultrafly Solutions to build secure, scalable web apps. Boost your business with our expert services. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-dot-net-developers",
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
      <Dotnet />
    </>
  );
}

export default Page;
