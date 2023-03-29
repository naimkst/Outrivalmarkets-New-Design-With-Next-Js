import React from "react";
import Loader from "react-loaders";

export const Loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center w-full">
      <Loader
        type="line-scale-pulse-out-rapid"
        active={true}
        //@ts-ignore
        color={"#ff8b2d"}
      />
    </div>
  );
};
