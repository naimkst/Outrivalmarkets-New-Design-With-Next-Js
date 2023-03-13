import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BlogSec from "../../components/BlogSec";
import { BrandSection } from "../../components/component/BrandSection";
import Oriented from "../../components/Oriented/Oriented";
import useFetch from "../../hooks/useFetch";
import arrow from "/public/assets/images/arrow.svg";
import shape from "/public/assets/images/video-shape.png";

export default function SingleBlog({ id }: any) {
  const router = useRouter();
  const [blog, setBlog] = useState<any>();
  const [url, setUrl] = useState<any>();
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}?populate=deep`
  );

  const {
    loading: singleBlogLoading,
    error: singleBlogErrors,
    data: singleBlogData,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/single-blog?populate=deep`);
  const singlePageData: any = singleBlogData;

  useEffect(() => {
    setBlog(data);
    setUrl(router.query.id);
  }, [data, router.query.id]);

  console.log(singlePageData, "blog");

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
              url(${process.env.NEXT_PUBLIC_API_BASE_URL}${blog?.data
                ?.attributes?.BannerImage?.data?.attributes?.url});
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
                Published on{" "}
                <span className="font-bold">
                  {" "}
                  {moment(blog?.data?.attributes?.publishedAt).format(
                    "MMM Do YY"
                  )}
                </span>
              </p>
              <h2 className="text-[88px] text-white font-Impact uppercase">
                {blog?.data?.attributes?.Title}
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
                    {blog?.data?.attributes?.MinRead}
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
                    BookMark
                  </p>
                </div>
              </div>
            </div>
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

      <div className=" max-w-[1292px] pt-[0px] m-auto" id="blog">
        <div className="container m-auto">
          <div className="pt-[98px] blogContainer m-auto tablet:pt-[50px]">
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                  blog?.data?.attributes?.Thumbnail?.data?.attributes?.url
                    ? blog?.data?.attributes?.Thumbnail?.data?.attributes?.url
                    : ""
                }`}
                height={1080}
                width={1920}
                alt="blog title"
                className="mb-[80px]"
              />
            </div>
            <ReactMarkdown className="blog-content">{`${blog?.data?.attributes?.Description}`}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="brand-sec relative  container rounded-[20px] w-[80%] text-center z-50 tablet:w-full tablet:px-5 tablet:mt-12 tablet:overflow-hidden mt-10 mb-[50px]">
        <div className="aboutBackground">
          <div className="py-[52px] px-[100px] phone:px-4">
            <p className="para text-white phone:text-[40px]">
              {singlePageData?.data?.attributes?.BrandAwareness?.Title}
            </p>

            <p className="text25 text-white w-[70%] m-auto py-[20px] phone:w-full phone:px-0 tablet:w-full tablet:px-0">
              {singlePageData?.data?.attributes?.BrandAwareness?.Description}
            </p>
            <div className="pt-10">
              <Link
                href={String(
                  singlePageData?.data?.attributes?.BrandAwareness?.ButtonUrl
                )}
              >
                <button className="bg-white h-[70px] px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                  <p className="heroButtonGradient text24">{`${singlePageData?.data?.attributes?.BrandAwareness?.ButtonText}`}</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marketing-section seo section-padding">
        <div className="container">
          <div className="marketing-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="marketing-img d-none d-lg-block">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      blog?.data?.attributes?.BlogLeftImage?.data?.attributes
                        ?.url
                        ? blog?.data?.attributes?.BlogLeftImage?.data
                            ?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="marketing-text">
                  <div className="web-creation-img d-block d-lg-none">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                        blog?.data?.attributes?.BlogLeftImage?.data?.attributes
                          ?.url
                          ? blog?.data?.attributes?.BlogLeftImage?.data
                              ?.attributes?.url
                          : ""
                      }`}
                      alt=""
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <ReactMarkdown>{`${blog?.data?.attributes?.BlogRightContent}`}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-shape">
          <Image src={shape} alt="" />
        </div>
      </div>

      <div className=" max-w-[1292px] pt-[0px] m-auto" id="blog">
        <div className="container m-auto">
          <div className="pt-[98px] blogContainer m-auto tablet:pt-[50px]">
            <ReactMarkdown className="blog-content">{`${blog?.data?.attributes?.BottomContent}`}</ReactMarkdown>
          </div>
        </div>
      </div>

      <Oriented data={singlePageData} />
      <BlogSec />
    </div>
  );
}
export async function getServerSideProps(context: any) {
  console.log(context.params.id);
  return {
    props: {
      id: context.params.id,
    }, // will be passed to the page component as props
  };
}
