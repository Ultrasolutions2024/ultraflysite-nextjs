"use client";

import React, { useEffect, useState } from "react";
import bg1 from "../images/blog/linkedin.webp";
import bg2 from "../images/blog/Picture2.webp";
import bg3 from "../images/blog/Picture3.webp";
import bg4 from "../images/blog/Picture4.webp";
import bg5 from "../images/blog/Picture5.webp";
import bg6 from "../images/blog/Picture6.webp";
import bg7 from "../images/blog/Picture7.webp";
import bg8 from "../images/blog/Picture8.webp";
import bg9 from "../images/blog/Picture9.webp";
import bg10 from "../images/blog/Picture10.webp";
import bg11 from "../images/blog/Picture11.webp";
import bg12 from "../images/blog/Picture12.webp";
import profile from "../images/blog/profile.webp";
import Link from "next/link";
import logo from "../images/ultrafly/ultraflysolutionslog.webp";
import projexticon from "../images/ultrafly/projection.webp";
import clients from "../images/ultrafly/clients.webp";
import customerservice from "../images/ultrafly/customer service.webp";
import CountUp from "react-countup";
import { FaEye } from "react-icons/fa";
import Image from "next/image";

function LinkedinFollowers() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const fetchViews = async () => {
      const viewsData = 1623;
      setViews(viewsData);
    };

    fetchViews();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mt-8 ml-5 p-8 bg-white rounded-lg shadow-md">
        {/* Profile Image */}
        <div className="flex items-center space-x-6">
          <Image
loading="lazy" 
  quality={75}
            src={profile}
            alt="Unlocking the Future"
            className="w-16 h-16 rounded-full object-cover" // Increased size of the image
          />
          <h2 className="text-2xl md:text-[30px] font-bold text-justify pr-6">
            {" "}
            {/* Added more padding to the right */}
            Jeeva Shanmugam
          </h2>
        </div>

        <span className="text-lg md:text-2xl font-bold text-gray-500 pl-6">
          1 Articles
        </span>
      </div>

      <div className="pt-12 px-4 md:px-10 lg:px-46 grid gap-4  bg-gray-100 ">
        {/* Image and Text Section */}
        <div className="grid md:grid-cols-3 gap-3 pr-10">
          <div className="col-span-2 grid justify-center gap-2">
            <div className="flex items-center">
              <h2 className="text-2xl md:text-[30px] font-bold text-justify">
                How to Increase Your LinkedIn Followers and Make a Living in
                2025?
              </h2>
            </div>
            <div className="flex items-center justify-end ml-4">
              <FaEye className="text-gray-600 mr-2" />
              <span className="text-lg md:text-xl font-semibold text-gray-600">
                {views} Views
              </span>
            </div>

            <figure>
              <Image
