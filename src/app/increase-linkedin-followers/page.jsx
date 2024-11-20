import React from "react";
import dynamic from "next/dynamic";
const LinkedinFollowers=dynamic(()=>import('./LinkedinFollowers'),{
  ssr:false
})
export const metadata = {
  title: "Top 05 Mobile App Development Frameworks in 2024",
  description: "Top 05 Mobile App Development Frameworks in 2024",
  openGraph: {
    title: "Top 05 Mobile App Development Frameworks in 2024",
    description: "Top 05 Mobile App Development Frameworks in 2024",
    images: [
      {
        url: "/images/blog/timg.webp", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/top-mobile-development-framework",
    type: "article",
  },
};
function page() {
  return <LinkedinFollowers />;
}

export default page;
