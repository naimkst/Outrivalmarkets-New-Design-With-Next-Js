import Link from "next/link";
import React from "react";
import useFetch from "../../hooks/useFetch";

export const Logo = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep`
  );
  const settings: any = data;

  return (
    <div className="absolute inset-0 flex justify-center z-50 top-2 logo">
      <Link href="/">
        <div>
          <img
            className="w-[200px] phone:w-[120px] cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
              settings?.data?.attributes?.Settings?.Logo?.data?.attributes?.url
                ? settings?.data?.attributes?.Settings?.Logo?.data?.attributes
                    ?.url
                : "/assets/images/logo.png"
            }`}
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
};
