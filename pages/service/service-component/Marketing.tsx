import React from "react";
import Image from "next/image";
import cImg from "/public/assets/images/marketing.jpg";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Marketing = ({ data }: any) => {
  const MarketingStrategies = data?.data?.attributes?.MarketingStrategies;

  return (
    <div className="marketing-section section-padding">
      <div className="container">
        <div className="marketing-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="marketing-text">
                <span className="sectionTitle s2 text44">
                  {MarketingStrategies?.ServiceName}
                </span>
                <h2>{MarketingStrategies?.ServiceTitle}</h2>
                <div className="web-creation-img d-block d-lg-none">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      MarketingStrategies?.Image?.data?.attributes?.url
                        ? MarketingStrategies?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={
                      MarketingStrategies?.Image?.data?.attributes?.width
                        ? MarketingStrategies?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      MarketingStrategies?.Image?.data?.attributes?.height
                        ? MarketingStrategies?.Image?.data?.attributes?.height
                        : 100
                    }
                  />
                </div>
                <p>{`We know that creating a website and designing some graphics is only half the battle. That's why we also offer marketing strategizing to combine all of our services and set forth a compelling marketing strategy that will make you the talk of the town.`}</p>

                <ReactMarkdown>{`${MarketingStrategies?.ShortDescription}`}</ReactMarkdown>

                <Link
                  href={String(MarketingStrategies?.ButtonUrl)}
                  className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]"
                >
                  {MarketingStrategies?.ButtonText}
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="marketing-img d-none d-lg-block">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    MarketingStrategies?.Image?.data?.attributes?.url
                      ? MarketingStrategies?.Image?.data?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    MarketingStrategies?.Image?.data?.attributes?.width
                      ? MarketingStrategies?.Image?.data?.attributes?.width
                      : 100
                  }
                  height={
                    MarketingStrategies?.Image?.data?.attributes?.height
                      ? MarketingStrategies?.Image?.data?.attributes?.height
                      : 100
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-text">
        <h2>3</h2>
      </div>
    </div>
  );
};
export default Marketing;
