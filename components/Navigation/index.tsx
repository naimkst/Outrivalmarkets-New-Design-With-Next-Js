import React from "react";
import { SlMenu } from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep`
  );
  const settings: any = data;
  const navigation: any = settings?.data?.attributes?.Settings?.Navigation;

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
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/"
              >
                {navigation?.HomeName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.HomeDescription}
              </p>
            </li>
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                href="/about"
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
              >
                {navigation?.AboutName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.AboutDescription}
              </p>
            </li>
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/service"
              >
                {navigation?.ServicesName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.ServicesDescription}
              </p>
            </li>
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/portfolio"
              >
                {navigation?.PortfolioName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.PortfolioDescription}
              </p>
            </li>
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/blog"
              >
                {navigation?.BlogName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.BlogDescription}
              </p>
            </li>
            <li className="mb-6 group menuHoverGradientColor  text-black tablet:mb-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="text-[65px] leading-[95px] font-bold uppercase tablet:text-[50px] tablet:leading-[80px]"
                href="/contact"
              >
                {navigation?.ContactName}
              </Link>
              <p className="text-black text-center font-bold group-hover:text-primary">
                {navigation?.ContactDescription}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
