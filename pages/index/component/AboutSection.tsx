import React from "react";

export const AboutSection = () => {
  return (
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
  );
};
