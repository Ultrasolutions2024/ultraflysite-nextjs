"use client";
import React, { useEffect } from "react";
import "./services.css";
import bg1 from "../images/our_services/mobileImgs/mobile.webp";
import bg2 from "../images/our_services/mobileImgs/mobile2.webp";

import {
  FiZap,
  FiCheckCircle,
  FiSmile,
  FiUsers,
  FiCode,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import Head from "next/head";
import Image from "next/image";
import {
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaPaintBrush,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
const Mobile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Head />
      <title>Mobile App Development | Ultrafly Solutions</title>
      <meta
        name="description"
        content="Get top-notch mobile app development services with Ultrafly Solutions. We create intuitive and engaging apps to enhance your business's digital presence.  "
      />
      <meta
        name="keywords"
        content="mobile app development, app design, app development services, Ultrafly Solutions"
      />
      <Head />
      <div className="mt-[20px]">
   

        <div className="font-sans bg-gray-50 p-4 lg:pt-10 pt-10 md:pt-20 lg:pr-48 md:pl-16">
          <div className="lg:max-w-5xl max-w-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-10">
              {/* Image Section */}
              <div
                className="rounded-3xl md:w-[400px] md:-mt-8 md:-ml-20 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
                data-aos="fade-right"
              >
                <Image 
  quality={75}
                  src={bg1}
                  alt="Placeholder Image"
                  className="object-contain rounded-3xl -z-10"
                />
              </div>

              {/* Text Section */}
              <div className="text-left bg-blue-50 mt-6 px-5 lg:px-10 lg:-translate-x-10 rounded-3xl w-full lg:w-[650px] z-10 h-auto lg:h-[400px] py-5 shadow-md">
                <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
                  Custom Mobile App Development Services
                </h2>
                <p className="mb-4 text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                  The minimum prerequisite for businesses to connect with and
                  interact with customers, streamline operations, and maintain
                  growth is mobile applications. Ultrafly Solutions turns your
                  dreams into reality, ensuring cutting-edge mobile app
                  solutions that meet and exceed all your needs.
                </p>
                <p className="text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                  We are not a house for mobile application development;
                  we&apos;re your partner for the digital journey, offering
                  services from ideation to design and then to development,
                  launch, and beyond. That&apos;s all of the seasoned
                  developers, designers, and strategists with whom we work
                  together to produce fantastic mobile applications that can be
                  functional, engaging, and future-ready.
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-12" />

            <div className="grid lg:grid-cols-2 gap-12 mb-10 relative">
              {/* Text Section */}
              <div className="text-left bg-blue-50 mt-6 px-5 lg:px-10 rounded-3xl w-full lg:w-[650px] h-auto lg:h-[350px] py-5 shadow-lg z-10 relative">
                <h2 className="text-gray-800 text-xl lg:text-2xl font-bold mb-4">
                  Your Vision, Our Passion
                </h2>
                <p className="mb-4 text-sm lg:text-[16px] text-justify font-sans leading-relaxed text-gray-500">
                  Behind code lines and many other technicalities, it is the
                  people at Ultrafly Solutions who can turn your ideas into
                  reality with full passion, creativity, and innovation. With
                  years of mobile technology expertise and knowledge of how
                  users behave, we can develop mobile applications that are not
                  only operational but also interesting, visually awesome, and
                  capable of captivating your audience.
                </p>
                <p className="text-sm lg:text-[16px] text-justify font-sans leading-relaxed text-gray-500">
                  Our mission is simple: Equip business leaders to best outfit
                  their organizations with the most advanced and innovative
                  mobile solutions that can accelerate growth and power
                  long-term success.
                </p>
              </div>

              {/* Image Section */}
              <div
                className="rounded-3xl md:w-[400px] md:-mt-10 md:-ml-20 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
                data-aos="fade-left"
              >
                <Image 
  quality={75}
                  src={bg2}
                  alt="Placeholder Image"
                  className="object-contain rounded-3xl -z-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r bg-gray-50 py-6 sm:py-8 lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* Header Section */}
            <div className="mb-4 flex flex-col items-center justify-center text-center sm:mb-8 md:mb-12">
              <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                Mission
              </h2>
              <p className="max-w-screen-sm text-gray-600 mt-4">
                To empower any size of business to thrive on innovations and
                scalable mobile solutions, supporting growth, increasing
                engagement, and leading them to success.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4 xl:gap-12">
              {/* Card 1 */}
              <div className="group w-full p-6 flex flex-col justify-center items-center relative rounded-xl overflow-hidden bg-blue-100 hover:scale-[105%] transition-all duration-300 h-80">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-blue-500 rounded-full p-4 mb-4">
                    <FiZap className="text-white w-12 h-12" />
                  </div>
                  <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                    Innovation
                  </h5>
                  <p className="text-base font-semibold text-center text-gray-600">
                    We acquire the latest technologies and unorthodox solutions
                    to bring innovative answers that add competitive value to
                    your business.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group w-full p-6 flex flex-col justify-center items-center relative rounded-xl overflow-hidden bg-blue-100 hover:scale-[105%] transition-all duration-300 h-80">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-blue-500 rounded-full p-4 mb-4">
                    <FiCheckCircle className="text-white w-12 h-12" />
                  </div>
                  <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                    Quality
                  </h5>
                  <p className="text-base font-semibold text-center text-gray-600">
                    We meticulously craft each app, ensuring it&apos;s bug-free,
                    user-friendly, and optimized for seamless performance on all
                    devices.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group w-full p-6 flex flex-col justify-center items-center relative rounded-xl overflow-hidden bg-blue-100 hover:scale-[105%] transition-all duration-300 h-80">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-blue-500 rounded-full p-4 mb-4">
                    <FiSmile className="text-white w-12 h-12" />
                  </div>
                  <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                    Client Satisfaction
                  </h5>
                  <p className="text-base font-semibold text-center text-gray-600">
                    Your satisfaction is our goal. We work alongside you to meet
                    and exceed expectations.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group w-full p-6 flex flex-col justify-center items-center relative rounded-xl overflow-hidden bg-blue-100 hover:scale-[105%] transition-all duration-300 h-80">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-blue-500 rounded-full p-4 mb-4">
                    <FiUsers className="text-white w-12 h-12" />
                  </div>
                  <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                    Co-operation
                  </h5>
                  <p className="text-base font-semibold text-center text-gray-600">
                    Open communication is encouraged, and a teaming environment
                    that ensures the final product is absolutely to your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
              Our Software Development Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* iOS App Development Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaApple className="text-blue-600 w-12 h-12 mb-4 group-hover:text-blue-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  iOS App Development
                </h3>
                <p className="text-gray-600">
                  Native iOS apps with Swift & Objective-C, fully optimized for
                  Apple’s ecosystem and App Store.
                </p>
              </div>

              {/* Android App Development Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaAndroid className="text-green-600 w-12 h-12 mb-4 group-hover:text-green-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Android App Development
                </h3>
                <p className="text-gray-600">
                  Create high-performance Android apps using Kotlin & Java,
                  optimized for the Play Store.
                </p>
              </div>

              {/* Cross-Platform App Development Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaLayerGroup className="text-indigo-600 w-12 h-12 mb-4 group-hover:text-indigo-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cross-Platform Development
                </h3>
                <p className="text-gray-600">
                  Use React Native & Flutter to reach iOS and Android with one
                  codebase for faster deployment.
                </p>
              </div>

              {/* UI/UX Design Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaPaintBrush className="text-purple-600 w-12 h-12 mb-4 group-hover:text-purple-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600">
                  Engaging and pixel-perfect designs for intuitive user
                  experiences and visual appeal.
                </p>
              </div>

              {/* Web & Enterprise App Development Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaLaptopCode className="text-teal-600 w-12 h-12 mb-4 group-hover:text-teal-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Web & Enterprise Apps
                </h3>
                <p className="text-gray-600">
                  Custom web applications and enterprise solutions tailored to
                  business needs.
                </p>
              </div>

              {/* Maintenance & Support Card */}
              <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                <FaTools className="text-yellow-600 w-12 h-12 mb-4 group-hover:text-yellow-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Maintenance & Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive maintenance and support to keep your app updated
                  and competitive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-10">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Why Choose Ultrafly Solutions?
            </h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              Your Trusted Partner for Innovation and Growth
            </p>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FiCode className="text-blue-500 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Cutting-Edge Technology
                  </h3>
                </div>
                <p className="text-gray-600">
                  Stay ahead of the curve with our expertise in the latest
                  trends and technologies.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FiUsers className="text-blue-500 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Collaborative Approach
                  </h3>
                </div>
                <p className="text-gray-600">
                  We merge our technical know-how with your business vision for
                  seamless alignment.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FiShield className="text-blue-500 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Transparent Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our open communication keeps you informed at every stage of
                  development.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FiHeadphones className="text-blue-500 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Comprehensive Support
                  </h3>
                </div>
                <p className="text-gray-600">
                  We provide ongoing support to ensure your app continues to
                  thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl text-white text-center mb-6">
              Is your business in need of a lift-off? Do you want to be a new
              startup in the market or an established business looking to
              streamline operations and enhance customer engagement? Let
              Ultrafly Solutions assist you.
            </p>
            <p className="text-lg md:text-xl text-white text-center mb-8">
              Contact us now to discuss how we can transform your mobile
              application idea into a fully functioning creation. Let’s do
              something amazing together!
            </p>
            <div className="flex justify-center">
              <a href="/contact-us">
                <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:text-white">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
