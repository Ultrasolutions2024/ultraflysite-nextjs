import React from "react";
import UnlockingSuccess from "./UnlockingSuccess";
export const metadata = {
  title:
    "Unlocking Success: Why SEO Is Important in Business and How to Leverage It Today!", // Page title
  openGraph: {
    title:
      "Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology", // Open Graph title
    description:
      "Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.", // Open Graph description
    // images: [
    //   {
    //     url: Simg, // Ensure Simg is defined or points to the correct image path
    //   },
    // ],
    url: "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation", // Open Graph URL
    type: "article", // Content type
  },
};

function page() {
  return <UnlockingSuccess />;
}

export default page;
