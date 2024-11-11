import React from "react";
import dynamic from "next/dynamic";
const Laravel=dynamic(()=>import('./Laravel'),{
  ssr:false
})
export const metadata = {
  title: "Hire Laravel Developers | Ultrafly Solutions for Custom Web Apps",
  description:
    "Ultrafly Solutions offers skilled Laravel developers to create custom, scalable web apps. Elevate your business with our expert services. Contact us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "Hire Laravel Developers | Ultrafly Solutions for Custom Web Apps",
    description:
      "Ultrafly Solutions offers skilled Laravel developers to create custom, scalable web apps. Elevate your business with our expert services. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-laravel-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Laravel />;
}

export default page;
