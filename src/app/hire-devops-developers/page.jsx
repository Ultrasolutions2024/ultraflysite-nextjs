import React from "react";
import dynamic from "next/dynamic";
const DevOps=dynamic(()=>import('./DevOps'),{
  ssr:false
})
export const metadata = {
  title: "Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows",
  description:
    "Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows",
    description:
      "Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-devops-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <DevOps />;
}

export default page;
