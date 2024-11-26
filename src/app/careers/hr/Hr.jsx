import React from "react";
import Link from "next/link";

function Hr() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/careers/web"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4447e2] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Web Development
        </Link>

        <Link
          href="/careers/app"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3a3de0] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          App Development
        </Link>

        <Link
          href="/careers/seo"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4441f3] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          SEO Optimization
        </Link>

        <Link
          href="/careers/digital"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3647d8] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Digital Marketing
        </Link>

        <Link
          href="/careers/hr"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#3e32e0] ease-in duration-200 hover:shadow-2xl text-white "
        >
          Human Resorces
        </Link>

        <Link
          href="/careers/business"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3b46e7] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Business Development
        </Link>

        <Link
          href="/careers/more"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4d41f1] ease-in duration-200 hover:shadow-2xl hover:text-white "
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
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start  ">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Job</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Human Resource
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Resource Acquiring
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Experience
              </p>
              <p className="text-[18px] text-black font-bold mt-3">2 Years</p>
            </li>

            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <a
                href="https://www.linkedin.com/jobs/search/?currentJobId=3893602992&f_C=71255931&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3893600947%2C3893601636%2C3893602992%2C3893609194%2C3893607379%2C3893607108%2C3893607301%2C3893612000%2C3893611037"
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#483de4] ease-in duration-200  "
                target="_blank"
              >
                Apply Now
              </a>
            </li>
          </ul>
          {/* row */}
        </div>
      </div>
    </>
  );
}

export default Hr;
