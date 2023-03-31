import Image from "next/image";
import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const OurPhilosophy = ({ data }: any) => {
  const ourPhilosophy = data?.data?.attributes?.OurPhilosophy;
  const VideoSection = data?.data?.attributes?.VideoSection;

  console.log("VideoSection", VideoSection);
  return (
    <>
      <div className="container m-auto text-center py-14 w-[70%] phone:w-full phone:px-4 philosophy">
        <h2 className="sectionTitle text44">{ourPhilosophy?.SectionTitle}</h2>
        <p className="text64 font-bold">{ourPhilosophy?.Description}</p>
      </div>

      {VideoSection?.isShow && (
        <div className="container">
          <div className="max-w-[1166px] m-auto">
            <h2 className="sectionTitle text44 text-center">
              {VideoSection?.Title}
            </h2>
            <ReactMarkdown className="text64 font-bold text-center">{`${VideoSection?.Description}`}</ReactMarkdown>
          </div>

          <VideoModal videoLink={VideoSection?.VideoId} />
        </div>
      )}
    </>
  );
};
