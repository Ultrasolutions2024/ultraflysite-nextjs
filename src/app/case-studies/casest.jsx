import React from "react";
import Image from "next/image";
import dental from "../images/our_services/websiteImg/dental.webp";
import division from "../images/our_services/websiteImg/division.webp";
import mgs from "../images/our_services/websiteImg/mgs.webp";
import { FaIndustry, FaChartLine,  FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Casest = () => {
  return (
    <div className="p-6 bg-light-blue-100">
      <h1 className="text-3xl font-bold mb-8 text-center p-5">
        Ultrafly Solutions Case Studies
      </h1>
      <div className="lg:max-w-5xl max-w-xl mx-auto lg:pr-24 md:mt-20 p-4">
        {/* New Section for Dental Care Professionals */}
        <h1 className="text-3xl font-semibold mb-8 text-center ">
          Here are three success stories from Ultrafly Solutions&aposs digital
          marketing portfolio.
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Image Section for Dental Care */}
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

          {/* Text Section for Dental Care */}
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
              DCP needed a strategic partner to improve web presence and manage
              patient engagement effectively.
            </p>

            <strong>Solution</strong>
            <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              We created a digital marketing strategy, optimizing their website
              and enhancing content engagement.
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-12" />

        <div className="lg:max-w-7xl max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 mb-12 mt-5">
          {/* Text Section */}
          <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 -mt-6 px-5 lg:px-10 lg:-translate-x-10 z-10 rounded-3xl w-full lg:w-[700px] h-auto lg:h-[450px] py-6 shadow-md">
            <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
              Annamalai Motors – Renault Division
            </h2>
            <h3>
              <strong>
                Marketing Sales Online with Strategic Digital Marketing
              </strong>
            </h3>
            <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              Founded in 2019 in Coimbatore, Tamil Nadu, Ultrafly Solutions
              Private Limited has emerged as a strong name in software
              development. In five years, we&aposve built a solid reputation for
              tailored software solutions, digital marketing strategies, IT
              staffing, and development services.
            </p>
            <p className="mb-4 text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              We drive innovation and ensure quality and customer satisfaction,
              excelling in enterprise solutions, web applications, mobile apps,
              and embedded systems.
            </p>
            <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-500">
              As digital marketing partners, we enhance online visibility and
              maximize revenue growth, helping clients thrive in a competitive
              landscape.
            </p>
          </div>

          {/* Image Section */}
          <div className="rounded-3xl w-full md:w-[550px] lg:w-[620px] h-fit shadow-lg lg:mt-7">
            <Image
              loading="lazy"
              quality={75}
              src={division}
              alt="Team Image"
              className="object-contain rounded-3xl transition-transform duration-300 hover:scale-105"
              width={700}
              height={450}
            />
          </div>
        </div>

        <hr className="border-gray-300 my-12" />

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Image Section for Dental Care */}
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

          {/* Text Section for Dental Care */}
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
                commercial projects. They aimed to enhance brand visibility and
                lead generation in a competitive market.
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
        {/* Heading Container */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6 text-center text-white">
          <h2 className="text-3xl font-bold">Welcome to Ultrafly Solutions</h2>
          <p className="text-lg mt-2 text-white">
            Empowering Your Business Through Digital Marketing
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <FaIndustry className="text-4xl text-gray-700 mb-4" />
            <h3 className="font-semibold text-2xl text-gray-700 mb-4 text-center">
              Ultrafly Solutions: Transforming Industries
            </h3>
            <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-800">
              Ultrafly Solutions empowers clients across health, automotive, and
              construction industries, driving growth through tailored digital
              marketing strategies that deliver solid results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <FaChartLine className="text-4xl text-gray-700 mb-4" />
            <h3 className="font-semibold text-2xl text-gray-900 mb-4 text-center">
              Impactful Results
            </h3>
            <ul className="list-disc list-inside text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-900">
              <li>
                Total sales growth of{" "}
                <strong className="text-gray-800">75%</strong> across clients
              </li>
              <li>
                <strong className="text-gray-800">60%</strong> uplift in media
                engagement
              </li>
              <li>
                Customer revenue increased by{" "}
                <strong className="text-gray-800">45%</strong> from campaigns
              </li>
            </ul>
          </div>

          {/* Card 3 */}
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

          {/* Card 4 */}
          <div className="bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <FaEnvelope className="text-4xl text-gray-700 mb-4" />
            <h3 className="font-semibold text-2xl text-gray-900 mb-4 text-center">
              Contact Us
            </h3>
            <p className="text-sm lg:text-[18px] font-sans text-justify leading-relaxed text-gray-800">
              Reach us at{" "}
              <Link
                href="mailto:info@ultraflysolutions.com"
                className="text-blue-900 hover:underline"
              >
                info@ultraflysolutions.com
              </Link>{" "}
              for more on how we can promote your business and drive growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casest;
