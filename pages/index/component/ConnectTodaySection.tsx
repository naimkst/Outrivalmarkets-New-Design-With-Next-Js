import React from "react";

export const ConnectTodaySection = () => {
  return (
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
  );
};
