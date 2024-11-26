"use client";
import React, { useRef } from "react";
import AboutCarts from "./AboutCarts";
import projexticon from "../images/ultrafly/project-management.webp";
import clients from "../images/ultrafly/client-assistance.webp";
import customerservice from "../images/ultrafly/customer-service-agent.webp";
import bgImage from "../images/ultrafly/about-bg.webp"; // Add a background image
import CountUp from "react-countup";
import Image from "next/image";
function About() {
  const countUpRef = useRef(null);

  return (
    <>
      <section className="relative flex flex-col justify-between gap-2 about-section pb-10 bg-gray-50">
        <div className="container page-padding relative z-10">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* about text */}
            <div className="mt-[6rem] relative col-span-1">
              <h2 className="text-3xl md:text-[36px] font-semibold leading-tight mb-6 text-gray-900">
                Innovative Technology Solutions for Your Business
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                Ultrafly Solutions Private Limited was founded in 2019 as a
                Coimbatore-based company working towards excellence in computers
                and believing in pursuing business through innovation and
                technology.
                <br />
                <br />
                Our fields of expertise include software development, web
                development, mobile app development, search engine optimization,
                and digital marketing and recruitment services. Our global
                clients come from a wide spectrum of industries with varying
                requirements.
              </p>
            </div>

            {/* stats cards with background image */}
            <div className="relative w-full flex justify-center items-center">
              <Image
                loading="lazy"
                quality={75}
                src={bgImage}
                alt="background"
                className="absolute inset-0 w-3/4 h-[400px] object-cover opacity-[0.7] rounded-lg max-lg:mx-auto lg:top-20 lg:left-28"
              />
              <div className="relative grid gap-6 mt-4">
                {/* Stat card 1 */}
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform -translate-x-20 md:-translate-x-60 lg:-translate-x-40 mt-4se sm:mt-12  hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    loading="lazy"
                    quality={75}
                    src={projexticon}
                    alt="Completed Projects"
                    className=" w-10 sm:w-[3.5rem] mb-4 h-auto"
                  />
                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp
                        end={150}
                        duration={20}
                        separator=" "
                        decimal=","
                        suffix=" +"
                        ref={countUpRef}
                      />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Completed Projects
                    </h3>
                  </div>
                </div>

                {/* Stat card 2 */}
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform translate-x-20 md:translate-x-60 lg:translate-x-60  mt-12 sm:mt-0 md:self-end hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    loading="lazy"
                    quality={75}
                    src={clients}
                    alt="Happy Clients"
                    className=" w-10 sm:w-[3.5rem] mb-4 h-auto"
                  />
                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp
                        end={91}
                        duration={30}
                        separator=" "
                        decimal=","
                        suffix=" +"
                        ref={countUpRef}
                      />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Happy Clients
                    </h3>
                  </div>
                </div>

                {/* Stat card 3 */}
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform -translate-x-20 md:-translate-x-60 lg:-translate-x-40  hover:scale-105 transition-all duration-300 ease-in-out mt-6">
                  <Image
                    loading="lazy"
                    quality={75}
                    src={customerservice}
                    alt="Customer Service"
                    className=" w-10 sm:w-[3.5rem] mb-4 h-auto"
                  />
                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp
                        end={110}
                        duration={25}
                        separator=" "
                        decimal=","
                        suffix=" +"
                        ref={countUpRef}
                      />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Customer Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
