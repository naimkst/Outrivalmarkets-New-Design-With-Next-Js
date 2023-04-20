import React from "react";
import Image from "next/image";
import cImg from "/public/assets/images/graphic.jpg";
import shape from "/public/assets/images/about-shape.png";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const GraphicDesign = ({ data }: any) => {
  const graphicsDesign = data?.data?.attributes?.graphicsDesign;

  return (
    <div className="web-graphic-section section-padding">
      <div className="container">
        <div className="web-graphic-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="web-graphic-img d-none d-lg-block">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    graphicsDesign?.Image?.data?.attributes?.url
                      ? graphicsDesign?.Image?.data?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    graphicsDesign?.Image?.data?.attributes?.width
                      ? graphicsDesign?.Image?.data?.attributes?.width
                      : 100
                  }
                  height={
                    graphicsDesign?.Image?.data?.attributes?.height
                      ? graphicsDesign?.Image?.data?.attributes?.height
                      : 100
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="web-graphic-text">
                <span className="sectionTitle s2 text44">
                  {graphicsDesign?.ServiceName}
                </span>
                <h2>{graphicsDesign?.ServiceTitle}</h2>
                <div className="web-creation-img d-block d-lg-none">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      graphicsDesign?.Image?.data?.attributes?.url
                        ? graphicsDesign?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={
                      graphicsDesign?.Image?.data?.attributes?.width
                        ? graphicsDesign?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      graphicsDesign?.Image?.data?.attributes?.height
                        ? graphicsDesign?.Image?.data?.attributes?.height
                        : 100
                    }
                  />
                </div>
                <ReactMarkdown>{`${graphicsDesign?.ShortDescription}`}</ReactMarkdown>
                <Link
                  href={String(graphicsDesign?.ButtonUrl)}
                  className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]"
                >
                  {graphicsDesign?.ButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-text v2">
        <h2>2</h2>
      </div>
      <div className="left-shape">
        <Image src={shape} alt="" />
      </div>
    </div>
  );
};
export default GraphicDesign;
