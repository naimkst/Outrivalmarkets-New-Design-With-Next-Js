import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const CreativeMindSection = ({ data }: any) => {
  const CreativeMinds = data?.data?.attributes?.CreativeMinds;

  return (
    <div className="relative py-[100px] creative">
      <div className="w-[70%] m-auto text-center tablet:w-full tablet:px-5 phone:px-4 creative-inner">
        
        <ReactMarkdown>{`${CreativeMinds?.Description}`}</ReactMarkdown>

        <Link href={String(CreativeMinds?.ButtonUrl)}>
          <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[45px]">
            <span className="text-white">{`${CreativeMinds?.ButtonText}`}</span>
          </button>
        </Link>
      </div>

      <div className="absolute line-shape right-0 top-[5%] z-50 tablet:hidden">
        <img src="/assets/images/bulb-color.png" alt="" />
      </div>
      <div className="absolute line-shape left-0 bottom-[5%] z-50">
        <img src="/assets/images/singleShap.png" alt="" />
      </div>
      <div className="absolute line-shape right-0 top-[15%] z-50">
        <img src="/assets/images/singleShap02.png" alt="" />
      </div>
    </div>
  );
};
