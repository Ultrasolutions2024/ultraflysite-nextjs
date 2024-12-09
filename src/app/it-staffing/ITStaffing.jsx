"use client";
import React, { useEffect } from "react";
import "../mobile-app-development/services.css";
import Image from "next/image";
import bg1 from "../images/our_services/software_dev/it.webp";
import Link from "next/link";
function ITStaffing() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="mt-[20px]">
        <div className="lg:max-w-5xl max-w-xl mx-auto lg:pr-24 md:mt-20 p-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-10">
            <div
              className="rounded-3xl md:w-[400px] md:-mt-16 md:-ml-16 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
              data-aos="fade-right"
            >
              <Image
                loading="lazy"
                quality={75}
                src={bg1}
                alt="Placeholder Image"
                className="object-contain rounded-3xl -z-10"
              />
            </div>

            <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 -mt-6 px-5 lg:px-10 lg:-translate-x-10 z-10 rounded-3xl w-full lg:w-[650px]  h-auto lg:h-[380px] py-5 shadow-md">
              <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
                Expert IT Staffing Solutions
              </h2>
              <p className="mb-4 text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                At Ultrafly Solutions, we believe that with the right talent
                packaged with the right technology, we can better help turn
                things around for your business. Specifically, our all-inclusive
                staffing and IT services are designed to empower organizations
                with proper skills and innovative solutions for growth,
                streamlined operations, and performance excellence. Find us on
                contract staffing, permanent hires, or managed IT services.
              </p>
              <p className="text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                A blend of deep industry expertise, proven methodologies, and
                modern technology all come together to provide the entire
                spectrum of staffing services to meet your unique business
                requirements.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer card">
                <h2 className="text-xl font-bold mb-4">Contract Staffing</h2>
                <p className="mb-2">
                  Strategic workforce solutions tailored for your needs.
                </p>
                <ul className="list-disc list-inside">
                  <li>Flexibility: Scale workforce up or down.</li>
                  <li>Cost-effective: Pay only for required skills.</li>
                  <li>
                    Access to Niche Talent: Tap into a vast pool of specialized
                    skills.
                  </li>
                  <li>
                    Less Administrative Burden: We handle the hiring cycle for
                    you.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer card">
                <h2 className="text-xl font-bold mb-4">Direct Hire</h2>
                <p className="mb-2">
                  Find permanent, full-time employees who drive your vision.
                </p>
                <ul className="list-disc list-inside">
                  <li>Long-Term Commitment: Build a dedicated workforce.</li>
                  <li>
                    Reduced Turnover: Invest in culturally fit candidates.
                  </li>
                  <li>
                    Increased Productivity: Right skills for optimal results.
                  </li>
                  <li>
                    Cost Efficiency: Minimize costs associated with turnover.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer card">
                <h2 className="text-xl font-bold mb-4">
                  Technical Recruitment
                </h2>
                <p className="mb-2">
                  Exceptional talent solutions for the digital age.
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Accelerated Time-to-Hire: Speed up hiring for critical
                    positions.
                  </li>
                  <li>Global Reach: Access to top professionals worldwide.</li>
                  <li>
                    Stringent Selection: Rigorous screening to ensure quality.
                  </li>
                  <li>Industry Network: Close ties with IT professionals.</li>
                </ul>
              </div>

              <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer card">
                <h2 className="text-xl font-bold mb-4">IT Project Staffing</h2>
                <p className="mb-2">Expertise for your critical IT projects.</p>
                <ul className="list-disc list-inside">
                  <li>
                    Flexible Solutions: Adjust staffing as project needs evolve.
                  </li>
                  <li>
                    Reduced Risks: Industry-experienced staff mitigate risks.
                  </li>
                  <li>
                    Increased Efficiency: Achieve results through collaborative
                    efforts.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white shadow-lg rounded-lg p-6  hover:scale-105 hover:shadow-xl cursor-pointer card md:translate-x-[190px] lg:translate-x-[320px]">
                <h2 className="text-xl font-bold mb-4">Managed IT Services</h2>
                <p className="mb-2">
                  Outsource your IT operations for greater focus.
                </p>
                <ul className="list-disc list-inside">
                  <li>Proactive Support: Prevent issues before they arise.</li>
                  <li>Elevated Security: Protect against cyber threats.</li>
                  <li>High Uptime: Ensure maximum productivity.</li>
                  <li>
                    Cost-Saving: Optimize IT budgets without internal teams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center mb-4">
            Take Your Business to Great Heights
          </h2>
          <p className="text-lg md:text-xl text-white text-center mb-8">
            Contact us today for insight into how staffing and IT services can
            help you reach your business objectives. Find for yourself a need to
            have great professionals, managed IT services, or experience in
            technical recruitment- Ultrafly Solutions will guide you through
            every step taken.
          </p>
          <div className="flex justify-center">
            <Link href="/contact-us">
              <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITStaffing;
