import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head"; // Import Head component for managing <head> elements

// Dynamically import the PrivacyPolicy component
const PrivacyPolicy = dynamic(() => import('./PrivacyPolicy'), {
  ssr: false,
});

// Define metadata for the page
const metadata = {
  title: "Privacy Policy | Ultrafly Solutions",
  description:
    "Read the privacy policy of Ultrafly Solutions to understand how we handle your data with transparency and care.",
  keywords: "privacy policy, data protection, Ultrafly Solutions",
  openGraph: {
    title: "Privacy Policy | Ultrafly Solutions",
    description:
      "Learn about the privacy practices of Ultrafly Solutions and how we ensure your data security.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/privacy-policy-banner.webp", // Update this URL as appropriate
      },
    ],
    url: "https://www.ultraflysolutions.com/privacy-policy", // Update to match the privacy policy URL
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
          href="https://www.ultraflysolutions.com/privacy-policy"
        />
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default Page;
