import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const WebsiteCreation = ({ data }: any) => {
  const OurServices = data?.data?.attributes?.OurServices;

  return (
    <div className="web-creation-section section-padding" id="websites">
      <div className="container">
        <div className="web-creation-wrap">
          <div className="web-creation-top">
            <div className="row">
              <div className="col-lg-7 order-lg-1 order-2">
                <div className="web-creation-text">
                  <span className="sectionTitle s2 text44">
                    {OurServices?.ServiceName}
                  </span>
                  <h3>{OurServices?.ServiceTitle}</h3>
                  <div className="web-creation-img d-block d-lg-none">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                        OurServices?.Image?.data?.attributes?.url
                          ? OurServices?.Image?.data?.attributes?.url
                          : ""
                      }`}
                      alt=""
                      width={
                        OurServices?.Image?.data?.attributes?.width
                          ? OurServices?.Image?.data?.attributes?.width
                          : 100
                      }
                      height={
                        OurServices?.Image?.data?.attributes?.height
                          ? OurServices?.Image?.data?.attributes?.height
                          : 100
                      }
                    />
                  </div>

                  <ReactMarkdown>{`${OurServices?.ShortDescription}`}</ReactMarkdown>
                </div>
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="web-creation-img d-none d-lg-block">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      OurServices?.Image?.data?.attributes?.url
                        ? OurServices?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={
                      OurServices?.Image?.data?.attributes?.width
                        ? OurServices?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      OurServices?.Image?.data?.attributes?.height
                        ? OurServices?.Image?.data?.attributes?.height
                        : 100
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <ReactMarkdown>{`${OurServices?.Description}`}</ReactMarkdown>

          <Link
            href={String(OurServices?.ButtonUrl)}
            className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]"
          >
            {OurServices?.ButtonText}
          </Link>
        </div>
      </div>
      <div className="visible-text">
        <h2>1</h2>
      </div>
    </div>
  );
};
export default WebsiteCreation;
