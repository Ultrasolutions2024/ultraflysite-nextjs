import React, { useState } from "react";
import Link from "next/link";

function MobileNav({ handleClose }) {
  return (
    <>
      <div className="h-full overflow-y-auto hide-scrollbar">
        <ul className="menu">
          <li className=" hover:text-blue-600" onClick={handleClose}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details open>
              <summary>Services</summary>
              <ul>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/software-development">Software Development</Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/mobile-app-development">
                    Mobile Application Development
                  </Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/website-development-company">
                    Website Development
                  </Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/digital-marketing-company">
                    Seo & Digital Marketing
                  </Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/it-staffing">IT Staffing</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>Hire Our Resources</summary>
              <ul>
                <li>
                  <details open>
                    <summary>Backend</summary>
                    <ul>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-dot-net-developers"}>
                          Hire .NET Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-java-developers"}>
                          Hire Java Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-laravel-developers"}>
                          Hire Laravel Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-node-js-developers"}>
                          Hire Node.js Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-php-developers"}>
                          Hire PHP Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-python-developers"}>
                          Hire Python Developers
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <ul>
                <li>
                  <details open>
                    <summary>Frontend</summary>
                    <ul>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-angularjs-developers"}>
                          Hire AngularJS Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-reactjs-developers"}>
                          Hire ReactJS Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-javascript-developers"}>
                          Hire Javascript Developers
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <ul>
                <li>
                  <details open>
                    <summary>Mobile</summary>
                    <ul>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-android-app-developers"}>
                          Hire Android App Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-flutter-developers"}>
                          Hire Flutter Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-ionic-developers"}>
                          Hire Ionic Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-ios-developers"}>
                          Hire iOS Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-react-native-developers"}>
                          Hire React Native Developers
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <ul>
                <li>
                  <details open>
                    <summary>Others</summary>
                    <ul>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-back-end-developers"}>
                          Hire Backend Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-blockchain-developers"}>
                          Hire Blockchain Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-devops-developers"}>
                          Hire DevOps Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-front-end-developers"}>
                          Hire Frontend Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-full-stack-developers"}>
                          Hire Full Stack Developers
                        </Link>
                      </li>
                      <li
                        onClick={handleClose}
                        className=" hover:text-blue-600"
                      >
                        <Link href={"/hire-mernstack-developers"}>
                          Hire MERN Stack Developers
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          {/* <li>
            <details open>
              <summary>Resources</summary>
              <ul>
              <li
              onClick={handleClose}
              className=" hover:text-blue-600">
              <Link>Case Studies</Link>
              </li>
              </ul>
              </details>
              </li> */}
          <li onClick={handleClose} className=" hover:text-blue-600">
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <details open>
              <summary>Company</summary>
              <ul>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/about-us">About us</Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/contact-us">Contact us</Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/careers/web">Career</Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li onClick={handleClose} className=" hover:text-blue-600">
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
