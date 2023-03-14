import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";

export const Footer = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep`
  );
  const settings: any = data;

  return (
    <div className="ft-widget">
      <div className="bg-[#090D48] py-[65px] items-center tablet:px-5 ">
        <div className="container m-auto grid tablet:grid-cols-1 gap-4 justify-between grid-cols-4">
          <div>
            <div className="flex justify-center content-center md:content-start">
              <Image
                className="m-auto content-center"
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                  settings?.data?.attributes?.Settings?.FooterLogo?.data
                    ?.attributes?.url
                    ? settings?.data?.attributes?.Settings?.FooterLogo?.data
                        ?.attributes?.url
                    : "/assets/images/footer-logo.png"
                }`}
                alt={"Footer Logo"}
                width={186}
                height={115}
              />
            </div>
            <div>
              <ul className="flex justify-center items-center gap-[20px] my-[25px] md:items-start">
                {/* <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineBehance className="text-[#2674D1] group-hover:text-white" />
                </li> */}
                {/* <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineDribbble className="text-[#DE778C] group-hover:text-white" />
                </li> */}
                {settings?.data?.attributes?.Settings?.InstagramLink && (
                  <Link
                    href={settings?.data?.attributes?.Settings?.InstagramLink}
                  >
                    <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                      <AiOutlineTwitter className="text-[#5F98DD] group-hover:text-white" />
                    </li>
                  </Link>
                )}

                {settings?.data?.attributes?.Settings?.Twitter && (
                  <Link href={settings?.data?.attributes?.Settings?.Twitter}>
                    <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                      <AiOutlineInstagram className="text-[#FF8B2D] group-hover:text-white" />
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold text-left mb-7 ">
              {settings?.data?.attributes?.Settings?.FooterCompanyMenuTitle}
            </h2>
            <ul className=" text-left">
              {settings?.data?.attributes?.CompnayMenu?.map(
                (item: any, index: number) => (
                  <li key={`compnay${index}`}>
                    <a
                      className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                      href={item?.Link}
                    >
                      {item?.Title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold md:text-left mb-7 ">
              {settings?.data?.attributes?.Settings?.FooterServiceMenuTitle}
            </h2>
            <ul className="content-center  text-left">
              {settings?.data?.attributes?.ServiceMenu?.map(
                (item: any, index: number) => (
                  <li key={`service${index}`}>
                    <a
                      className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                      href={item?.Link}
                    >
                      {item?.Title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold  md:text-left mb-7 ">
              {settings?.data?.attributes?.Settings?.FooterOurAddressTitle}
            </h2>
            <div className="flex-row  text-left">
              <div>
                <p className="text-white text-[19px] font-[300] leading-[30px] hover:text-[#FF8B2D]">
                  {settings?.data?.attributes?.Settings?.Address}
                </p>
              </div>
              <div className="mt-[20px] items-center flex  text-left justify-start">
                <BsTelephone color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[19px] leading-[30px] font-[300] hover:text-[#FF8B2D]"
                  href={`tel:${settings?.data?.attributes?.Settings?.Phone}`}
                >
                  {settings?.data?.attributes?.Settings?.Phone}
                </a>
              </div>

              <div className="mt-[20px] items-center flex md:text-left md:justify-start">
                <BiEnvelope color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[19px] leading-[30px] font-[300] hover:text-[#FF8B2D]"
                  href={`mailto:${settings?.data?.attributes?.Settings?.Email}`}
                >
                  {settings?.data?.attributes?.Settings?.Email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FD8332] py-3">
        <p className="text-center text-white text-[14px]">
          {settings?.data?.attributes?.Settings?.CopyRightText}
        </p>
      </div>
    </div>
  );
};
