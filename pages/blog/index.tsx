import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BlogCardSection } from "../../components/Blog/BlogCardSection";
import { NewArticleSection } from "../../components/Blog/NewArticleSection";
import BlogSec from "../../components/BlogSec";
import Oriented from "../../components/Oriented/Oriented";
import arrow from "/public/assets/images/arrow.svg";

const Blog = () => {
  return (
    <div>
      <div className="hero-section portfolio-hero">
        <style jsx>{`
          .heroSection::after {
            background: linear-gradient(
                90deg,
                rgba(255, 139, 45, 0.8) 0%,
                rgba(232, 80, 91, 0.8) 57%,
                rgba(0, 0, 0, 0.8) 100%
              ),
              url(${process.env.NEXT_PUBLIC_API_BASE_URL});
          }
        `}</style>
        {/* Hero Section */}
        <div className="absolute inset-0 flex justify-center z-50 top-2 logo">
          <Link href={"/"}></Link>
          <div className="">
            <img
              className="w-[200px] phone:w-[120px]"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </div>
        </div>

        {/* Our Philosophy: */}
        <div className="h-[1220px] relative flex items-center justify-center heroSection phone:min-h-[300px] phone:px-4">
          <div className="z-50 relative text-center about-hero-text">
            <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
              {"Placerat"}
            </p>
            <span className="phone:!text-[20px]">
              {"Facilisis lobortis quis faucibus"}
            </span>
            <div className="py-16 arrow-sec">
              <AnchorLink className="arrow-btn" href="#blog">
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

      <BlogCardSection />
      <div>
        <img src="/assets/images/about/full-shape.svg" alt="" />
      </div>
      <NewArticleSection />
      <Oriented />
      <BlogSec />
    </div>
  );
};
export default Blog;
