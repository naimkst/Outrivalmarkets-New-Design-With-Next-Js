import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-[1220px] z-50 relative flex items-center justify-center heroSection">
        <div className="z-50 relative text-center">
          <p className="text-[88px] text-white font-bold leading-[108px] w-[70%] m-auto text-center">
            UTLIZING “BUNKER-BUSTER” MARKETING METHODS TO DETONATE YOUR ONLINE
            PRESENCE
          </p>
          <div className="py-16">
            <button className="bg-white h-[70px] w-[349px] text-[24px] font-bold rounded-[7px]">
              <p className="heroButtonGradient">Explode “Dem Sales!”</p>
            </button>
          </div>
        </div>
      </div>

      <div className="container m-auto text-center py-14 w-[70%]">
        <h2 className="sectionTitle">Our Philosophy:</h2>
        <p className="text-[64px] leading-[88px] font-bold">
          We Make You Big Or We Go Home‛ Again, We Do ‚Uhum‛.. Outrival!
        </p>
      </div>

      <div className="aboutSection flex flex-col justify-center items-center text-center mt-10">
        <div className="absolute left-0 top-0 z-50">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
        <div className="relative z-50 pt-[300px] pb-[350px]">
          <div className=" w-[70%] m-auto">
            <p className="text-[40px] leading-[77px] font-bold text-black">
              How Is Your Brands Online Presence?
            </p>
            <p className="text-[40px] leading-[77px] font-bold text-black">
              Does It Need A Boost?
            </p>
            <p className="text-[40px] leading-[77px] font-bold text-black">
              Perhaps You Are Getting Views But No Conversions Or Sales? Are
              Your Products Being Showcased Properly Online? Or.. Not Really..
            </p>
            <p className="text-[40px] leading-[77px] font-bold text-black">
              Does Your Brand Have What It Takes To Skyrocket Your E-commerce
              Sales Through the roof In 2023?
            </p>
            <p className="text-[40px] leading-[77px] font-bold text-black">
              If You Are Unsure With One Of The Above Questions..
            </p>
          </div>
        </div>
      </div>

      <div className="relative aboutBackground container m-auto rounded-[20px] w-[80%] text-center -mt-[15%] z-50">
        <div className="borderAboutBg z-10 relative">
          <div className="py-[52px] px-[100px]">
            <p className="text-[64px] leading-[88px] font-bold text-white">
              Hey! You Are At The Right Spot.. Lets Work Together & Explode Your
              Sales – Bazooka Style!!
            </p>
            <div className="pt-10">
              <button className="bg-white h-[70px] w-[349px] text-[24px] font-bold rounded-[7px]">
                <p className="heroButtonGradient">Explode “Dem Sales!”</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[200px] container m-auto text-center">
        <div>
          <h2 className="sectionTitle">WHAT OUR CLIENTS ARE SAYING ABOUT US</h2>
          <p className="text-[64px] text-black font-bold leading-[108px] w-[80%] m-auto text-center">
            Some Of Our Favorite Clients, That Left Some Good Words For Us.. Kid
            You Not, For A Good Reason!
          </p>
        </div>

        <div className="content-center overflow-x-hidden overflow-y-hidden">
          <Swiper
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletElement: "span",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper testimonial"
            autoHeight={true}
            freeMode={true}
            onActiveIndexChange={(e) => console.log(e)}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            spaceBetween={50}
            slidesPerView={3}
          >
            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="leading-[32px] text-[25px] font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  "Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>

                <p className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </p>
                <p className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="leading-[32px] text-[25px] textColor font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  "Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <p className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </p>
                <p className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="leading-[32px] text-[25px] font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  "Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <p className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </p>
                <p className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="leading-[32px] text-[25px] font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  "Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <p className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </p>
                <p className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="leading-[32px] text-[25px] font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  "Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <p className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </p>
                <p className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="videoSection flex flex-col justify-center items-center text-center mt-[50px]">
        <div className="absolute -left-5 top-[100px] z-50">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
        <div className="absolute -right-6 top-[200px] z-50">
          <img src="/assets/images/video-shape.png" alt="" />
        </div>
        <div className="relative z-50 pt-[400px] pb-[350px]">
          <div className="container m-auto text-center py-14">
            <h2 className="sectionTitle">
              7 MUST READ VIGOROUS MARKETING TACTICS FOR 2023!!
            </h2>
            <p className="text-[64px] leading-[88px] font-bold w-[70%] m-auto">
              7 Awesome ‘non-rocket-science’ tips that marketing companies don’t
              want you to know
            </p>
          </div>
          <div className="imageFull w-[80%] m-auto">
            <Image src={"/assets/images/video.png"} alt="Video Image" fill />
          </div>

          <div className="py-16">
            <button className="videoButtonGradient bg-white h-[70px] w-[349px] text-[24px] font-bold rounded-[7px]">
              <p className="text-white">Download Free Copy</p>
            </button>
          </div>
        </div>
      </div>

      <div className="relative aboutBackground container m-auto rounded-[20px] w-[80%] text-center -mt-[13%] z-50">
        <div className="borderAboutBg z-10 relative">
          <div className="py-[52px] px-[100px]">
            <p className="text-[64px] leading-[88px] font-bold text-white">
              Brand Awarness
            </p>

            <p className="text-[25px] leading-[32px] text-white w-[70%] m-auto py-[40px]">
              Consectetur eleifend a libero arcu tristique a urna tortor. Odio
              nulla dignissim fames in non.
            </p>
            <div className="">
              <button className="bg-white h-[70px] w-[349px] text-[24px] font-bold rounded-[7px]">
                <p className="heroButtonGradient">Explode “Dem Sales!”</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
