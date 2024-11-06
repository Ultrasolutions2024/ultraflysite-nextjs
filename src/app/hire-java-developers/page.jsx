import React from "react";
import Java from "./Java";
export const metadata = {
  title: " Hire Java Developers | Ultrafly Solutions for Performance Apps",
  description:
    "Hire Java developers from Ultrafly Solutions for robust, secure, high-performance applications. Drive business success with us. Get started now!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Java Developers | Ultrafly Solutions for Performance Apps",
    description:
      "Hire Java developers from Ultrafly Solutions for robust, secure, high-performance applications. Drive business success with us. Get started now!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-java-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Java />;
}

export default page;
