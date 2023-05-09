import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import useFetch from "../../hooks/useFetch";

export const TestimonialSection = ({ data }: any) => {
  const Testimonial = data?.data?.attributes?.Testimonial;
  const {
    data: testmonialList,
    error,
    loading,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials?populate=deep`);

  const testimonailLists: any = testmonialList;

  return (
    <div className="pt-[200px] container m-auto text-center tablet:pt-12 tablet:px-10 phone:px-4 desktop:px-10 testimonial">
      <div className="sec-title">
        <h2 className="sectionTitle text44 mb-8">{Testimonial?.Title}</h2>
        <p className="text64 text-black font-bold w-[80%] m-auto text-center tablet:w-full tablet:px-5 phone:w-full phone:px-0">
          {Testimonial?.Description}
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
          {testimonailLists?.data?.map((item: any, index: number) => (
            <SwiperSlide
              key={`testimonail${index}`}
              className="slide-item py-[40px] md:py-[90px]"
            >
              <div className="rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer testimonialBg">
                {item?.attributes?.Image?.data?.attributes?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                    width={166}
                    height={166}
                    className="rounded-full object-cover inline-block text-center"
                  />
                )}
                <p className="text25 font-bold my-2">
                  <span>
                    <ImQuotesLeft className="left-0 mb-3" />
                  </span>
                  {`${item?.attributes?.Description}`}
                  <span className="flex items-end justify-end">
                    <ImQuotesRight className="inline-block" />
                  </span>
                </p>

                <h5 className="font-semibold text-[18px] leading-[31px]">
                  {item?.attributes?.Name}
                </h5>
                <span className="font-semibold text-[16px] leading-[31px]">
                  {item?.attributes?.Designation}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
