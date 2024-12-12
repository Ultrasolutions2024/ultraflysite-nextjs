"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Image from "next/image";
import logo from "../images/ultrafly/ultraflysolutionslog.webp";
import Link from "next/link";

function Contact({ closeModal }) {
  const [isVisible, setIsVisible] = useState(false); // Track modal visibility
  const form = useRef();

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Small delay to allow CSS transitions
    return () => clearTimeout(timer);
  }, []);

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
          handleCloseModal(); // Close modal on success
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

  const handleCloseModal = () => {
    setIsVisible(false); // Trigger animation out
    setTimeout(() => {
      closeModal(); // Close modal after animation
    }, 300); // Match the transition duration
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
        <div
          className={`bg-white rounded-lg shadow-lg w-full max-w-4xl transform transition-all duration-300 ${
            isVisible ? "opacity-100 scale-100 mx-5 my-10" : "opacity-0 scale-90"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Full-Height Logo, Heading, and Text */}
            <div className="bg-gray-100 p-6 flex flex-col justify-center rounded-lg">
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src={logo}
                  alt="Ultrafly Logo"
                  className="md:w-full md:h-full w-44"
                />
                <h2 className="text-xl font-bold text-gray-800 mt-2 md:mt-6 text-center">
                  Request Services
                </h2>
                <p className="text-sm text-gray-600 mt-2 md:mt-4 text-center md:text-left">
                  We will respond as soon as possible. If the response is not
                  fast enough or you are in a hurry, please contact us directly
                  at{" "}
                  <Link
                    href="tel:+919150001089"
                    className="font-bold text-black"
                  >
                    +91 91500 01091
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-6 flex flex-col justify-center">
              <form ref={form} onSubmit={sendEmail}>
                <div className=" mb-1 md:mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-blue-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full  p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-blue-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-blue-300"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows="2"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-blue-300"
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <NotificationContainer />
    </>
  );
}

export default Contact;
