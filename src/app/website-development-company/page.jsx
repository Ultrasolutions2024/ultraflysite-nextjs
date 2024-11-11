import React from 'react'
import dynamic from 'next/dynamic';
const Website=dynamic(()=>import('./Website'),{
  ssr:false
})
export const metadata = {
  title: "Website Development | Ultrafly Solutions",
  description: "Professional website development services by Ultrafly Solutions. We build responsive and user-friendly websites tailored to your business needs.",
  keywords: "website development, responsive websites, web design, Ultrafly Solutions",
  openGraph: {
    title: "Website Development Services by Ultrafly Solutions",
    description: "Discover our professional website development services. We create responsive and user-friendly websites tailored to your business needs.",
    images: [
      {
        url: 'https://www.ultraflysolutions.com/images/blog/timg.jpg', // Updated to absolute URL
      },
    ],
    url: "https://www.ultraflysolutions.com/website-development-company", // Updated to match main content
    type: "website",
  },
};

function page() {
  return (
    <>
    
   <Website/>
    </>
  )
}

export default page