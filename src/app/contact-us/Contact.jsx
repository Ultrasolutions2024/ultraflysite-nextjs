"use client";
import React, { useRef, useEffect } from "react";
import india from "../images/hero/india.webp";
import usa from "../images/hero/united-states.webp";
import emailjs from "emailjs-com";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import contact_banner from "../images/contact/contact_banner.webp";
import Image from "next/image";
import Link from "next/link";
function Login() {
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

  return (
    <>
      <div className="relative h-60 w-screen flex items-center justify-center gap-4 max-sm:px-10">
        <Image
          src={contact_banner}
          alt="Contact Banner"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          quality={75}
          className="z-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <h2 className="relative z-20 text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">
          GET IN TOUCH WITH US
        </h2>
      </div>
    <section>
        {/* Contact Section */}
        <div className="bg-white py-3 page-padding grid md:grid-cols-2 container gap-10 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
              We are here to help you! To uplift your business.
            </h2>
            <p className="text-base md:text-lg text-[#646464] w-[95%] mb-10">
              Our field of expertise includes Software Development, Web
              Development, Mobile App Development, SEO, Digital Marketing &
              Recruitment Services. Our global clients come from diverse
              industries with varying requirements.
            </p>

            <div className="grid gap-10">
              {/* Office Location */}
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Visit Our Office
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Office Location
                </h3>
                <p className="text-base md:text-lg text-[#646464]">
                  27/9, 3rd floor, flat-9, Nivedh Vikas, Pankaja Mills Road, Puliakulam,
                  Coimbatore - 641045.
                </p>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col relative">
                <h3 className="text-2xl md:text-3xl mb-2 font-bold">
                  Opening Hours
                </h3>
                <div className="text-[#646464] grid grid-cols-3 w-full md:w-[60%]">
                  <p className="text-base md:text-lg">Mon - Fri :</p>
                  <p className="text-base md:text-lg col-span-2">
                    9:30 am — 6:30 pm
                  </p>
                  <p className="text-base md:text-lg">Saturday :</p>
                  <p className="text-base md:text-lg col-span-2">
                    9:30 am — 5:00 pm
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl mb-2 font-bold">
                  Send Us a Message
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Phone
                </h3>
                <div className="text-[#646464] pl-2">
                  <p className="text-base md:text-lg">
                    <Image
                      loading="lazy"
                      quality={75}
                      src={india}
                      alt="India Flag"
                      className="inline-block w-4 h-4 mx-[5px]"
                    />
                    +91 91500 01089
                  </p>
                  <p className="text-base md:text-lg">
                    <Image
                      loading="lazy"
                      quality={75}
                      src={india}
                      alt="India Flag"
                      className="inline-block w-4 h-4 mx-[5px]"
                    />
                    +91 91500 01090
                  </p>
                  <p className="text-base md:text-lg">
                    <Image
                      loading="lazy"
                      quality={75}
                      src={usa}
                      alt="USA Flag"
                      className="inline-block w-4 h-4 mx-[5px]"
                    />
                    +1 562 521 9684
                  </p>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mt-4">
                  Landline
                </h3>
                <p className="text-base md:text-lg pl-1">
                  <Image
                    loading="lazy"
                    quality={75}
                    src={india}
                    alt="India Flag"
                    className="inline-block w-4 h-4 mx-[5px]"
                  />
                  +0422-350 0024
                </p>
                <h3 className="text-xl md:text-2xl font-semibold mt-4">
                  Email
                </h3>
                <div className="text-base md:text-xl text-[#646464] pl-1">
                  <a href="mailto:info@ultraflysolutions.com">
                    <i className="fa-solid fa-envelope"></i> Business -
                    info@ultraflysolutions.com
                  </a>
                  <br />
                  <a href="mailto:hr@ultraflysolutions.com">
                    <i className="fa-solid fa-envelope"></i> HR/Careers -
                    hr@ultraflysolutions.com
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              {/* <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10"></h3>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                  Add more social media icons here
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative"
          >
            <h2 className="text-[22px] md:text-[28px] font-bold mb-4">
              Contact Information
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold my-4">
              Contact Form
            </h3>
            <input
              name="user_name"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
              required
            />
            <input
              name="user_email"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
              required
            />
            <input
              name="user_phone"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Your phone number"
              type="number"
            />
            <select
              name="user_domain"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              required
            >
              <option value="">Select Services</option>
              <option value="Software Development">Software Development</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">
                Mobile Application Development
              </option>
              <option value="Digital Marketing">SEO & Digital Marketing</option>
              <option value="Digital Marketing">IT Staffing</option>
              <option value="Digital Marketing">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              className="w-full py-[12px] px-[20px] h-[120px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Your message"
              required
            />
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="flex justify-center py-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.0160674609839!2d76.99391089232648!3d11.003122866893872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c5ee211c7b%3A0x9880ea6c81891b24!2sNivedh%20Vikas%20Apartment!5e1!3m2!1sen!2sin!4v1727782619876!5m2!1sen!2sin"
            className="w-full h-64 md:h-80 lg:h-[400px] xl:h-[500px] rounded-lg border-none"
            loading="lazy"
          />
        </div>
      </section>
    
      <div className="bg-white py-10 page-padding w-full container gap-10 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-black text-centext-2xlr te md:text-3xl font-bold mb-4">
            Our Capabilities
          </h2>
          <p className="text-base text-center md:text-lg text-[#646464] w-[95%] mb-10">
            UltraFly Solutions operates services tailored to cater to the
            different needs of clients spread across the globe and varied
            industries. Some of our services include:
          </p>

          <div className="grid gap-10  md:grid-cols-2 ">
            {[
              {
                title: "Software Development",
                link: "/software-development",
                description:
                  "Customized software solutions tailored to fit your business needs, scaled for efficiencies.",
              },
              {
                title: "Web Development",
                link: "/website-development-company",
                description:
                  "Complete web design and development services that include e-commerce platforms, websites of corporate organizations, user experience, and responsiveness.",
              },
              {
                title: "Mobile Application Development",
                link: "/mobile-app-development",
                description:
                  "Custom Mobile applications on iOS and Android will galvanize people's attention towards your business.",
              },
              {
                title: "Search Engine Optimization (SEO)",
                link: "/search-engine-optimization",
                description:
                  "Improving organic results in search, search engine ranking, and organic traffic.",
              },
              {
                title: "Digital Marketing",
                link: "/digital-marketing-company",
                description:
                  "Digital marketing solution areas include social media management, content marketing, and online advertising to increase brand presence.",
              },
              {
                title: "Recruitment Services",
                link: "/it-staffing",
                description:
                  "Tailored recruitment services to support you in the talent acquisition process that helps drive your organizational goals.",
              },
            ].map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="verflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between border hover:after:w-full border-white-222 hover:border-[#237ff7] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#237ff7] before:absolute before:top-0 before:left-0"
              >
                <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                  {service.title}
                </h4>
                <p className="font-base text-gray-800 text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                  {service.description}
                </p>
                <span className="flex font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                  Learn More
                  <svg
                    className="w-4 h-4 translate-x-3 translate-y-[6px]"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
      </div>
      
      <NotificationContainer />
    </>
  );
}

export default Login;
