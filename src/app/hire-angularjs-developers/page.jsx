import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Angular = dynamic(() => import('./Angular'), {
  ssr: false
});

export const metadata = {
  title: "Hire AngularJS Developers | Ultrafly Solutions for Web Apps",
  description:
    "Hire AngularJS developers from Ultrafly Solutions to build dynamic, scalable web apps. Improve the user experience with our expertise. Contact us today!",
  openGraph: {
    title: "Hire AngularJS Developers | Ultrafly Solutions for Web Apps",
    description:
      "Hire AngularJS developers from Ultrafly Solutions to build dynamic, scalable web apps. Improve the user experience with our expertise. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-angularjs-developers", // Updated to match main content
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
      <Angular />
    </>
  );
}

export default Page;
