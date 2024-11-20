import React from "react";
import dynamic from "next/dynamic";
const Software=dynamic(()=>import('./Software'),{
  ssr:false
})
export const metadata = {
  title: `Software Development Company | Ultrafly Solutions`,
  description:
    "Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs.",
  keywords:
    "software development, custom software, software solutions, Ultrafly Solutions",
  openGraph: {
    title: `Software Development Company | Ultrafly Solutions`,
    description:
      "Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.webp", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/software-development", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return <Software />;
}

export default page;
