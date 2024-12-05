import React from "react";
import Head from "next/head";

import LinkedinFollowers from "./LinkedinFollowers";

export const metadata = {
  title: "How to Increase LinkedIn Followers in 2024",
  description: "Learn effective strategies to increase your LinkedIn followers and grow your professional network in 2024.",
  openGraph: {
    title: "How to Increase LinkedIn Followers in 2024",
    description: "Discover proven tips and tricks to boost your LinkedIn followers and enhance your brand visibility.",
    images: [
      {
        url: "/images/blog/linkedin-followers.webp", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/increase-linkedin-followers",
    type: "article",
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
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <LinkedinFollowers />
    </>
  );
}

export default Page;
