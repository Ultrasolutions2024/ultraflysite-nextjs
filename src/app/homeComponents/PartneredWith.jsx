"use client";
import images from "../images/partner.png";
import star from "../images/star.png";
import Image from "next/image";

const PartneredWith = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-6 mt-10">
        PARTNERED WITH
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-40 mb-10 p-5 sm:p-0">
        {/* Partner Logo */}
        <div>
          <Image src={images} alt="Partner logo" className="w-80 sm:ml-10" />
        </div>

        {/* Partner Description */}
        <div className="text-justify space-y-6">
          <h1 className="text-xl sm:font-extrabold font-bold">
            UTIP Technologies is a leading provider of software solutions for
            the Forex and OTC markets, offering a full set of services:
          </h1>

          {/* Reusable List Items */}
          {[
            "Trading platform with terminals for traders and brokers, ensuring a reliable quotes flow;",
            "CRM designed for brokers and their specific needs;",
            "Trader’s Room as a part of the platform, available via PC and mobile;",
            "MarketCheese-analytical service with an economic calendar, news feed, and plenty of widgets & market research;",
            "Wide partner network: payment solutions, affiliation, company incorporation, and liquidity;",
            "Regular free digests on the partner’s services;",
            "Profitable partnership programs for referrals, resellers, and tech partners.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image src={star} alt="Star icon" className="w-5 mt-1" />
              <p className="text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartneredWith;
