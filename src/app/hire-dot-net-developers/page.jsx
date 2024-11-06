import React from "react";
import Dotnet from "./Dotnet";
export const metadata = {
  title: ` Hire Expert .NET Developers | Ultrafly Solutions for Scalable Apps`,
  description:
    "Hire skilled.NET developers from Ultrafly Solutions to build secure, scalable web apps. Boost your business with our expert services. Contact us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: ` Hire Expert .NET Developers | Ultrafly Solutions for Scalable Apps`,
    description:
      "Hire skilled.NET developers from Ultrafly Solutions to build secure, scalable web apps. Boost your business with our expert services. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-dot-net-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Dotnet />;
}

export default page;
