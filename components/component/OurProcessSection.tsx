import React from "react";
import useFetch from "../../hooks/useFetch";

export const OurProcessSection = ({ data }: any) => {
  const OurProcess = data?.data?.attributes?.OurProcess;

  const {
    loading,
    error,
    data: processListData,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/our-processes?populate=deep`
  );

  const processList: any = processListData;

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
        <h2 className="sectionTitle text44">{OurProcess?.Title}</h2>
        <div className="mt-10">
          {processList?.data?.map((item: any, index: number) => {
            if (index === 0) {
              return (
                <div key={`process${index}`} className="px-20 pb-20 phone:px-4">
                  <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                    <div className="span-1 text-center relative tablet:order-last">
                      <div className="borderProcessRight max-w-[400px] m-auto">
                        <h2 className="processTitle py-2">
                          {item?.attributes?.Title}
                        </h2>
                        <p className="text32 font-[500] text-white">
                          {item?.attributes?.Description}
                        </p>
                      </div>
                    </div>
                    <div className="span-1 relative">
                      <div className="borderProcessLineBorder text-center inline-block m-auto ">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (index === 1) {
              return (
                <div key={`process${index}`} className="px-20 pb-20 phone:px-4">
                  <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                    <div className="span-1 text-center relative order-last">
                      <div className="borderProcessLeft max-w-[400px] m-auto">
                        <h2 className="processTitle py-3">
                          {item?.attributes?.Title}
                        </h2>
                        <p className="text32 font-[500] text-white">
                          {item?.attributes?.Description}
                        </p>
                      </div>
                    </div>
                    <div className="span-1 relative">
                      <div className="borderProcessLineBorderLeft text-center inline-block m-auto ">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                          alt="process"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (index === 2) {
              return (
                <div key={`process${index}`} className="px-20 pb-20 phone:px-4">
                  <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                    <div className="span-1 text-center relative tablet:order-last">
                      <div className="borderThree  max-w-[400px] m-auto">
                        <h2 className="processTitle py-3">
                          {item?.attributes?.Title}
                        </h2>
                        <p className="text32 font-[500] text-white">
                          {item?.attributes?.Description}
                        </p>
                      </div>
                    </div>
                    <div className="span-1 relative">
                      <div className="borderThreeIcon text-center inline-block m-auto ">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                          alt="process"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (index === 3) {
              return (
                <div
                  key={`process${index}`}
                  className="px-20 pb-20 phone:px-4 phone:py-0"
                >
                  <div className="grid grid-cols-2 text-center justify-between items-center tablet:grid-cols-1">
                    <div className="span-1 text-center relative order-last">
                      <div className="fourStyle  max-w-[400px] m-auto">
                        <h2 className="processTitle py-3">
                          {item?.attributes?.Title}
                        </h2>
                        <p className="text32 font-[500] text-white">
                          {item?.attributes?.Description}
                        </p>
                      </div>
                    </div>
                    <div className="span-1 relative">
                      <div className="fourStyleImage text-center inline-block m-auto ">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.Image?.data?.attributes?.url}`}
                          alt="process"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
