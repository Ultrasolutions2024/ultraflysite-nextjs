import React from 'react'
import Portfolio from './portfolio'
export const metadata = {
  title: `Our Portfolio | Ultrafly Solutions`,
  description:
    "Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions.",
  keywords:
    "portfolio, project showcase, case studies, Ultrafly Solutions",
  openGraph: {
    title: `Our Portfolio | Ultrafly Solutions`,
    description:
      "Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions.",
    images: [
      {
        url: "https://www.ultraflysolutions.com/images/blog/timg.jpg", // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/portfolio", // Updated to match main content
    // type: "website",
  },
};
function page() {
  return (
   <Portfolio/>
  )
}

export default page