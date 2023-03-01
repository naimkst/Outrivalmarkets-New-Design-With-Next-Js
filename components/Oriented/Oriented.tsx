import Link from "next/link";
import React from "react";

const Oriented = ({ data }: any) => {
  const GrowthOriented = data?.data?.attributes?.GrowthOriented;
  const SuccessStories = data?.data?.attributes?.SuccessStories;

  return (
    <div className="oriented-section">
      <div className="relative py-[100px] phone:py-[50px]">
        <div className="w-[50%] m-auto text-center tablet:w-full tablet:px-5 phone:w-full phone:px-4">
          <h2 className="sectionTitle text44">{GrowthOriented?.Title}</h2>
          <p className="text40 font-bold mb-8">{GrowthOriented?.Description}</p>

          <div className="pt-3">
            <Link href={String(GrowthOriented?.ButtonUrl)}>
              <button className="videoButtonGradient h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <span className="text-white">{GrowthOriented?.ButtonText}</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 z-50 phone:hidden">
          <img src="/assets/images/grothShap.png" alt="" />
        </div>
      </div>

      <div className="relative container m-auto rounded-[20px] w-[80%] text-center z-50 my-20 phone:w-full phone:px-4 phone:my-5">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] tablet:px-3 phone:px-4 inner">
            <p className="text25 font-bold text-white w-[70%] m-auto py-[40px] tablet:w-full tablet:px-5 phone:w-full phone:px-0">
              {SuccessStories?.Description}
            </p>
            <div className="">
              <Link href={String(SuccessStories?.ButtonUrl)}>
                <button className="bg-white h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                  <span className="heroButtonGradient">
                    {SuccessStories?.ButtonText}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Oriented;
