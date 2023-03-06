import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const ConnectTodaySection = ({ data }: any) => {
  const GreatProductsSection = data?.data?.attributes?.GreatProductsSection;

  return (
    <div className="product-text flex flex-col justify-center items-center text-center mt-10 relative pb-10">
      <div className="relative z-50 pt-[100px] pb-[0px] tablet:pt-12 tablet:pb-12">
        <div className=" w-[100%] m-auto tablet:w-full tablet:px-5">
          <ReactMarkdown>{`${GreatProductsSection?.Description}`}</ReactMarkdown>
        </div>

        <div className="py-10">
          <Link href={String(GreatProductsSection?.ButtonUrl)}>
            <button className="videoButtonGradient h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <span className="text-white">{`${GreatProductsSection?.ButtonText}`}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
