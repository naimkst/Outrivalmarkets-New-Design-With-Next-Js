import React from "react";

export const BrandSection = () => {
  return (
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
  );
};
