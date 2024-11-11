import React from "react";
import dynamic from "next/dynamic";
const BlockchainDevelopers=dynamic(()=>import('./BlockchainDevelopers'),{
  ssr:false
})
export const metadata = {
  title: ` Hire Blockchain Developers | Ultrafly Solutions for Secure Apps`,
  description:
    "Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: ` Hire Blockchain Developers | Ultrafly Solutions for Secure Apps`,
    description:
      "Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-blockchain-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <BlockchainDevelopers />;
}

export default page;
