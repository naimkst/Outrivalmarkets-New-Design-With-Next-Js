import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BlogCardSection } from "../../components/Blog/BlogCardSection";
import { NewArticleSection } from "../../components/Blog/NewArticleSection";
import BlogSec from "../../components/BlogSec";
import { Loading } from "../../components/Loader";
import { Logo } from "../../components/Navigation/logo";
import Oriented from "../../components/Oriented/Oriented";
import useFetch from "../../hooks/useFetch";
import arrow from "/public/assets/images/arrow.svg";

const Blog = () => {
  const {
    loading: allLoading,
    error: allError,
    data: allBlog,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep`);

  const {
    loading: singleBlogLoading,
    error: singleBlogErrors,
    data: singleBlogData,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/single-blog?populate=deep`);
  const singlePageData: any = singleBlogData;

  const {
    loading: featureLoading,
    error: featureError,
    data: featureBlog,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep&[filters][blog_category][Title][$eq]=${singlePageData?.data?.attributes?.PretiumCategory}`
  );

  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep&[filters][blog_category][Title][$ne]=${singlePageData?.data?.attributes?.PretiumCategory}&[filters][blog_category][Title][$eq]=${singlePageData?.data?.attributes?.PopularCategory}`
  );

  const blog: any = featureBlog;
  const blogs: any = data;
  const allBlogs: any = allBlog;

  if (allLoading || singleBlogLoading || featureLoading) {
    return <Loading />;
  } else {
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
                url(${process.env.NEXT_PUBLIC_API_BASE_URL}${singlePageData
                  ?.data?.attributes?.BannerImage?.data?.attributes?.url});
            }
          `}</style>
          {/* Hero Section */}
          <Logo />

          {/* Our Philosophy: */}
          <div className="h-[1220px] relative flex items-center justify-center heroSection phone:min-h-[300px] phone:px-4">
            <div className="z-50 relative text-center about-hero-text">
              <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
                {singlePageData?.data?.attributes?.Title}
              </p>
              <span className="phone:!text-[20px]">
                {singlePageData?.data?.attributes?.Subtitle}
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

        <BlogCardSection data={blog?.data} blogs={blogs?.data} />
        <div>
          <img src="/assets/images/about/full-shape.svg" alt="" />
        </div>
        <NewArticleSection
          data={allBlogs?.data}
          title={singlePageData?.data?.attributes?.NewArticlesTitle}
        />
        <Oriented data={singlePageData} />
        <BlogSec />
      </div>
    );
  }
};
export default Blog;
