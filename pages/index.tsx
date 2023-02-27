import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Link from "next/link";
import BlogSec from "../components/blog";
import Oriented from "../components/Oriented/Oriented";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="hero-section">
        {/* Hero Section */}
        <div className="absolute inset-0 flex justify-center z-50 top-2 logo">
          <div>
            <img
              className="w-[200px] phone:w-[120px]"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </div>
        </div>

        {/* Our Philosophy: */}
        <div className="h-[1220px] z-30 relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
          <div className="z-50 relative text-center about-hero-text">
            <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
              UTLIZING “BUNKER-BUSTER” MARKETING METHODS TO DETONATE YOUR BRAND
              PRESENCE
            </p>
            <div className="py-16">
              <button className="bg-white h-[70px] px-[45px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <span className="heroButtonGradient text24 button">{`Explode “Dem Sales!”`}</span>
              </button>
            </div>
          </div>

          <div className="absolute left-[7%] top-[5%] tablet:hidden">
            <img src="/assets/images/bulb.png" alt="" />
          </div>
        </div>
      </div>

      {/* Our Brand */}
      <div className="container m-auto text-center py-14 w-[70%] phone:w-full phone:px-4 philosophy">
        <h2 className="sectionTitle text44">Our Philosophy:</h2>
        <p className="text64 font-bold">
          We Make You Big Or We Go Home‛ Again, We Do ‚Uhum‛.. Outrival!
        </p>
      </div>

      {/* Call To Action */}
      <div className="aboutSection flex flex-col justify-center items-center text-center mt-10">
        <div className="absolute left-0 top-0 z-50 tablet:hidden">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
        <div className="relative z-50 pt-[300px] pb-[350px] tablet:pt-12 tablet:pb-12 tablet:bg-[#fff6ef]">
          <div className=" w-[100%] m-auto tablet:w-full tablet:px-5">
            <p className="text40 font-bold text-black">
              How Is Your Brands Online Presence?
            </p>
            <p className="text40 font-bold text-black py-7">
              Does It Need A Boost?
            </p>
            <p className="text40 font-bold text-black">
              Perhaps You Are Getting Views But No Conversions Or Sales?
              <br />
              Are Your Products Being Showcased Properly Online?
            </p>
            <p className="text40 font-bold text-black py-10">
              {" "}
              Or.. Not Really..
            </p>
            <p className="text40 font-bold text-black">
              Does Your Brand Have What It Takes To Skyrocket Your E-commerce
              <br />
              Sales Through the roof In 2023?
            </p>
            <p className="text40 font-bold text-black">
              If You Are Unsure With One Of The Above Questions..
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="about-wrap relative container rounded-[20px] w-[80%] text-center z-50 tablet:w-full tablet:px-5 tablet:mt-10 phone:w-full phone:px-4">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] phone:px-4 tablet:px-10">
            <p className="text64 font-bold text-white parag">
              Hey! You Are At The Right Spot.. Lets Work Together & Explode Your
              Sales – Bazooka Style!!
            </p>
            <div className="pt-10">
              <button className="bg-white h-[70px] px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <span className="heroButtonGradient text24">
                  {`Ready to learn how?!”`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="pt-[200px] container m-auto text-center tablet:pt-12 tablet:px-10 phone:px-4 desktop:px-10 testimonial">
        <div className="sec-title">
          <h2 className="sectionTitle text44 mb-8">
            WHAT OUR CLIENTS ARE SAYING ABOUT US
          </h2>
          <p className="text64 text-black font-bold w-[80%] m-auto text-center tablet:w-full tablet:px-5 phone:w-full phone:px-0">
            Some Of Our Favorite Clients, That Left Some Good Words For Us.. Kid
            You Not, For A Good Reason!
          </p>
        </div>

        <div className="content-center overflow-x-hidden overflow-y-hidden tablet:px-5">
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            spaceBetween={50}
            slidesPerView={3}
          >
            <SwiperSlide className="slide-item py-[40px] md:py-[90px]">
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={166}
                  height={166}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>

                <h5 className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item py-[40px] md:py-[90px]">
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={166}
                  height={166}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 textColor font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <h5 className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={166}
                  height={166}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <h5 className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={166}
                  height={166}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <h5 className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="slide-item py-[40px] md:py-[90px]">
              <div className=" rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={166}
                  height={166}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>
                <h5 className="font-semibold text-[18px] leading-[31px]">
                  Alexander Brown
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  CEO of Outrival
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Book Cover section */}
      <div className="relative videoSection flex flex-col justify-center items-center text-center mt-[50px] overflow-hidden tablet:bg-[#fff6ef] phone:px-4 ">
        <div className="absolute line-shape -left-20 top-[100px] z-50 tablet:hidden">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
        <div className="absolute line-shape -right-20 top-[200px] z-50 tablet:hidden">
          <img src="/assets/images/video-shape.png" alt="" />
        </div>
        <div className="relative z-50 pt-[350px] pb-[100px] tablet:pt-12 tablet:pb-12">
          <div className="container m-auto py-14 tablet:py-5">
            <div className="grid grid-cols-7 items-center justify-between tablet:grid-cols-1">
              <div className="tablet:text-center col-span-3">
                <img
                  src="/assets/images/book.png"
                  className="tablet:w-2/3 tablet:inline-block"
                  alt=""
                />
              </div>
              <div className="tablet:text-center tablet:px-5 col-span-4 text-left">
                <h2 className="sectionTitle text44">
                  7 MUST READ VIGOROUS MARKETING TACTICS FOR 2023!!
                </h2>
                <p className="text62 text-black font-bold py-3 phone:text-[30px]">
                  {`7 Awesome`} <br />
                  {`‘non-rocket- science’ tips`} <br />
                  {`that marketing companies`} <br />
                  {`don’t want`} <br />
                  {`you to know`}
                </p>
                <div className="">
                  <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[45px]">
                    <span className="text-white">{`Download here`}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coonet with us today */}

      <div className="brand-sec relative  container rounded-[20px] w-[80%] text-center z-50 tablet:w-full tablet:px-5 tablet:mt-12 tablet:overflow-hidden mt-10">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] phone:px-4">
            <p className="para text-white phone:text-[40px]">Brand Awareness</p>

            <p className="text25 text-white w-[70%] m-auto py-[20px] phone:w-full phone:px-0 tablet:w-full tablet:px-0">
              Consectetur eleifend a libero arcu tristique a urna tortor. Odio
              nulla dignissim fames in non.
            </p>
            <div className="pt-10">
              <button className="bg-white h-[70px] px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <p className="heroButtonGradient text24">
                  {`Explode “Dem Sales!”`}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section with background */}

      <div className="product-text flex flex-col justify-center items-center text-center mt-10 relative pb-10">
        <div className="relative z-50 pt-[100px] pb-[0px] tablet:pt-12 tablet:pb-12">
          <div className=" w-[100%] m-auto tablet:w-full tablet:px-5">
            <p className="text40 font-bold text-black">
              Great products.. im sure..
            </p>
            <p className="text40 font-bold text-black">
              Great service.. Most definitely..
            </p>
            <p className="text40 font-bold text-black">
              {`Great awareness.. mmm not quite sure.. what's that, how do I`}
              <br /> achieve that?
            </p>
            <p className="text40 font-bold text-black">
              {`That’s ok, questions are good.`}
            </p>
            <p className="text40 font-bold text-black">
              {`But answers are what counts in business.`} <br />
              {`Get the awareness you are looking for `} <br />
              {`and ready yourself to create brand hype!`}
            </p>
          </div>

          <div className="py-10">
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <span className="text-white">{`Let's connect today!`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* book cover section */}
      {/* <div className="h-[726px] brandSection tablet:h-[550px]"></div> */}

      {/* marketing struture section */}
      <div className="relative py-[120px] bg-[#090D48] business-sec">
        <div className="w-[100%] m-auto text-center tablet:w-full tablet:px-5">
          <p className="text40 font-bold text-white">
            {`Business is regular, has been the same for many years..`}
          </p>
          <p className="text40 font-bold text-white py-2">
            {`No extra oomph..`}
          </p>

          <p className="text40 font-bold text-white pb-2">
            {`Kinda good, but actually not.. `}
          </p>

          <p className="text40 font-bold text-white">
            {`You don’t remember your last vacation.. Feelin sluggish..`} <br />{" "}
            {` Questioning your whole business..`}
          </p>

          <p className="text40 font-bold text-white">
            Hey most business owners get stuck right here, if they even get{" "}
            <br /> here.. Eitherway, you got this and we got your back.
          </p>
          <p className="text40 font-bold text-white">
            Reach out to us today for a free 30 min. branding consultation!{" "}
            <br />
            Feeling growth-worthy!
          </p>

          <div className="pt-16">
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <span className="text-white">{`Let’s Get In Touch Today`}</span>
            </button>
          </div>
        </div>

        <div className="absolute -left-[200px] bottom-[100px] z-50 tablet:hidden line-shape">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
      </div>

      {/* our process section */}
      <div className="relative py-[100px] creative">
        <div className="w-[70%] m-auto text-center tablet:w-full tablet:px-5 phone:px-4 creative-inner">
          <p className="text40 font-bold mb-8">
            Here At Outrival Markets We Are A Team Of Creative Minds, Who Will
            Turn Your Idea Into A Brilliant Reality...
          </p>
          <p className="text40 font-bold  mb-8">{`Don't procrastinate!`}</p>
          <p className="text40 font-bold  mb-8 ">
            {`Feel Free To Reach Out To Us With Your Questions Comments Concerns
            And Anxieties (Oh No, We Are Not Therapists, But If It's Anything
            Marketing... ) We Can Surely Help Out!`}
          </p>
          <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[45px]">
            <span className="text-white">{`Get In Touch`}</span>
          </button>
        </div>

        <div className="absolute line-shape right-0 top-[5%] z-50 tablet:hidden">
          <img src="/assets/images/bulb-color.png" alt="" />
        </div>
        <div className="absolute line-shape left-0 bottom-[5%] z-50">
          <img src="/assets/images/singleShap.png" alt="" />
        </div>
        <div className="absolute line-shape right-0 top-[15%] z-50">
          <img src="/assets/images/singleShap02.png" alt="" />
        </div>
      </div>

      {/* Grouth section */}
      <div className="bg-[#090D48] py-[100px] relative process-sec">
        <div className="absolute left-0 top-1/2 tablet:hidden">
          <img src="/assets/images/processShap01.png" alt="" />
        </div>
        <div className="absolute right-0 top-1/4 tablet:hidden">
          <img src="/assets/images/processShap02.png" alt="" />
        </div>
        <div className="absolute right-0 bottom-[10%] phone:hidden line-shape">
          <img src="/assets/images/processShap03.png" alt="" />
        </div>
        <div className="m-auto container text-center">
          <h2 className="sectionTitle text44">Our process</h2>
          <div className="mt-10">
            <div className="px-20 pb-20 phone:px-4">
              <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                <div className="span-1 text-center relative tablet:order-last">
                  <div className="borderProcessRight max-w-[400px] m-auto">
                    <h2 className="processTitle py-2">Initial Meeting</h2>
                    <p className="text32 font-[500] text-white">
                      Initial meeting: 30 min. meeting with a “been-there
                      done-that” marketing strategist, who will understand and
                      adhere to the goals of your company.
                    </p>
                  </div>
                </div>
                <div className="span-1 relative">
                  <div className="borderProcessLineBorder text-center inline-block m-auto ">
                    <img src="/assets/images/process02.png" alt="process" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-20 pb-20 phone:px-4">
              <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                <div className="span-1 text-center relative order-last">
                  <div className="borderProcessLeft max-w-[400px] m-auto">
                    <h2 className="processTitle py-3">Follow-up Meeting</h2>
                    <p className="text32 font-[500] text-white">
                      A detailed market-smashing marketing footprint will be
                      laid down to you, based on your niche market.
                    </p>
                  </div>
                </div>
                <div className="span-1 relative">
                  <div className="borderProcessLineBorderLeft text-center inline-block m-auto ">
                    <img src="/assets/images/process01.png" alt="process" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-20 pb-20 phone:px-4">
              <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                <div className="span-1 text-center relative tablet:order-last">
                  <div className="borderThree  max-w-[400px] m-auto">
                    <h2 className="processTitle py-3">Time To Act</h2>
                    <p className="text32 font-[500] text-white">
                      Here is where your brands’ success story begins!
                    </p>
                  </div>
                </div>
                <div className="span-1 relative">
                  <div className="borderThreeIcon text-center inline-block m-auto ">
                    <img src="/assets/images/process04.png" alt="process" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-20 pb-20 phone:px-4 phone:py-0">
              <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                <div className="span-1 text-center relative order-last">
                  <div className="fourStyle  max-w-[400px] m-auto">
                    <h2 className="processTitle py-3">Follow-up Meeting</h2>
                    <p className="text32 font-[500] text-white">
                      A detailed market-smashing marketing footprint will be
                      laid down to you, based on your niche market.
                    </p>
                  </div>
                </div>
                <div className="span-1 relative">
                  <div className="fourStyleImage text-center inline-block m-auto ">
                    <img src="/assets/images/process01.png" alt="process" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Oriented />
      <BlogSec />
    </>
  );
}
