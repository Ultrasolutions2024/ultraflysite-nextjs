import React from "react";
import dynamic from "next/dynamic";
const Hr = dynamic(() => import("./Hr"), {
  ssr: false,
});
function page() {
  return <Hr />;
}

export default page;
