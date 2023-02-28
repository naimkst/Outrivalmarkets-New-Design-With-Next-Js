import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export const TestimonialSection = () => {
  return (
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
  );
};
