"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import division from "../images/our_services/websiteImg/renault-logo.png";
import mgs from "../images/our_services/websiteImg/mgs.webp";
import { FaIndustry, FaChartLine, FaEnvelope } from "react-icons/fa";
import dental from "../images/our_services/websiteImg/dental.webp";

function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="p-6 bg-light-blue-100">
        <div className="lg:max-w-5xl max-w-xl mx-auto lg:pr-24 md:mt-10 p-4">
          <h1 className="text-3xl font-semibold mb-8 text-center ">
            Here are three success stories from Ultrafly Solution&apos;s digital
            marketing portfolio.
          </h1>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div className="rounded-3xl w-full md:w-[550px] lg:w-[500px] h-fit shadow-lg">
              <Image
                loading="lazy"
                quality={75}
                src={dental}
                alt="Dental Care Professionals"
                className="object-contain rounded-3xl transition-transform duration-300 hover:scale-105 "
                width={600}
                height={450}
              />
            </div>

            <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 px-5 lg:px-10 z-10 rounded-3xl w-full lg:w-[650px] h-auto py-6 shadow-md lg:mb-10 ">
              <h2 className="text-gray-800 text-xl md:text-3xl font-bold mb-4">
                Dental Care Professionals (DCP)
              </h2>
              <strong>About the Client</strong>
              <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                DCP is a leading dental clinic in Coimbatore aiming to expand
                their online presence.
              </p>

              <strong>Problem Background</strong>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                DCP needed a strategic partner to improve web presence and
                manage patient engagement effectively.
              </p>

              <strong>Solution</strong>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                We created a digital marketing strategy, optimizing their
                website and enhancing content engagement.
              </p>
            </div>
          </div>

          <hr className="border-gray-300 my-12" />

          <div className="lg:max-w-7xl max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 mb-12 mt-5">
            <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 -mt-6 px-5 lg:px-10 lg:-translate-x-10 z-10 rounded-3xl w-full lg:w-[700px] h-auto lg:mt-[27px] lg:h-[560px] py-6 shadow-md">
              <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4 ">
                Annamalai Motors – Renault Division
              </h2>
              <strong>About the Client
              </strong>
              <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              Annamalai Motors is an automobile dealership in Coimbatore. They have exclusive Renault franchises. Within the automotive market, they were looked down upon. They wanted to get differentiated so that the car sales of Renault increased.
              </p>
              <strong>Problem Statement</strong>
              <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              Annamalai Motors required a targeted digital marketing campaign for increased test drives, footfalls at the dealership, and improved sales of Renault vehicles. Till then no previous marketing efforts had gained great mileage.
              </p>
              <strong>Solution</strong>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
               We designed a three-point selling proposition digital marketing campaign for Renault: style, performance, and affordability. We generated interest in Renault cars by leveraging Google Ads and social media advertising together with influence. We also offered limited-time offers and exclusive deals to new customers.
              </p>
            </div>

            <div className="rounded-3xl w-full md:w-[550px] lg:w-[620px] h-fit shadow-lg lg:mt-auto mb-[30px] transition-transform duration-300 hover:scale-105 hover:z-50">
              <Image
                // loading="lazy"
                quality={75}
                src={division}
                alt="Team Image"
                className="object-fill lg:h-[400px] rounded-3xl  "
                width={700}
                height={450}
              />
            </div>
          </div>

          <hr className="border-gray-300 my-12" />

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div className="rounded-3xl w-full md:w-[550px] lg:w-[500px] h-fit shadow-lg">
              <Image
                loading="lazy"
                quality={75}
                src={mgs}
                alt="Dental Care Professionals"
                className="object-contain rounded-3xl transition-transform duration-300 hover:scale-105"
                width={600}
                height={450}
              />
            </div>

            <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 px-5 lg:px-10 z-10 rounded-3xl w-full lg:w-[650px] h-auto py-6 shadow-md">
              <div className="company-section">
                <h2 className="text-gray-800 text-xl md:text-3xl font-bold mb-4">
                  MGS Construction
                </h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  About the Company
                </h3>
                <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                  MGS Construction specializes in high-end residential and
                  commercial projects. They aimed to enhance brand visibility
                  and lead generation in a competitive market.
                </p>

                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  What Did They Want?
                </h3>
                <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                  MGS needed a strategy to showcase premium services and attract
                  high-net-worth clients.
                </p>

                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Solution
                </h3>
                <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
                  We developed a digital marketing strategy using LinkedIn and
                  Google Ads, alongside engaging content. This highlighted
                  luxurious projects and improved lead conversions through a
                  website revamp.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-12" />

        <div className="p-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6 text-center text-white">
            <h2 className="text-3xl font-bold">
              Welcome to Ultrafly Solutions
            </h2>
            <p className="text-lg mt-2 text-white">
              Empowering Your Business Through Digital Marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <FaIndustry className="text-4xl text-gray-700 mb-4" />
              <h3 className="font-semibold text-2xl text-gray-700 mb-4 text-center">
                Ultrafly Solutions: Transforming Industries
              </h3>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-800">
                Ultrafly Solutions empowers clients across health, automotive,
                and construction industries, driving growth through tailored
                digital marketing strategies that deliver solid results.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <FaChartLine className="text-4xl text-gray-700 mb-4" />
              <h3 className="font-semibold text-2xl text-gray-900 mb-4 text-center">
                Impactful Results
              </h3>
              <ul className="list-disc list-inside text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-900">
                <li>
                  Total sales growth of
                  <strong className="text-gray-800">{" "}75%</strong> across clients
                </li>
                <li>
                  <strong className="text-gray-800">60%</strong> uplift in media
                  engagement
                </li>
                <li>
                  Customer revenue increased by
                  <strong className="text-gray-800">{" "}45%</strong> from campaigns
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <h3 className="font-semibold text-2xl text-gray-900 mb-4 text-center">
                Success in Tamil Nadu
              </h3>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-800">
                Our team has achieved significant success in Tamil Nadu,
                establishing Ultrafly Solutions as a leading provider of digital
                marketing solutions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <FaEnvelope className="text-4xl text-gray-700 mb-4" />
              <h3 className="font-semibold text-2xl text-gray-900 mb-4 text-center">
                Contact Us
              </h3>
              <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-800">
                Reach us at
                <Link
                  href="mailto:info@ultraflysolutions.com"
                  className="text-blue-900 hover:underline"
                >
                  {" "}info@ultraflysolutions.com{" "}
                </Link>
                for more on how we can promote your business and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
