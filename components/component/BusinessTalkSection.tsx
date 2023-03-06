import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const BusinessTalkSection = ({ data }: any) => {
  const BusinessRegular = data?.data?.attributes?.BusinessRegular;

  return (
    <div className="relative py-[120px] bg-[#090D48] business-sec">
      <div className="w-[100%] m-auto text-center tablet:w-full tablet:px-5">
        
        <ReactMarkdown className="text40 font-bold text-white">{`${BusinessRegular?.Description}`}</ReactMarkdown>

        <div className="pt-16">
          <Link href={String(BusinessRegular?.ButtonUrl)}>
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <span className="text-white">{`${BusinessRegular?.ButtonText}`}</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute -left-[200px] bottom-[100px] z-50 tablet:hidden line-shape">
        <img src="/assets/images/about-shape.png" alt="" />
      </div>
    </div>
  );
};
