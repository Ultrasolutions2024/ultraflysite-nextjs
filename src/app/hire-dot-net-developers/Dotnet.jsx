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

const Dotnet = () => {
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
      question: "Why should I hire a .NET developer from Ultrafly Solutions?",
      answer:
        "At Ultrafly Solutions, we bring years of expertise in .NET development, providing custom, scalable, and secure solutions tailored to your business needs. Our developers are skilled in the latest technologies and follow best practices to ensure optimal performance.",
    },
    {
      question: "Can I hire a .NET developer on a project basis?",
      answer:
        "Yes! We offer flexible hiring models to fit your requirements. Whether you need a full-time developer, a part-time team, or project-based support, we can customize the engagement to suit your project scope and budget.",
    },
    {
      question: "What type of applications can your .NET developers build?",
      answer:
        "Our .NET developers have experience building a variety of applications, including custom web applications, enterprise solutions, API integrations, mobile apps, and more. We cater to both startups and large-scale enterprises.",
    },
    {
      question: "How do I ensure the security of my project?",
      answer:
        "We take security seriously at Ultrafly Solutions. Our developers follow industry best practices for code security, data protection, and secure coding standards. We also offer post-launch maintenance and support to ensure your application remains secure.",
    },
    {
      question: "What is the typical timeline for a .NET project?",
      answer:
        "The timeline depends on the complexity and scope of your project. After discussing your requirements, we provide a clear project plan with estimated timelines to ensure transparency and alignment with your goals.",
    },
    {
      question: "How do I communicate with the .NET development team?",
      answer:
        "We prioritize clear, transparent communication. You'll have direct access to your dedicated project manager and development team via email, calls, or collaboration tools to ensure smooth progress and updates throughout the project.",
    },
  ];

  return (
    <>
      <div className="relative hero min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Hero Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>

        {/* Dimmed Overlay */}
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="hero-content absolute inset-0 flex justify-center items-center text-neutral-content text-left">
          <div className="max-w-54 text-left px-6 md:px-12 lg:px-8">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire .NET Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire .NET Developers from Ultrafly Solutions?
            </h3>
            <ul className="list-disc list-inside mb-7 text-left text-white text-sm md:text-lg grid gap-4">
              <li>
                Expert .NET developers with industry-leading skills and
                extensive experience.
              </li>
              <li>
                Flexible hiring models – full-time, part-time, or project-based.
              </li>
              <li>
                Robust and scalable solutions tailored to your business needs.
              </li>
              <li>
                Seamless communication with dedicated project managers and
                regular updates.
              </li>
              <li>
                Security-first development practices adhering to the latest
                standards.
              </li>
              <li>
                Full-cycle services, from development to maintenance and
                support.
              </li>
              <li>Trusted by leading brands across various industries.</li>
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
          Elevate Your Business with Tailored .NET Development Services
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
                  Custom .NET Application Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Develop tailored solutions to address your unique business
                  challenges.
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
                  .NET Web Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Create high-performance, responsive web applications utilizing
                  the latest .NET frameworks.
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
                  Enterprise Solutions
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Build scalable, enterprise-grade applications that enhance
                  operational efficiency.
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
                <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="font-medium group-hover:text-gray-100">
                  Leverage cloud technologies to develop secure, flexible
                  cloud-based .NET applications.
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
                  API & Microservices Development
                </h3>
                <p className="font-medium group-hover:text-gray-100">
                  Design APIs and microservices that improve system efficiency
                  and scalability.
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
                  Ensure your applications operate seamlessly with our ongoing
                  support and maintenance services.
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
              Unlock the Full Potential of Your Business Applications!
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              Are you looking for a tailored .NET solution that scales with your
              business? Contact us now to discuss your project needs with one of
              our experts.
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
          Fueling Your Vision with Ultrafly Expertise
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          Hiring a .NET developer from Ultrafly Solutions gives you access to a
          dedicated team that thrives on innovation and collaboration. We
          prioritize your success with solutions designed to boost productivity,
          enhance performance, and drive results.
        </p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Benefit 1 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-left"
          >
            <h2 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h2>
            <p className="text-gray-600">
              We believe in full transparency at every project stage, ensuring
              you&apos;re always in the loop.
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
              Whether you need a full-time developer or a team for a specific
              project, we offer flexible hiring options tailored to your needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-gray-800  mb-3">
              Proven Track Record
            </h2>
            <p className="text-gray-600">
              With years of experience in developing high-performing .NET
              applications, our developers consistently exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <section className="p-10 md:p-20 w-full">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          4 Easy Steps to Hire a Java Developer
        </h2>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p className=" ">
                We take the time to understand your ideas! Share your vision and
                have a detailed conversation with our team to clarify your
                project goals and expectations.
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
                Benefit from our expertise as we help you identify the key
                skills and technologies needed for your project.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h2>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Build a Collaborative</h2>
              <p className=" ">
                Relationship Work closely with our developers to ensure your
                vision is realized, fostering a partnership that drives
                innovation and success.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h2 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h2>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h2 className="text-xl font-bold">Get Ongoing Support</h2>
              <p className=" ">
                Enjoy continuous collaboration and support throughout the
                development process so your project stays on track and meets
                your goals.
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
          alt="Flutter Developers"
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
              Hire the Best .NET Talent Today
            </h1>
            <p className="md:mb-5 text-[10px] max-sm:leading-3 md:text-xl text-white w-3/4 pb-5">
              At Ultrafly Solutions, we&apos;re committed to delivering .NET
              development services that help you stay ahead of the competition.
              Our developers are not only experts in coding, but they also bring
              a business-centric approach to ensure your software delivers value
              and efficiency.
            </p>
            <Link
              href="/contact-us"
              className="text-xs md:text-xl text-white bg-blue-500 p-4 rounded-xl "
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 mx:px-10 mb-10">
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
                  maxHeight: openIndex === index ? "300px" : "80px", // adjust maxHeight based on the open or closed state
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

export default Dotnet;
