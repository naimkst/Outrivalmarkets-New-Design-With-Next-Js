import React from "react";

export const BusinessTalkSection = () => {
  return (
    <div className="relative py-[120px] bg-[#090D48] business-sec">
      <div className="w-[100%] m-auto text-center tablet:w-full tablet:px-5">
        <p className="text40 font-bold text-white">
          {`Business is regular, has been the same for many years..`}
        </p>
        <p className="text40 font-bold text-white py-2">{`No extra oomph..`}</p>

        <p className="text40 font-bold text-white pb-2">
          {`Kinda good, but actually not.. `}
        </p>

        <p className="text40 font-bold text-white">
          {`You don’t remember your last vacation.. Feelin sluggish..`} <br />{" "}
          {` Questioning your whole business..`}
        </p>

        <p className="text40 font-bold text-white">
          Hey most business owners get stuck right here, if they even get <br />{" "}
          here.. Eitherway, you got this and we got your back.
        </p>
        <p className="text40 font-bold text-white">
          Reach out to us today for a free 30 min. branding consultation! <br />
          Feeling growth-worthy!
        </p>

        <div className="pt-16">
          <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
            <span className="text-white">{`Let’s Get In Touch Today`}</span>
          </button>
        </div>
      </div>

      <div className="absolute -left-[200px] bottom-[100px] z-50 tablet:hidden line-shape">
        <img src="/assets/images/about-shape.png" alt="" />
      </div>
    </div>
  );
};
