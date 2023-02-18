import React from "react";
import { SlMenu } from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${
          isOpen ? "menuIconBg" : "bg-[#ECEBEB]"
        } pl-6 py-2 pr-3 rounded-r-[5px] inline-block fixed z-[100] top-1/2 cursor-pointer group hoveIconColor hamburger`}
      >
        {isOpen ? (
          <MdOutlineClose color="#fff" size={40} />
        ) : (
          <SlMenu size={35} className="group-hover:text-white" />
        )}
      </div>

      {isOpen && (
        <div className="h-[100vh] bg-white/80 fixed top-0 z-[60] w-full backdrop-blur-md mobail-menu">
          <ul className="flex items-center justify-center flex-col h-full">
            <li className="mb-8 group menuHoverGradientColor  text-black tablet:mb-4">
              <a
                className="text-[88px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/"
              >
                Home
              </a>
              <p className="text-black text-center font-bold group-hover:text-primary">
                Our Home Sweet Home
              </p>
            </li>
            <li className="mb-8 group menuHoverGradientColor  text-black tablet:mb-4">
              <a
                className="text-[88px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/about"
              >
                About
              </a>
              <p className="text-black text-center font-bold group-hover:text-primary">
                Insights On Who We Are
              </p>
            </li>
            <li className="mb-8 group menuHoverGradientColor  text-black tablet:mb-4">
              <a
                className="text-[88px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/service"
              >
                Service
              </a>
              <p className="text-black text-center font-bold group-hover:text-primary">
                A Glimpse Of The Magic We Do
              </p>
            </li>
            <li className="mb-8 group menuHoverGradientColor  text-black tablet:mb-4">
              <a
                className="text-[88px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/portfolio"
              >
                Portfolio
              </a>
              <p className="text-black text-center font-bold group-hover:text-primary">
                A Glimpse Of The Magic We Do
              </p>
            </li>
            <li className="mb-8 group menuHoverGradientColor  text-black tablet:mb-4">
              <a
                className="text-[88px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href=""
              >
                Contact Us
              </a>
              <p className="text-black text-center font-bold group-hover:text-primary">
                Hey Y’never Know! Let’s Hear From You
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
