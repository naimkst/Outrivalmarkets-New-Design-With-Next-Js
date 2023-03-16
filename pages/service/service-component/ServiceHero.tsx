import Link from "next/link";
import React, { useEffect } from "react";
import { Logo } from "../../../components/Navigation/logo";

const ServiceHero = ({ data }: any) => {
  const [video, setVideo] = React.useState<any>(null);
  const HeroSection = data?.data?.attributes?.HeroSection;

  useEffect(() => {
    setTimeout(() => {
      setVideo(HeroSection?.Video?.data?.attributes?.url);
    }, 1000);
  }, [data]);

  return (
    <div className="hero-section service-hero">
      {video && (
        <video
          autoPlay={true}
          muted
          loop
          id="myVideo"
          className="w-full absolute z-40 h-[100vh] object-cover video-bg opacity-20"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video ? video : ""}`}
            type="video/mp4"
          />
        </video>
      )}

      <style jsx>{`
        .heroSection::after {
          background: linear-gradient(
              90deg,
              rgba(255, 139, 45, 0.8) 0%,
              rgba(232, 80, 91, 0.8) 57%,
              rgba(0, 0, 0, 0.8) 100%
            ),
            url(${process.env.NEXT_PUBLIC_API_BASE_URL}${HeroSection?.HeroImage
              ?.data?.attributes?.url});
        }
      `}</style>

      {/* Hero Section */}
      <Logo />

      {/* Our Philosophy: */}
      <div className="h-[1220px] relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
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
