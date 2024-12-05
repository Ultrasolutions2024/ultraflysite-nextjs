"use client";

import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import bg1 from "../images/blog/aidriven.jpeg";
import bg10 from "../images/blog/aidriven2.jpeg";
import jeeva from "../images/blog/jeeva-shanmugam.jpeg";
import Image from "next/image";
import Link from "next/link";
import Latest from "../increase-linkedin-followers/Latest";
import Popular from "../increase-linkedin-followers/Papular";
function AidrivenDigital() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [activeTab, setActiveTab] = useState("Popular");
  return (
    <>
      <section className="flex w-full h-[100%] mt-0 font-domine">
        {/* Left Sidebar */}
        <div className="w-[300px] bg-gray-100  px-4 hidden lg:block ml-[-40px]">
          {/* Add your static left sidebar content here */}
          <div className="sticky top-0">
            <div className="bg-white  rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
              <div className="relative h-32 bg-gradient-to-r from-[#3067ab] to-blue-700">
                <Image
                  quality={80}
                  loading="lazy"
                  src={jeeva}
                  alt="jeeva shanmugam"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="pt-16 pb-6 px-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  Jeeva Shanmugam
                </h1>
                <p className="text-indigo-600 font-semibold mb-4">
                  Content Writer
                </p>
                <p className="text-gray-600  mb-4 text-justify">
                  A boy with a ton of pending bucket lists that has to be ticked
                  | Blogger | otherwise commonly known for his absurd stories!
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <Link
                    href="https://www.instagram.com/emvric/"
                    className="text-gray-600 hover:text-indigo-800  dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <FaInstagram className="text-4xl font-bold mt-[2px] text-rose-500" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-indigo-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Scrolling Section */}
        <div className="flex-1 overflow-y-scroll rounded-xl w-full ">
          <div className="h-[100vh] relative w-full flex bg-center bg-no-repeat bg-cover">
            {/* component */}
            <div className="max-w-screen-xl w-full  mx-auto">
              {/* header ends here */}
              <main className="bg-white">
                <div
                  className="mb-4 md:mb-0 w-full mx-auto relative"
                  style={{ height: "24em" }}
                >
                  {/* <div className="absolute left-0 bottom-0 w-full h-full z-10" /> */}
                  <Image
                    quality={75}
                    loading="lazy"
                    src={bg1}
                    alt="linkedin"
                    className="absolute left-0 top-0 w-full h-full z-0 object-cover mt-[-30px]"
                  />
                  <div className="flex items-center justify-end gap-[40px] mt-[26px] mr-[12px]">
                    {/* Facebook Share Button */}
                    <div className="flex items-center mt-[36px]">
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          "https://www.ultraflysolutions.com/increase-linkedin-followers"
                        )}&quote=${encodeURIComponent(
                          "Top 05 Mobile App Development Frameworks in 2024"
                        )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="group flex items-center justify-center p-2 rounded-md drop-shadow-xl bg-[#316FF6] text-white font-semibold hover:translate-y-2 transition-all duration-250">
                          <svg
                            className="w-5"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1.1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                          </svg>
                          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-md group-hover:-translate-y-10 duration-500">
                            Facebook
                          </span>
                        </button>
                      </Link>
                    </div>

                    {/* LinkedIn Share Button */}
                    <div className="flex items-center mt-[36px]">
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          "https://www.ultraflysolutions.com/increase-linkedin-followers"
                        )}&title=${encodeURIComponent(
                          "Top 05 Mobile App Development Frameworks in 2024"
                        )}&summary=${encodeURIComponent(
                          "Top 05 Mobile App Development Frameworks in 2024"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="group flex items-center justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1.1em"
                            viewBox="0 0 512 512"
                            strokeWidth="0"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                          </svg>
                          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                            LinkedIn
                          </span>
                        </button>
                      </Link>
                    </div>

                    {/* Custom Share Button */}
                    <div className="flex items-center mt-[36px]">
                      <Link
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          "Top 05 Mobile App Development Frameworks in 2024"
                        )}&url=${encodeURIComponent(
                          "https://www.ultraflysolutions.com/increase-linkedin-followers"
                        )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="border group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1.1em"
                            viewBox="0 0 24 24"
                            strokeWidth="0"
                            fill="currentColor"
                            stroke="currentColor"
                          >
                            <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                          </svg>
                          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white hoveer:text-3xl group-hover:text-sm group-hover:-translate-y-10 duration-700">
                            X
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 absolute bottom-0 left-0 z-20  mb-[30px] ">
                    <span className="bg-green-500 text-white text-[12px] md:text-md me-2 px-2.5 py-0.5 rounded  border border-green-300 inline-flex items-center justify-center mb-2 font-bold">
                      Blog : 1
                    </span>

                    <h2 className=" text-lg md:text-4xl font-semibold text-white leading-tight backdrop-blur-3xl p-2 rounded-2xl">
                      How to Build A Successful Career in Digital Marketing in
                      2025 Despite AI Trends?
                    </h2>
                    <div className="flex mt-3">
                      <Image
                        quality={80}
                        loading="lazy"
                        src={jeeva}
                        alt="jeeva profile"
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                      />
                      <div className="backdrop-blur-3xl rounded-xl p-2">
                        <p className="font-semibold text-gray-800 text-sm">
                          Jeeva Shanmugam
                        </p>
                        <p className="font-semibold text-gray-800 text-xs">
                          14 Aug
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Alexander Shatov on Unsplash
                </p>
                <div className="px-4 lg:px- mt-12 text-gray-700 -md mx-auto text-lg leading-relaxed ">
                  <h1 className="text-gray-900 font-extrabold mb-3">
                    HIGHLIGHTS:
                  </h1>
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li className="text-lg md:text-md font-semibold text-justify font-domine">
                      AI is transforming digital marketing, but it’s not a
                      replacement for human creativity.
                    </li>
                    <li className="text-lg md:text-md font-semibold text-justify">
                      Strategic thinking, adaptability, and emotional
                      intelligence are crucial skills.
                    </li>
                    <li className="text-lg md:text-md font-semibold text-justify">
                      Embracing AI as a tool can enhance your potential and not
                      replace it.
                    </li>
                  </ol>
                  <p className="pb-6 pt-3 text-[17px] text-justify mb-3 text-gray-500   first-letter:text-7xl first-letter:font-bold first-letter:text-purple-500  first-letter:me-3 first-letter:float-start">
                    ﻿Business-to-consumer verbal exchange has been redone inside
                    the digital age. A bakery downtown to a multinational logo,
                    it would not count-they all want to recognition on digital
                    advertising.
                  </p>
                  <p className="pb-6 pt-3 text-[17px] text-justify mb-3 text-gray-500   first-letter:text-7xl first-letter:font-bold first-letter:text-purple-500  first-letter:me-3 first-letter:float-start">
                    The demand for skilled entrepreneurs suggests no signs and
                    symptoms of slowing anytime soon. But right here's the
                    twist-the emergence of AI is approaching and automating
                    things that even we never notion machines would ever do. So,
                    how do you carve out a a hit career in digital advertising
                    in 2025 while AI is literally anywhere?
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                    Start in Digital Marketing in 2025
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Simple: by specializing in what makes you irreplaceable. AI
                    is only a device; it cannot mirror human creativity,
                    emotional intelligence, or the ability to connect with
                    humans. This manual will stroll you via the entirety you
                    need to realize to thrive in this evolving area.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2  ">
                    The Evolving Digital Marketing Landscape
                  </h4>
                  <p className="pb-6 pt-3 text-[17px] text-justify">
                    AI has absolutely added massive shifts to digital
                    advertising and marketing. From chatbots answering client
                    queries at 2 AM to algorithms making suggestions on Netflix,
                    AI is making our lives easier—and marketing smarter. But
                    here's the factor: AI can most effective move thus far.
                  </p>
                  <p className="pb-6 pt-3 text-[17px] text-justify mb-1 text-gray-500 ">
                    It excels at crunching data, automating repetitive
                    obligations, or even drafting fundamental content material.
                    But it lacks the soul. It would not apprehend emotions,
                    cannot brainstorm wild thoughts, and actually can't update
                    the human contact. This is wherein you are available in.
                  </p>
                  <p className="pb-6 pt-3 text-[17px] text-justify mb-3 text-gray-500 ">
                    You are now capable of present your self as the marketer who
                    comes in with creativity and approach, something machines
                    can by no means do.
                  </p>
                  <figure>
                    <Image
                      loading="lazy"
                      quality={75}
                      src={bg10}
                      alt="Unlocking the Future"
                      className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                    />

                    <p className="text-center text-sm text-gray-500 mb-4">
                      Image Credits: LinkedIn Sales Solutions on Unsplash
                    </p>
                  </figure>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2 ">
                    Key Skills to Become More Outstanding:
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    To stand out in virtual advertising, you want to master
                    abilties that AI can't mimic. Let's dive into what these are
                    and why they're crucial:
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2  ">
                    Creative Thinking
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Imagine scrolling thru Instagram and seeing a campaign that
                    makes you stop, snicker, or even cry. That is creativity. AI
                    can not make viral-worth campaigns or suppose out of the
                    container-it takes human ingenuity to hook up with audiences
                    on an emotional degree.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2  ">
                    Strategic Thinking
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    A exact marketer does not observe developments; they set
                    them. Strategic thinking means know-how the bigger photo,
                    decoding facts (with AI's help), and making selections that
                    power lengthy-term outcomes.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2   ">
                    Adaptability
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Digital advertising adjustments faster than fashion
                    tendencies. One day it’s all about TikTok; the next, it’s
                    some thing new. Being adaptable guarantees you’re always
                    ahead, prepared to analyze and test with clean equipment or
                    structures.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400 ">
                    Communication Skills
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Whether it’s pitching an idea to a purchaser or taking part
                    along with your crew, strong verbal exchange is your
                    superpower. It’s no longer pretty much talking; it’s about
                    listening and conveying your thoughts truly and
                    persuasively.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400 ">
                    Emotional Intelligence
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Marketing is not approximately the product however people.
                    Understanding their feelings, studying between the traces,
                    and forming real connections will make you priceless.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-gray-400">
                    Data Analysis
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Although AI can acquire records for you, it is up to you to
                    interpret the facts and convert it into actionable insights
                    which can further help in making campaigns focused and
                    impactful.
                  </p>

                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-gray-400">
                    Steps to Build a Career in Digital Marketing
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Starting your adventure in digital advertising can be
                    overwhelming, but with the right steps, it turns into
                    attainable—or even interesting.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                    Finding Your Niche
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Digital advertising is like a buffet, supplying the entirety
                    from search engine optimization and content material
                    advertising to PPC and social media. Specializing in a
                    single vicinity makes you the cross-to expert and opens
                    doors to particular possibilities. For instance, in case you
                    love numbers, dive into analytics. If storytelling excites
                    you, bear in mind content advertising and marketing.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                    Acquiring Relevant Skills
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    The global of advertising and marketing is ever-changing,
                    and so is the system of studying. You can take online guides
                    from web sites like Google Digital Garage or HubSpot
                    Academy. You can also intern in organizations or work on
                    small freelance gigs. These fingers-on stories educate you
                    extra than any book ever ought to
                  </p>

                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-gray-400">
                    Building Your Online Presence
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Your non-public emblem matters. Begin with a basic website
                    of your capabilities, tasks, and studies. You have to
                    community the usage of LinkedIn, but additionally use
                    Instagram or Twitter to percentage insights or have
                    interaction your network. Even running a blog on industry
                    traits will put you on the radar of ability employers.
                  </p>
                  <div className=" mx-auto">
                    <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-gray-400">
                      Networking Like a Pro
                    </h3>
                    <div className="space-y-6">
                      <div className=" p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                        <p className="text-base text-gray-600 leading-relaxed">
                          Attend webinars, be part of on-line communities, or
                          even reach out to enterprise specialists on LinkedIn.
                          Remember, it is no longer what you recognize however
                          who you understand that regularly brings opportunities
                          your way.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                      Embracing AI as an Ally
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Think of AI as your assistant. Use it for repetitive
                      tasks, including scheduling posts or reading overall
                      performance metrics. AI-powered tools can save time, but
                      they can't create the emotional and innovative components
                      that make advertising campaigns a success.
                    </p>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                      Wrapping It Up
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      The future of virtual advertising appears surprisingly
                      vibrant, however it comes with its demanding situations.
                      AI is converting the game, however it is beginning new
                      doors as nicely. Creativity, emotional intelligence, and
                      adaptableness will assist you stay ahead.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Use AI as a accomplice, now not a competitor, and upload
                      price that only a human can. Remember, achievement in
                      virtual advertising does not come from understanding
                      everything; it comes from knowing what makes you unique
                      and leveraging that to create something excellent.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      So, if you are looking have a career in digital marketing
                      in 2025 then our training sessions will be a great help
                      for you, we offer corporate training for students and
                      interns to improve their skills and get placed in a high
                      paying job.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      And If you are looking to grow your business online then,
                      we at Ultrafly Solutions have a decade of experience in
                      this digital marketing sector, and we have experienced
                      professionals to handle all types of your business
                      requirements, for further assistance email us to
                      info@ultraflysolutions.com.
                    </p>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-gray-400">
                      Wrapping It All
                    </h2>

                    <p className="ml-6 border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                      The future of virtual advertising appears surprisingly
                      vibrant, however it comes with its demanding situations.
                      AI is converting the game, however it is beginning new
                      doors as nicely. Creativity, emotional intelligence, and
                      adaptableness will assist you stay ahead.
                    </p>
                    <p className="ml-6 border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                      Use AI as a accomplice, now not a competitor, and upload
                      price that only a human can. Remember, achievement in
                      virtual advertising does not come from understanding
                      everything; it comes from knowing what makes you unique
                      and leveraging that to create something excellent.
                    </p>
                    <p className="ml-6 border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                      So, if you are looking have a career in digital marketing
                      in 2025 then our training sessions will be a great help
                      for you, we offer corporate training for students and
                      interns to improve their skills and get placed in a high
                      paying job.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      And If you are looking to grow your business online then,
                      we at 
                      <Link href="https://www.ultraflysolutions.com" target="blank" className="underline text-blue-600">
                      {" "}Ultrafly Solutions{" "}
                      </Link>
                       have a decade of experience in
                      this 
                      <Link href="https://www.ultraflysolutions.com/digital-marketing-company/" target="blank" className="underline text-blue-600">
                      {" "} digital marketing{" "}
                      </Link>
                       sector, and we have experienced
                      professionals to handle all types of your business
                      requirements, for further assistance email us to
                      <Link href="mailto:info@ultraflysolutions.com" target="blank" className="underline text-blue-600">
                      {" "}info@ultraflysolutions.com.{" "}
                      </Link>
                      
                    </p>
                  </div>
                  {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    In this blog, we’ll explore how Ultrafly Solutions
                    integrates these modern technologies to push the boundaries
                    of what’s possible, showcasing our latest projects, success
                    stories, and the innovations that are driving the future of
                    web development. Join us as we unlock new potential and
                    shape the digital world with the latest advancements.
                  </div> */}
                </div>
              </main>
              {/* main ends here */}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px] bg-white p-4 hidden lg:block rounded-xl shadow-2xl">
          <div className="sticky top-0">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-600">
              <ul className="flex max-lg:flex-col max-lg:space-y-4 bg-gray-100">
                <li
                  onClick={() => setActiveTab("Latest")}
                  className={`tab text-gray-600 font-semibold text-[15px] py-3.5 px-7 border-t-[3px] ${
                    activeTab === "Latest"
                      ? "border-blue-500 text-blue-500 font-bold"
                      : "border-gray-100 cursor-pointer"
                  }`}
                >
                  Latest
                </li>
                <li
                  onClick={() => setActiveTab("Popular")}
                  className={`tab text-gray-600 font-semibold text-[15px] py-3.5 px-7 border-t-[3px] ${
                    activeTab === "Popular"
                      ? "border-blue-500 text-blue-500 font-bold"
                      : "border-gray-100 cursor-pointer"
                  }`}
                >
                  Popular
                </li>
              </ul>
            </div>
            {activeTab === "Latest" ? <Latest /> : <Popular />}
          </div>
        </div>
      </section>
    </>
  );
}

export default AidrivenDigital;
