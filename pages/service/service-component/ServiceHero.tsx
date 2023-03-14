import Link from "next/link";
import React from "react";
import { Logo } from "../../../components/Navigation/logo";

const ServiceHero = ({ data }: any) => {
  const HeroSection = data?.data?.attributes?.HeroSection;
  return (
    <div className="hero-section service-hero">
      {/* Hero Section */}
      <Logo />

      {/* Our Philosophy: */}
      <div className="h-[1220px] z-30 relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
        <div className="z-50 relative text-center about-hero-text">
          <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
            {HeroSection?.Description}
          </p>
          <ul>
            <li>{HeroSection?.ShortDescription}</li>
          </ul>
          <div className="py-3">
            <Link href={String(HeroSection?.ButtonUrl)}>
              <button className="bg-white h-[70px] px-[45px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <span className="heroButtonGradient text24 button">{`${HeroSection?.ButtonText}`}</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute left-[7%] top-[5%] tablet:hidden">
          <img src="/assets/images/bulb.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default ServiceHero;
