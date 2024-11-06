import React from "react";
import MernfullStack from "./MernFullStack";
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
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
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
