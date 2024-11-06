// pages/404.js
"use client"; // Client-side rendering for useEffect hook
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page immediately when this component is rendered
    router.replace("/");
  }, [router]);

  return null; // Optionally, render nothing as user is redirected
}
