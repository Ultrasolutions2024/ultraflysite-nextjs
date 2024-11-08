import React from 'react'
import Contact from './Contact';
export const metadata = {
  title: "Contact Us | Ultrafly Solutions",
  description: "Get in touch with Ultrafly Solutions for expert IT solutions and services. We're here to help your business grow and succeed.",
  keywords:"contact Ultrafly Solutions, get in touch, IT solutions, business inquiries",
  openGraph: {
    title: "Contact Us | Ultrafly Solutions",
    description: "Get in touch with Ultrafly Solutions for expert IT solutions and services. We're here to help your business grow and succeed.",
    images: [
      {
        url: '../images/blog/timg.jpg', // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/contact-us",
    // type: "article",
  },
};

function page() {
  return (
    <Contact/>
  )
}

export default page