import Image from "next/image";
import React from "react";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="ft-widget">
      <div className="bg-[#090D48] py-[65px] items-center tablet:px-5 ">
        <div className="container m-auto grid tablet:grid-cols-1 gap-4 justify-between grid-cols-4">
          <div>
            <div className="flex justify-center content-center md:content-start">
              <Image
                className="m-auto content-center"
                src={"/assets/images/footer-logo.png"}
                alt={"Footer Logo"}
                width={186}
                height={115}
              />
            </div>
            <div>
              <ul className="flex justify-center items-center gap-[20px] my-[25px] md:items-start">
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineBehance className="text-[#2674D1] group-hover:text-white" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineDribbble className="text-[#DE778C] group-hover:text-white" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineTwitter className="text-[#5F98DD] group-hover:text-white" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full group hover:bg-primary cursor-pointer">
                  <AiOutlineInstagram className="text-[#FF8B2D] group-hover:text-white" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold text-left mb-7 ">
              Our Company
            </h2>
            <ul className=" text-left">
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold md:text-left mb-7 ">
              Service
            </h2>
            <ul className="content-center  text-left">
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Amazon account{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Management
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  A+/ EBC content
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Product content writing
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[19px] leading-[35px] font-[300] hover:text-[#FF8B2D] "
                  href=""
                >
                  Product photography
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[30px] leading-[26px] font-bold  md:text-left mb-7 ">
              Our Address
            </h2>
            <div className="flex-row  text-left">
              <div>
                <p className="text-white text-[19px] font-[300] leading-[30px] hover:text-[#FF8B2D]">
                  5055 North 03th Avenue,Penscola,
                  <br /> FL 32503, New York
                </p>
              </div>
              <div className="mt-[20px] items-center flex  text-left justify-start">
                <BsTelephone color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[19px] leading-[30px] font-[300] hover:text-[#FF8B2D]"
                  href="tel:+1 965 047 658 23"
                >
                  +1 965 047 658 23
                </a>
              </div>

              <div className="mt-[20px] items-center flex md:text-left md:justify-start">
                <BiEnvelope color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[19px] leading-[30px] font-[300] hover:text-[#FF8B2D]"
                  href="tel:+1 965 047 658 23"
                >
                  +1 965 047 658 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FD8332] py-3">
        <p className="text-center text-white text-[14px]">
          2022 | All Right Reserved By{" "}
          <span className="font-bold">Outrival.</span>
        </p>
      </div>
    </div>
  );
};
