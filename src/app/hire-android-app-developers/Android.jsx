"use client";
import React, { useRef, useEffect, useState } from "react";
import background from "../images/Resources/background.webp";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
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
import Link from "next/link";
const Android = () => {
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
        "Why should I hire an Android developer from Ultrafly Solutions?",
      answer:
        "Our Android developers bring years of experience in building dynamic, scalable, and high-performing mobile applications. We focus on delivering secure and tailored solutions to fit your business needs.",
    },
    {
      question: "Can I hire an Android developer on a project basis?",
      answer:
        "Yes! We offer flexible hiring models to suit your project scope, whether you need full-time, part-time, or project-based engagement.",
    },
    {
      question: "What type of applications can your Android developers build?",
      answer:
        "Our Android developers are skilled in creating custom mobile apps, enterprise-grade solutions, and Android-based wearables. We cater to a wide range of industries and business sizes.",
    },
    {
      question: "How do you ensure project security?",
      answer:
        "We follow industry best practices for secure development, from data protection to secure coding. Post-launch, we offer maintenance and support to keep your applications secure.",
    },
    {
      question: "What’s the typical timeline for an Android project?",
      answer:
        "Project timelines depend on complexity and scope. Once we understand your requirements, we provide a detailed project plan with clear timelines.",
    },
    {
      question: "How do I communicate with the Android development team?",
      answer:
        "You’ll have direct access to your project manager and development team through regular updates via email, calls, or collaboration tools, ensuring a seamless communication process.",
    },
  ];

  return (
    <>
      <div className="relative hero min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>

        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="hero-content absolute inset-0 flex justify-center items-center text-neutral-content text-left">
          <div className="max-w-54 text-left px-6 md:px-12 lg:px-8">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire Android Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire Android App Developers from Ultrafly Solutions?
            </h3>
            <ul className="list-disc list-inside mb-7 text-left text-white text-sm md:text-lg grid gap-4">
              <li>
                Expert Android developers with comprehensive knowledge and
                hands-on experience in building high-performance, user-friendly
                mobile applications.
              </li>
              <li>
                Flexible hiring models—choose from full-time, part-time, or
                project-based options to suit your business requirements.
              </li>
              <li>
                Scalable solutions designed to grow with your business, ensuring
                optimal performance across all devices.
              </li>
              <li>
                Seamless communication with dedicated project managers, ensuring
                regular updates and smooth project progress.
              </li>
              <li>
                Security-first development, adhering to the latest best
                practices to guarantee secure and reliable mobile apps.
              </li>
            </ul>
            <div className="flex justify-center mb-5">
              <button
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
                onClick={scrollToSection}
              >
                Talk with Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 w-3/4 mx-auto">
          Drive Innovation with Personalized Android App Development
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
                  Custom Android App Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Develop tailored mobile applications that meet your unique
                  business needs, providing flexibility and top performance.
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
                  Android Game Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Create immersive, high-quality gaming experiences that engage
                  users and boost your brand’s visibility.
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
                  Enterprise App Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Build scalable enterprise applications that streamline
                  business operations and improve efficiency.
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
                <h3 className="text-xl font-semibold mb-3">
                  UI/UX Design for Android Apps
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Enhance user engagement with intuitive, user-centric designs
                  that deliver exceptional user experiences.
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
                  Android Wearable App Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Leverage cutting-edge technology to build innovative apps for
                  wearable devices that integrate seamlessly with Android
                  platforms.
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
                  Maintenance & Support
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Keep your Android apps running smoothly with our ongoing
                  maintenance and support services.
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
              Unleash the Power of Android Apps for Your Business!
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              Looking for a custom Android solution that scales with your
              growing business? Get in touch with our expert team to discuss
              your project needs today.
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
          Drive Your Vision with Ultrafly Expertise
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          Hiring an Android developer from Ultrafly Solutions means partnering
          with a team that excels in delivering innovative, user-friendly mobile
          applications. We focus on your success with solutions that drive
          results and boost efficiency.
        </p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-gray-800 mb-3">
              Clear Communication
            </h2>
            <p className="text-gray-600">
              We ensure full transparency throughout the project lifecycle,
              keeping you informed and involved at every stage.
            </p>
          </div>

          {/* Benefit 2 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="flip-up"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Flexible Hiring Models
            </h2>
            <p className="text-gray-600">
              Whether you need a full-time developer, part-time support, or
              project-based assistance, our flexible hiring models adapt to your
              needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-gray-800  mb-3">Proven Expertise</h2>
            <p className="text-gray-600">
              Our Android developers bring years of hands-on experience,
              consistently delivering scalable and high-performing mobile
              applications across industries.
            </p>
          </div>

          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Client-Centric Approach
            </h2>
            <p className="text-gray-600">
              Your business goals are our priority. We design solutions that
              align with your vision, ensuring long-term success and sustainable
              growth.
            </p>
          </div>

          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="flip-down"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Innovation-Driven Development
            </h2>
            <p className="text-gray-600">
              We leverage the latest Android tools and technologies to build
              cutting-edge applications that enhance user experiences and boost
              operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <section className="p-20 w-full">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          4 Easy Steps to Hire an Android App Developer
        </h2>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Share Your Requirements</h2>
              <p className=" ">
                We take the time to understand your ideas in detail, engaging in
                deep discussions to clarify your project goals and expectations.
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
              <h2 className="text-xl font-bold">Receive Expert Guidance</h2>
              <p className=" ">
                Benefit from our expertise as we recommend the best tools,
                technologies, and development approaches for your project.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Collaborate for Success</h2>
              <p className=" ">
                Work closely with our developers, ensuring your vision comes to
                life with high-quality, innovative solutions.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h2>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Ongoing Support</h2>
              <p className=" ">
                We provide continuous collaboration and support throughout the
                project to ensure everything runs smoothly and meets your
                objectives.
              </p>
              <IoIosArrowForward className="absolute -top-[16px] -right-[16px] text-3xl font-bold max-md:hidden" />
            </div>
          </div>
        </div>
        <Link href={"/contact-us"}>
          <div className="w-fit mx-auto mt-10">
            <button className=" px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </Link>
      </section>

      <div className="relative hero h-fit md:h-96 my-2 md:my-10">
        <Image
          src={resource}
          alt="Hero Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
          priority
          quality={75}
          className="z-0"
        />

        {/* Content Overlay */}
        <div className="relative z-10 pl-10 text-neutral-content text-left items-start py-10">
          <div>
            <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hire top Android app developers today.
            </h1>
            <p className="mb-5 text-xs md:text-xl text-white w-3/4">
              At Ultrafly Solutions, we’re dedicated to delivering Android app
              solutions that give your business a competitive edge. Our
              developers bring a results-driven approach, ensuring your mobile
              applications deliver efficiency and value.
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 mb-10">
        {/* form */}
        <div
          ref={sectionRef}
          className="w-full flex items-center justify-center col-span-full md:col-span-1 max-lg:order-last"
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
                  maxHeight: openIndex === index ? "300px" : "60px",
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

export default Android;
