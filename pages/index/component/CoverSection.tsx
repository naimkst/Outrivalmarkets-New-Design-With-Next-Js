import Link from "next/link";
import React from "react";

export const CoverSection = ({ data }: any) => {
  const BookCover = data?.data?.attributes?.BookCover;
  return (
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
                src={
                  process.env.NEXT_PUBLIC_API_BASE_URL +
                  BookCover?.Image?.data?.attributes?.url
                }
                className="tablet:w-2/3 tablet:inline-block"
                alt=""
              />
            </div>
            <div className="tablet:text-center tablet:px-5 col-span-4 text-left">
              <h2 className="sectionTitle text44">{BookCover?.title}</h2>
              <p className="text62 text-black font-bold py-3 phone:text-[30px]">
                {`${BookCover?.Description}`}
              </p>
              <div className="">
                <Link href={String(BookCover?.ButtonUrl)}>
                  <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[45px]">
                    <span className="text-white">{`${BookCover?.ButtonText}`}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
