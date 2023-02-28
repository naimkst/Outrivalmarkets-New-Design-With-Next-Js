import React from "react";

export const OurProcessSection = () => {
  return (
    <div className="bg-[#090D48] py-[100px] relative process-sec">
      <div className="absolute left-0 top-1/2 tablet:hidden">
        <img src="/assets/images/processShap01.png" alt="" />
      </div>
      <div className="absolute right-0 top-1/4 tablet:hidden">
        <img src="/assets/images/processShap02.png" alt="" />
      </div>
      <div className="absolute right-0 bottom-[10%] phone:hidden line-shape">
        <img src="/assets/images/processShap03.png" alt="" />
      </div>
      <div className="m-auto container text-center">
        <h2 className="sectionTitle text44">Our process</h2>
        <div className="mt-10">
          <div className="px-20 pb-20 phone:px-4">
            <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
              <div className="span-1 text-center relative tablet:order-last">
                <div className="borderProcessRight max-w-[400px] m-auto">
                  <h2 className="processTitle py-2">Initial Meeting</h2>
                  <p className="text32 font-[500] text-white">
                    Initial meeting: 30 min. meeting with a “been-there
                    done-that” marketing strategist, who will understand and
                    adhere to the goals of your company.
                  </p>
                </div>
              </div>
              <div className="span-1 relative">
                <div className="borderProcessLineBorder text-center inline-block m-auto ">
                  <img src="/assets/images/process02.png" alt="process" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-20 pb-20 phone:px-4">
            <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
              <div className="span-1 text-center relative order-last">
                <div className="borderProcessLeft max-w-[400px] m-auto">
                  <h2 className="processTitle py-3">Follow-up Meeting</h2>
                  <p className="text32 font-[500] text-white">
                    A detailed market-smashing marketing footprint will be laid
                    down to you, based on your niche market.
                  </p>
                </div>
              </div>
              <div className="span-1 relative">
                <div className="borderProcessLineBorderLeft text-center inline-block m-auto ">
                  <img src="/assets/images/process01.png" alt="process" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-20 pb-20 phone:px-4">
            <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
              <div className="span-1 text-center relative tablet:order-last">
                <div className="borderThree  max-w-[400px] m-auto">
                  <h2 className="processTitle py-3">Time To Act</h2>
                  <p className="text32 font-[500] text-white">
                    Here is where your brands’ success story begins!
                  </p>
                </div>
              </div>
              <div className="span-1 relative">
                <div className="borderThreeIcon text-center inline-block m-auto ">
                  <img src="/assets/images/process04.png" alt="process" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-20 pb-20 phone:px-4 phone:py-0">
            <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
              <div className="span-1 text-center relative order-last">
                <div className="fourStyle  max-w-[400px] m-auto">
                  <h2 className="processTitle py-3">Follow-up Meeting</h2>
                  <p className="text32 font-[500] text-white">
                    A detailed market-smashing marketing footprint will be laid
                    down to you, based on your niche market.
                  </p>
                </div>
              </div>
              <div className="span-1 relative">
                <div className="fourStyleImage text-center inline-block m-auto ">
                  <img src="/assets/images/process01.png" alt="process" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
