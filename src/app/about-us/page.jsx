import React from "react";
import dynamic from "next/dynamic";
const About=dynamic(()=>import('./About'),{
  ssr:false,
})
export const metadata = {
  title: "About Us | Ultrafly Solutions",
  description:
    "Learn more about Ultrafly Solutions, our mission, values, and the expert team driving innovative IT solutions for businesses worldwide.",
  keywords:
    "about Ultrafly Solutions, IT company, tech solutions, company mission, expert team",
  openGraph: {
    title: "About Us | Ultrafly Solutions",
    description:
      "Learn more about Ultrafly Solutions, our mission, values, and the expert team driving innovative IT solutions for businesses worldwide.",
    images: [
      {
        url: "/images/blog/timg.jpg", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/about-us",
    // type: "article",
  },
};
function page() {
  return <About />;
}

export default page;
