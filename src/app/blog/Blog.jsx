"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Fimg from "../images/blog/first.webp";
import Simg from "../images/blog/seoblog.webp";
import Timg from "../images/blog/timg.webp";
import bg1 from "../images/blog/linkedin.webp";
import aidriven from "../images/blog/aidriven.jpeg";

function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center  px-6"
        style={{ font: "Manrope" }}
      >
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-7xl">
          <h1 className="text-black text-center text-3xl md:text-4xl font-bold pb-8">
            <span className=""></span>ULTRAFLY SOLUTIONS BLOG
          </h1>

          <p className="text-center text-black px-1 md:px-20 pb-8">
            Welcome to the Ultrafly Solutions blog! Here, we explore the latest
            in tech innovations, industry trends, and our groundbreaking
            solutions designed to elevate your business. Stay tuned for
            insights, updates, and expert advice to help you stay ahead in the
            fast-paced digital world.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Link href="/career-in-digital-marketing-2025">
                <Image
                  quality={100}
                  className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  src={aidriven}
                  alt="Unlocking the Future"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent opacity-90"></div>
              </Link>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-white font-bold text-2xl relative group">
                Career in Digital Marketing!
                  <span className="absolute inset-0 bottom-[4px] h-[4px] bg-[#ffffff] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -translate-y-3"></span>
                </h2>

                <p className="text-gray-300 mt-">
                How to Build A Successful Career in Digital Marketing in
                2025 Despite AI Trends?
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 grid-col-1">
              <div className="group bg-black overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative">
                <Link href="/increase-linkedin-followers">
                  <Image
                    quality={100}
                    className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    src={bg1}
                    alt="SEO Importance"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg relative">
                    LinkedIn Assists:
                      <span className="absolute inset-0 bottom-[-2px] h-[4px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -translate-y-3"></span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                    How to Increase Your LinkedIn Followers and Make a Living in
                    2025?
                    </p>
                  </div>
                </Link>
              </div>
              {/* 
              <div className="group bg-black overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative">
                <Link href="/top-mobile-development-framework">
                  <Image
                    quality={100}
                    className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    src={Timg}
                    alt="Mobile Frameworks"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg relative">
                      Application Development:
                      <span className="absolute inset-0 bottom-[-2px] h-[4px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -translate-y-3"></span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Top 5 Mobile App Development Frameworks in 2024
                    </p>
                  </div>
                </Link>
              </div>

              <div className="group bg-black overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative">
                <Link href="/increase-linkedin-followers">
                  <Image
                    quality={100}
                    className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    src={bg1}
                    alt="LinkedIn Followers"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg relative">
                      LinkedIn Assists:
                      <span className="absolute inset-0 bottom-[-2px] h-[4px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -translate-y-3"></span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                      How to Increase Your LinkedIn Followers and Make a Living
                      in 2025?
                    </p>
                  </div>
                </Link>
              </div> */}

              {/* <div className="group bg-black overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative rounded-xl">
                <Link href="/fifth-blog-topic">
                  <Image
                    quality={100}
                    className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    src={bg1}
                    alt="Fifth Blog Topic"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg relative">
                      Fifth Blog Topic:
                      <span className="absolute inset-0 bottom-[-2px] h-[4px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -translate-y-3"></span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Explore our latest insights in the tech industry and
                      beyond.
                    </p>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
