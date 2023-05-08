import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const BlogCardSection = ({ data, blogs }: any) => {
  console.log("blogs", blogs);
  return (
    <div
      className="pt-[40px] tablet:pt-[70px] laptop:mx-[15px] tablet:mx-0 pb-[50px] phone:px-[15px]"
      id="blog"
    >
      <div className="max-w-[1345px] m-auto !p-0 tablet:mx-[15px]">
        {data?.map((item: any, index: number) => (
          <div
            key={`blogcard${index}`}
            className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1 mb-4"
          >
            <div className="relative target:order-last tablet:ml-0 rounded-[20px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                  item?.attributes?.Thumbnail?.data?.attributes?.url
                    ? item?.attributes?.Thumbnail?.data?.attributes?.url
                    : ""
                }`}
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
                    {item?.attributes?.blog_category?.data?.attributes?.Title}
                  </span>
                  <p className="text-[#000000] text-[12.74px]">
                    Published On{" "}
                    <span className="font-bold">
                      {" "}
                      {moment(item?.attributes?.publishedAt).format(
                        "MMM Do YY"
                      )}
                    </span>
                  </p>
                </div>
                <h3 className="text-[34px] font-medium mb-[30px] blogTitles">
                  {item?.attributes?.Title}
                </h3>
                <ReactMarkdown className="text[18px] text-black font-medium">{`${item?.attributes?.Description?.substring(
                  0,
                  90
                )}`}</ReactMarkdown>
              </div>

              <div className="flex justify-end mt-[25px] pb-[35px]">
                <Link
                  href={`/blog/${item?.attributes?.slug}`}
                  className="phone:w-full phone:m-auto phone:px-[10px]"
                >
                  <button className="blogReadMore text-white first-letter text-[11.31px]  bg-[#5E6469] font-bold inline-block w-[128px] h-[37px] rounded-l-full text-center phone:w-full phone:rounded-full">
                    Read Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-[30px] mt-[40px] tablet:grid-cols-1">
          {blogs?.map((item: any, index: number) => (
            <div
              key={`blog${index}`}
              className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1"
            >
              <div className="relative target:order-last">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    item?.attributes?.Thumbnail?.data?.attributes?.url
                      ? item?.attributes?.Thumbnail?.data?.attributes?.url
                      : ""
                  }`}
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
                      {item?.attributes?.blog_category?.data?.attributes?.Title}
                    </span>
                    <p className="text-black text-[12.74px] m-0 hidden phone:block">
                      Published On{" "}
                      <span className="font-bold">
                        {" "}
                        {moment(item?.attributes?.publishedAt).format(
                          "MMM Do YY"
                        )}
                      </span>
                    </p>
                  </div>
                  <h3 className="text-[32px] font-medium blogTitles mb-[20px]">
                    {item?.attributes?.Title}
                  </h3>
                  <p className="text[18px] text-black font-medium">
                    {item?.attributes?.Description?.substring(0, 70)}
                    ...
                  </p>
                </div>

                <div className="flex justify-between items-center mt-[25px] pb-[30px] pl-[20px] ml-10 phone:pl-0 phone:flex-col phone:ml-0">
                  <p className="text-black text-[12.74px] m-0 phone:hidden">
                    Published On{" "}
                    <span className="font-bold">
                      {" "}
                      {moment(item?.attributes?.publishedAt).format(
                        "MMM Do YY"
                      )}
                    </span>
                  </p>
                  <Link
                    href={`/blog/${item?.slug}`}
                    className="phone:w-full phone:m-auto phone:px-[10px]"
                  >
                    <button className="blogReadMore text-white font-bold first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[100px] h-[37px] rounded-l-full text-center phone:w-full phone:rounded-full">
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
