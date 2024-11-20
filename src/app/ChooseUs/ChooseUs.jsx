import React from "react";
import Link from "next/link";
import background from '../images/choose-us/background.webp';
import Image from "next/image";
function ChooseUs() {
  return (
    <div
      className="container mx-auto p-2 md:p-8 bg-white mt-5 md:my-14 grid md:grid-cols-2"
    >
      {/* Title Section */}
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-8 col-span-2">
        CHOOSE US
      </h1>
      <div className="px-5">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Transforming Ideas into Cutting-Edge Software
        </h3>
        <p className=" max-md:px-2 mb-6 text-black w-full">
          We specialize in elevating your brand&apos;s voice. Through ROI-focused
          strategies, we craft compelling narratives, ensuring distinctiveness and resonance in the market.
        </p>
        <div className=" flex-wrap justify-between items-start">
          {/* Cards Section */}
          <div className="w-full my-8 order-2 lg:order-1" >
            {/* Card 1 */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-4 transform hover:scale-105 transition-all duration-300" data-aos='fade-right' data-aos-delay="100">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  01
                </div>
                <h4 className="text-lg font-semibold">Digital Marketing</h4>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-4 transform hover:scale-105 transition-all duration-300" data-aos='fade-right' data-aos-delay="200">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  02
                </div>
                <h4 className="text-lg font-semibold">Brand Strategy</h4>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-4 transform hover:scale-105 transition-all duration-300" data-aos='fade-right' data-aos-delay="300">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  03
                </div>
                <h4 className="text-lg font-semibold">Web Design</h4>
              </div>
            </div>
          </div>
  
          {/* Text Section */}
          <div className="w-full order-1 lg:order-2 my-4 text-center">
            <Link
              href="/contact-us"
              className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* <div
    className="w-full h-full hidden md:block"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: '100%',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
    }}
  ></div> */}
  <Image 
 quality={100} src={background} className="w-full h-full hidden md:block bg-[length:100%] bg-right bg-no-repeat" alt="Digital Marketing"/>
    </div>
  );
}

export default ChooseUs;
