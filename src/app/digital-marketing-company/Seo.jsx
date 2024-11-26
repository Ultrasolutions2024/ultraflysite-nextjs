"use client";
import React, { useEffect } from "react";
import Image4 from "../images/features/bg7.webp";
import ad from "../images/our_services/seo&digital/ad.webp";
import social from "../images/our_services/seo&digital/social.webp";
import content from "../images/our_services/seo&digital/content.webp";
import brand from "../images/our_services/seo&digital/brand.webp";
import mail from "../images/our_services/seo&digital/mail.webp";
import digital from "../images/our_services/seo&digital/digital.webp";
import "../mobile-app-development/services.css";
import Image from "next/image";
import {
  FaTools,
  FaUsers,
  FaThumbsUp,
  FaCloud,
  FaDollarSign,
} from "react-icons/fa";
import Link from "next/link";

function Seo() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: `A good SEO strategy is the first true secret to digital victory. We offer a wide range of services in SEO that make sure your website stays visible on search engines, attracts organic visitors, and converts visitors into your customers.`,
      highlights: [
        "Organic Growth through proven techniques.",
        "Keyword Research: In-depth analysis of valuable keywords.",
        "On-Page Optimization: Optimize content, tags, and links for better search engine rankings.",
        "Off-Page Optimization: Build high-quality backlinks and citations.",
        "Local SEO: Enhance visibility in local searches to attract nearby customers.",
      ],
      image: Image4,
    },
    {
      id: 2,
      title: "PPC Advertising",
      description: `We develop customized PPC advertising services for businesses that need results today—deploying targeted campaigns to deliver quality leads while maximizing return on investment.`,
      highlights: [
        "Targeted Campaigns: Build and manage focused PPC campaigns engaging your business with the right audience.",
        "Ad Copy Optimization: Create compelling copy for ads that drive clicks and conversions.",
      ],
      image: ad,
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: `Social media is revolutionizing brand engagement. Our strategies establish your brand voice, foster community interaction, and turn followers into loyal advocates.`,
      highlights: [
        "Brand Awareness: Create engaging content reflecting brand values.",
        "Community Building: Foster two-way communication to build relationships.",
        "Lead Generation: Transform your social presence into a lead-generating powerhouse.",
        "Crisis Management: Help maintain your brand's reputation during tough times.",
      ],
      image: social,
    },
    {
      id: 4,
      title: "Content Marketing",
      description: `Content is still king, and at Ultrafly Solutions, we produce high-quality, engaging content that not only enlightens but inspires action.`,
      highlights: [
        "Quality: Create content that resonates with your target audience.",
        "Content Strategy: Develop a strategic content plan aligning with business objectives.",
        "Content Distribution: Publish across various channels to maximize reach.",
      ],
      image: content,
    },
    {
      id: 5,
      title: "Email Marketing",
      description: `Email marketing remains one of the most effective channels, enabling personalized outreach that transforms subscribers into loyal customers.`,
      highlights: [
        "Targeted Campaigns: Segment email lists to deliver tailored messages.",
        "Automation: Simplify campaign management through automation.",
        "A/B Testing: Test email elements for maximum engagement.",
      ],
      image: mail,
    },
    {
      id: 6,
      title: "Branding & Identity",
      description: `Your brand is more than just a logo; it’s the perception your audience holds. We craft compelling brand identities that leave a lasting impression.`,
      highlights: [
        "Brand Strategy: Develop a strategy rooted in your brand's mission and values.",
        "Logo & Identity Design: Design cohesive and memorable brand elements.",
        "Brand Guidelines: Maintain consistency across all marketing efforts.",
      ],
      image: brand,
    },
    {
      id: 7,
      title: "Digital Analytics & Performance Tracking",
      description: `The effectiveness of your marketing strategy depends on understanding the results of your efforts. Our analytics services equip you with the insights needed for informed decision-making.`,
      highlights: [
        "Data-Driven Insights: Track and analyze campaign performance.",
        "Clear, Comprehensive Reporting: Receive detailed traffic and ROI metrics.",
        "Continuous Optimization: Refine strategies for ongoing improvement.",
      ],
      image: digital,
    },
  ];
  return (
    <>
      <div className=" mt-[20px] bg-gray-50">
        <h1 className="text-[1.4rem] text-center text-gray-800 md:text-3xl lg:text-5xl mt-16 font-semibold">
          Result-Driven SEO & Digital Marketing Services
        </h1>
        <div className="flex flex-col lg:flex-row bg-gray-50 lg:h-screen p-4">
          {/* Left Column (100% on small screens, 30% on medium and above) */}
          <div className="w-full lg:w-1/3 lg:sticky mdtop-0 mb-4 mt-14 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 transition-transform transform hover:scale-105">
              <div className="flex flex-col">
                <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
                  SEO & Digital Marketing
                </h2>
                <p className="text-base text-justify text-gray-700 mb-4">
                  An effective online presence is not just the new competitive
                  advantage; it is also the only prerequisite for survival for
                  any business.{" "}
                </p>
                <p className="text-base text-justify text-gray-700 mb-4">
                  Here at Ultrafly Solutions, we help organizations navigate
                  through the digital arena and leverage technology for
                  sustainable growth.
                </p>

                <p className="text-base text-justify text-gray-700 mb-4">
                  Our mission is to propel your business ahead with leading-edge
                  digital solutions, innovative strategies, and data-driven
                  results.
                </p>
                <p className="text-base text-justify text-gray-700 mb-4">
                  We have an experienced team of specialists across various
                  domains, striving to provide a full suite of services for
                  digital marketing and software development tailored to enhance
                  visibility, increase conversion rates, and transform your
                  business into a powerful digital force.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (100% on small screens, 70% on medium and above) */}
          <div className="w-full lg:w-2/3 lg:overflow-y-auto hide-scrollbar">
            <div className="grid gap-6 p-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]"
                >
                  <div className="md:w-1/3">
                    <Image
