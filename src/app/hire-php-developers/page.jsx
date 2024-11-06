import React from "react";
import PHP from "./php";
export const metadata = {
  title: ` Hire PHP Developers | Ultrafly Solutions for Web Solutions`,
  description:
    "Hire PHP developers from Ultrafly Solutions for dynamic, secure, and scalable web apps. Boost your digital presence. Contact us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: `Hire PHP Developers | Ultrafly Solutions for Web Solutions`,
    description:
      "Hire PHP developers from Ultrafly Solutions for dynamic, secure, and scalable web apps. Boost your digital presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-php-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <PHP />;
}

export default page;
