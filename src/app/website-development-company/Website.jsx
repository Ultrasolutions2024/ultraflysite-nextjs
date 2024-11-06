"use client";
import React, { useEffect } from "react";
import "../mobile-app-development/services.css";
import SocialMedias from "../(Services)/SocialMedias";
import Link from "next/link";
import gif1 from "../images/our_services/software_dev/software-development{}-gif.gif";
import webImg from "../images/who-we-are/web.png";
import softimg from "../images/our_services/websiteImg/software-img.jpg";
import ScrollToTop from "../lib/ScrollToTop";
import Head from "next/head";
import web_bg from "../images/our_services/mobileImgs/mobile_bg.webp";
import Image from "next/image";
import bg1 from "../images/our_services/websiteImg/web.jpg";
import { FaMobileAlt, FaPaintBrush, FaUserEdit, FaCode } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import {
  FaDatabase,
  FaCogs,
  FaLock,
  FaShoppingCart,
  FaCreditCard,
  FaBoxes,
  FaRocket,
  FaShieldAlt,
  FaTools,
  FaClock,
  FaChartLine,
  FaUsers,
  FaThumbsUp,
  FaCloud,
  FaDollarSign,
} from "react-icons/fa";

function Website() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="mt-[20px] md:mt-16">
        <div className="lg:max-w-5xl max-w-xl mx-auto lg:pr-40">
          <div className="grid lg:grid-cols-2 gap-12 mb-10">
            {/* Image Section */}
            <div
              className="rounded-3xl md:w-[400px] md:-mt-10 md:-ml-20 lg:ml-0 lg:mt-0 lg:w-[600px] h-fit shadow-lg lg:relative md:absolute hidden md:block"
              data-aos="fade-right"
            >
              <Image
                src={bg1}
                alt="Placeholder Image"
                className="object-contain rounded-3xl -z-10"
              />
            </div>

            {/* Text Section */}
            <div className="text-left bg-gradient-to-r from-gray-50 to-blue-50 mt-6 px-5 lg:px-10 lg:-translate-x-10 rounded-3xl z-10  w-full lg:w-[650px]  h-auto lg:h-[400px] py-5 shadow-md">
              <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
                Professional Website Development Services
              </h2>
              <p className="mb-4 text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                A business cannot afford not to have an adequate online presence
                is the need of every modern business that wants to survive in
                the digital age. We at Ultrafly Solutions boast of leading-edge
                digital solutions that make your business more effective as well
                as unique from other forms. We blend creativity and technical
                expertise coupled with our strategic insights into your vision
                to bring you together in a dynamic user-centric experience.
              </p>
              <p className="text-sm lg:text-[16px] font-sans text-justify leading-relaxed text-gray-500">
                Our expert developers, designers, and digital strategists can
                build your website from the ground up, work on your existing
                site, or build into a high-dollar e-commerce powerhouse.
                Everything from the aesthetics on the front lines to the backend
                functionality is covered with attention and care throughout the
                development process.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
              Our Core Software Development Services
            </h2>
            {/* frontend */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-2xl lg:text-2xl font-bold text-center mb-8">
                Front-End Development
              </h2>
              <p className="text-lg md:text-lg text-center mb-8">
                It is a visual interface of your digital platform and the part
                directly interacting with your users - the face of your brand in
                the digital world. We know how important the first impression
                is. Our front-end developers focus on creating beautiful,
                intuitive, and engaging interfaces that create a long-lasting
                impact on your audience.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                Our Front-End Services Include:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                  <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    Responsive Web Design
                  </h4>
                  <p className="text-justify">
                    We create fluid and responsive websites that perform
                    flawlessly on every device whether your clients are
                    accessing them from desktops, tablets, or phones, the
                    experience is seamless.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                  <FaPaintBrush className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">UI Design</h4>
                  <p className="text-justify">
                    Our team designs attractive, usable interfaces that ensure
                    smooth user interaction in line with the brand, providing a
                    delightful experience that keeps users engaged and satisfied
                    throughout their journey in the application.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                  <FaUserEdit className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">UX Design</h4>
                  <p className="text-justify">
                    User-centric approach with an embedded focus on high
                    usability with clear navigation, smart and meaningful
                    content placement along dynamic interactive elements for an
                    easy and efficient user journey.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                  <FaCode className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    Front-End Frameworks
                  </h4>
                  <p className="text-justify">
                    Use dynamic frameworks like React, Angular, and Vue.js. Our
                    team builds scale, maintain front-end solutions that deliver
                    great performance and longevity.
                  </p>
                </div>
              </div>
            </div>

            {/* backend */}
            <div className="bg-gray-100 py-12">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                  Back-End Development
                </h2>
                <p className="text-lg md:text-lg text-center mb-8">
                  While the front end is visible to users, the back end powers
                  everything behind the scenes, managing data, security, and
                  functionality to ensure optimal performance of your website or
                  application.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                  Our Back-End Services Include
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaDatabase className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Database Design and Management
                    </h4>
                    <p className="text-justify">
                      We create well-structured databases optimized for
                      performance and security, whether SQL or NoSQL, ensuring
                      efficient data storage and retrieval.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaCogs className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      API Development and Integration
                    </h4>
                    <p className="text-justify">
                      Our team designs custom APIs that facilitate seamless
                      communication between your systems and external platforms,
                      creating a cohesive digital ecosystem.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaLock className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Security</h4>
                    <p className="text-justify">
                      In today’s cyber landscape, we ensure your website&apos;s
                      security through the latest encryption standards and
                      regular audits, including firewall configurations and
                      protective measures for your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* cs */}

            <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 py-16 text-white rounded-xl">
              <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl font-extrabold mb-8">
                  Custom Software Solutions
                </h2>
                <p className="text-lg md:text-xl text-white mb-10">
                  At Ultrafly Solutions, we understand that every business is
                  unique. That’s why we tailor bespoke software solutions to fit
                  your specific needs, whether it’s CRM, ERP, or a custom-built
                  mobile app. Our team brings your ideas to life with precision
                  and creativity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105 hover:bg-opacity-20 flex flex-col items-center">
                    <FaMobileAlt className="text-5xl text-yellow-300 mb-4 animate-pulse" />
                    <h4 className="text-2xl font-semibold mb-2">
                      Mobile Applications
                    </h4>
                    <p className="text-sm text-white md:text-base">
                      We design native and cross-platform iOS and Android apps,
                      ensuring fast deployment and an exceptional user
                      experience.
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105 hover:bg-opacity-20 flex flex-col items-center">
                    <IoSettings className="text-5xl text-green-300 mb-4 animate-spin-slow" />
                    <h4 className="text-2xl font-semibold mb-2">
                      ERP Solutions
                    </h4>
                    <p className="text-sm text-white md:text-base">
                      Our custom ERP systems optimize resource planning, data
                      analysis, and more, empowering businesses with tailored
                      solutions.
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105 hover:bg-opacity-20 flex flex-col items-center">
                    <FaChartLine className="text-5xl text-blue-300 mb-4 animate-pulse" />
                    <h4 className="text-2xl font-semibold mb-2">
                      CRM Software
                    </h4>
                    <p className="text-sm text-white md:text-base">
                      Efficiently manage customer relationships, sales data, and
                      support services to enhance client retention and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ecommerce */}
            <div className="bg-gray-100 py-12">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                  E-commerce Development
                </h2>
                <p className="text-lg md:text-lg text-center mb-8">
                  We create stunning and error-free e-commerce solutions,
                  guiding your customers through a secure and enjoyable
                  experience from start to finish.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                  Our E-commerce Services Cover
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaShoppingCart className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Customized E-commerce Platforms
                    </h4>
                    <p className="text-justify">
                      We build tailored online stores and complex marketplaces
                      that precisely fit your business needs, ensuring an
                      engaging shopping experience.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaCreditCard className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Payment Gateway Integration
                    </h4>
                    <p className="text-justify">
                      We integrate secure and user-friendly payment gateways
                      like PayPal and Stripe, facilitating prompt and safe
                      transactions for your customers.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaBoxes className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Inventory Management Systems
                    </h4>
                    <p className="text-justify">
                      Our platforms feature fully integrated inventory
                      management systems, automating stock monitoring, order
                      processing, and restock alerts for smoother operations.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaRocket className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      SEO and Digital Marketing
                    </h4>
                    <p className="text-justify">
                      We ensure your website is fully optimized for search
                      engines to drive organic traffic, complemented by tailored
                      digital marketing solutions to boost your online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintanence */}
            <div className="bg-gray-100 py-12">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                  Website Maintenance and Support
                </h2>
                <p className="text-lg md:text-lg text-center mb-8">
                  Maintenance begins during the development phase of your
                  website or application. It plays a crucial role in determining
                  long-term success. Ultrafly Solutions is committed to
                  providing high-quality maintenance support services to ensure
                  your website functions securely and optimally, especially as
                  technology advances rapidly.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                  Our Website Maintenance Services Include
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Software & Plugin Updates
                    </h4>
                    <p className="text-justify">
                      We ensure that your site&apos;s software and plugins are
                      updated regularly, keeping your site efficient and secure
                      against vulnerabilities.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaChartLine className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Performance Optimization
                    </h4>
                    <p className="text-justify">
                      We monitor your site&apos;s performance continuously and
                      implement improvements to ensure fast loading times and an
                      excellent user experience.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaLock className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Security Monitoring
                    </h4>
                    <p className="text-justify">
                      We encrypt data and monitor for cyber threats, ensuring
                      that your customer&apos;s information remains safe at all
                      times.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
                    <FaTools className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">
                      Technical Support
                    </h4>
                    <p className="text-justify">
                      Our dedicated support team is available to address any
                      technical issues, reducing downtime and ensuring smooth
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Choose us */}

            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-12">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-center text-4xl font-extrabold text-white mb-6">
                  Why Choose Ultrafly Solutions?
                </h2>
                <p className="text-lg md:text-xl text-center text-white mb-12">
                  Partner with a team invested in your success at Ultrafly
                  Solutions. We deliver more than just technical expertise; our
                  collaborative approach aims to bring your vision to life in a
                  powerful digital experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaUsers className="text-5xl text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold mb-2">Experienced Team</h4>
                    <p className="text-gray-600">
                      Our developers and designers, with years of industry
                      experience, drive the delivery of innovative and reliable
                      solutions.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaThumbsUp className="text-5xl text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold mb-2">
                      Client-First Approach
                    </h4>
                    <p className="text-gray-600">
                      We focus on your needs and goals to ensure custom-built
                      solutions align with your vision and business strategy.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaTools className="text-5xl text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold mb-2">
                      Leading Edge Technology
                    </h4>
                    <p className="text-gray-600">
                      Utilizing the latest tools and frameworks ensures our
                      digital solutions are secure, scalable, and future-proof.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 transition-all lg:translate-x-48 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaCloud className="text-5xl text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold mb-2">
                      Unmatched Quality
                    </h4>
                    <p className="text-gray-600">
                      We uphold strict quality standards from design development
                      to testing, ensuring seamless functionality and top-class
                      performance.
                    </p>
                  </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 transition-all md:translate-x-44 lg:translate-x-48 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaDollarSign className="text-5xl text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold mb-2">
                      Competitive Pricing
                    </h4>
                    <p className="text-gray-600">
                      We aim to provide the best value with competitive pricing
                      models suitable for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <Image
                src={gif1}
                alt="Tools Used for Website Development at UltraFly Solutions"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-medium   ">
                Custom Web Design
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Front-End Development
              </h3>
              <p className="text-justify text-base md:text-xl">
                Website development is the process of turning ideas into
                functional applications. It combines creativity and technical
                skills, where programmers build digital platforms for various
                purposes, from mobile apps to complex systems.
              </p>
              <p className="text-justify text-base md:text-xl ">
                The process begins by identifying the website&apos;s goal,
                followed by planning the structure and functionality.
                Programmers then code the design using various tools, with
                thorough testing to ensure it works correctly. Once deployed,
                continuous maintenance is required to keep the website
                up-to-date and secure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-medium   ">
                Responsive Websites
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Back-End Development
              </h3>
              <p className="text-justify text-base md:text-xl">
                The realm of website development is vast and diverse. Web
                development focuses on creating applications for the internet,
                while mobile app development targets smartphones and tablets.
                Desktop applications cater to traditional computers, while game
                development brings interactive experiences to life. Embedded
                systems development involves websites for specialized devices.
              </p>
              <p className="text-justify text-base md:text-xl ">
                Challenges abound in this dynamic field. Building complex
                systems, safeguarding against cyber threats, and keeping pace
                with rapid technological advancements require constant
                innovation and adaptation. Yet, the rewards are immense. Website
                developers have the power to create solutions that improve
                lives, drive businesses, and shape the future.
              </p>
            </div>
            <div>
              <Image
                src={softimg}
                alt="Responsive Website Design on Different Devices"
                className="mx-auto w-1/2 md:w-2/4 lg:w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <Image
                src={webImg}
                alt="E-commerce Website Developed by UltraFly Solutions"
                className="mx-auto w-1/2"
              />
            </div>
            <div className="lg:col-span-2 grid gap-2" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-medium">
                E-commerce Solutions
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Website Maintenance
              </h3>
              <p className="text-justify text-base md:text-xl">
                As technology continues to evolve at an unprecedented pace, the
                role of website development will only grow in significance. It
                is a field that demands intellectual curiosity, problem-solving
                abilities, and a passion for creating something new.
              </p>
             
            </div>
          </div>
        </div> */}
      </div>
      {/* footer start */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-lg md:text-xl text-white text-center mb-6">
            Is your business in need of a lift-off? Do you want to be a new
            startup in the market or an established business looking to
            streamline operations and enhance customer engagement? Let Ultrafly
            Solutions assist you.
          </p>
          <p className="text-lg md:text-xl text-white text-center mb-8">
            Contact us now to discuss how we can transform your mobile
            application idea into a fully functioning creation. Let’s do
            something amazing together!
          </p>
          <div className="flex justify-center">
            <a href="/contact-us">
              <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:text-white">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <footer className="soft-banner-footer flex flex-col justify-center items-center gap-5 text-center px-4 lg:px-0">
        <h1 className=" text-white text-xl md:text-3xl lg:text-5xl  ">
          Let’s Get To Work Together Ready To Work With Us.
        </h1>
        <Link href="/contact-us">
          <button className=" text-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-white hover:text-black">
            Join with us
          </button>
        </Link>
      </footer> */}
    </>
  );
}

export default Website;
