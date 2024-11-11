import React from "react";
import dynamic from "next/dynamic";
const Javascript=dynamic(()=>import('./Javascript'),{
  ssr:false
})
export const metadata = {
  title: `Hire JavaScript Developers | Ultrafly Solutions for Interactive App`,
  description:
    "Ultrafly Solutions offers expert JavaScript developers to create interactive, high-performance apps. Enhance engagement. Get in touch now!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: `Hire JavaScript Developers | Ultrafly Solutions for Interactive Apps`,
    description:
      "Ultrafly Solutions offers expert JavaScript developers to create interactive, high-performance apps. Enhance engagement. Get in touch now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-javascript-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Javascript />;
}

export default page;
