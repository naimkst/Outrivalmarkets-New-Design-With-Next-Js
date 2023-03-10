import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BlogSec from "../../components/BlogSec";
import Oriented from "../../components/Oriented/Oriented";
import arrow from "/public/assets/images/arrow.svg";

export default function SingleBlog() {
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
        <div className="h-[1220px] relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4 pt-[50px]">
          <div className="z-50 relative text-center about-hero-text">
            <div className="max-w-[960px]">
              <p className="text-white/70 text-[40px] font-Impact mb-[20px] !capitalize">
                Published on <span className="font-bold"> November 15th</span>
              </p>
              <h2 className="text-[88px] text-white font-Impact uppercase">
                The Simple Art of Not Being Miserable
              </h2>

              <div className="flex items-center justify-evenly max-w-[370px] m-auto pt-[30px]">
                <div className="flex items-center gap-[15px]">
                  <Image
                    src={"/assets/images/blog/book.png"}
                    alt="books"
                    height={35}
                    width={35}
                  />
                  <p className="text-[18] font-Impact text-white m-0">
                    10 Min Read
                  </p>
                </div>
                <span className="h-[39px] w-[1px] bg-[#FFFFFF]"></span>
                <div className="flex items-center gap-[20px]">
                  <Image
                    src={"/assets/images/blog/bookmark.png"}
                    alt="books"
                    height={29}
                    width={16}
                  />
                  <p className="text-[18] font-Impact text-white m-0">
                    10 Min Read
                  </p>
                </div>
              </div>
            </div>
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

      <div className=" max-w-[1292px] pt-[0px] m-auto">
        <div className="container m-auto">
          <div className="pt-[98px] blogContainer m-auto tablet:pt-[50px]">
            <div>
              <img
                src={"/assets/images/blog/blog03.jpg"}
                alt="blog title"
                className="mb-[80px]"
              />
            </div>
            <p className="text-black text-[35px] leading-[46.5px] font-Impact">
              In Herman Hesse’s novel Siddhartha, the title character and his
              friend leave home, disowning all possessions, to seek spiritual
              enlightenment. <br /> <br />
              They decide to live on the road, homeless, journeying away from
              the known towards the unknown. It’s not a life of ease, but it is
              one they embrace. <br />
              <br />
              When they are hungry, they fast. When they are unoccupied, they
              meditate. When they are looking for answers, they wait. And as
              they move from place to place, they get more and more fixated on
              their goal. <br />
              <br />
              Eventually, however, they separate — it occurs due to their
              meeting with the Buddha himself. After hearing the legends about
              the Enlightened One and then seeking him out, they are both
              impressed with his calm poise and the simple profundity of his
              teachings. The friend, Govinda, stays behind to become his
              student, while Siddhartha — although appreciating what he has
              learned — decides to continue on a more individualistic pursuit.{" "}
              <br />
              <br />
              This pursuit takes him through both space and time: He settles
              down in a city, falls for a woman, and over the years, becomes a
              successful businessman. This, of course, doesn’t fulfill him
              either, so he leaves. His next stop, his final stop, is a small
              home by a river where he lives with a ferryman.
            </p>
          </div>
        </div>
      </div>

      <Oriented />
      <BlogSec />
    </div>
  );
}
