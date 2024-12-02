"use client";
import Link from "next/link";
import Image from "next/image";
import bg1 from "../images/blog/linkedin.webp";
import profile from "../images/blog/profile.webp";
const JeevaBlogs = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8 ml-5 p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-6">
          <Image
            loading="lazy"
            quality={75}
            src={profile}
            alt="Unlocking the Future"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h2 className="text-2xl md:text-[30px] font-bold text-justify pr-6">
            Jeeva Shanmugam
          </h2>
        </div>

        <span className="text-lg md:text-2xl font-bold text-gray-500 pl-6">
          1 Articles
        </span>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 px-10 sm:px-24 gap-8">
          <Link href="/increase-linkedin-followers">
            <div className="w-full rounded h-fit overflow-hidden shadow-2xl p-4 hover:scale-105 transition-all duration-300">
              <Image
                loading="lazy"
                quality={75}
                className="w-full"
                src={bg1}
                alt="Unlocking the Future"
              />
              <div className="py-4">
                <h2 className="font-bold text-xl">LinkedIn Assists</h2>
                <p className="text-gray-700 text-base font-bold">
                  How to Increase Your LinkedIn Followers and Make a Living in
                  2025?
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  By
                  <Link
                    href="/jeeva-shanmugam"
                    className="text-blue-600 hover:underline"
                  >
                    Jeeva Shanmugam
                  </Link>
                  this content
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JeevaBlogs;
