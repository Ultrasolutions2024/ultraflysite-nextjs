"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import career_banner from "../images/career/career_banner.webp";

function Careers({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="relative h-60 w-screen flex items-center justify-center flex-col gap-4 max-sm:px-10">
        {/* Next.js Image for Background */}
        <Image
          src={career_banner}
          alt="Career Banner"
           layout="fill" // Ensures the image fills the container
          objectFit="cover" // Covers the container without distortion
          objectPosition="0 30%" // Matches the original background position
          priority // Ensures the banner image loads immediately
          quality={75} // Optimize image quality
          className="z-0" // Keeps the image behind content
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center">
          <h2 className="text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">
            JOIN OUR TEAM
          </h2>
          <Link href="/contact-us">
            <button className="text-black bg-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white">
              Join with us
            </button>
          </Link>
        </div>
      </div>

      <section className="">
        {/* Schedule Section */}
        <div className="container page-padding py-[3rem] md:py-[7rem]">
          {children}
        </div>
      </section>
    </>
  );
}

export default Careers;
