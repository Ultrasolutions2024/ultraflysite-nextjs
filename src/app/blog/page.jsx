import React from "react";
import Blog from "./Blog";
export const metadata = {
  title: "Ultrafly Solutions Blog – Latest Tech Insights & Innovations",
  description:
    "Discover the Ultrafly Solutions blog for expert insights on tech trends, industry innovations, and our cutting-edge solutions. Stay informed and ahead in the digital world.",
  keywords:
    "Ultrafly Solutions, tech insights, industry innovations, digital solutions, technology trends, business solutions, tech blog",
  openGraph: {
    title: "Ultrafly Solutions Blog – Latest Tech Insights & Innovations",
    description:
      "Discover the Ultrafly Solutions blog for expert insights on tech trends, industry innovations, and our cutting-edge solutions. Stay informed and ahead in the digital world.",
    images: [
      {
        url: "../images/blog/timg.jpg", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/blog",
    // type: "article",
  },
};
function page() {
  return <Blog />;
}

export default page;
