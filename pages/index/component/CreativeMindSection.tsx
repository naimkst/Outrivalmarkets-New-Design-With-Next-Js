import React from "react";

export const CreativeMindSection = () => {
  return (
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
  );
};