loading="lazy" 
  quality={75}
                src={bg1}
                alt="Unlocking the Future"
                className="h-[30vh] object-scale-down md:h-[50vh] p-2 w-full " // Decreased size
              />

              <p className="text-center text-sm text-gray-500 mb-4">
                Image Credits: Alexander Shatov on Unsplash
              </p>
            </figure>

            <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li className="text-lg md:text-xl font-semibold text-justify">
                  Understand the fundamentals of LinkedIn and optimize your
                  profile effectively.
                </li>
                <li className="text-lg md:text-xl font-semibold text-justify">
                  Create and share engaging content that resonates with your
                  audience.
                </li>
                <li className="text-lg md:text-xl font-semibold text-justify">
                  Leverage LinkedIn&apos;s unique features and engage
                  meaningfully with your network.
                </li>
              </ol>

              <p className="text-lg md:text-xl text-justify text-gray-600 leading-relaxed">
                For better or worse, LinkedIn is no longer that old portal
                mainly preferred for professionals, companies, or marketers.
                Now, it’s a vibrant platform for professionals, businesses, and
                marketers to connect, totaling over a billion users worldwide.
              </p>

              <p className="text-lg md:text-xl text-justify text-gray-600 leading-relaxed">
                Discover how to increase your LinkedIn following by leveraging
                strategies to unlock the platform&apos;s full potential in 2025,
                ensuring more meaningful connections and professional growth.
              </p>
            </div>

            <br />

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Basics Understanding
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg2}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Ultrafly Solutions LinkedIn Page
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Before delving into details of techniques, make sure that you
                have appropriately maximized your LinkedIn profile. Your profile
                is your online business card and bases its whole work on good
                impressions.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Fully Complete Your Profile
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    A professional LinkedIn profile will resemble who you are
                    professionally, and your profile should always be complete.
                    Fill every section, like your headline, summary, experience,
                    education, and skills. A complete profile will increase how
                    often you appear in people&apos;s searches, and it attracts
                    possible followers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Professional Photo
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    A good impression surely requires a high-quality image for a
                    clear picture. For your profile picture, the headshot must
                    appear professionally and yet say about who you are as an
                    individual. It often proves to be the first point that
                    everyone views; therefore, do not compromise there also.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Interacting Banner
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Displaying your brand is also another avenue in your
                    LinkedIn banner. An attractive banner that represents your
                    personal brand attracts people&apos;s attention. Using tools
                    like Canva to create a personalized banner can represent
                    your professional identity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Keyword Optimization
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Use relevant keywords throughout your profile to increase
                    the chances of being found during searches. Consider what
                    words people might use to find someone in your field and
                    include those words strategically in your headline, summary,
                    and experience sections. This simple step can make a huge
                    difference in the chances of being found by the right
                    people.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Writing Effective Content
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Content reigns supreme on LinkedIn, so include something
                    relevant, informative, and engaging that could be of
                    interest to your target market.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Thought Leadership
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg3}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />
                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Nathana Rebouças on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Become a thought leader in your industry. Articles, blog posts,
                and research findings can be shared with people to prove your
                knowledge in the field. If you are able to give constant value,
                then people are going to think of you as a thought leader and
                are likely to follow you for your insights.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Share Company Updates
              </h2>
              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg4}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md"
                />
                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Kaitlyn Baker on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Remember that, as a business, update your followers on the news
                and achievements of your company as well as new product
                launches. Updating them from time to time creates trust and
                transparency with your audience, which makes them more connected
                to your brand. This connection may encourage them to share your
                posts, and you will have increased your reach.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Personal Branding
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg5}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Nathana Rebouças on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Share your personal story and your experience as an employee.
                Nothing can get the audience involved with you like sharing
                glimpses of your professional life, including what you learned
                over time. This creates an opportunity to build a narrative that
                the audience can then relate to. View a glimpse into
                behind-the-scenes peeks at work going on around you adds some
                humanity to your profile.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                It makes your post look bigger and more shareable with pictures,
                infographics, or videos. Visual content seems to gain more
                engagement than plain text so mix and match them. Be quick with
                your videos, short updates, and be creative with the choice of
                relevant infographics: such is one way that pictures help bring
                your message together.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Curated Content
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg6}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: Unseen Studio on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Share other industry leaders&apos; posts and articles by not
                forgetting that the power is upon you. Curating content creates
                you as a resource known and keeps reciprocal sharing which
                creates more avenues for you audience.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Engage your audience
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg7}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits:Walls.io on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The best thing about getting a following through LinkedIn is
                building real relationships with your audience. Engage by
                commenting, Like and comment on other people&apos;s posts. This
                will not only update you but also increase your visibility. If
                one is engaging wisely, people notice it, and they become very
                interested in visiting one&apos;s profile.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Join Groups
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg8}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits:Stephen Phillips - Hostreviews.co.uk on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Joining the most relevant groups in LinkedIn will connect you to
                like-minded professionals, and participation in discussions
                increases visibility and offers opportunities for bridging with
                peers in the field. All you have to do is remember to contribute
                meaningfully: quality over quantity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Sharing other&apos;s content will provide you with relationships
                and very much force your content out there. If you are sharing
                somebody else&apos;s work, the chances are they will reciprocate
                by showing your work to their audience.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Comment and Message Response
              </h2>

              <figure>
                <Image
