import React from "react";
import Link from "next/link";
function More() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/careers/web"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#373ae2] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Web Development
        </Link>

        <Link
          href="/careers/app"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3443cc] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          App Development
        </Link>

        <Link
          href="/careers/seo"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3245f1] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          SEO Optimization
        </Link>

        <Link
          href="/careers/digital"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#483cf1] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Digital Marketing
        </Link>

        <Link
          href="/careers/hr"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3437cc] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Human Resource
        </Link>

        <Link
          href="/careers/business"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3538e4] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Business Development
        </Link>

        <Link
          href="/careers/more"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#3f42e2] ease-in duration-200 hover:shadow-2xl text-white "
        >
          More
        </Link>
      </div>

      {/* ---- */}
      <h1 className="text-black text-center text-2xl md:text-3xl font-bold pt-12 md:pt-24">
        Current Openings
      </h1>
      {/* boxes */}
      <div className="mt-[2rem] md:mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start ">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Job</p>
              <p className="text-[18px] text-black font-bold mt-3">
                General Manager
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Management
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">12 years</p>
            </li>
            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWCY_wzq4OhZKrhJPRoAgvfDdpnFEyuSJr2a82PRfoQ0fmzw/viewform"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#4f03ff] ease-in duration-200 "
              >
                Apply Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start ">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Job</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Impliment Head
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Team Management
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">8 Years</p>
            </li>
            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWCY_wzq4OhZKrhJPRoAgvfDdpnFEyuSJr2a82PRfoQ0fmzw/viewform"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#483de4] ease-in duration-200  "
                target="_blank"
              >
                Apply Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start ">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Job</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Accountant
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">Tally Pro</p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">1 Year</p>
            </li>

            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWCY_wzq4OhZKrhJPRoAgvfDdpnFEyuSJr2a82PRfoQ0fmzw/viewform"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#483de4] ease-in duration-200  "
                target="_blank"
              >
                Apply Now
              </Link>
            </li>
          </ul>
          {/* row */}
        </div>
      </div>
    </>
  );
}

export default More;
