import React from "react";
import dynamic from "next/dynamic";
const MernfullStack=dynamic(()=>import('./MernFullStack'),{
  ssr:false
})
export const metadata = {
  title: " Hire MERN Stack Developers | Ultrafly Solutions for Full-Stack",
  description:
    "Hire MERN stack developers from Ultrafly Solutions for fast, full-stack apps. Seamlessly integrate frontend and backend. Contact us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire MERN Stack Developers | Ultrafly Solutions for Full-Stack",
    description:
      "Hire MERN stack developers from Ultrafly Solutions for fast, full-stack apps. Seamlessly integrate frontend and backend. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-mernstack-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <MernfullStack />;
}

export default page;
