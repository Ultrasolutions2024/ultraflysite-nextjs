import React from "react";
import Head from "next/head";

import PrivacyPolicy from "./PrivacyPolicy";

const metadata = {
  title: "Company's Privacy Policy | Ultrafly Solutions",
  description:
    "Explore Ultrafly Solutions' Privacy Policy to understand how we protect your data. Learn about our secure practices to ensure your information stays private.",
  keywords: "privacy policy, data protection, Ultrafly Solutions",
  openGraph: {
    title: "Privacy Policy | Ultrafly Solutions",
    description:
      "Learn about the privacy practices of Ultrafly Solutions and how we ensure your data security.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/privacy-policy-banner.webp",
      },
    ],
    url: "https://www.ultraflysolutions.com/privacy-policy",
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
          href="https://www.ultraflysolutions.com/privacy-policy"
        />
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default Page;
