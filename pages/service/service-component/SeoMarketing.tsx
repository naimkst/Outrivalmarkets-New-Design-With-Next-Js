import React from "react";
import Image from "next/image";
import cImg from "/public/assets/images/seo.jpg";
import shape from "/public/assets/images/video-shape.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SeoMarketing = ({ data }: any) => {
  const SEOService = data?.data?.attributes?.SEOService;

  return (
    <div className="marketing-section seo section-padding" id="SEOService">
      <div className="container">
        <div className="marketing-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="marketing-img d-none d-lg-block">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    SEOService?.Image?.data?.attributes?.url
                      ? SEOService?.Image?.data?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    SEOService?.Image?.data?.attributes?.width
                      ? SEOService?.Image?.data?.attributes?.width
                      : 100
                  }
                  height={
                    SEOService?.Image?.data?.attributes?.height
                      ? SEOService?.Image?.data?.attributes?.height
                      : 100
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="marketing-text">
                <span className="sectionTitle s2 text44">
                  {" "}
                  {SEOService?.ServiceName}
                </span>
                <h2>{SEOService?.ServiceTitle}</h2>
                <div className="web-creation-img d-block d-lg-none">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      SEOService?.Image?.data?.attributes?.url
                        ? SEOService?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={
                      SEOService?.Image?.data?.attributes?.width
                        ? SEOService?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      SEOService?.Image?.data?.attributes?.height
                        ? SEOService?.Image?.data?.attributes?.height
                        : 100
                    }
                  />
                </div>
                <ReactMarkdown>{`${SEOService?.ShortDescription}`}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-text v2">
        <h2>4</h2>
      </div>
      <div className="left-shape">
        <Image src={shape} alt="" />
      </div>
    </div>
  );
};
export default SeoMarketing;
