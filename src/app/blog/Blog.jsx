"use client";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import Fimg from "../images/blog/first.jpg";
import Simg from "../images/blog/seoblog.jpg";
import Timg from "../images/blog/timg.jpg";
import Image from "next/image";
import bg1 from "../images/blog/linkedin.jpg";
import bg2 from "../images/blog/picture1.png";
function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className=" text-blue-500 text-center text-3xl md:text-4xl font-bold pb-12 pt-12 w-full">
            ULTRAFLY SOLUTIONS BLOG
          </h1>
          <p className="px-10 sm:px-24 pb-10 md:pb-10 ">
            Welcome to the Ultrafly Solutions blog! Here, we explore the latest
            in tech innovations, industry trends, and our groundbreaking
            solutions designed to elevate your business. Stay tuned for
            insights, updates, and expert advice to help you stay ahead in the
            fast-paced digital world.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10  px-10 sm:px-24 gap-8 ">
          <Link href="/ultrafly-solutions-driving-tech-innovation">
            <div className="w-full rounded overflow-hidden shadow-2xl sm:h-[380px] p-4 hover:scale-105 transition-all duration-300">
              <Image className="w-full" src={Fimg} alt="Unlocking the Future" />
              <div className=" py-4">
                <h2 className="font-bold text-xl">Unlocking the Future:</h2>
                <p className="text-gray-700 text-base font-bold">
                  How Ultrafly Solutions is Shaping the Next Generation of
                  Technology
                </p>
              </div>
            </div>
          </Link>
          <Link href="/why-seo-important-in-business">
            <div className="w-full rounded overflow-hidden shadow-2xl sm:h-[380px] p-4 hover:scale-105 transition-all duration-300">
              <Image className="w-full" src={Simg} alt="Unlocking the Future" />
              <div className=" py-4">
                <h2 className="font-bold text-xl">Unlocking Success:</h2>
                <p className="text-gray-700 text-base font-bold">
                  Why SEO Is Important in Business and How Leverage It Today!
                </p>
              </div>
            </div>
          </Link>
          <Link href="/top-mobile-development-framework">
            <div className="w-full rounded overflow-hidden shadow-2xl sm:h-[380px] p-4 hover:scale-105 transition-all duration-300">
              <Image className="w-full" src={Timg} alt="Unlocking the Future" />
              <div className=" py-4">
                <h2 className="font-bold text-xl">Application Development:</h2>
                <p className="text-gray-700 text-base font-bold">
                  Top 5 Mobile App Development Frameworks in 2024
                </p>
              </div>
            </div>
          </Link>
          <Link href="/increase-linkedin-followers">
            <div className="w-full rounded h-fit overflow-hidden shadow-2xl  p-4 hover:scale-105 transition-all duration-300">
              <Image className="w-full" src={bg1} alt="Unlocking the Future" />
              <div className=" py-4">
                <h2 className="font-bold text-xl">LinkedIn Assists</h2>
                <p className="text-gray-700 text-base font-bold">
                  How to Increase Your LinkedIn Followers and Make a Living in
                  2025?
                </p>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Blog;
