import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useFetch from "../../hooks/useFetch";

const BlogSec = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep`
  );
  const {
    loading: allLoading,
    error: allError,
    data: allBlog,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep&?pagination[page]=1&pagination[pageSize]=2`
  );

  const blog: any = allBlog;
  const settings: any = data;

  console.log("###", blog);
  return (
    <div className="blogSection pt-[100px] md:pb-[140px] pb-[60px] bg-auto md:px-0 px-10 mt-[150px] overflow-x-hidden tablet:px-5 tablet:text-center phone:my-12">
      <div className="absolute -right-[200px] top-0 z-50">
        <img src="/assets/images/video-shape.png" alt="" />
      </div>
      <div className="m-auto max-w-[1307px] container z-50">
        <div>
          <div className="blog-title max-w-[830px]">
            <span className="text-[18px] leading-[28px] font-[600] text-white">
              {settings?.data?.attributes?.Settings?.OurBlogTitle}
            </span>
            <h2 className="md:text-[42px] text-[35px] md:leading-[52px] leading-[40px] font-bold text-white py-2">
              {settings?.data?.attributes?.Settings?.BlogSubTitle}
            </h2>
            <p className="text-[22px] leading-[32px] text-white">
              {settings?.data?.attributes?.Settings?.BlogDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 phone:grid-cols-1 gap-8 mt-16 tablet:grid-cols-1 tablet:text-left">
            {blog?.data?.map((item: any, index: number) => (
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid md:grid-cols-2 grid-cols-1 items-center justify-start gap-3 blog-item">
                <div className="imageFull">
                  <Image
                    className="imgHover rounded-[10px]"
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      item?.attributes?.Thumbnail?.data?.attributes?.url
                        ? item?.attributes?.Thumbnail?.data?.attributes?.url
                        : ""
                    }`}
                    alt="Blog Image"
                    height={800}
                    width={800}
                  />
                </div>
                <div>
                  <span className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    {moment(item?.attributes?.publishedAt).format("MMM Do YY")}
                  </span>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    {item?.attributes?.Title}
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    {item?.attributes?.Description?.substring(0, 80)}
                    ...
                  </p>
                  <Link href={`/blog/${item?.id}`}>
                    <p className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href={String(
              settings?.data?.attributes?.Settings?.BlogReadMoreLink
            )}
          >
            <button className="bg-white py-[20px] px-[70px] text-[18px] text-[#FF8B2D] font-bold rounded-[7px] hover:bg-[#090D48]">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogSec;
