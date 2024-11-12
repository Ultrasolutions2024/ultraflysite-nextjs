"use client";
import "./hero.css";
import { FaRegFaceFrown } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegFaceGrin } from "react-icons/fa6";
import { motion } from "framer-motion";
import womenImg from "../images/hero/women.png";
import { useEffect, useState } from "react";
import screen from "../images/hero/website.jpg";
import mobile from "../images/hero/mobile.jpg";
import seo from "../images/hero/seo.jpg";
import homeimg from "../images/hero/home2.jpg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import "../globals.css";
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  return (
    <>
      <div
        id="home"
        className="h-full md:h-screen w-full max-sm:mb-28"
        style={{
          backgroundImage: `url(${homeimg.src})`, // Use homeimg.src for the correct path
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid lg:grid-cols-2 h-full px-4 md:px-8">
          {/* Swiper Section */}
          <div className="px-4 md:px-0 pt-16 max-md:pb-16">
            <div className="carousel rounded-box w-full overflow-hidden text-white sm:mt-20">
              <motion.div
                className="carousel-item w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex === 0 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: currentIndex === 0 ? "block" : "none" }}
              >
                <div className="flex flex-col items-center justify-center w-full h-fit p-6  rounded-lg backdrop-blur-lg bg-white/10 shadow-lg border border-white/20">
                  <h1 className="text-2xl md:text-4xl font-bold text-center">
                    Welcome to Ultrafly Solutions
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold text-center">
                    &quot;Your Partner in Digital Transformation&quot;
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 font-medium text-xs md:text-sm gap-4 md:gap-6 px-4 md:px-6 mt-4 md:mt-6">
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Turning ideas into digital reality.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Innovating tomorrow’s web, today.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Building websites that drive growth.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Crafting your digital success story.
                    </li>
                  </ul>

                  <Link href="/contact-us">
                    <div className="w-fit mx-auto mt-10">
                      <button className="btn btn-primary px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
                        Get Started Now
                      </button>
                    </div>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="carousel-item w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex === 1 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: currentIndex === 1 ? "block" : "none" }}
              >
                <div className="flex flex-col items-center justify-center w-full h-full p-6  rounded-lg backdrop-blur-lg bg-white/10 shadow-lg border border-white/20">
                  <h1 className="text-xl md:text-4xl font-bold text-center">
                    &quot;Transforming Businesses with Digital Innovation&quot;
                  </h1>
                  <ul className="grid grid-cols-1 md:grid-cols-2 font-medium text-xs md:text-sm gap-4 md:gap-6 px-4 md:px-6 mt-4 md:mt-6">
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Creating impactful, responsive web solutions.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Your online vision, perfectly crafted.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Designing for the digital age.
                    </li>
                    <li className="bg-[#eca918] p-2 rounded-lg">
                      Web solutions that evolve businesses.
                    </li>
                  </ul>
                  <Link href="/contact-us">
                    <div className="w-fit mx-auto mt-10">
                      <button className="btn btn-primary px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
                        Get Started Now
                      </button>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated Section */}
          <div className="relative h-[300px] md:h-[400px] w-full md:place-self-center max-lg:hidden">
            {/* Main Hexagon Background with Image */}
            <div className="max-sm:w-48 max-sm:h-48 max-sm:mt-10 sm:absolute bottom-10 h-full w-[400px] lg:translate-x-36  rounded-xl  mx-auto flex justify-center items-center max-sm:p-10  clip-hexagon bg-[#eca918]">
              <Image
                quality={100}
                src={womenImg}
                alt="women"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Overlay for Animated Content */}
            <div className="absolute w-full h-full max-sm:p-10 px-10">
              <div className="relative w-full h-full">
                {/* Mood Section */}
                <motion.div
                  className="bg-white w-fit h-fit p-3 rounded-md absolute -top-10 left-10"
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-[8px] md:text-sm">
                    How is your mood today
                  </p>
                  <div className="flex justify-between">
                    <FaRegFaceFrown className="text-[5px] md:text-[15px]" />
                    <FaRegFaceFrownOpen className="text-[6px] md:text-[16px]" />
                    <FaRegFaceMeh className="text-[7px] md:text-[17px]" />
                    <FaRegFaceSmile className="text-[8px] md:text-[18px]" />
                    <FaRegFaceGrin className="text-[9px] md:text-[20px] text-red-500" />
                  </div>
                </motion.div>

                {/* Mobile Review Section */}
                <motion.div
                  className="bg-white w-24  h-40 p-1 rounded-md absolute -top-10 right-10"
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    quality={100}
                    src={mobile}
                    alt="review"
                    className="w-full h-full object-cover "
                  />
                </motion.div>

                {/* Face Recognition Screen */}
                <motion.div
                  className="bg-white w-56 h-fit p-1 md:p-1 rounded-md absolute bottom-10 left-0"
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    quality={100}
                    src={screen}
                    alt="face recognition"
                    className="w-40 h-20 md:w-56 md:h-32 mx-auto"
                  />
                </motion.div>

                {/* SEO Section */}
                <motion.div
                  className="bg-white w-40 h-40 p-1 rounded-md absolute bottom-10 right-0"
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 2.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    quality={100}
                    src={seo}
                    alt="SEO"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
