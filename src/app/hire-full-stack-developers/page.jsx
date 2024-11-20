import React from "react";
import dynamic from "next/dynamic";
const FullstackDevelopers=dynamic(()=>import('./FullstackDevelopers'),{
  ssr:false,
})
export const metadata = {
  title: "Hire Full Stack Developers | Ultrafly Solutions for Web Apps",
  description:
    "Ultrafly Solutions offers full stack developers for end-to-end solutions. Build comprehensive web apps with us. Reach out today to get started!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Full Stack Developers | Ultrafly Solutions for Web Apps",
    description:
      "Ultrafly Solutions offers full stack developers for end-to-end solutions. Build comprehensive web apps with us. Reach out today to get started!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-full-stack-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <FullstackDevelopers />;
}

export default page;
