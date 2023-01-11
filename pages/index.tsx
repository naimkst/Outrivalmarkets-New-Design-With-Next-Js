import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="absolute inset-0 flex justify-center z-50 top-2">
        <div className="">
          <img
            className="w-[200px] phone:w-[120px]"
            src="/assets/images/logo.png"
            alt="logo"
          />
        </div>
      </div>

      {/* Our Philosophy: */}
      <div className="h-[1220px] z-30 relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
        <div className="z-50 relative text-center">
          <p className="text88 text-white font-bold w-[70%] m-auto text-center tablet:w-full ">
            UTLIZING “BUNKER-BUSTER” MARKETING METHODS TO DETONATE YOUR ONLINE
            PRESENCE
          </p>
          <div className="py-16">
            <button className="bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <p className="heroButtonGradient text24">{`Explode “Dem Sales!”`}</p>
            </button>
          </div>
        </div>
      </div>

      {/* Our Brand */}
      <div className="container m-auto text-center py-14 w-[70%] phone:w-full phone:px-4">
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
          <div className=" w-[70%] m-auto tablet:w-full tablet:px-5">
            <p className="text40 font-bold text-black">
              How Is Your Brands Online Presence?
            </p>
            <p className="text40 font-bold text-black">Does It Need A Boost?</p>
            <p className="text40 font-bold text-black">
              Perhaps You Are Getting Views But No Conversions Or Sales? Are
              Your Products Being Showcased Properly Online? Or.. Not Really..
            </p>
            <p className="text40 font-bold text-black">
              Does Your Brand Have What It Takes To Skyrocket Your E-commerce
              Sales Through the roof In 2023?
            </p>
            <p className="text40 font-bold text-black">
              If You Are Unsure With One Of The Above Questions..
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="relative container m-auto rounded-[20px] w-[80%] text-center -mt-[15%] z-50 tablet:w-full tablet:px-5 tablet:mt-10 overflow-hidden phone:w-full phone:px-4">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] phone:px-4 tablet:px-10">
            <p className="text64 font-bold text-white">
              Hey! You Are At The Right Spot.. Lets Work Together & Explode Your
              Sales – Bazooka Style!!
            </p>
            <div className="pt-10">
              <button className="bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <p className="heroButtonGradient text24">
                  {`Explode “Dem Sales!”`}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="pt-[200px] container m-auto text-center tablet:pt-12 tablet:px-10 phone:px-4 desktop:px-10">
        <div>
          <h2 className="sectionTitle text44">
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
            <SwiperSlide className="py-[40px] md:py-[90px]">
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                <img
                  src={"/assets/images/testimonial.png"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover inline-block text-center"
                />

                <p className="text25 font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
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

                <p className="text25 textColor font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
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

                <p className="text25 font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
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

                <p className="text25 font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
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

                <p className="text25 font-bold my-5">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`"Mattis viverra ultricies vel fames. Tortor velit et blandit
                  vulputate augue sapien maecenas egestas volutpat."`}
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

      {/* Call To Action */}
      <div className="relative videoSection flex flex-col justify-center items-center text-center mt-[50px] overflow-hidden tablet:bg-[#fff6ef] phone:px-4 ">
        <div className="absolute -left-20 top-[100px] z-50 tablet:hidden">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
        <div className="absolute -right-20 top-[200px] z-50 tablet:hidden">
          <img src="/assets/images/video-shape.png" alt="" />
        </div>
        <div className="relative z-50 pt-[400px] pb-[350px] tablet:pt-12 tablet:pb-12">
          <div className="container m-auto text-center py-14 tablet:py-5">
            <h2 className="sectionTitle text44">
              7 MUST READ VIGOROUS MARKETING TACTICS FOR 2023!!
            </h2>
            <p className="text64 font-bold w-[70%] m-auto tablet:w-full tablet:px-5 phone:px-0">
              {`7 Awesome ‘non-rocket-science’ tips that marketing companies don’t
              want you to know`}
            </p>
          </div>
          <div className="imageFull w-[80%] m-auto tablet:w-full tablet:px-5 phone:px-2 phone:w-full">
            <Image src={"/assets/images/video.png"} alt="Video Image" fill />
          </div>

          <div className="py-16">
            <button className="videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <p className="text-white">Download Free Copy</p>
            </button>
          </div>
        </div>
      </div>
      {/* Coonet with us today */}
      <div className="relative  container m-auto rounded-[20px] w-[80%] text-center -mt-[13%] z-50 tablet:w-full tablet:px-5 tablet:mt-12 tablet:overflow-hidden">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] phone:px-4">
            <p className="text64 font-bold text-white phone:text-[40px]">
              Brand Awarness
            </p>

            <p className="text25 text-white w-[70%] m-auto py-[40px] phone:w-full phone:px-0 tablet:w-full tablet:px-0">
              Consectetur eleifend a libero arcu tristique a urna tortor. Odio
              nulla dignissim fames in non.
            </p>
            <div className="">
              <button className="bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <p className="heroButtonGradient">{`Explode “Dem Sales!”`}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section with background */}
      <div className="flex flex-col justify-center items-center text-center mt-10 relative">
        {/* <div className="absolute left-0 top-0 z-50">
          <img src="/assets/images/about-shape.png" alt="" />
        </div> */}
        <div className="relative z-50 pt-[100px] pb-[100px] tablet:pt-12 tablet:pb-12">
          <div className=" w-[67%] m-auto tablet:w-full tablet:px-5">
            <p className="text40 font-bold text-black">
              Great products.. im sure..
            </p>
            <p className="text40 font-bold text-black">
              Great service.. Most definitely..
            </p>
            <p className="text40 font-bold text-black">
              {`Great awareness.. mmm not quite sure.. what's that, how do I
              achieve that?`}
            </p>
            <p className="text40 font-bold text-black">
              {`That’s ok, questions are good.`}
            </p>
            <p className="text40 font-bold text-black">
              {`But answers are what counts in business. Let’s connect today! Get
              the awareness you are looking for Ready to create brand hype!`}
            </p>
          </div>

          <div className="py-10">
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <p className="text-white">Connect with us today!</p>
            </button>
          </div>
        </div>
      </div>

      {/* book cover section */}
      <div className="h-[726px] brandSection tablet:h-[550px]"></div>

      {/* get in touch today  */}
      <div className="relative overflow-hidden py-[60px] tablet:pb-12">
        <div className="container">
          <div className="grid grid-cols-2 items-center justify-between gap-5 tablet:grid-cols-1">
            <div className="tablet:text-center">
              <img
                src="/assets/images/book.png"
                className="tablet:w-2/3 tablet:inline-block"
                alt=""
              />
            </div>
            <div className="tablet:text-center tablet:px-5">
              <h2 className="sectionTitle text44">
                7 MUST READ VIGOROUS MARKETING TACTICS FOR 2023!!
              </h2>
              <p className="text64 text-black font-bold py-8 phone:text-[30px]">
                {`7 Awesome ‘non-rocket-science’ tips that marketing companies
                don’t want you to know`}
              </p>
              <div className="pt-5">
                <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[45px]">
                  <p className="text-white">{`Let’s Get In Touch Today`}</p>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-[5%] tablet:hidden">
            <img src="/assets/images/book-bg.png" alt="" />
          </div>
        </div>
      </div>

      {/* marketing struture section */}
      <div className="relative py-[120px] bg-[#090D48]">
        <div className="w-[75%] m-auto text-center tablet:w-full tablet:px-5">
          <p className="text40 font-bold text-white">
            {`Business is regular, has been the same for many years.. No extra
            oomph.. Kinda good, but actually not.. You don’t remember your last
            vacation.. Feelin sluggish.. Questioning your whole business..`}
          </p>
          <p className="text40 font-bold text-white">
            Hey most business owners get stuck right here, if they even get
            here.. Eitherway, you got this and we got your back.
          </p>
          <p className="text40 font-bold text-white">
            Reach out to us today for a free 30 min. branding consultation!
            Feeling growth-worthy!
          </p>

          <div className="pt-16">
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <p className="text-white">{`Let’s Get In Touch Today`}</p>
            </button>
          </div>
        </div>

        <div className="absolute -left-[200px] bottom-[100px] z-50 tablet:hidden">
          <img src="/assets/images/about-shape.png" alt="" />
        </div>
      </div>

      {/* our process section */}
      <div className="relative py-[100px]">
        <div className="w-[70%] m-auto text-center tablet:w-full tablet:px-5 phone:px-4">
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
          <p className="text40 font-bold mb-8">
            {` Great products.. im sure.. Great service.. Most definitely.. Great
            awareness.. mmm not quite sure.. whats that, how do I achieve that?
            That’s ok, questions are good. But answers are what counts in
            business. Let’s connect today! Get the awareness you are looking for
            Ready to create brand hype! Connect with us today! Let’s Get In
            Touch Today Outrival markets utilizes highly-focused marketing
            methods perfectly strategized to drastically increase revenue.`}
          </p>
        </div>

        <div className="absolute left-0 bottom-[5%] z-50">
          <img src="/assets/images/singleShap.png" alt="" />
        </div>
        <div className="absolute right-0 top-[15%] z-50">
          <img src="/assets/images/singleShap02.png" alt="" />
        </div>
      </div>

      {/* Grouth section */}
      <div className="bg-[#090D48] py-[100px] relative">
        <div className="absolute left-0 top-1/2 tablet:hidden">
          <img src="/assets/images/processShap01.png" alt="" />
        </div>
        <div className="absolute right-0 top-1/4 tablet:hidden">
          <img src="/assets/images/processShap02.png" alt="" />
        </div>
        <div className="absolute right-0 bottom-[10%] phone:hidden">
          <img src="/assets/images/processShap03.png" alt="" />
        </div>
        <div className="m-auto container text-center">
          <h2 className="sectionTitle text44">Our process</h2>
          <div className="mt-10">
            <div className="px-20 pb-20 phone:px-4">
              <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                <div className="span-1 text-center relative tablet:order-last">
                  <div className="borderProcessRight max-w-[400px] m-auto">
                    <h2 className="processTitle py-3">Initial Meeting</h2>
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

      <div className="relative py-[100px] phone:py-[50px]">
        <div className="w-[50%] m-auto text-center tablet:w-full tablet:px-5 phone:w-full phone:px-4">
          <h2 className="sectionTitle text44">Growth oriented?</h2>
          <p className="text40 font-bold mb-8">
            A Click here to schedule your free 30 min kick-off meeting ($650
            Value)
          </p>

          <div className="pt-3">
            <button className="videoButtonGradient h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <p className="text-white">Yes, book me in for a 30 min session</p>
            </button>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 z-50 phone:hidden">
          <img src="/assets/images/grothShap.png" alt="" />
        </div>
      </div>

      <div className="relative container m-auto rounded-[20px] w-[80%] text-center z-50 my-20 phone:w-full phone:px-4 phone:my-5">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] tablet:px-5 phone:px-4">
            <p className="text25 font-bold text-white w-[70%] m-auto py-[40px] tablet:w-full tablet:px-5 phone:w-full phone:px-0">
              Outrival markets is Montreal based company that offers marketing
              services for brands looking to grow revenue and popularity. We
              thrive to turn good value brands into highly sought after niche
              movers & shakers! Not convinced yet?
            </p>
            <div className="">
              <button className="bg-white h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <p className="heroButtonGradient">
                  See our recent brand success stories
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blogSection pt-[100px] md:pb-[140px] pb-[60px] bg-auto md:px-0 px-10 mt-[150px] overflow-x-hidden tablet:px-5 tablet:text-center phone:my-12">
        <div className="absolute -right-[200px] bottom-0 z-50">
          <img src="/assets/images/video-shape.png" alt="" />
        </div>
        <div className="m-auto max-w-[1307px] container z-50">
          <div>
            <div>
              <p className="text-[18px] leading-[28px] font-[600] text-white">
                Our Blog
              </p>
              <h2 className="md:text-[42px] text-[35px] md:leading-[52px] leading-[40px] font-bold text-white py-5">
                Some of our recent <br />
                blog posts
              </h2>
              <p className="text-[22px] leading-[32px] text-white">
                Subscribe to get our latest tips on how to totally conqueror
                your <br /> market, and moreover to outrival it!
              </p>
            </div>

            <div className="grid md:grid-cols-2 phone:grid-cols-1 gap-8 mt-16 tablet:grid-cols-1 tablet:text-left">
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid md:grid-cols-2 grid-cols-1 items-center justify-start gap-3">
                <div className="imageFull">
                  <Image
                    className="imgHover"
                    src="/assets/images/blog02.png"
                    alt="Blog Image"
                    fill
                  />
                </div>
                <div>
                  <p className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </p>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                    Read More
                  </a>
                </div>
              </div>
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid md:grid-cols-2 grid-cols-1 items-center justify-start gap-3">
                <div className="imageFull">
                  <Image
                    className="imgHover"
                    src="/assets/images/blog01.jpg"
                    alt="Blog Image"
                    fill
                  />
                </div>
                <div>
                  <p className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </p>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a className="bg-white py-[20px] px-[70px] text-[18px] text-[#FF8B2D] font-bold rounded-[7px] hover:bg-[#090D48] hover:text-white">
              See More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
