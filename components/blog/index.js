import Image from 'next/image';
import React from 'react';

const BlogSec = () => {
    return (
        <div className="blogSection pt-[100px] md:pb-[140px] pb-[60px] bg-auto md:px-0 px-10 mt-[150px] overflow-x-hidden tablet:px-5 tablet:text-center phone:my-12">
        <div className="absolute -right-[200px] top-0 z-50">
          <img src="/assets/images/video-shape.png" alt="" />
        </div>
        <div className="m-auto max-w-[1307px] container z-50">
          <div>
            <div className='blog-title'>
              <span className="text-[18px] leading-[28px] font-[600] text-white">
                Our Blog
              </span>
              <h2 className="md:text-[42px] text-[35px] md:leading-[52px] leading-[40px] font-bold text-white py-2">
                Some of our recent <br />
                blog posts
              </h2>
              <p className="text-[22px] leading-[32px] text-white">
                Subscribe to get our latest tips on how to totally conqueror
                your <br /> market, and moreover to outrival it!
              </p>
            </div>

            <div className="grid md:grid-cols-2 phone:grid-cols-1 gap-8 mt-16 tablet:grid-cols-1 tablet:text-left">
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid md:grid-cols-2 grid-cols-1 items-center justify-start gap-3 blog-item">
                <div className="imageFull">
                  <Image
                    className="imgHover"
                    src="/assets/images/blog02.png"
                    alt="Blog Image"
                    fill
                  />
                </div>
                <div>
                  <span className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </span>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                    Read More
                  </a>
                </div>
              </div>
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid md:grid-cols-2 grid-cols-1 items-center justify-start gap-3 blog-item">
                <div className="imageFull">
                  <Image
                    className="imgHover"
                    src="/assets/images/blog01.jpg"
                    alt="Blog Image"
                    fill
                  />
                </div>
                <div>
                  <p className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </p>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a className="bg-white py-[20px] px-[70px] text-[18px] text-[#FF8B2D] font-bold rounded-[7px] hover:bg-[#090D48] hover:text-white">
              See More
            </a>
          </div>
        </div>
      </div>
    )
};
export default BlogSec;

