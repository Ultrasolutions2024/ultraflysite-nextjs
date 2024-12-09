// ./src/app/nav-list/NavList.jsx

import Link from "next/link"; // Importing Next.js Link component

function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-[16px] font-medium xl:none">
        <li className="hover:text-blue-600">
          <Link href="/">Home</Link>
        </li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Services
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow"
          >
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link href="/software-development">Software Development</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link href="/mobile-app-development">Mobile Application Development</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link href="/website-development-company">Website Development</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link href="/digital-marketing-company">Seo & Digital Marketing</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link href="/it-staffing">IT Staffing</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Hire Our Resources
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[800px] p-2 shadow grid grid-cols-3"
          >
            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>BACKEND</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-dot-net-developers">Hire .NET Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-java-developers">Hire Java Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-laravel-developers">Hire Laravel Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-node-js-developers">Hire Node.js Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-php-developers">Hire PHP Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-python-developers">Hire Python Developers</Link>
              </li>
            </div>

            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>MOBILE</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-android-app-developers">Hire Android App Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-flutter-developers">Hire Flutter Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-ionic-developers">Hire Ionic Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-ios-developers">Hire iOS Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-react-native-developers">Hire React Native Developers</Link>
              </li>
            </div>

            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>OTHERS</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-back-end-developers">Hire Backend Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-blockchain-developers">Hire Blockchain Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-devops-developers">Hire DevOps Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-front-end-developers">Hire Frontend Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-full-stack-developers">Hire Full Stack Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-mernstack-developers">Hire MERN Stack Developers</Link>
              </li>
            </div>

            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>FRONTEND</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-angularjs-developers">Hire AngularJS Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-reactjs-developers">Hire React Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/hire-javascript-developers">Hire Javascript Developers</Link>
              </li>
            </div>
          </ul>
        </div>

        <li className="hover:text-blue-600">
          <Link href="/blog">Blog</Link>
        </li>

        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Company
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="hover:text-blue-600">
              <Link href="/about-us">About us</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/careers/web">Career</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/privacy-policy">Privacy & Policy</Link>
            </li>
          </ul>
        </div>
        <li className="hover:text-blue-600">
              <Link href="/">Privacy & Policy</Link>
            </li>
      </ul>
    </>
  );
}

export default NavList;
