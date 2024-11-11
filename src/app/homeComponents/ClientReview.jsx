"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import avatarImg from '../images/logo/profile.png'
import Link from "next/link";
import clientBgImg from '../images/Company/clients.webp'
import fiveStar from '../images/Company/five_star.png'
import Image from "next/image";
const ClientReview = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mb-6">
      <div className="">
        <div
        
        className="flex sm:flex-row flex-col justify-center items-center  sm:items-center sm:justify-between max-sm:gap-8 w-full h-40 my-10 pr-5 md:pr-10" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${clientBgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}>
            <h2 className="text-2xl md:text-4xl text-center font-bold text-white w-full">
              What Our Clients Say
            </h2>
            <Image 
 quality={100} src={fiveStar} alt="star" className="w-80 hidden md:block" />
          <div className="flex items-center gap-8">
            <button
              ref={prevRef}
              className="group flex justify-center items-center border border-solid border-white text-white w-12 h-12 transition-all duration-500 rounded-full">
              &#8592;
            </button>

            <button
              ref={nextRef}
              className="group flex justify-center items-center border border-solid border-white text-white w-12 h-12 transition-all duration-500 rounded-full">
              &#8594;
            </button>
          </div>
        </div>

        <div className="px-6 sm:px-12 lg:px-24">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={28}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="swiper mySwiper">
            {/* Testimonial 1 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 mb-10 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Leading healthcare provider
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;USA&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Ultrafly Solutions transformed our digital presence with their exceptional web development and SEO services. Our patient engagement has increased significantly!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
  
            {/* Testimonial 2 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:'0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Prominent financial services
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;UK&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Their innovative approach to digital marketing has helped us
                stay ahead in the competitive financial industry. We&apos;ve seen a
                remarkable growth in lead generation.&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
                  </div>
                </div>
              </div>
  
            </SwiperSlide>
  
            {/* Testimonial 3 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Reputable education institute
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full"> &quot;Australia&quot; </p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Thanks to Ultrafly Solutions, our e-learning platform is now
                user-friendly and fully optimized. They exceeded our
                expectations in both service and results!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Testimonial 4 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Major manufacturing company
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;Germany&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                {" "}
                &quot;Ultrafly Solutions delivered a top-notch mobile app that
                streamlined our supply chain management. Their professionalism
                and tech expertise are unmatched!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-200" />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Testimonial 5 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Top retail chain
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;Canada&quot&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Their e-commerce solutions boosted our sales and customer
                engagement. Ultrafly Solutions is a true partner in driving
                digital transformation.&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 6 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Real estate giant
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;Singapore&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Ultrafly Solutions developed a seamless property management
                portal for us. Their technical prowess and dedication were
                evident in every aspect of the project.&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 7 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Leading Banking Institution
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full"> &quot;Switzerland&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Ultrafly Solutions enhanced our online banking platform with
                advanced security features and a smooth user experience. Their
                fintech expertise is truly impressive!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-200" />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 8 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Top Construction Company
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;United Arab Emirates&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Their project management software streamlined our operations
                and improved on-site communication. Ultrafly Solutions is a
                game-changer for the construction industry!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 9 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Prominent Travel & Hospitality
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;France&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Ultrafly Solutions revamped our booking system, making it
                faster and more user-friendly. We’ve seen a significant rise in
                customer satisfaction and bookings!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 9 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Reputable Insurance Firm
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;Netherlands&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;With their digital marketing strategies, we gained greater
                visibility and trust within the insurance market. Ultrafly
                Solutions truly knows how to drive growth!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 10 */}
            <SwiperSlide className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" style={{boxShadow:' 0px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">
                Major Logistics Provider
              </p>
              <p className="group-hover:text-indigo-600 font-bold text-lg text-center w-full">&quot;Japan&quot;</p>
              <p className="text-center text-lg text-gray-500 leading-8 h-52 transition-all duration-500 mb-9 group-hover:text-gray-800">
                &quot;Their custom mobile app for fleet management optimized our
                logistics operations, reducing costs and improving delivery
                times. Ultrafly Solutions exceeded expectations!&quot;
              </p>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image 
 quality={100}
                  className="rounded-full object-cover"
                  src={avatarImg}
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <div className="rating">
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                    <input disabled
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-400"
                      defaultChecked />
                    <input disabled type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-fit mx-auto mt-10">
        <Link href={'/contact-us'}>
          <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
            Join with us
          </button>
        </Link>
      </div>

    </div>
  );
};

export default ClientReview;
