"use client";
import React, { useRef, useEffect, useState } from "react";
import background from "../images/Resources/background.webp";
import faq from "../images/Resources/faq.webp";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
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
import Head from "next/head";
import Image from "next/image";
const FullstackDevelopers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const form = useRef();

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
        "Why should I hire a full-stack developer from Ultrafly Solutions?",
      answer:
        "At Ultrafly Solutions, our full-stack developers bring a wealth of experience across frontend and backend technologies. We deliver scalable, efficient, and secure solutions that meet your unique business requirements.",
    },
    {
      question: "Can I hire a full-stack developer on a project basis?",
      answer:
        "Yes! We offer flexible hiring models, including full-time, part-time, or project-based engagements, to fit your specific needs.",
    },
    {
      question:
        "What type of applications can your full-stack developers build?",
      answer:
        "Our developers can build a wide range of applications, including responsive websites, custom web applications, API integrations, and more, suitable for startups and large enterprises alike.",
    },
    {
      question: "How do you ensure the security of my application?",
      answer:
        "Our developers follow industry-standard security protocols and best practices to safeguard your applications. We also provide post-launch monitoring and maintenance to keep your systems secure.",
    },
    {
      question: "What is the typical timeline for a full-stack project?",
      answer:
        "The timeline varies based on the scope and complexity of your project. After understanding your requirements, we provide a clear project plan with estimated timelines.",
    },
    {
      question: "How do I communicate with the full-stack development team?",
      answer:
        "We prioritize transparent communication. You will have direct access to your dedicated project manager and development team via email, calls, or collaboration tools for regular updates and smooth progress.",
    },
  ];

  return (
    <>
      <div
        className="relative hero min-h-screen"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="hero-content absolute inset-0 flex justify-center items-center text-neutral-content text-left">
          <div className="max-w-54 text-left px-6 md:px-12 lg:px-8">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire Full-Stack Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire Full-Stack Developers from Ultrafly Solutions
            </h3>
            <ul className="list-disc list-inside mb-7 text-left text-white text-sm md:text-xl grid gap-4">
              <li>
                Expert developers with extensive experience in both frontend and
                backend technologies
              </li>
              <li>
                Flexible hiring options: full-time, part-time, or project-based
              </li>
              <li>
                End-to-end development solutions tailored to your business needs
              </li>
              <li>
                Dedicated project managers for transparent communication and
                timely updates
              </li>
              <li>
                Full-cycle support from design to deployment with a focus on
                performance and scalability
              </li>
            </ul>
            <div className="flex justify-center mb-5">
              <a href="#sendBtn">
                <button className=" px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 px-4 py-2 rounded-xl">
                  Talk with Our Experts
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 w-3/4 mx-auto">
          Transform Your Vision with Expert Full Stack Development
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
                   quality={75}
                  src={manualwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Custom Full Stack Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Develop tailored full-stack solutions that address your unique
                  business challenges and goals.
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
                   quality={75}
                  src={developmentwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Responsive Web Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Design and develop responsive, dynamic websites and web
                  applications that deliver exceptional user experiences.
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
                   quality={75}
                  src={solutionwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Frontend & Backend Integration
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Build seamless, efficient applications with a combination of
                  modern frontend and backend technologies.
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
                   quality={75}
                  src={ideawebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="font-medium group-hover:text-gray-100">
                  Leverage cloud technologies for secure, scalable, and
                  high-performing full-stack applications.
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
                   quality={75}
                  src={micorwebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  API & Microservices Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Create scalable, modular systems with custom APIs and
                  microservices that improve efficiency.
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
                   quality={75}
                  src={servicewebp}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Ongoing Maintenance & Support
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Ensure smooth operations with our full stack support services,
                  including maintenance, updates, and performance optimization.
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
              Unlock Your Business Potential with Full Stack Experts!
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              Looking for custom full-stack solutions to transform your
              business? Contact us to discuss your project requirements and see
              how our experts can help you succeed.
            </p>
            <Link href={"/contact-us"}>
              <button
                type="button"
                className="bg-[#3b63cf] hover:bg-[#578ee2cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Get Free Consultation
              </button>
            </Link>
          </div>

          <div className="flex justify-end items-center p-2 bg-gradient-to-r from-[#8799ff] to-[#03a4ed] rounded-bl-[230px] w-full h-full">
            <div className="h-72 w-72 rounded-full bg-[#eca918] p-5">
              <Image
                 quality={75}
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full rounded-full object-cover border-8 border-white"
                alt="Team"
                width={500} // Set width in pixels (e.g., the actual image width)
                height={500} // Set height in pixels (maintain aspect ratio)
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
          Drive Business Growth with Ultrafly Full Stack Expertise
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          When you hire a full-stack developer from Ultrafly Solutions, you gain
          access to a team committed to delivering innovative, efficient, and
          scalable applications. We ensure that your software solutions are
          designed to meet both your immediate and long-term business goals.
        </p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h1 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h1>
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
            <h1 className="font-bold text-gray-800  mb-3">
              Flexible Hiring Options
            </h1>
            <p className="text-gray-600">
              Choose from full-time, part-time, or project-based hiring models
              to match your business needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-right"
          >
            <h1 className="font-bold text-gray-800  mb-3">
              Proven Success Record
            </h1>
            <p className="text-gray-600">
              Our full-stack developers consistently deliver high-performing,
              robust applications for various industries.
            </p>
          </div>
          {/* Benefit 4 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h1 className="font-bold text-gray-800  mb-3">
              Customer-Centric Approach
            </h1>
            <p className="text-gray-600">
              We focus on understanding your specific business challenges and
              work with you to create solutions that align with your goals.
            </p>
          </div>
          {/* Benefit 5 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="flip-up"
          >
            <h1 className="font-bold text-gray-800  mb-3">
              Ongoing Support and Maintenance
            </h1>
            <p className="text-gray-600">
              We provide continuous post-launch support to ensure your
              applications remain optimized and secure.
            </p>
          </div>
        </div>
        <section className="p-10 md:p-20 w-full">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            4 Easy Steps to Hire a Full-Stack Developer
          </h1>
          <div className="grid md:grid-cols-4 md:justify-between">
            <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
              <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
                1
              </h1>
              <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
                <h1 className="text-xl font-bold">
                  Contact us and share your detailed requirements.
                </h1>
                <p className=" ">
                  We engage in an in-depth conversation about your vision,
                  goals, and technical needs.
                </p>
              </div>
              <IoIosArrowForward className="absolute -bottom-[16px] -left-[16px] text-3xl font-bold max-md:hidden" />
            </div>
            {/* <div className="divider md:divider-horizontal" /> */}
            <div className=" border-blue-600 max-md:border-b-[3px] max-md:border-l-[3px]">
              <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
                2
              </h1>
              <div className=" md:h-[500px] lg:h-72 md:border-t-[3px] border-blue-600  p-10">
                <h1 className="text-xl font-bold">Receive Expert Guidance</h1>
                <p className=" ">
                  Our team provides expert advice on the best full-stack
                  technologies and approaches for your project.
                </p>
              </div>
            </div>
            {/* <div className="divider md:divider-horizontal" /> */}
            <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
              <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
                3
              </h1>
              <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
                <h1 className="text-xl font-bold">
                  Build a collaborative relationship.
                </h1>
                <p className=" ">
                  Work closely with our developers to ensure your project is
                  executed with precision, fostering innovation and success.
                </p>
              </div>
            </div>
            {/* <div className="divider md:divider-horizontal" /> */}
            <div className=" border-blue-600 max-md:border-l-[3px]">
              <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
                4
              </h1>
              <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
                <h1 className="text-xl font-bold">Get Ongoing Support</h1>
                <p className=" ">
                  Benefit from continuous collaboration and support throughout
                  your project lifecycle, ensuring everything stays on track.
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

        <div
          className="hero h-fit md:h-96 my-2 md:my-10"
          style={{
            backgroundImage: `url(${resource.src})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className="text-neutral-content text-left pl-10 items-start py-10 ">
            <div className="">
              <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Hire the Best Full-Stack Talent Today
              </h1>
              <p className="md:mb-5 text-[10px] max-sm:leading-3 md:text-xl text-white w-3/4">
                At Ultrafly Solutions, we are dedicated to delivering full-stack
                development services that help your business thrive. Our
                developers are proficient in both frontend and backend
                technologies, providing a comprehensive approach to development
                that enhances performance, scalability, and user satisfaction.
              </p>
              <Link
                href={"/contact-us"}
                className="text-xs md:text-xl text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning mt-2 "
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2 md:px-10 mb-10">
          {/* form */}
          <div
            className="w-full flex items-center justify-center col-span-full md:col-span-1 max-lg:order-last"
            id="sendBtn"
          >
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="grid gap-8 outline outline-offset-2 outline-2 outline-slate-400 p-10 bg-gray-200 rounded-xl">
                <label className="input input-bordered flex items-center gap-2">
                  <FaUser />
                  <input
                    name="user_name"
                    type="text"
                    className="w-full"
                    placeholder="Name"
                    required
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <MdEmail />
                  <input
                    name="user_email"
                    type="email"
                    className="w-full"
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <FaMobileButton />
                  <input
                    name="user_phone"
                    type="text"
                    className="w-full"
                    placeholder="Number"
                  />
                </label>
                <label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Bio"
                    name="message"
                  />
                </label>
                <button
                  type="submit"
                  className=" px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
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
                    openIndex === index
                      ? "border-blue-600"
                      : "border-transparent"
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
      </div>
    </>
  );
};

export default FullstackDevelopers;
