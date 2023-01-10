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
        } pl-6 py-2 pr-3 rounded-r-[5px] inline-block fixed z-[100] top-1/2 cursor-pointer`}
      >
        {isOpen ? (
          <MdOutlineClose color="#fff" size={40} />
        ) : (
          <SlMenu size={35} />
        )}
      </div>

      {isOpen && (
        <div className="h-[100vh] bg-white/80 fixed top-0 z-[60]  w-full backdrop-blur-md">
          <ul className="flex items-center justify-center flex-col h-full">
            <li className="mb-8 hover:text-primary  text-black">
              <a
                className="text-[88px] leading-[108px] font-bold uppercase"
                href=""
              >
                Home
              </a>
            </li>
            <li className="mb-8 hover:text-primary  text-black">
              <a
                className="text-[88px] leading-[108px] font-bold uppercase"
                href=""
              >
                About
              </a>
            </li>
            <li className="mb-8 hover:text-primary  text-black">
              <a
                className="text-[88px] leading-[108px] font-bold uppercase"
                href=""
              >
                Project
              </a>
            </li>
            <li className="mb-8 hover:text-primary  text-black">
              <a
                className="text-[88px] leading-[108px] font-bold uppercase"
                href=""
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
