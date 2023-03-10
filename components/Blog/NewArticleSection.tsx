import Image from "next/image";
import React from "react";

export const NewArticleSection = () => {
  return (
    <div className="pt-[288px] pb-[100px] tablet:px-[15px] tablet:py-[50px] laptop:mx-[15px] tablet:mx-0 newArticleBg">
      <div className="max-w-[1345px] m-auto !p-0">
        <h2 className="text-[44px] font-bold netArticleTitle mb-[34px] tablet:text-center uppercase text-center">
          New Articles
        </h2>
        <div className="grid grid-cols-2 gap-[30px] mt-[40px] tablet:grid-cols-1">
          <div className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1">
            <div className="relative target:order-last">
              <Image
                src={"/assets/images/blog/blog02.jpg"}
                alt=""
                width={700}
                height={700}
                className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20 tablet:relative tablet:w-full "
              />
            </div>

            <div className="blogBackground relative z-10 -ml-10 tablet:ml-0 tablet:rounded-[20px] tablet:-mt-[30px] tablet:z-30 phone:z-0">
              <div className="px-[20px] pt-[40px] ml-10 phone:pt-[60px] phone:px-[20px] phone:ml-0">
                <div className="flex justify-between items-center mb-[20px]">
                  <span className="h-[27px] bg-[#328BF2] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                    People
                  </span>
                  <p className="text-black text-[12.74px] m-0 hidden phone:block">
                    Published On <span className="font-bold"> 30 June</span>
                  </p>
                </div>
                <h3 className="text-[32px] font-medium blogTitles mb-[20px]">
                  Energistically deploy worldwide results vis-a-vis business.
                </h3>
                <p className="text[18px] text-black font-medium">
                  Conveniently network quality catalysts for change before
                  economically sound initiatives.{" "}
                </p>
              </div>

              <div className="flex justify-between items-center mt-[25px] pb-[30px] pl-[20px] ml-10 phone:pl-0 phone:flex-col phone:ml-0">
                <p className="text-black text-[12.74px] m-0 phone:hidden">
                  Published On <span className="font-bold"> 30 June</span>
                </p>
                <button className="blogReadMore text-white font-bold first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[100px] h-[37px] rounded-l-full text-center phone:w-[96%] phone:rounded-full">
                  Read Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1">
            <div className="relative target:order-last">
              <Image
                src={"/assets/images/blog/blog02.jpg"}
                alt=""
                width={700}
                height={700}
                className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20 tablet:relative tablet:w-full "
              />
            </div>

            <div className="blogBackground relative z-10 -ml-10 tablet:ml-0 tablet:rounded-[20px] tablet:-mt-[30px] tablet:z-30 phone:z-0">
              <div className="px-[20px] pt-[40px] ml-10 phone:pt-[60px] phone:px-[20px] phone:ml-0">
                <div className="flex justify-between items-center mb-[20px]">
                  <span className="h-[27px] bg-[#328BF2] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                    People
                  </span>
                  <p className="text-black text-[12.74px] m-0 hidden phone:block">
                    Published On <span className="font-bold"> 30 June</span>
                  </p>
                </div>
                <h3 className="text-[32px] font-medium blogTitles mb-[20px]">
                  Energistically deploy worldwide results vis-a-vis business.
                </h3>
                <p className="text[18px] text-black font-medium">
                  Conveniently network quality catalysts for change before
                  economically sound initiatives.{" "}
                </p>
              </div>

              <div className="flex justify-between items-center mt-[25px] pb-[30px] pl-[20px] ml-10 phone:pl-0 phone:flex-col phone:ml-0">
                <p className="text-black text-[12.74px] m-0 phone:hidden">
                  Published On <span className="font-bold"> 30 June</span>
                </p>
                <button className="blogReadMore text-white font-bold first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[100px] h-[37px] rounded-l-full text-center phone:w-[96%] phone:rounded-full">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
