import React from "react";
import dynamic from "next/dynamic"; 
const ReactNative=dynamic(()=>import('./ReactNative'),{
  ssr:false
})
export const metadata = {
  title: "Hire React Native Developers | Ultrafly Solutions for Fast Apps",
  description:
    " Ultrafly Solutions offers React Native developers to build fast, cross-platform mobile apps. Optimize your mobile presence. Contact us today!",
  // keywords: "SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions",
  openGraph: {
    title: " Hire React Native Developers | Ultrafly Solutions for Fast Apps",
    description:
      " Ultrafly Solutions offers React Native developers to build fast, cross-platform mobile apps. Optimize your mobile presence. Contact us today!",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/hire-react-native-developers", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <ReactNative />;
}

export default page;
