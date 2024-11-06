import React from "react";
import Android from "./Android";
export const metadata = {
  title: "Hire Android App Developers | Ultrafly Solutions for Mobile",
  description:
    "Hire Android app developers from Ultrafly Solutions to build custom, high-performance mobile apps. Enhance user experience. Get in touch today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Android App Developers | Ultrafly Solutions for Mobile",
    description:
      "Hire Android app developers from Ultrafly Solutions to build custom, high-performance mobile apps. Enhance user experience. Get in touch today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-android-app-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Android />;
}

export default page;
