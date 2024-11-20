import React from "react";
import dynamic from "next/dynamic";
const Python=dynamic(()=>import('./Python'),{
  ssr:false
})
export const metadata = {
  title: "Hire Python Developers | Ultrafly Solutions for Secure Apps",
  description:
    "Ultrafly Solutions offers skilled Python developers to create scalable, secure solutions. Drive growth with our expert services. Get started today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: " Hire Python Developers | Ultrafly Solutions for Secure Apps",
    description:
      "Ultrafly Solutions offers skilled Python developers to create scalable, secure solutions. Drive growth with our expert services. Get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-python-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Python />;
}

export default page;
