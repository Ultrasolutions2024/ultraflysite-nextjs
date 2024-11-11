import React from "react";
import dynamic from "next/dynamic";
const Reactjs=dynamic(()=>import('./React'),{
  ssr:false
})
export const metadata = {
  title: "Hire ReactJS Developers | Ultrafly Solutions for Frontend Apps",
  description:
    " Hire ReactJS developers from Ultrafly Solutions to build fast, scalable frontend apps. Boost your digital experience. Contact us to get started today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire ReactJS Developers | Ultrafly Solutions for Frontend Apps",
    description:
      " Hire ReactJS developers from Ultrafly Solutions to build fast, scalable frontend apps. Boost your digital experience. Contact us to get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-reactjs-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Reactjs />;
}

export default page;
