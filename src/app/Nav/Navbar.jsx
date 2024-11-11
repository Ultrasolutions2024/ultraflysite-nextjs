"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/ultrafly/ultraflysolutionslog.png";
import { motion, useScroll } from "framer-motion";
import "./nav.css";
import Link from "next/link";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to manage dropdowns

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle dropdown menus in mobile view
  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  return (
    <header className="shadow-md tracking-wide z-50 sticky top-0 ">
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-4 bg-gray-50">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-36" />
        </Link>

        {/* Hamburger button for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Open Menu">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 ">
          <Link href="/" className="hover:text-[#007bff] text-gray-700 font-semibold">
            Home
          </Link>
          <div className="group max-lg:border-b max-lg:py-3 relative">
            <p
              href="javascript:void(0)"
              className="hover:text-[#007bff] text-[15px] text-gray-700 font-semibold hover:cursor-pointer  lg:hover:fill-[#007bff] block"
            >
              Services
            </p>
            <ul className="absolute lg:top-[30px] shadow-xl bg-white space-y-3 max-lg:top-8 -left-56 min-w-[350px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 rounded-xl">
              <Link href="/software-development">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Software Development
                  </p>
                </li>
              </Link>
              <Link href="/mobile-app-development">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Mobile Application Development
                  </p>
                </li>
              </Link>
              <Link href="/website-development-company">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Website Development
                  </p>
                </li>
              </Link>
              <Link href="/digital-marketing-company">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    SEO & Digital Marketing
                  </p>
                </li>
              </Link>
              <Link href="/it-staffing">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    IT Staffing
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="relative group">
            <div className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
              <p
                href="javascript:void(0)"
                className="hover:text-[#007bff] hover:fill-[#007bff] hover:cursor-pointer  text-[15px] text-gray-700 font-semibold block"
              >
                Hire Our Resources
              </p>
              <div className="absolute lg:top-[30px] max-lg:top-8 -left-[750px] z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[400px] min-w-[550px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500 rounded-xl">
                <div className="lg:min-w-[220px] max-lg:min-w-[140px]">
                  <h6 className="text-base text-[#007bff] font-bold">
                    BACKEND
                  </h6>
                  <ul className="mt-3 pt-3 border-t border-1 space-y-3 mr-5">
                    <Link href="/hire-dot-net-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105  hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire .NET Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-java-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Java Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-laravel-developers"  prefetch={false}>
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Laravel Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-node-js-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Node.js Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-php-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire PHP Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-python-developers"  prefetch={false}>
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Python Developers
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="lg:min-w-[230px] max-lg:min-w-[140px]">
                  <h6 className="text-base text-[#007bff] font-bold">
                    FRONTEND
                  </h6>
                  <ul className="mt-3 pt-3 border-t border-1 space-y-3 mr-3">
                    <Link href="/hire-angularjs-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire AngularJS Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-reactjs-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire ReactJS Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-javascript-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire JavaScript Developers
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="lg:min-w-[240px] max-lg:min-w-[140px]">
                  <h6 className="text-base text-[#007bff] font-bold">MOBILE</h6>
                  <ul className="mt-3 pt-3 border-t border-1 space-y-3 mr-2">
                    <Link href="/hire-android-app-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Android Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-flutter-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Flutter Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-ionic-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Ionic Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-ios-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire iOS Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-react-native-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire React Native Developers
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="lg:min-w-[235px] max-lg:min-w-[140px]">
                  <h6 className="text-base text-[#007bff] font-bold">OTHERS</h6>
                  <ul className="mt-3 pt-3 border-t border-1 space-y-3 mr-1">
                    <Link href="/hire-back-end-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Backend Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-blockchain-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Blockchain Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-devops-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire DevOps Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-front-end-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Frontend Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-full-stack-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire Full-Stack Developers
                        </p>
                      </li>
                    </Link>
                    <Link href="/hire-mernstack-developers">
                      <li className="max-lg:border-b px-2 -ml-2 rounded-lg  py-2  transition-transform transform hover:scale-105 hover:shadow-lg">
                        <p className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                          Hire MERN Stack Developers
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="hover:text-[#007bff] text-gray-700 font-semibold ">
            Blog
          </Link>
          <div href="  " className="group max-lg:border-b max-lg:py-3 relative">
            <p
              href="javascript:void(0)"
              className="hover:text-[#007bff] hover:cursor-pointer  text-[15px]  lg:hover:fill-[#007bff] text-gray-700 font-semibold  block"
            >
              Company
            </p>
            <ul className="absolute shadow-lg lg:top-[30px] bg-white space-y-3 max-lg:top-8 -left-28 min-w-[200px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 rounded-xl">
              <Link href="/about-us">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    About Us
                  </p>
                </li>
              </Link>
              <Link href="/contact-us">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Contact Us
                  </p>
                </li>
              </Link>
              <Link href="/careers/web">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Careers
                  </p>
                </li>
              </Link>
              <Link href="/portfolio">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Portfolio
                  </p>
                </li>
              </Link>
             {/*  <Link href="/case-studies">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Case Studies
                  </p>
                </li>
              </Link> */}
              <Link href="/privacy-policy">
                <li className="border-b py-2 px-2 -ml-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <p className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                    Privacy & Policy
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}

        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50 overflow-y-scroll`}
        >
          <div className="flex justify-between items-center p-4 text-white ">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-28" />
            </Link>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="p-4">
            <li className="border-b" onClick={toggleMenu}>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="border-b">
              <button
                onClick={() => toggleDropdown(0)}
                className="flex justify-between items-center w-full py-2 focus:outline-none"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform ${
                    dropdownOpen === 0 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen === 0 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li onClick={toggleMenu}>
                    <Link href="/software-development" className="block py-1">
                      Software Development
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/mobile-app-development" className="block py-1">
                      Mobile Application Development
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/website-development-company" className="block py-1">
                      Website Development
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/digital-marketing-company" className="block py-1">
                      SEO & Digital Marketing
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/it-staffing" className="block py-1">
                      IT Staffing
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Hire Our Resources Dropdown */}
            <li className="border-b">
              <button
                onClick={() => toggleDropdown(1)}
                className="flex justify-between items-center w-full py-2 focus:outline-none"
              >
                Hire Our Resources
                <svg
                  className={`w-5 h-5 transition-transform ${
                    dropdownOpen === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen === 1 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li onClick={toggleMenu}>
                    <Link href="/hire-dot-net-developers" className="block py-1">
                      Hire .NET Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-java-developers" className="block py-1">
                      Hire Java Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-laravel-developers" className="block py-1">
                      Hire Laravel Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-node-js-developers" className="block py-1">
                      Hire Node.js Devlopers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-php-developers" className="block py-1">
                      Hire PHP Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-python-developers" className="block py-1">
                      Hire Python Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-angularjs-developers" className="block py-1">
                      Hire AngularJS Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-reactjs-developers" className="block py-1">
                      Hire ReactJS Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-javascript-developers" className="block py-1">
                      Hire JavaScript Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-android-app-developers" className="block py-1">
                      Hire Android Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-flutter-developers" className="block py-1">
                      Hire Flutter Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-ionic-developers" className="block py-1">
                      Hire Ionic Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-ios-developers" className="block py-1">
                      Hire IOS Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-react-native-developers" className="block py-1">
                      Hire React Native Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-back-end-developers" className="block py-1">
                      Hire Backend Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-blockchain-developers" className="block py-1">
                      Hire Blockchain Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-devops-developers" className="block py-1">
                      Hire DevOps Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-front-end-developers" className="block py-1">
                      Hire Frontend Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-full-stack-developers" className="block py-1">
                      Hire Full-Stack Developers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/hire-mernstack-developers" className="block py-1">
                      Hire MERN Stack Developers
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b" onClick={toggleMenu}>
              <Link href="/blog" className="block py-2">
                Blog
              </Link>
            </li>
            <li className="border-b">
              <button
                onClick={() => toggleDropdown(3)}
                className="flex justify-between items-center w-full py-2 focus:outline-none"
              >
                Company
                <svg
                  className={`w-5 h-5 transition-transform ${
                    dropdownOpen === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen === 3 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li onClick={toggleMenu}>
                    <Link href="/about-us" className="block py-1">
                      About Us
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/contact-us" className="block py-1">
                      Contact Us
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/careers/web" className="block py-1">
                      Careers
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link href="/portfolio" className="block py-1">
                      Portfolio
                    </Link>
                  </li>
                 {/*  <li onClick={toggleMenu}>
                    <Link href="/case-studies" className="block py-1">
                      Case Studies
                    </Link>
                  </li> */}
                  <li onClick={toggleMenu}>
                    <Link href="/privacy-policy" className="block py-1">
                      Privacy & Policy
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>

      <style jsx>{`
        /* Custom scrollbar styles */
        div::-webkit-scrollbar {
          width: 6px; /* Thinner scrollbar */
        }

        div::-webkit-scrollbar-thumb {
          background-color: #1e90ff; /* Blue color for the scrollbar */
          border-radius: 10px; /* Rounded edges */
        }

        div::-webkit-scrollbar-track {
          background: #f1f1f1; /* Optional background for the track */
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}

export default Navbar;
