"use client";
import React, { useEffect, useState } from "react";
import bg1 from "../images/our_services/software_dev/bg1.webp";
import bg2 from "../images/our_services/software_dev/bg2.webp";
import "../mobile-app-development/services.css";
import Image from "next/image";
import iconCRM from "../images/our_services/software_dev/crm.webp";
import iconERP from "../images/our_services/software_dev/erp.webp";
import iconSCM from "../images/our_services/software_dev/scm.webp";
import iconHCM from "../images/our_services/software_dev/hcm.webp";
import iconBI from "../images/our_services/software_dev/bi.webp";
import iconConsultation from "../images/our_services/software_dev/cons.webp";
import cased from "../images/our_services/software_dev/case.webp";
import {
  FaRocket,
  FaSmile,
  FaTrophy,
  FaExpand,
  FaDollarSign,
} from "react-icons/fa";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

import { FiTarget, FiBox, FiLayers, FiTool } from "react-icons/fi";
import Link from "next/link";

function Software() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const expertiseData = [
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "We create customized CRM systems that enhance sales, marketing, and customer service, fostering stronger relationships and optimizing lead generation to boost revenue.",
      icon: iconCRM,
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Our ERP systems integrate your core business processes, giving you real-time insight and enabling data-driven decisions faster than the competition.",
      icon: iconERP,
    },
    {
      title: "Supply Chain Management (SCM)",
      description:
        "Our SCM systems improve supply chain efficiency, save you money, and ensure goods and services arrive on time, keeping your clients happy.",
      icon: iconSCM,
    },
    {
      title: "Human Capital Management (HCM)",
      description:
        "Our HCM solutions streamline HR processes from hiring to retirement, promoting employee satisfaction and business health.",
      icon: iconHCM,
    },
    {
      title: "Business Intelligence and Analytics",
      description:
        "Our BI tools convert raw data into actionable insights, helping you outsmart the competition by making data-driven decisions.",
      icon: iconBI,
    },
    {
      title: "Full-Cycle Software Consultation",
      description:
        "We offer professional advice from design conception through the software lifecycle to ensure smooth, successful technological journeys.",
      icon: iconConsultation,
    },
  ];

  const services = [
    "Web Application Development",
    "Mobile Application Development",
    "Enterprise Software Solutions",
    "SaaS (Software as a Service) Development",
    "E-Commerce Software Development",
    "Legacy System Modernization",
    "Custom API Development",
    "Cloud-Based Software Development",
    "AI and Machine Learning Solutions",
    "Custom IoT (Internet of Things) Solutions",
    "Custom Blockchain Development",
    "Desktop Application Development",
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
    if (visibleCount + 3 >= services.length) {
      setIsExpanded(true);
    }
  };

  const showLess = () => {
    setVisibleCount(3);
    setIsExpanded(false);
  };

  return (
    <>
      <div className="mt-[20px] bg-gray-50">
        <div
          className="col-12 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="font-sans bg-gray-50 p-4 lg:pt-10 pt-10 md:pt-20 lg:pr-48 md:pl-24">
            <div className="lg:max-w-5xl max-w-xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-10">
                <div
                  className="rounded-3xl md:w-[400px] md:-mt-10 md:-ml-20 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
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

                <div className="text-left bg-blue-50 mt-6 px-5 lg:px-10 lg:-translate-x-10 rounded-3xl w-full lg:w-[650px]  h-auto lg:h-[380px] py-5 shadow-md">
                  <h1 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
                    Custom Software Development (CSD)
                  </h1>
                  <p className="mb-4 text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                    Businesses can not rely on off-the-shelf software as
                    presented in this fast-paced digital age; their unique
                    demands are now better met by custom software development
                    (CSD), and that has been the new backbone of success for
                    enterprises to streamline their operations better, increase
                    efficiency, and ultimately maintain a competitive edge in
                    their industries.
                  </p>
                  <p className="text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                    Ultrafly Solutions is a specialized company in developing
                    tailor-made Enterprise Software and provides comprehensive
                    Software Consulting Services specifically for the unique
                    needs of your organization. Our solutions do not just better
                    the technology but ensure future-proofing success.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              <div className="grid lg:grid-cols-2 gap-12 mb-10 relative">
                <div className="text-left  bg-blue-50 mt-6 px-5 lg:px-10 rounded-3xl w-full lg:w-[650px] h-auto lg:h-[350px] py-5 shadow-lg z-10 relative">
                  <h2 className="text-gray-800 text-xl lg:text-2xl font-bold mb-4">
                    Enterprise Software Development to Raise Business
                  </h2>
                  <p className="mb-4 text-sm lg:text-[16px] text-justify font-sans leading-relaxed text-gray-500">
                    While large operations come with the complexity that
                    standard solutions may not do justice to, it&apos;s only
                    with Ultrafly Solutions&apos; cutting-edge Enterprise
                    Software that charts the ever-changing waters in how modern
                    enterprises function.
                  </p>
                  <p className="text-sm lg:text-[16px] text-justify font-sans leading-relaxed text-gray-500">
                    Every enterprise is different; hence, at Ultrafly Solutions,
                    we construct system applications that are not only robust
                    and scalable but also flexible to suit your needs precisely.
                  </p>
                </div>

                <div
                  className="rounded-3xl md:w-[400px] md:-mt-10 md:-ml-20 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
                  data-aos="fade-left"
                >
                  <Image
                    loading="lazy"
                    quality={75}
                    src={bg2}
                    alt="Placeholder Image"
                    className="object-contain rounded-3xl -z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-gray-100 p-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-10">
              Our Core Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10">
              {expertiseData.map((expertise, index) => (
                <div
                  key={index}
                  className="relative flex w-80 flex-col rounded-xl lg:mt-10 bg-white text-gray-700 shadow-md hover:scale-[104%] transition-all duration-300"
                >
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/40">
                    <Image
                      loading="lazy"
                      quality={75}
                      src={expertise.icon}
                      alt={`${expertise.title} icon`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {expertise.title}
                    </h5>
                    <p className="block font-sans text-base  leading-relaxed text-inherit antialiased text-justify">
                      {expertise.description}
                    </p>
                  </div>

                  <div className="p-6 pt-0"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-6 sm:py-8 lg:py-24">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex flex-col items-center justify-center text-center sm:mb-8 md:mb-12">
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                  Our Consulting Expertise
                </h2>
                <p className="max-w-screen-sm text-gray-600 mt-4">
                  We offer expert consulting to help align your software
                  solutions with business goals.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4 xl:gap-12">
                <div className="group w-full p-6 h-72 flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-500 rounded-full p-4 mb-4 group-hover:bg-blue-600 transition duration-300 ease-in-out">
                      <FiTarget className="text-white w-12 h-12 animate-pulse" />
                    </div>
                    <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                      Software Strategy and Planning
                    </h5>
                    <p className="text-base text-center text-gray-600">
                      Without a plan, software development is aimless. We create
                      a roadmap to align tech with business goals.
                    </p>
                  </div>
                </div>

                <div className="group w-full p-6 h-72 flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-500 rounded-full p-4 mb-4 group-hover:bg-blue-600 transition duration-300 ease-in-out">
                      <FiBox className="text-white w-12 h-12 animate-pulse" />
                    </div>
                    <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                      Software Architecture and Design
                    </h5>
                    <p className="text-base text-center text-gray-600">
                      We develop scalable and secure architectures that grow
                      with your business and meet future demands effortlessly.
                    </p>
                  </div>
                </div>

                <div className="group w-full p-6 h-72 flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-500 rounded-full p-4 mb-4 group-hover:bg-blue-600 transition duration-300 ease-in-out">
                      <FiLayers className="text-white w-12 h-12 animate-pulse" />
                    </div>
                    <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                      Software Implementation and Deployment
                    </h5>
                    <p className="text-base text-center text-gray-600">
                      Our implementation ensures everything works seamlessly,
                      maintaining the flow of your business without
                      interruptions.
                    </p>
                  </div>
                </div>

                <div className="group w-full p-6 h-72 flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-500 rounded-full p-4 mb-4 group-hover:bg-blue-600 transition duration-300 ease-in-out">
                      <FiTool className="text-white w-12 h-12 animate-pulse" />
                    </div>
                    <h5 className="mb-2 text-xl font-semibold text-center text-gray-900">
                      Software Maintenance and Support
                    </h5>
                    <p className="text-base text-center text-gray-600">
                      Our ongoing support keeps your systems running smoothly as
                      your business evolves and changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 p-4 ">
            <div className="w-full flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl mb-4">
                Types of Software Development Services
              </h2>
              <p className="max-w-screen-sm text-gray-600 text-justify">
                At Ultrafly Solutions, we maintain an extensive portfolio of
                development methodologies that are leveled to the needs of your
                projects. The reason is that one size never fits all—at least in
                the context of technology.
              </p>
            </div>

            <div className="w-full flex justify-center mt-7 mb-7">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="lg:h-[12em] h-[180px] w-full max-w-[400px] md:h-[300px] bg-white rounded-[1em] overflow-hidden relative group p-4 z-0 shadow-lg transition-transform transform hover:scale-105 md:p-6 lg:p-8 mx-auto flex flex-col items-center justify-center">
                  <div className="circle absolute h-[5em] w-[5em] -top-[2em] -right-[2em] rounded-full bg-blue-400 group-hover:scale-[1200%] duration-500 z-[-1]"></div>
                  <h2 className="z-20 font-bold font-Poppins group-hover:text-white duration-500 text-[1.4em] mb-2 text-center">
                    Agile Development
                  </h2>
                  <p className="text-sm text-gray-700 z-20 group-hover:text-white text-center">
                    If you need flexibility and fast iterations as an integral
                    part of your development process, agile development is your
                    best friend. We work collaboratively with you so that your
                    software evolves in concert with your changing needs and
                    priorities.
                  </p>
                </div>

                <div className="lg:h-[12em] h-[180px] w-full max-w-[400px] md:h-[300px] bg-white m-auto rounded-[1em] overflow-hidden relative group p-4 z-0 shadow-lg transition-transform transform hover:scale-105 mx-auto flex flex-col items-center justify-center">
                  <div className="circle absolute h-[5em] w-[5em] -top-[2em] -right-[2em] rounded-full bg-blue-400 group-hover:scale-[1200%] duration-500 z-[-1]"></div>
                  <h2 className="z-20 font-bold font-Poppins group-hover:text-white duration-500 text-[1.4em] mb-2 text-center">
                    Waterfall Methodology
                  </h2>
                  <p className="text-sm text-gray-700 z-20 group-hover:text-white text-center">
                    If the requirements are rock-solid for a project, we take a
                    more structured approach to ensure that every stage from
                    design through deployment is a waterfall.
                  </p>
                </div>

                <div className="lg:h-[12em] h-[180px] w-full max-w-[400px] md:h-[300px] bg-white m-auto rounded-[1em] overflow-hidden relative group p-4 z-0 shadow-lg transition-transform transform hover:scale-105 mx-auto flex flex-col items-center justify-center">
                  <div className="circle absolute h-[5em] w-[5em] -top-[2em] -right-[2em] rounded-full bg-blue-400 group-hover:scale-[1200%] duration-500 z-[-1]"></div>
                  <h2 className="z-20 font-bold font-Poppins group-hover:text-white duration-500 text-[1.4em] mb-2 text-center">
                    DevOps Practices
                  </h2>
                  <p className="text-sm text-gray-700 z-20 group-hover:text-white text-center">
                    DevOps is where development meets operations. We foster
                    collaboration across your teams to accelerate the delivery
                    of your software without letting quality fall by the
                    wayside.
                  </p>
                </div>

                <div className="lg:h-[12em] h-[180px] w-full max-w-[400px] md:h-[300px] bg-white m-auto rounded-[1em] overflow-hidden relative group p-4 z-0 shadow-lg transition-transform transform hover:scale-105 mx-auto flex flex-col items-center justify-center">
                  <div className="circle absolute h-[5em] w-[5em] -top-[2em] -right-[2em] rounded-full bg-blue-400 group-hover:scale-[1200%] duration-500 z-[-1]"></div>
                  <h2 className="z-20 font-bold font-Poppins group-hover:text-white duration-500 text-[1.4em] mb-2 text-center">
                    Custom Software Development
                  </h2>
                  <p className="text-sm text-gray-700 z-20 group-hover:text-white text-center">
                    The jewel of our offering: we make tailor-made solutions
                    particularly based on the problems in your business. Whether
                    it is automating mundane routine tasks or designing complex
                    applications, our custom software fits like a glove.
                  </p>
                </div>

                <div className="lg:h-[12em] h-[180px] w-full max-w-[400px] md:h-[300px] lg:translate-x-[250px] md:translate-x-[200px] bg-white m-auto rounded-[1em] overflow-hidden relative group p-4 z-0 shadow-lg transition-transform transform hover:scale-105 mx-auto flex flex-col items-center justify-center">
                  <div className="circle absolute h-[5em] w-[5em] -top-[2em] -right-[2em] rounded-full bg-blue-400 group-hover:scale-[1200%] duration-500 z-[-1]"></div>
                  <h2 className="z-20 font-bold font-Poppins group-hover:text-white duration-500 text-[1.4em] mb-2 text-center">
                    Legacy System Modernization
                  </h2>
                  <p className="text-sm text-gray-700 z-20 group-hover:text-white text-center">
                    Whether or not your legacy systems are running a bit too
                    slow for you, it&apos;s time to upgrade. We modernize legacy
                    systems so that you can achieve better performance and
                    security while keeping you at the top of the game in the
                    digital space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50 pt-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Types of Custom Software Development
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Custom software development simply means developing custom-made
              solutions tailored exactly to the specific needs of your business.
              Ultrafly Solutions provides different kinds of custom software
              development so that you get exactly what you need. Here is a brief
              of the most common kinds of custom software development we
              provide:
            </p>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
                {services.slice(0, visibleCount).map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 mx-auto max-w-[350px] opacity-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      {service}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      We offer comprehensive solutions to meet your needs in
                      {service.toLowerCase()}.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              {!isExpanded ? (
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  More
                </button>
              ) : (
                <button
                  onClick={showLess}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Less
                </button>
              )}
            </div>

            <div className="mt-8 max-w-[1200px] mx-auto">
              <p className="text-lg text-gray-600">
                We at Ultrafly Solutions are proud of our custom software
                development services, highly customized to break into your
                unique challenges. If you require an application for mobile
                application development or need modifications to legacy systems
                to achieve current trends in AI technology, then help from our
                team of experts will deliver some high-quality tailor-made
                solutions.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Custom software development is an investment in your future
                where your business will be sufficiently prepared to adapt,
                grow, and lead.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl mt-10 shadow-2xl space-y-10 max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold font-Poppins text-blue-800 mb-8 text-center leading-tight">
              Why Choose Custom Software Development? Unmatched Benefits for
              Your Business
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              Investing in custom software is an investment in growth,
              efficiency, and customer satisfaction. Discover how it can
              transform your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-start space-x-4">
                <FaRocket className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    Increased Efficiency & Productivity
                  </h3>
                  <p className="text-gray-600">
                    Automate manual processes to boost productivity and free up
                    valuable time for impactful tasks.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-start space-x-4">
                <FaSmile className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    Enhanced Customer Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    Deliver a personalized experience that builds loyalty and
                    keeps customers happy.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-start space-x-4">
                <FaTrophy className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    Competitive Advantage
                  </h3>
                  <p className="text-gray-600">
                    Stand out with a unique, scalable solution tailored to your
                    specific business needs.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-start space-x-4">
                <FaExpand className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    Scalability & Flexibility
                  </h3>
                  <p className="text-gray-600">
                    Adapt and grow without limits; custom solutions evolve as
                    your business expands.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 flex items-start space-x-4">
                <FaDollarSign className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    Return on Investment (ROI)
                  </h3>
                  <p className="text-gray-600">
                    Though an initial investment, custom software generates
                    higher returns through efficiency gains, cost savings, and
                    enhanced customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 max-w-5xl mx-auto mt-10">
            <h2 className="text-4xl font-bold font-Poppins text-blue-800 mb-8 text-center">
              Our Technology Stack: Bringing the Best to the Table
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We are pioneers in cutting-edge technologies, fluent in multiple
              programming languages, frameworks, and cloud platforms. Our modern
              solutions leverage the best technology to drive your success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out flex items-start space-x-4">
                <FaCode className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Languages
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Java, Python, C++, C#, JavaScript, Ruby (and yes, we speak
                    human too!)
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out flex items-start space-x-4">
                <FaLayerGroup className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Frameworks
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Spring, Django, React, Angular, Vue.js, Node.js (we&apos;re
                    pros with the latest)
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out flex items-start space-x-4">
                <FaDatabase className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Databases
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    MySQL, PostgreSQL, Oracle, MongoDB - turning raw data into
                    actionable insights
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out flex items-start space-x-4 lg:translate-x-[160px]">
                <FaCloud className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Cloud Platforms
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AWS, Azure, GCP - the future is in the cloud, and we’re
                    ready to lead the way
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out flex items-start space-x-4 lg:translate-x-[160px] md:translate-x-48">
                <FaTools className="text-blue-700 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    DevOps Tools
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Git, Jenkins, Docker, Kubernetes - ensuring smooth,
                    continuous delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-6">
              <h2 className="text-3xl font-bold font-Poppins text-blue-700 mb-4">
                Case Studies - Real-World Success
              </h2>
              <p className="text-gray-800 mb-4">
                Our case studies represent how our custom software development
                solutions make changes in businesses from different industries.
                From process efficiency to significant revenue growth,
                we&apos;ve helped our clients achieve magnificent results. Check
                them out and see why you&apos;d be inspired.
              </p>
              <p className="text-gray-800">
                Standing still isn&apos;t an option in an ever-changing world
                with technology. Ultrafly Solutions brings you a dedicated
                partner committed to crafting software solutions that are not
                just what you need but also more than what is expected of them.
                Let your tech dreams become a reality. Contact us today to
                discuss your unique business requirements and start your journey
                toward technological excellence.
              </p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <Image
                loading="lazy"
                quality={75}
                src={cased}
                alt="Case Studies"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center mb-4">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-lg md:text-xl text-white text-center mb-6">
                Is your business in need of a lift-off? Do you want to be a new
                startup in the market or an established business looking to
                streamline operations and enhance customer engagement? Let
                Ultrafly Solutions assist you.
              </p>
              <p className="text-lg md:text-xl text-white text-center mb-8">
                Contact us now to discuss how we can transform your mobile
                application idea into a fully functioning creation. Let’s do
                something amazing together!
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
        </div>
      </div>
    </>
  );
}

export default Software;
