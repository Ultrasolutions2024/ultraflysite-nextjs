"use client";

import React, { useEffect, useState } from "react";
import Timg from "../images/blog/timg.webp";
import Link from "next/link";
import logo from "../images/ultrafly/ultraflysolutionslog.webp";
import projexticon from "../images/ultrafly/projection.webp";
import clients from "../images/ultrafly/clients.webp";
import customerservice from "../images/ultrafly/customer service.webp";
import CountUp from "react-countup";
import { FaEye } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

function MobileDevelopment() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const fetchViews = async () => {
      const viewsData = 1625;
      setViews(viewsData);
    };

    fetchViews();
  }, []);

  return (
    <>
      

      <div className="mt-28 px-4 md:px-10 lg:px-46 grid gap-4 ml-6">
        {/* Image and Text Section */}
        <div className="grid md:grid-cols-3 gap-3 pr-10">
          <div className="col-span-2 grid justify-center gap-2">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-[30px] font-bold text-justify">
                Top 05 Mobile App Development Frameworks in 2024
              </h1>
            </div>
            <div className="flex items-center justify-end ml-4">
              <FaEye className="text-gray-600 mr-2" />
              <span className="text-lg md:text-xl font-semibold text-gray-600">
                {views} Views
              </span>
            </div>

            <Image
loading="lazy" 
  quality={75}
              src={Timg}
              alt="Unlocking the Future"
              className="h-[30vh] object-cover md:h-[50vh] p-2 w-full" // Decreased size
            />
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              In 2024, there are many mobile app development framework
              available. But we picked the top 05 app development frameworks.
              Let’s dive in.
            </p>
            <br />
            <h2 className="text-base md:text-2xl font-medium text-justify max-w-[70rem] w-full mx-auto">
              What Is a Mobile App Development Framework?
            </h2>
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              I will come straight to the point, the framework is a set of
              tools, libraries, etc... that helps developers manage their work
              more easily and efficiently. That structure of the environment
              simplifies the coding tasks and much more, a framework includes
              software compilers, debugging tools, and other components. Let’s
              see the top five frameworks.
            </p>
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>1. React Native:</b>
              <br /> Consider owning a shop located on a secluded street that is
              unfamiliar to most people. Wouldn&apos;t it be difficult for anyone to
              locate it, don&apos;t you think? Websites face the same situation. SEO
              assists companies in improving the visibility of their websites. A
              higher ranking in search results leads to increased clicks,
              resulting in higher traffic and potential customer growth for a
              website. In the realm of digital marketing, boosting the number of
              users accessing your website is referred to as growing your
              &quot;traffic.&quot;
            </p>
            <br />
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>2. Flutter:</b> <br />
              Flutter, developed by Gооgle. Flutter is a cross-platform app
              development, so you can build a native-like application across
              multiple platforms, including iOS, Android, web, and desktop using
              one codebase to develop Android as well as iOS applications.
              Flutter uses 2d graphics engine called Skia, which provides tools
              for developing applications with a native feel. The Flutter
              standout feature is a hot reload, which allows developers can see
              the changes instantly when updating the code and speeds up the
              development process.
            </p>
            <br />
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>3. Ionic:</b> <br />
              Ionic is completely free because it&apos;s an open-source mobile
              application framework, developed in 2013 by Drifty Co. It&apos;s used
              for building cross-platform applications using web technologies
              like HTML, CSS, and JavaScript. The Ionic framework enables you to
              create apps for three platforms: iOS, Android, and Windows. The
              main advantage for developers using Ionic is that it allows them
              developers to use a robust set of UI components, such as
              nаvigаtiоn menus, list views, filters, fоrms, асtiоn sheets, and
              many more.
            </p>
            <br />
            <h2 className="text-base md:text-2xl font-medium text-justify max-w-[70rem] w-full mx-auto">
              {" "}
              Ionic is best for those who want to create a high-performance
              hybrid/сrоss-рlаtfоrm mobile and web aрpliсаtiоns.
            </h2>
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>4. Xamarin:</b> <br />
              Xamarin is a popular cross-platform and open-source framework used
              to develop mobile applications, developed by Microsoft in 2016.
              Xamarin is based on .Net and C# and it allows you to build native
              applications for Android, iOS, and Windows Platforms. The single
              C# codebase can be shared across iOS, Android, and Windows
              platforms, which reduces development time and costs. In the
              Xamarin set of tools, UI elements, and components allow you to
              build native applications.
            </p>
            <br />
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>5. Swiftic:</b> <br />
              Swiftic is primarily focused on iOS apps. If you don&apos;t have
              advanced coding knowledge you can go with this because of it&apos;s
              user-friendly interface. It is particularly suitable for small
              businesses, entrepreneurs, and organizations that need a
              cost-effective way to build and maintain mobile apps. With Swiftic
              drag-and-drop feature, you can customize without writing a single
              line of code.
            </p>
            <br />
            <p className="text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto">
              <b>Conclusion: </b> <br />
              These are the top five mobile app development frameworks we&apos;ve
              selected. But you can choose the one that best fits your project&apos;s
              requirements. Choosing the right framework plays an important role
              in 2024. So, if you&apos;re having trouble to pick the right mobile app
              development framework, don&apos;t worry! UltraFly Solutions is here to
              help you navigate these options and delivering innovative,
              user-friendly mobile applications customized to your business
              goals.
            </p>

            {/* Social Media Icons Section */}
            <div className="flex justify-center md:justify-start gap-6 text-[18px] text-[#646464] mt-8">
              <h2 className="text-blue font-bold">
                <u>Share Our Blog:</u>
              </h2>
              <br />
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  "https://www.ultraflysolutions.com/top-mobile-development-framework"
                )}&quote=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </Link>

              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}&url=${encodeURIComponent(
                  "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation"
                )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter p-3 rounded-full icon text-sm md:text-xl sm:p-[18px]"></i>
              </Link>

              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  "https://www.ultraflysolutions.com//top-mobile-development-framework"
                )}&title=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}&summary=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Sticky Position Let's Connect Div */}
          <div className="sticky top-24 self-start md:w-[24rem] p-8 ml-4">
            <div className="border-2 border-gray-300 bg-gradient-to-r from-blue-100 to-blue-900 p-6 rounded-lg">
              <Image
loading="lazy" 
  quality={75} src={logo} alt="logo" className="w-5px" />
              <p className="text-center font-bold text-xl mt-4 text-black">
                Let&apos;s connect! Explore more about IT solutions.
              </p>
              <Link href="/contact-us">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-2">
                  Check & Demo
                </button>
              </Link>
              {/* About Section inside the div */}
              <div className="mt-10">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-4">
      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={projexticon}
          alt="About Us | Ultrafly Solutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={150}
              duration={15}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Completed <br /> Projects
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={clients}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={91}
              duration={20}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Happy <br /> Clients
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={customerservice}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={110}
              duration={15}
              separator=" "
              decimal=","
              suffix="+"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Customer <br /> Service
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MobileDevelopment;
