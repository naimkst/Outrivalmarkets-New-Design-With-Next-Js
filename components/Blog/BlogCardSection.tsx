import Image from "next/image";
import React from "react";

export const BlogCardSection = () => {
  return (
    <div
      className="pt-[40px] tablet:pt-[70px] laptop:mx-[15px] tablet:mx-0 pb-[50px] phone:px-[15px]"
      id="blog"
    >
      <div className="max-w-[1345px] m-auto !p-0 tablet:mx-[15px]">
        <div className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1">
          <div className="relative target:order-last tablet:ml-0 rounded-[20px]">
            <Image
              src={"/assets/images/blog/blog01.jpg"}
              alt=""
              width={1000}
              height={700}
              className="h-full w-full object-cover rounded-[20px] absolute top-0 left-0 z-10 tablet:relative tablet:rounded-[20px] tablet:m-auto tablet:w-full tablet:ml-0 tablet:h-[400px]"
            />
          </div>
          <div className="bg-[#FFF6EF] rounded-r-[20px] -ml-[10px] relative z-0 tablet:-mt-[30px] phone:ml-0">
            <div className="pl-[80px] pr-[40px] pt-[70px] phone:pl-[20px] phone:pr-[20px]">
              <div className="flex justify-between items-center mb-[58px]">
                <span className="h-[27px] bg-[#FEA800] font-bold font-['Maximum Impact'] text-white px-[25px] rounded-full text-[15.57px] flex items-center">
                  Pretium
                </span>
                <p className="text-[#000000] text-[12.74px]">
                  Published On <span className="font-bold"> 30 June</span>
                </p>
              </div>
              <h3 className="text-[34px] font-medium mb-[30px] blogTitles">
                How Scrambled Text by Cicero Became the Standard For Typesetters
                Everywhere
              </h3>
              <p className="text-[25px] text-black font-medium">
                Conveniently network quality catalysts for change before
                economically sound initiatives.
              </p>
            </div>

            <div className="flex justify-end mt-[25px] pb-[35px]">
              <button className="blogReadMore text-white first-letter text-[11.31px]  bg-[#5E6469] font-bold inline-block w-[128px] h-[37px] rounded-l-full text-center phone:w-full phone:mx-[10px] phone:rounded-full">
                Read Now
              </button>
            </div>
          </div>
        </div>

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
