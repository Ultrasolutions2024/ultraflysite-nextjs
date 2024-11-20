import React from "react";
import dynamic from "next/dynamic";
const FrontendDevelopers =dynamic(()=>import('./FrontendDevelopers'),{
  ssr:false
})
export const metadata = {
  title: "Hire Frontend Developers | Ultrafly Solutions for Web Apps",
  description:
    "Hire frontend developers from Ultrafly Solutions for responsive, dynamic web apps. Deliver outstanding user experiences. Contact us today to learn more!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Frontend Developers | Ultrafly Solutions for Web Apps",
    description:
      "Hire frontend developers from Ultrafly Solutions for responsive, dynamic web apps. Deliver outstanding user experiences. Contact us today to learn more!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-front-end-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <FrontendDevelopers />;
}

export default page;
