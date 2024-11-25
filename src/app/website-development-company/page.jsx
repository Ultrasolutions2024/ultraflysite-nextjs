import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head"; // Import Head for managing metadata

const Website = dynamic(() => import("./Website"), {
  ssr: false,
});

export const metadata = {
  title: "Website Development Company Coimbatore | Ultrafly Solutions",
  description:
    "Professional website development services by Ultrafly Solutions. We build responsive and user-friendly websites tailored to your business needs.",
  keywords:
    "website development, responsive websites, web design, Ultrafly Solutions",
  openGraph: {
    title: "Website Development Services by Ultrafly Solutions",
    description:
      "Discover our professional website development services. We create responsive and user-friendly websites tailored to your business needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/website-development-company", // Updated to match main content
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
