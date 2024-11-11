import React from "react";
import Layout from "./layout";

import dynamic from "next/dynamic";
const Web = dynamic(() => import("./web/Web"), {
  ssr: false,
});
export const metadata = {
  title: "Careers | Ultrafly Solutions",
  description:
    "Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today.",
  keywords: "careers, job openings, tech jobs, Ultrafly Solutions careers",
  openGraph: {
    title: "Careers | Ultrafly Solutions",
    description:
      "Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today.",
    images: [
      {
        url: "/images/blog/timg.jpg", // Ensure this path is correct
      },
    ],
    url: "https://www.ultraflysolutions.com/careers",
    // type: "article",
  },
};
function page() {
  return <Web />;
}

export default page;
