"use client";
import React, { useEffect } from "react";
import Image4 from "../images/features/bg7.webp";
import seo from "../images/our_services/seo&digital/seo1.webp";
import ad from "../images/our_services/seo&digital/ad.webp";
import social from "../images/our_services/seo&digital/social.webp";
import content from "../images/our_services/seo&digital/content.webp";
import brand from "../images/our_services/seo&digital/brand.webp";
import mail from "../images/our_services/seo&digital/mail.webp";
import digital from "../images/our_services/seo&digital/digital.webp";
import developmentsoftwareImg from "../images/our_services/software_dev/development-software.webp";
import "../mobile-app-development/services.css";
import diss from "../images/our_services/seo&digital/diss.webp";
import Link from "next/link";
import SocialMedias from "../(Services)/SocialMedias";
import ScrollToTop from "../lib/ScrollToTop";
import Head from "next/head";
import seo_bg from "../images/our_services/seo&digital/seo_bg.webp";
import Image from "next/image";
import {
  FaTools,
  FaUsers,
  FaThumbsUp,
  FaCloud,
  FaDollarSign,
} from "react-icons/fa";

function Seo() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className=" mt-[20px] bg-gray-50">
        {/*         <div
          className="h-60 w-screen flex  items-center justify-center flex-col gap-4 max-sm:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${seo_bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">
            Result-Driven SEO & Digital Marketing Services
          </h2>
          <Link href="/contact-us">
            <button className=" text-black max-sm:text-sm bg-white border border-white py-1 md:py-2 px-2 md:px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white ">
              Join with us
            </button>
          </Link>
        </div> */}

        <h2 className="text-[1.4rem] text-center text-gray-800 md:text-3xl lg:text-5xl mt-16 font-semibold">
          Result-Driven SEO & Digital Marketing Services
        </h2>
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
                  any business. </p> 
                  <p className="text-base text-justify text-gray-700 mb-4">
                    Here at Ultrafly Solutions, we help
                  organizations navigate through the digital arena and leverage
                  technology for sustainable growth.</p>
                  
                  <p className="text-base text-justify text-gray-700 mb-4">
                     Our mission is to propel
                  your business ahead with leading-edge digital solutions,
                  innovative strategies, and data-driven results.</p> 
                  <p className="text-base text-justify text-gray-700 mb-4">We have an
                  experienced team of specialists across various domains,
                  striving to provide a full suite of services for digital
                  marketing and software development tailored to enhance
                  visibility, increase conversion rates, and transform your
                  business into a powerful digital force.
                </p>
             
              </div>
            </div>
          </div>

          {/* Right Column (100% on small screens, 70% on medium and above) */}
          <div className="w-full  lg:w-2/3 lg:overflow-y-auto hide-scrollbar">
            <div className="grid gap-6 p-4">
              {/* Repeat this block for each service card */}
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={Image4}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      1. Search Engine Optimization (SEO)
                    </h2>
                    <p className="text-gray-700 mt-2">
                      A good SEO strategy is the first true secret to digital
                      victory. We offer a wide range of services in SEO that
                      make sure your website stays visible on search engines,
                      attracts organic visitors, and converts visitors into your
                      customers.
                    </p>
                    <strong>Organic Growth</strong>
                    <p>
                      Our services embrace organic growth through proven
                      techniques of SEO that make your website rank higher on
                      the SERPs, thus driving more organic traffic and pushing
                      your digital presence up.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        Organic Growth through proven techniques.
                      </li>
                      <li className="mb-1">
                        <strong>Keyword Research</strong>: In-depth analysis of
                        valuable keywords.
                      </li>
                      <li className="mb-1">
                        <strong>On-Page Optimization</strong>: Optimize content,
                        tags, and links for better search engine rankings.
                      </li>
                      <li className="mb-1">
                        <strong>Off-Page Optimization</strong>: In-depth
                        analysis of valuable keywords.
                      </li>
                      <li className="mb-1">
                        <strong>Local SEO</strong>: Enhance visibility in local
                        searches to attract nearby customers.
                      </li>
                      {/* Add other list items here */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={ad}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      2.PPC Advertising
                    </h2>
                    <p className="text-gray-700 mt-2">
                      We developed customized PPC advertising services for
                      businesses that need results today-deploying targeted
                      campaigns to deliver quality leads while maximizing return
                      on investment.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Our PPC Services</strong>
                      </li>
                      <li className="mb-1">
                        <strong>Targeted Campaigns</strong>: From Google Ads to
                        social media, we were building and managing the most
                        focused PPC campaigns engaging your business with the
                        right audience at the right moment.
                      </li>
                      <li className="mb-1">
                        <strong>Ad Copy Optimization</strong>: We create
                        compelling copy for ads that stir action and clicks and
                        turn those into conversions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={social}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      3. Social Media Marketing
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Social media is revolutionizing brand engagement. Our
                      strategies will establish your brand voice, foster
                      community interaction, and turn followers into loyal
                      advocates.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Brand Awareness</strong>: We create engaging
                        content that reflects your brand&apos;s values, building
                        loyalty and an active community.
                      </li>
                      <li className="mb-1">
                        <strong>Community Building</strong>: We foster two-way
                        communication to develop strong relationships and a
                        vibrant online community.
                      </li>
                      <li className="mb-1">
                        <strong>Lead Generation</strong>: Our strategies
                        transform your social presence into a lead-generating
                        powerhouse for sales and conversions.
                      </li>
                      <li className="mb-1">
                        <strong>Crisis Management</strong>: We guide you through
                        social media challenges, helping to maintain your
                        brand&apos;s reputation during tough times.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={content}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      4. Content Marketing
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Content is still king, and at Ultrafly Solutions, we
                      produce high-quality, engaging content that not only
                      enlightens but inspires action.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Our Content Marketing Services</strong>
                      </li>
                      <li className="mb-1">
                        <strong>Quality</strong>: We create content that
                        resonates with your target audience, establishing your
                        company as a thought leader and driving engagement.
                      </li>
                      <li className="mb-1">
                        <strong>Content Strategy</strong>: We develop a
                        strategic content plan that aligns with your business
                        objectives, ensuring all content produced is purposeful
                        and impactful.
                      </li>
                      <li className="mb-1">
                        <strong>Content Distribution</strong>: We amplify your
                        message by publishing your content across various
                        channels—social media, email campaigns, blogs, and
                        more—to maximize reach and impact.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={mail}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      5. Email Marketing
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Email marketing remains one of the most effective
                      channels, enabling personalized outreach that transforms
                      subscribers into loyal customers.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Our Email Marketing Services</strong>
                      </li>
                      <li className="mb-1">
                        <strong>Targeted Campaigns</strong>: We segment your
                        email list to deliver tailored messages that resonate
                        with specific audience segments, enhancing open rates
                        and engagement.
                      </li>
                      <li className="mb-1">
                        <strong>Automation</strong>: We simplify campaign
                        management through automation, saving you time and
                        providing a seamless user experience.
                      </li>
                      <li className="mb-1">
                        <strong>A/B Testing</strong>: We rigorously test various
                        elements of your emails—such as subject lines,
                        calls-to-action, layouts, and content—to ensure maximum
                        engagement and effectiveness.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={brand}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      6. Branding & Identity
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Your brand is more than just a logo; it’s the perception
                      your audience holds. We craft compelling brand identities
                      that leave a lasting impression.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Our Branding Services</strong>
                      </li>
                      <li className="mb-1">
                        <strong>Brand Strategy</strong>: Collaborate with us to
                        develop a strategy rooted in your brand’s mission,
                        values, and market positioning.
                      </li>
                      <li className="mb-1">
                        <strong>Logo & Identity Design</strong>: We design
                        everything from logos to color palettes and typography,
                        ensuring all elements communicate a cohesive and
                        memorable brand voice.
                      </li>
                      <li className="mb-1">
                        <strong>Brand Guidelines</strong>: Consistency is key.
                        We provide comprehensive brand guidelines to maintain
                        uniformity across all your marketing efforts.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-lg shadow-lg p-4 flex flex-col md:flex-row transition-transform transform scale-95 lg:hover:scale-[97%]">
                <div className="md:w-1/3">
                  <Image 
 quality={100}
                    src={digital}
                    alt="SEO"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between p-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">
                      7.Digital Analytics & Performance Tracking
                    </h2>
                    <p className="text-gray-700 mt-2">
                      The effectiveness of your marketing strategy depends on
                      understanding the results of your efforts. Our analytics
                      services equip you with the insights needed for informed
                      decision-making.
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      <li className="mb-1">
                        <strong>Our Analytics Services</strong>
                      </li>
                      <li className="mb-1">
                        <strong>Data-Driven Insights</strong>: Utilizing
                        cutting-edge tools, we track and analyze campaign
                        performance to provide actionable insights.
                      </li>
                      <li className="mb-1">
                        <strong>Clear, Comprehensive Reporting</strong>: Receive
                        detailed reports that break down traffic, lead
                        generation, and ROI metrics for easy understanding.
                      </li>
                      <li className="mb-1">
                        <strong>Continuous Optimization</strong>: We leverage
                        data to continually refine strategies, ensuring ongoing
                        improvement and optimal results for your business.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Add additional service cards similarly */}
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
              <a href="/contact-us">
                <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:text-white">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* footer end */}
      </div>
    </>
  );
}

export default Seo;
