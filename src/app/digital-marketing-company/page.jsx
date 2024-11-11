import React from "react";
import dynamic from "next/dynamic";
const Seo=dynamic(()=>import('./Seo'),{
  ssr:false
})
export const metadata = {
  title: "SEO & Digital Marketing | Ultrafly Solutions ",
  description:
    "Boost your online presence with our SEO and digital marketing services. Ultrafly Solutions helps your business reach its full potential.",
  keywords:
    "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: "SEO & Digital Marketing | Ultrafly Solutions",
    description:
      "Boost your online presence with our SEO and digital marketing services. Ultrafly Solutions helps your business reach its full potential.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/digital-marketing-company", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Seo />;
}

export default page;
