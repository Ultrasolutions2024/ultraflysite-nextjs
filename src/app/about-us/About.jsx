"use client";
import MainButton from "../Featured/MainButton";
import React, { useEffect } from "react";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/GalleryPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";
import aboutImg from "../images/AboutPage/new.png";
import intro from "../images/AboutPage/intro.png";
import aboutBanner from "../images/AboutPage/about_us_banner.webp";
import Image from "next/image";
import {
  FaUsers,
  FaTools,
  FaHandshake,
  FaShieldAlt,
  FaProjectDiagram,
} from "react-icons/fa";
function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="text-center mb-6 mt-10" data-aos="fade-up">
        <h1 className="text-2xl font-extrabold text-blue-800 font-Poppins">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Ultrafly Solutions - Empowering Businesses through Technology
        </p>
      </div>
      <div className="container mx-auto px-16 py-8 grid md:grid-cols-3 grid-cols-1 gap-8 items-center">
        <div className="left-cards flex flex-col space-y-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Transforming businesses with tailored tech solutions.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Why We Thrive Forward
            </h2>
            <p className="text-gray-700">
              Leading the future by aligning tech and people.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Software Development Services
            </h2>
            <p className="text-gray-700">
              Custom software for mobile apps and enterprise needs.
            </p>
          </div>
        </div>

        <div className="center-image mx-auto">
          <Image 
 quality={100}
            src={intro}
            alt="Center Image"
            className="w-full  md:w-full mt-10 md:h-full lg:w-96 lg:h-96 h-full object-contain animate-bounce-slow"
            data-aos="fade-up"
          />
        </div>

        <div className="right-cards flex flex-col space-y-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Mobile App Development
            </h2>
            <p className="text-gray-700">
              Create innovative, user-friendly apps for iOS and Android.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Cloud Solutions
            </h2>
            <p className="text-gray-700">
              Scalable, secure cloud infrastructure for growth.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  lg:h-fit md:h-[190px] h-48"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              IT Consulting
            </h2>
            <p className="text-gray-700">
              Expert advice on smart tech investments and strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 pb-24 mt-10 pt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">
            Why Ultrafly Solutions?
          </h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8 ">
          <div className=" md:p-6 pb-10" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <FaUsers className="mr-3 text-blue-500" /> Team of Highly
              Experienced Professionals
            </h2>
            <p className="text-gray-700">
              Our team brings expertise and a track record of success across
              industries, solving challenges with insight.
            </p>
          </div>

          <div
            className=" md:p-6 pb-10 md:pl-5 lg:pl-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <FaTools className="mr-3 text-blue-500" /> Latest Technology
            </h2>
            <p className="text-gray-700">
              We stay ahead of trends to deliver cutting-edge solutions with the
              latest technologies.
            </p>
          </div>

          <div
            className=" md:p-6 pb-10 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <FaHandshake className="mr-3 text-blue-500" /> Client-Centric
              Approach
            </h2>
            <p className="text-gray-700">
              Your success is ours. We ensure your satisfaction by keeping your
              customers needs at the center of our work.
            </p>
          </div>

          <div
            className=" md:p-6 pb-10 md:pl-5 lg:pl-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <FaShieldAlt className="mr-3 text-blue-500" /> Quality You Can
              Rely On
            </h2>
            <p className="text-gray-700">
              We promise high-performance, fail-safe solutions, backed by tough
              quality-assurance practices.
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-12 px-8">
          <div
            className=" md:p-6 pb-6 md:text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex md:justify-center items-center">
              <FaProjectDiagram className="mr-3 text-blue-500" /> Strong
              Technology Partnerships
            </h2>
            <p className="text-gray-700">
              We leverage strategic partnerships with leading global tech brands
              to provide powerful, end-to-end solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-16">
        <div className="absolute inset-0 bg-blue-800 -skew-y-3 transform origin-bottom-left"></div>

        <div className="relative z-10 container mx-auto text-center text-white px-8">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-in">
            Ready to take your business to new heights?
          </h2>
          <p
            className="text-lg mb-8 text-white"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            Start here. This is where your journey to digital success begins.
            Let&apos;s talk about how we can take your business to new heights.
            Reach out to us today, and let&apos;s build something great
            together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-yellow-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-105 w-fit mx-auto"
          >
            Contact Us
          </a>
        </div>

        <div className="absolute top-0 left-0 w-16 h-16 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-24 h-24 bg-yellow-500 rounded-full  "></div>
      </div>

      {/* <section className="login-section">
        <div className="container page-padding">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col !text-left relative items-right justify-center col-span-2">
              <h2 className="text-black text-2xl md:text-3xl uppercase font-bold py-4">
                Our Mission and Vision
              </h2>
              <h2 className="text-1xl md:text-2xl max-w-[53rem] font-bold mb-4">
                Who We Are
              </h2>
              <p className="text-[#646464] font-medium text-[15px] text-justify max-w-[50rem]">
                At UltraFly Solutions, we are a dynamic and innovative IT
                solutions provider committed to delivering cutting-edge
                technology services to businesses worldwide. Founded on the
                principles of excellence and innovation, our team of skilled
                professionals brings years of experience and a passion for
                technology to every project we undertake.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-sky-400`}
                goTo="/contact-us"
                text="Meet the Team"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
                data-aos="fade-up"
              />
            </div>
            <div>
              <Image 
 quality={100} src={aboutImg} alt="about" className="w-auto" />
            </div>
          </div>
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div
                className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4"
                data-aos="fade-right"
              >
                <Image 
 quality={100}
                  src={Target}
                  alt="Our Mission"
                  className="w-1/3 md:w-[9rem] transition duration-300 transform hover:rotate-6"
                />
                <h3 className="text-[16px] md:text-[36px] font-bold md:mt-3">
                  Our Mission
                </h3>
                <p className="text-[8px] md:text-[16px] font-medium text-[#646464] md:mt-5">
                  Our mission is to empower businesses by providing them with
                  state-of-the-art technology solutions that drive growth,
                  enhance efficiency, and improve their competitive edge. We
                  strive to understand the unique challenges faced by our
                  clients and offer tailored solutions that meet their specific
                  needs.
                </p>
              </div>
              <div
                className="w-full bg-white h-80 md:h-[43rem]"
                data-aos="fade-left"
              >
                <Image 
 quality={100}
                  src={Img3}
                  alt="UltraFly Solutions Office"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div
                className="w-full bg-white h-80 md:h-[43rem]"
                data-aos="fade-right"
              >
                <Image 
 quality={100}
                  src={Img4}
                  alt="About"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div
                className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4"
                data-aos="fade-left"
              >
                <Image 
 quality={100}
                  src={Mountain}
                  alt="Our Vision"
                  className="w-1/3 md:w-[9rem] transition duration-300 transform hover:rotate-6"
                />
                <h2 className="text-[16px] md:text-[36px] font-bold md:mt-3">
                  Our Vision
                </h2>
                <p className="text-[8px] md:text-[16px] font-medium text-[#646464] mt-5">
                  We envision a world where technology seamlessly integrates
                  with business operations, creating opportunities for
                  unprecedented growth and success. At UltraFly Solutions, we
                  aim to be at the forefront of this transformation, continually
                  pushing the boundaries of what&apos;s possible with
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default About;
