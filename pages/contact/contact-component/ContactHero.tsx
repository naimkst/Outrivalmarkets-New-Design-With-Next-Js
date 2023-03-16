import Image from "next/image";
import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Logo } from "../../../components/Navigation/logo";
import arrow from "/public/assets/images/arrow.svg";

const ContactHero = ({ data }: any) => {
  const [video, setVideo] = React.useState<any>(null);
  useEffect(() => {
    setTimeout(() => {
      setVideo(data?.data?.attributes?.Video?.data?.attributes?.url);
    }, 1000);
  }, [data]);

  return (
    <div className="hero-section portfolio-hero">
      {video && (
        <video
          autoPlay={true}
          muted
          loop
          id="myVideo"
          className="w-full absolute z-40 h-[100vh] object-cover video-bg opacity-30"
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
            url(${process.env.NEXT_PUBLIC_API_BASE_URL}${data?.data?.attributes
              ?.Image?.data?.attributes?.url});
        }
      `}</style>
      {/* Hero Section */}
      <Logo />

      {/* Our Philosophy: */}
      <div className="h-[1220px] relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
        <div className="z-50 relative text-center about-hero-text">
          <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
            {data?.data?.attributes?.Title}
          </p>
          <div className="py-16 arrow-sec">
            <span>{data?.data?.attributes?.Subtitle}</span>
            <AnchorLink className="arrow-btn" href="#contact">
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
export default ContactHero;
