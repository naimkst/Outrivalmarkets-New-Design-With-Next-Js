import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoModal = ({ videoLink }: any) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        //@ts-ignore
        autoplay="1"
        controls="0"
        showinfo="0"
        isOpen={isOpen}
        videoId={videoLink}
        // url={videoLink}
        onClose={() => setOpen(false)}
      />

      <div className="m-auto relative">
        <img
          onClick={() => setOpen(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] phone:w-[50px]"
          src="/assets/images/Play-Button.webp"
          alt=""
        />
        <Image
          width={1359}
          height={747}
          src={"/assets/images/video.png"}
          alt="video"
          className=""
        />
      </div>
    </>
  );
};

export default VideoModal;
