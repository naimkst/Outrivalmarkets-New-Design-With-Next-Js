import React from "react";
import ReactMarkdown from "react-markdown";

export const AboutSection = ({ data }: any) => {
  const aboutSection = data?.data?.attributes?.AboutSection;

  return (
    <div className="aboutSection flex flex-col justify-center items-center text-center mt-10">
      <div className="absolute left-0 top-0 z-50 tablet:hidden">
        <img src="/assets/images/about-shape.png" alt="" />
      </div>
      <div className="relative z-50 pt-[300px] pb-[350px] tablet:pt-12 tablet:pb-12 tablet:bg-[#fff6ef]">
        <div className="w-[100%] m-auto tablet:w-full tablet:px-5 about-text">
          <ReactMarkdown children={`${aboutSection?.Description}`} />
        </div>
      </div>
    </div>
  );
};
