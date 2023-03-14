import Link from "next/link";
import React from "react";
import { Logo } from "../../../components/Navigation/logo";

const AboutHero = ({ data }: any) => {
  const heroSection = data?.data?.attributes?.HeroSection;
  return (
    <div className="hero-section">
      <style jsx>{`
        .heroSection::after {
          background: linear-gradient(
              90deg,
              rgba(255, 139, 45, 0.8) 0%,
              rgba(232, 80, 91, 0.8) 57%,
              rgba(0, 0, 0, 0.8) 100%
            ),
            url(${process.env.NEXT_PUBLIC_API_BASE_URL}${heroSection?.HeroImage
              ?.data?.attributes?.url});
        }
      `}</style>
      {/* Hero Section */}
      <Logo />

      {/* Our Philosophy: */}
      <div className="h-[1220px] z-30 relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
        <div className="z-50 relative text-center about-hero-text">
          <p className="text-[75px] text-white font-bold w-[100%] m-auto text-center tablet:w-full laptop:text-[50px]">
            {heroSection?.Description}
          </p>
          <div className="py-16">
            <Link href={String(heroSection?.ButtonUrl)}>
              <button className="bg-white h-[70px] px-[45px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                <span className="heroButtonGradient text24 button">{`${heroSection?.ButtonText}`}</span>
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
export default AboutHero;
