import React from "react";
import Link from "next/link";
function Digital() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/careers/web"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3a37e9] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Web Development
        </Link>

        <Link
          href="/careers/app"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3639e6] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          App Development
        </Link>

        <Link
          href="/careers/seo"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3a3ce4] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          SEO Optimization
        </Link>

        <Link
          href="/careers/digital"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#2e3ed1] ease-in duration-200 hover:shadow-2xl text-white "
        >
          Digital Marketing
        </Link>

        <Link
          href="/careers/hr"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#473be4] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Human Resorces
        </Link>

        <Link
          href="/careers/business"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4539e6] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Business Development
        </Link>

        <Link
          href="/careers/more"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4a47e0] ease-in duration-200 hover:shadow-2xl hover:text-white "
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
                Head Of Sales
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">Marketing</p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">2 years</p>
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
                Digital Marketing
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">Marketing</p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">5 Years</p>
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

export default Digital;
