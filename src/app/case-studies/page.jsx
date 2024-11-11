import React from "react";
import dynamic from "next/dynamic";
const Casest=dynamic(()=>import('./casest'),{
  ssr:false
})
export const metadata = {
  title: "Case Studies | Ultrafly Solutions",
  description:
    "Explore the success stories and impactful case studies from Ultrafly Solutions. Discover how our expert IT solutions have helped businesses grow and succeed.",
  keywords: "case studies, Ultrafly Solutions, IT solutions, business growth",
  openGraph: {
    title: "Case Studies | Ultrafly Solutions",
    description:
      "Explore the success stories and impactful case studies from Ultrafly Solutions. Discover how our expert IT solutions have helped businesses grow and succeed.",
    images: [
      {
        url: "../images/blog/timg.jpg", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/contact-us",
    // type: "article",
  },
};

function page() {
  return <Casest />;
}

export default page;