loading="lazy" 
  quality={75}
                  src={bg9}
                  alt="Unlocking the Future"
                  className="h-[30vh] object-cover md:h-[50vh] w-full rounded-md "
                />

                <p className="text-center text-sm text-gray-500 mb-4">
                  Image Credits: LinkedIn Sales Solutions on Unsplash
                </p>
              </figure>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If you could easily get back to the comments and messages then
                it will be clear for the audience that you truly care for them
                and for their sayings. It might further strengthen a bond as
                well as attract more of them in the future too.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Use LinkedIn&apos;s Feature
              </h2>

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

              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Special Features of LinkedIn
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    LinkedIn Live
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Host live streams and engage with your community in real
                    time. People can reach out directly to ask questions,
                    helping you build deeper, longer-lasting relationships and
                    attract followers who are genuinely interested in your
                    expertise.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    LinkedIn Polls
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Polls are a great way to start discussions and receive
                    feedback from your audience. They not only engage your
                    followers but also offer insights into their preferences,
                    which can refine your content strategy.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Articles on LinkedIn
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Publishing long-form articles allows you to share in-depth
                    knowledge. Unlike shorter posts, articles provide the space
                    to fully explore topics, positioning you as a thought leader
                    in your field.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    LinkedIn Events
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Hosting or attending LinkedIn events is an excellent
                    networking opportunity. It helps you connect with
                    like-minded professionals, gain followers, and potentially
                    open new business avenues.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
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
                Posting sponsored content makes your post appear more in front
                of the audience outside the list of your followers so that you
                can get your profile a good exposure and attract a few new
                followers.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
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
                demographics or interests; the right people will surely see
                these soon enough. The more compelling it is, the more that
                probably follows you from the ad, interested in content that you
                have provided.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If the result is great, constant activity is necessary for
                success. Posting and engaging with the audience and trying
                different types of content should become habitual to see
                results. Time passes, and constant presence can start to help in
                the formation of reputation on the network.
              </p>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Wrapping It All
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The bottom line is that if you do all these tips and start
                actively engaging on LinkedIn, you will most likely grow your
                followers steadily, building a robust professional network.
                Remember, it is always better to have a few good connections
                than thousands of low-quality ones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Focus on creating real relationships and providing value to your
                audience, and you will see that your presence on LinkedIn grows
                organically over time.
              </p>
            </div>

            {/* Social Media Icons Section */}
            <div className="flex justify-center md:justify-start gap-6 text-[18px] text-[#646464] mt-8">
              <h2 className="text-blue font-bold">
                <u>Share Our Blog:</u>
              </h2>
              <br />
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  "https://www.ultraflysolutions.com/top-mobile-development-framework"
                )}&quote=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </Link>

              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Top 05 Mobile App Development Frameworks in 2024"
                )}&url=${encodeURIComponent(
                  "https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation"
                )}&hashtag=${encodeURIComponent("#UltraflySolutions")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter p-3 rounded-full icon text-sm md:text-xl sm:p-[18px]"></i>
              </Link>

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
                <i className="fa-brands fa-linkedin-in p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Sticky Position Let's Connect Div */}
          <div className="sticky top-24 self-start md:w-[24rem] p-8 ml-4">
            <div className="border-2 border-gray-300 bg-gradient-to-r from-blue-100 to-blue-900 p-6 rounded-lg">
              <Image
loading="lazy" 
  quality={75} src={logo} alt="logo" className="w-5px" />
              <p className="text-center font-bold text-xl mt-4 text-black">
                Let&apos;s connect! Explore more about IT solutions.
              </p>
              <Link href="/contact-us">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-2">
                  Check & Demo
                </button>
              </Link>
              {/* About Section inside the div */}
              <div className="mt-10">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-4">
      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={projexticon}
          alt="About Us | Ultrafly Solutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={150}
              duration={15}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Completed <br /> Projects
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={clients}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={91}
              duration={20}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Happy <br /> Clients
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <Image
loading="lazy" 
  quality={75}
          src={customerservice}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={110}
              duration={15}
              separator=" "
              decimal=","
              suffix="+"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Customer <br /> Service
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LinkedinFollowers;
