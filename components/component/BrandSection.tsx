import Link from "next/link";
import React from "react";

export const BrandSection = ({ data }: any) => {
  const BrandAwareness = data?.data?.attributes?.BrandAwareness;

  return (
    <div className="brand-sec relative  container rounded-[20px] w-[80%] text-center z-50 tablet:w-full tablet:px-5 tablet:mt-12 tablet:overflow-hidden mt-10">
      <div className="aboutBackground">
        <div className="py-[52px] px-[100px] phone:px-4">
          <p className="para text-white phone:text-[40px]">
            {BrandAwareness?.Title}
          </p>

          <p className="text25 text-white w-[70%] m-auto py-[20px] phone:w-full phone:px-0 tablet:w-full tablet:px-0">
            {BrandAwareness?.Description}
          </p>
          <div className="pt-10">
            <Link href={String(BrandAwareness?.ButtonUrl)}>
              <button className="bg-white h-[70px] px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <p className="heroButtonGradient text24">{`${BrandAwareness?.ButtonText}`}</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
