import React from 'react'
import dynamic from 'next/dynamic';
const ITStaffing=dynamic(()=>import("./ITStaffing"),{
  ssr:false
})
export const metadata = {
  title: "IT Staffing Solutions | Ultrafly Solutions",
  description: "Find the right IT talent with Ultrafly Solutions' staffing services. We connect businesses with skilled professionals to meet their IT needs.",
  keywords: " IT staffing, IT talent, staffing services, IT professionals, Ultrafly Solutions",
  openGraph: {
    title: "Website Development Services by Ultrafly Solutions",
    description: "Discover our professional website development services. We create responsive and user-friendly websites tailored to your business needs.",
    images: [
      {
        url: 'https://www.ultraflysolutions.com/images/blog/timg.webp', // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/it-staffing", // Updated to match main content
    type: "website",
  },
};
function page() {
  return (
    <ITStaffing/>
  )
}

export default page