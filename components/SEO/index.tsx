import Head from "next/head";
import React from "react";
import useFetch from "../../hooks/useFetch";

export const SEO = ({ title, description, image }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image}`}
      />
    </Head>
  );
};
