"use client";
import React, { useRef, useEffect, useState } from "react";
import background from "../images/Resources/background.webp";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import Link from "next/link";
import manualwebp from "../images/Resources/python/manual.webp";
import developmentwebp from "../images/Resources/python/development.webp";
import solutionwebp from "../images/Resources/python/solution.webp";
import ideawebp from "../images/Resources/python/idea.webp";
import micorwebp from "../images/Resources/python/self-development.webp";
import servicewebp from "../images/Resources/python/service-provider.webp";
import resource from "../images/Resources/resource.webp";
import { IoIosArrowForward } from "react-icons/io";
import emailjs from "emailjs-com";
import { NotificationManager } from "react-notifications";
import Image from "next/image";
const FrontendDevelopers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const form = useRef();

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
      block: "start", // Scrolls to the start of the element
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v50v2iq",
        "template_mpnorls",
        form.current,
        "TCLLaD2C7HUr7sggY"
      )
      .then(
        (result) => {
          NotificationManager.success("Message sent successfully!", "Success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          NotificationManager.error(
            "Failed to send message. Please try again later.",
            "Error"
          );
        }
      );
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      question:
        "Why should I hire a frontend developer from Ultrafly Solutions?",
      answer:
        "At Ultrafly Solutions, our frontend developers bring years of expertise in delivering custom, responsive, and user-friendly solutions. We leverage the latest technologies and follow best practices to ensure optimal performance.",
    },
    {
      question: "Can I hire a frontend developer on a project basis?",
      answer:
        "Yes! We offer flexible hiring models, including full-time, part-time, or project-based engagements, depending on your needs and budget.",
    },
    {
      question: "What type of frontend services do you provide?",
      answer:
        "We offer a wide range of frontend services, including custom development, responsive web design, SPA development, UI/UX design, and more.",
    },
    {
      question: "How do you ensure the performance of my frontend application?",
      answer:
        "Our developers follow industry-standard optimization techniques, including code minification, lazy loading, and image optimization, to ensure fast load times and smooth performance.",
    },
    {
      question:
        "What is the typical timeline for a frontend development project?",
      answer:
        "The timeline depends on the complexity and scope of your project. We provide a clear project plan with estimated timelines after discussing your specific requirements.",
    },
    {
      question: "How do I communicate with the frontend development team?",
      answer:
        "We prioritize transparent communication and provide direct access to your dedicated project manager and development team via email, calls, or collaboration tools to ensure smooth progress and updates throughout your project.",
    },
  ];

  return (
    <>
      <div className="relative hero min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Hire Frontend Developers Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            quality={75}
            priority
            className="-z-10"
          />
        </div>

        {/* Dimmed Background Overlay */}
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="hero-content absolute inset-0 flex justify-center items-center text-neutral-content text-left">
          <div className="max-w-54 text-left px-6 md:px-12 lg:px-8">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire Frontend Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire Frontend Developers from Ultrafly Solutions
            </h3>
            <ul className="list-disc list-inside mb-7 text-left text-white text-sm md:text-xl grid gap-4">
              <li>
                Expert developers with extensive experience in creating
                stunning, user-friendly interfaces
              </li>
              <li>
                Flexible hiring options: full-time, part-time, or project-based
              </li>
              <li>
                Custom, responsive designs tailored to your business needs
              </li>
              <li>
                Dedicated project managers for clear communication and regular
                updates
              </li>
              <li>
                End-to-end frontend services from development to maintenance
                with a focus on performance and UX
              </li>
            </ul>
            <div className="flex justify-center mb-5">
              <button
                onClick={scrollToSection}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
              >
                Talk with Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 w-3/4 mx-auto">
          Build Dynamic Interfaces with Tailored Frontend Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {/* Cards for Services */}
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed]  opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={manualwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Custom Frontend Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Design and develop tailored solutions that enhance user
                  interaction and experience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={developmentwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Responsive Web Design
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Build responsive, high-performance websites that adapt
                  seamlessly across devices and platforms.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-left"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={solutionwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Single Page Applications (SPA)
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Leverage the latest frameworks to create fast, intuitive
                  single-page applications that enhance user engagement.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={ideawebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="font-medium group-hover:text-gray-100">
                  Implement modern design principles to create visually
                  appealing and user-centric interfaces.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={micorwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Frontend Optimization
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Ensure faster load times and smoother performance through
                  optimized code and resources.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-left"
          >
            <span className="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <Image
                  loading="lazy"
                  quality={75}
                  src={servicewebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Maintenance & Support
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Keep your applications running at peak performance with
                  ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 relative max-w-full shadow-sm shadow-[#000000] mx-auto rounded overflow-hidden">
        <div className="grid sm:grid-cols-2 max-sm:gap-6">
          <div className="text-center p-6 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-2xl text-[#4e0083] leading-tight">
              Elevate Your User Experience with Frontend Experts!
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              HLooking for custom frontend solutions to enhance your digital
              presence? Contact us now to discuss your project requirements and
              discover how our experts can help you succeed.
            </p>
            <Link href={"/contact-us"}>
              <button
                type="button"
                className="bg-[#3b63cf] hover:bg-[#578ee2cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Get a Free Consultation
              </button>
            </Link>
          </div>

          <div className="flex justify-end items-center p-2 bg-gradient-to-r from-[#8799ff] to-[#03a4ed] rounded-bl-[230px] w-full h-full">
            <div className="h-72 w-72 rounded-full bg-[#eca918] p-5">
              <Image
                loading="lazy"
                quality={75}
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full rounded-full object-cover border-8 border-white"
                alt="Team"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-[#03a4ed] opacity-40 shadow-lg"></div>
        <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#2e8bb6] opacity-40 shadow-lg"></div>
      </div>

      {/* Additional Information Section */}
      <div className="py-10 max-md:px-10">
        <h2 className="text-2xl font-bold text-center">
          Drive Engagement with Ultrafly Frontend Expertise
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          When you hire a frontend developer from Ultrafly Solutions, you
          partner with a team that’s passionate about crafting visually
          stunning, interactive, and efficient user interfaces. We focus on
          delivering designs that captivate users and boost engagement.
        </p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h2>
            <p className="text-gray-600">
              We maintain open communication throughout the project, keeping you
              informed of every milestone.
            </p>
          </div>

          {/* Benefit 2 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="flip-up"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Flexible Hiring Options
            </h2>
            <p className="text-gray-600">
              Choose from full-time, part-time, or project-based hiring models
              to match your needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Proven Success Record
            </h2>
            <p className="text-gray-600">
              Our frontend developers consistently deliver visually appealing
              and high-performance applications.
            </p>
          </div>

          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Customer-Centric Approach
            </h2>
            <p className="text-gray-600">
              We focus on understanding your business needs to create tailored
              solutions that align with your goals.
            </p>
          </div>

          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="flip-up"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Ongoing Support and Maintenance
            </h2>
            <p className="text-gray-600">
              Post-project, we offer continuous support to ensure your
              applications stay optimized and up-to-date.
            </p>
          </div>
        </div>
      </div>

      <section className="p-10 md:p-20 w-full">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          4 Easy Steps to Hire an iOS Developer
        </h2>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">
                Contact us and share your detailed requirements.
              </h2>
              <p className=" ">
                We take the time to thoroughly understand your vision and engage
                in a detailed discussion about your goals.
              </p>
            </div>
            <IoIosArrowForward className="absolute -bottom-[16px] -left-[16px] text-3xl font-bold max-md:hidden" />
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-b-[3px] max-md:border-l-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              2
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-t-[3px] border-blue-600  p-10">
              <h2 className="text-xl font-bold">Receive Expert Guidance.</h2>
              <p className=" ">
                Our team provides expert advice on the best technologies and
                design approaches for your project.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">
                Build a collaborative relationship.
              </h2>
              <p className=" ">
                Work closely with our developers to ensure your vision is
                executed with precision, fostering innovation and creativity.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h2>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Get Ongoing Support.</h2>
              <p className=" ">
                Benefit from continuous collaboration and support throughout
                your project&apos;s lifecycle to ensure it stays on track.
              </p>
              <IoIosArrowForward className="absolute -top-[16px] -right-[16px] text-3xl font-bold max-md:hidden" />
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-10">
          <Link href={"/contact-us"}>
            <button className=" px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <div className="relative hero h-fit md:h-96 my-2 md:my-10">
        <Image
          src={resource}
          alt="Frontend Talent"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
          quality={75}
          priority
          className="z-0"
        />

        {/* Content Overlay */}
        <div className="relative z-10 pl-10 text-neutral-content text-left items-start py-10">
          <div>
            <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hire the Best Frontend Talent Today
            </h1>
            <p className="mb-5 text-xs md:text-xl text-white w-3/4">
              At Ultrafly Solutions, we’re committed to providing frontend
              development services that bring your digital vision to life. Our
              developers are not only experts in coding but also have a keen eye
              for design, ensuring your software delivers value and exceptional
              user experiences. Contact us today to hire a frontend developer
              and elevate your digital platform!
            </p>
            <Link
              href="/contact-us"
              className="text-xs md:text-xl text-white bg-blue-500 p-4 rounded-xl "
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-10 mb-10">
        {/* form */}
        <div
          className="w-full flex items-center justify-center col-span-full md:col-span-1 max-lg:order-last"
          ref={sectionRef}
        >
          <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="grid gap-6 outline outline-offset-4 outline-2 outline-gray-300 p-12 bg-gray-100 rounded-2xl shadow-lg">
              <label className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 focus-within:shadow-lg transition-all">
                <FaUser className="text-gray-500" />
                <input
                  name="user_name"
                  type="text"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                  placeholder="Name"
                  required
                />
              </label>
              <label className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 focus-within:shadow-lg transition-all">
                <MdEmail className="text-gray-500" />
                <input
                  name="user_email"
                  type="email"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                  placeholder="Email"
                  required
                />
              </label>
              <label className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 focus-within:shadow-lg transition-all">
                <FaMobileButton className="text-gray-500" />
                <input
                  name="user_phone"
                  type="text"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                  placeholder="Number"
                />
              </label>
              <label>
                <textarea
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none placeholder-gray-400 text-gray-700 focus:border-blue-500 focus:shadow-lg transition-all"
                  placeholder="Bio"
                  name="message"
                  rows="4"
                />
              </label>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* faq */}

        <div className="col-span-2 grid gap-2 ">
          <div className="font-[sans-serif] space-y-4 max-w-6xl mx-auto mt-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] border-2 ${
                  openIndex === index ? "border-blue-600" : "border-transparent"
                } rounded-lg transition-all duration-300`}
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                  maxHeight: openIndex === index ? "300px" : "60px", // adjust maxHeight based on the open or closed state
                }}
                role="accordion"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  className="w-full text-base font-semibold text-left p-5 text-gray-800 flex items-center"
                >
                  <span className="mr-4">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 fill-current ml-auto shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : "-rotate-90"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`transition-opacity duration-300 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  } pb-5 px-5`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendDevelopers;
