import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Logo } from "../../../components/Navigation/logo";
import arrow from "/public/assets/images/arrow.svg";

const PortfolioHero = ({ data, heroImage }: any) => {
  return (
    <div className="hero-section portfolio-hero">
      <style jsx>{`
        .heroSection::after {
          background: linear-gradient(
              90deg,
              rgba(255, 139, 45, 0.8) 0%,
              rgba(232, 80, 91, 0.8) 57%,
              rgba(0, 0, 0, 0.8) 100%
            ),
            url(${process.env.NEXT_PUBLIC_API_BASE_URL}${heroImage?.data
              ?.attributes?.url});
        }
      `}</style>
      {/* Hero Section */}
      <Logo />

      {/* Our Philosophy: */}
      <div className="h-[1220px] relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
        <div className="z-50 relative text-center about-hero-text">
          <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
            {data?.Title}
          </p>
          <span>{data?.ShortTitle}</span>
          <div className="py-16 arrow-sec">
            <AnchorLink className="arrow-btn" href="#portfolio">
              <span>
                <Image src={arrow} alt="" />
              </span>
            </AnchorLink>
          </div>
        </div>

        <div className="absolute left-[7%] top-[5%] tablet:hidden">
          <img src="/assets/images/bulb.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default PortfolioHero;
