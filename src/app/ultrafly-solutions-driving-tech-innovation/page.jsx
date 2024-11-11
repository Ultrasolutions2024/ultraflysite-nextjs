import React from "react";
import dynamic from "next/dynamic";
const UnlockingFuture=dynamic(()=>import('./UnlockingFuture'),{
  ssr:false
})
export const metadata = {
  title:
    "Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology",
  description:
    "Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.",
  openGraph: {
    title:
      "Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology",
    description:
      "Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.",
    // images: [
    //   {
    //     url: Fimg, // Ensure Fimg is a valid path or variable that references the image
    //   },
    // ],
    url: "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation",
    type: "article",
  },
};

function page() {
  return <UnlockingFuture />;
}

export default page;
