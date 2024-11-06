import React from "react";
import IOS from "./IOS";
export const metadata = {
  title: ` Hire iOS Developers | Ultrafly Solutions for Innovative Apps`,
  description:
    "Hire expert iOS developers from Ultrafly Solutions for high-performance, user-friendly mobile apps. Elevate your mobile strategy. Get started today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: ` Hire iOS Developers | Ultrafly Solutions for Innovative Apps`,
    description:
      "Hire expert iOS developers from Ultrafly Solutions for high-performance, user-friendly mobile apps. Elevate your mobile strategy. Get started today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-ios-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <IOS />;
}

export default page;
