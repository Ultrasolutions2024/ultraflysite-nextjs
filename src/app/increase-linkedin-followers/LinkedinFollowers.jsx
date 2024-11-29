"use client";

import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import bg1 from "../images/blog/linkedin.webp";
import jeeva from "../images/blog/jeeva-shanmugam.jpeg";
import bg10 from "../images/blog/Picture10.webp";
import bg11 from "../images/blog/Picture11.webp";
import bg12 from "../images/blog/Picture12.webp";
import Image from "next/image";
import Link from "next/link";
import Latest from "./Latest";
import Popular from "./Papular";
function LinkedinFollowers() {
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
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
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                  Content Writer
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                  A boy with a ton of pending bucket lists that has to be ticked
                  | Blogger | otherwise commonly known for his absurd stories!
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <Link
                    href="https://www.instagram.com/emvric"
                    className="text-gray-600 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <FaInstagram className="text-4xl font-bold mt-[2px] text-rose-500" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
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
                          "https://www.ultraflysolutions.com/top-mobile-development-framework"
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
                          "https://www.ultraflysolutions.com//top-mobile-development-framework"
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
                          "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation"
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

                  <div className="p-4 absolute bottom-0 left-0 z-20  mb-[30px]">
                    <span className="bg-green-500 text-white text-[12px] md:text-md me-2 px-2.5 py-0.5 rounded  border border-green-300 inline-flex items-center justify-center mb-2 font-bold">
                      Blog : 1
                    </span>

                    <h2 className=" text-lg md:text-4xl font-semibold text-gray-100 leading-tight ">
                      How to Increase Your LinkedIn Followers and Make a Living
                      in 2025?
                    </h2>
                    <div className="flex mt-3">
                      <Image
                        quality={80}
                        loading="lazy"
                        src={jeeva}
                        alt="jeeva profile"
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-200 text-sm">
                          {" "}
                          Jeeva Shanmugam{" "}
                        </p>
                        <p className="font-semibold text-gray-400 text-xs">
                          {" "}
                          14 Aug{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Alexander Shatov on Unsplash
                </p>
                <div className="px-4 lg:px- mt-12 text-gray-700 -md mx-auto text-lg leading-relaxed ">
                  {/* <p className="pb-6 md-">
                    At Ultrafly Solutions, we're at the forefront of the digital
                    revolution, harnessing the power of the latest web
                    development technologies to drive innovation and transform
                    businesses. Our focus on cutting-edge tools and frameworks
                    ensures that we deliver state-of-the-art solutions tailored
                    to meet the dynamic needs of today’s digital landscape.
                  </p> */}
                  <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li className="text-lg md:text-md font-semibold text-justify font-domine">
                      Understand the fundamentals of LinkedIn and optimize your
                      profile effectively.
                    </li>
                    <li className="text-lg md:text-md font-semibold text-justify">
                      Create and share engaging content that resonates with your
                      audience.
                    </li>
                    <li className="text-lg md:text-md font-semibold text-justify">
                      Leverage LinkedIn&apos;s unique features and engage
                      meaningfully with your network.
                    </li>
                  </ol>
                  <p className="pb-6 pt-3 text-[17px] text-justify mb-3 text-gray-500   first-letter:text-7xl first-letter:font-bold first-letter:text-purple-500  first-letter:me-3 first-letter:float-start">
                    For better or worse, LinkedIn is no longer that old portal
                    mainly preferred for professionals, companies, or marketers.
                    Now, it’s a vibrant platform for professionals, businesses,
                    and marketers to connect, totaling over a billion users
                    worldwide. Discover how to increase your LinkedIn following
                    by leveraging strategies to unlock the platform's full
                    potential in 2025, ensuring more meaningful connections and
                    professional growth.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-teal-400">
                    Basics Understanding
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Before delving into details of techniques, make sure that
                    you have appropriately maximized your LinkedIn profile. Your
                    profile is your online business card and bases its whole
                    work on good impressions.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[6px] border-gray-400">
                    Fully Complete Your Profile
                  </h4>
                  <p className="pb-6 pt-3 text-[17px] text-justify">
                    A professional LinkedIn profile will resemble who you are
                    professionally, and your profile should always be complete.
                    Fill every section, like your headline, summary, experience,
                    education, and skills. A complete profile will increase how
                    often you appear in people's searches, and it attracts
                    possible followers.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[6px] border-gray-400">
                    Professional Photo
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    A good impression surely requires a high-quality image for a
                    clear picture. For your profile picture, the headshot must
                    appear professionally and yet say about who you are as an
                    individual. It often proves to be the first point that
                    everyone views; therefore, do not compromise there also.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2  border-l-[6px] border-gray-400">
                    Interacting Banner
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Displaying your brand is also another avenue in your
                    LinkedIn banner. An attractive banner that represents your
                    personal brand attracts people's attention. Using tools like
                    Canva to create a personalized banner can represent your
                    professional identity.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[6px] border-gray-400 ">
                    Keyword Optimization
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Use relevant keywords throughout your profile to increase
                    the chances of being found during searches. Consider what
                    words people might use to find someone in your field and
                    include those words strategically in your headline, summary,
                    and experience sections. This simple step can make a huge
                    difference in the chances of being found by the right
                    people.
                  </p>
                  <h4 className="font-bold text-xl md:text-xl pl-2 my-2  border-l-[6px] border-gray-400">
                    Writing Effective Content
                  </h4>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Content reigns supreme on LinkedIn, so include something
                    relevant, informative, and engaging that could be of
                    interest to your target market.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                    Thought Leadership
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Become a thought leader in your industry. Articles, blog
                    posts, and research findings can be shared with people to
                    prove your knowledge in the field. If you are able to give
                    constant value, then people are going to think of you as a
                    thought leader and are likely to follow you for your
                    insights.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                    Share Company Updates
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Remember that, as a business, update your followers on the
                    news and achievements of your company as well as new product
                    launches. Updating them from time to time creates trust and
                    transparency with your audience, which makes them more
                    connected to your brand. This connection may encourage them
                    to share your posts, and you will have increased your reach.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                    Personal Branding
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Share your personal story and your experience as an
                    employee. Nothing can get the audience involved with you
                    like sharing glimpses of your professional life, including
                    what you learned over time. This creates an opportunity to
                    build a narrative that the audience can then relate to. View
                    a glimpse into behind-the-scenes peeks at work going on
                    around you adds some humanity to your profile.
                  </p>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    It makes your post look bigger and more shareable with
                    pictures, infographics, or videos. Visual content seems to
                    gain more engagement than plain text so mix and match them.
                    Be quick with your videos, short updates, and be creative
                    with the choice of relevant infographics: such is one way
                    that pictures help bring your message together.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                    Curated Content
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Share other industry leaders' posts and articles by not
                    forgetting that the power is upon you. Curating content
                    creates you as a resource known and keeps reciprocal sharing
                    which creates more avenues for you audience.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-indigo-400">
                    Engage your audience
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    The best thing about getting a following through LinkedIn is
                    building real relationships with your audience. Engage by
                    commenting, Like and comment on other people's posts. This
                    will not only update you but also increase your visibility.
                    If one is engaging wisely, people notice it, and they become
                    very interested in visiting one's profile.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                    Join Groups
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Joining the most relevant groups in LinkedIn will connect
                    you to like-minded professionals, and participation in
                    discussions increases visibility and offers opportunities
                    for bridging with peers in the field. All you have to do is
                    remember to contribute meaningfully: quality over quantity.
                  </p>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    Sharing other's content will provide you with relationships
                    and very much force your content out there. If you are
                    sharing somebody else's work, the chances are they will
                    reciprocate by showing your work to their audience.
                  </p>
                  <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] bor border-indigo-400">
                    Comment and Message Response
                  </h3>
                  <p className="pb-6 pt-3  text-[17px] text-justify">
                    If you could easily get back to the comments and messages
                    then it will be clear for the audience that you truly care
                    for them and for their sayings. It might further strengthen
                    a bond as well as attract more of them in the future too.
                  </p>
                  <div className=" mx-auto">
                    <h3 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                      Use LinkedIn&apos;s Feature
                    </h3>

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

                    <h4 className="font-bold text-xl md:text-2xl pl-2 my-2 border-l-[11px]  border-indigo-400">
                      Special Features of LinkedIn
                    </h4>

                    <div className="space-y-6">
                      <div className=" p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h5 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[11px] border-gray-400">
                          LinkedIn Live
                        </h5>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Host live streams and engage with your community in
                          real time. People can reach out directly to ask
                          questions, helping you build deeper, longer-lasting
                          relationships and attract followers who are genuinely
                          interested in your expertise.
                        </p>
                      </div>

                      <div className=" p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h3 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[11px] border-gray-400">
                          LinkedIn Polls
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Polls are a great way to start discussions and receive
                          feedback from your audience. They not only engage your
                          followers but also offer insights into their
                          preferences, which can refine your content strategy.
                        </p>
                      </div>

                      <div className=" p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h3 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[11px] border-gray-400">
                          Articles on LinkedIn
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Publishing long-form articles allows you to share
                          in-depth knowledge. Unlike shorter posts, articles
                          provide the space to fully explore topics, positioning
                          you as a thought leader in your field.
                        </p>
                      </div>

                      <div className=" p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h3 className="font-bold text-xl md:text-xl pl-2 my-2 border-l-[11px] border-gray-400">
                          LinkedIn Events
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Hosting or attending LinkedIn events is an excellent
                          networking opportunity. It helps you connect with
                          like-minded professionals, gain followers, and
                          potentially open new business avenues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-indigo-400">
                      Sponsored Content
                    </h2>

                    <figure>
                      <Image
                        loading="lazy"
                        quality={75}
                        src={bg11}
                        alt="Unlocking the Future"
                        className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md mt-4"
                      />

                      <p className="text-center text-sm text-gray-500 mb-4">
                        Image Credits: Kenny Eliason on Unsplash
                      </p>
                    </figure>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Posting sponsored content makes your post appear more in
                      front of the audience outside the list of your followers
                      so that you can get your profile a good exposure and
                      attract a few new followers.
                    </p>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-indigo-400">
                      Text Ads
                    </h2>

                    <figure>
                      <Image
                        loading="lazy"
                        quality={75}
                        src={bg12}
                        alt="Unlocking the Future"
                        className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                      />

                      <p className="text-center text-sm text-gray-500 mb-4">
                        Image Credits: Will Francis on Unsplash
                      </p>
                    </figure>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      They would be text-based ads that link directly to certain
                      demographics or interests; the right people will surely
                      see these soon enough. The more compelling it is, the more
                      that probably follows you from the ad, interested in
                      content that you have provided.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      If the result is great, constant activity is necessary for
                      success. Posting and engaging with the audience and trying
                      different types of content should become habitual to see
                      results. Time passes, and constant presence can start to
                      help in the formation of reputation on the network.
                    </p>
                  </div>

                  <div className=" mx-auto">
                    <h2 className="font-bold text-xl md:text-3xl pl-2 my-2 border-l-[11px] border-indigo-400">
                      Wrapping It All
                    </h2>

                    <p className="ml-6 border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                      The bottom line is that if you do all these tips and start
                      actively engaging on LinkedIn, you will most likely grow
                      your followers steadily, building a robust professional
                      network. Remember, it is always better to have a few good
                      connections than thousands of low-quality ones.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Focus on creating real relationships and providing value
                      to your audience, and you will see that your presence on
                      LinkedIn grows organically over time.
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

export default LinkedinFollowers;
