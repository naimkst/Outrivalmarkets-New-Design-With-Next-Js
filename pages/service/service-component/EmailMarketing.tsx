import React from "react";
import Image from "next/image";
import cImg from "/public/assets/images/email.jpg";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const EmailMarketing = ({ data }: any) => {
  const EmailMarketing = data?.data?.attributes?.EmailMarketing;

  return (
    <div className="marketing-section section-padding" id="EmailMarketing">
      <div className="container">
        <div className="marketing-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="marketing-text">
                <span className="sectionTitle s2 text44">
                  {EmailMarketing?.ServiceName}
                </span>
                <h2>{EmailMarketing?.ServiceTitle}</h2>
                <div className="web-creation-img d-block d-lg-none">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      EmailMarketing?.Image?.data?.attributes?.url
                        ? EmailMarketing?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    alt=""
                    width={
                      EmailMarketing?.Image?.data?.attributes?.width
                        ? EmailMarketing?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      EmailMarketing?.Image?.data?.attributes?.height
                        ? EmailMarketing?.Image?.data?.attributes?.height
                        : 100
                    }
                  />
                </div>

                <ReactMarkdown>{`${EmailMarketing?.ShortDescription}`}</ReactMarkdown>
                <Link
                  href={String(EmailMarketing?.ButtonUrl)}
                  className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]"
                >
                  {EmailMarketing?.ButtonText}
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="marketing-img d-none d-lg-block">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    EmailMarketing?.Image?.data?.attributes?.url
                      ? EmailMarketing?.Image?.data?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    EmailMarketing?.Image?.data?.attributes?.width
                      ? EmailMarketing?.Image?.data?.attributes?.width
                      : 100
                  }
                  height={
                    EmailMarketing?.Image?.data?.attributes?.height
                      ? EmailMarketing?.Image?.data?.attributes?.height
                      : 100
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-text">
        <h2>5</h2>
      </div>
    </div>
  );
};
export default EmailMarketing;
