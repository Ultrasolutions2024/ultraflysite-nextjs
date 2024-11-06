import React from "react";
import Node from "./Node";
export const metadata = {
  title: " Hire Expert Node.JS Developer | Ultrafly Solutions for Scalable Apps",
  description:
    "Hire Node.js developers from Ultrafly Solutions for fast, efficient server-side apps. Optimize your backend with us. Reach out today to get started!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Node.JS Developers | Ultrafly Solutions for Full-Stack",
    description:
      "Hire Node.js developers from Ultrafly Solutions for fast, efficient server-side apps. Optimize your backend with us. Reach out today to get started!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com//hire-node-js-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Node />;
}

export default page;
