import React from "react";
import BlogSec from "../../components/blog";
import Oriented from "../../components/Oriented/Oriented";
import useFetch from "../../hooks/useFetch";
import PortfolioHero from "./portfolio-component/PortfolioHero";
import PortfolioSection from "./portfolio-component/PortfolioSection";

const PortfolioPage = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio-page?populate=deep`
  );

  const {
    loading: loadingPortfolio,
    error: errorPortfolio,
    data: dataList,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=deep`);

  const {
    loading: catLoading,
    error: catError,
    data: catList,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=deep`);

  const Portfolio = dataList;
  const cat = catList;
  console.log(Portfolio, "Portfolio");
  return (
    <div>
      <PortfolioHero data={data} />
      <PortfolioSection portfolios={Portfolio} category={cat} data={data} />
      <Oriented data={data} />
      <BlogSec />
    </div>
  );
};
export default PortfolioPage;