loading="lazy"
                      quality={75}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-between p-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mt-4">
                        {service.id}. {service.title}
                      </h2>
                      <p className="text-gray-700 mt-2">
                        {service.description}
                      </p>
                      <ul className="list-disc ml-5 mt-2">
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="mb-1">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-12 mt-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-center text-4xl font-extrabold text-white mb-6">
              Why Ultrafly Solutions?
            </h2>
            <p className="text-lg md:text-xl text-center text-white mb-12">
              Ultrafly Solutions is the result of the need to deliver results.
              Our team of industry veterans and handpicked experts deliver a
              unique approach to every client, focusing on the specific goals
              and industry needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaUsers className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2">
                  Experienced Professionals
                </h4>
                <p className="text-gray-600">
                  The hands-on years of experience by the experts behind
                  Ultrafly Solutions in digital marketing, software development,
                  and web designing.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaThumbsUp className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2">
                  Client-First Approach
                </h4>
                <p className="text-gray-600">
                  Tailor-made solution because we know one size won&apos;t fit
                  all. Our services are tailored to meet your specific business
                  needs.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaTools className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2">
                  Data-Driven Approaches
                </h4>
                <p className="text-gray-600">
                  Everything we do is based on data, making sure the most impact
                  is produced from your dollar spent on marketing.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 transition-all lg:translate-x-48 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaCloud className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2">
                  Transparent Communication
                </h4>
                <p className="text-gray-600">
                  We maintain transparent communication with you about each
                  happening at every step of your project.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 transition-all md:translate-x-44 lg:translate-x-48 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaDollarSign className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-lg font-bold mb-2">Proven Results</h4>
                <p className="text-gray-600">
                  The track record speaks for itself. We&apos;re driven to help
                  develop real, measurable business growth for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------6 -----grids  start------------ */}

        {/*---------------- Types Of Software-- start-------------- */}

        {/* footer start */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white my-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl text-white text-center mb-6">
              Is your business in need of a lift-off? Do you want to be a new
              startup in the market or an established business looking to
              streamline operations and enhance customer engagement? Let
              Ultrafly Solutions assist you.
            </p>
            <p className="text-lg md:text-xl text-white text-center mb-8">
              Contact us now to discuss how we can transform your mobile
              application idea into a fully functioning creation. Let’s do
              something amazing together!
            </p>
            <div className="flex justify-center">
              <Link href="/contact-us">
                <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* footer end */}
      </div>
    </>
  );
}

export default Seo;
