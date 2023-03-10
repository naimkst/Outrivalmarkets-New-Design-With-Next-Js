import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogSec from "../../components/blog";
import Oriented from "../../components/Oriented/Oriented";
import Portfolios from "../../api/portfolio";
import PortfolioHero from "./portfolio-component/PortfolioHero";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PortfolioSinglePage = ({ props, slug }: any) => {
  const router = useRouter();
  const [service, setService] = useState<any>();
  const [url, setUrl] = useState<any>();

  const PortfolioDetails = Portfolios.find(
    (item) => item.slug === router.query.slug
  );

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolios/${slug}?populate=deep`
  );
  const {
    loading: singleLoading,
    error: singleError,
    data: singleDatas,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/single-portfolio?populate=deep`
  );
  const singleData: any = singleDatas;

  const {
    loading: loadingPortfolio,
    error: errorPortfolio,
    data: dataList,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=deep`);
  const Portfolio: any = dataList;

  useEffect(() => {
    setService(data);
    setUrl(router.query.slug);
  }, [data, router.query.slug]);

  console.log(Portfolio);

  return (
    <Fragment>
      <PortfolioHero
        data={service?.data?.attributes}
        heroImage={singleData?.data?.attributes?.HeroBackground}
      />
      <div className="portfolio-single" id="portfolio">
        <div className="container">
          <div className="portfolio-features">
            <ul>
              <li>
                <span>SERVICES</span> {service?.data?.attributes?.Services}
              </li>
              <li>
                <span>Year</span>
                {service?.data?.attributes?.Year}
              </li>
              <li>
                <span>Industry</span>
                {service?.data?.attributes?.Industry}
              </li>
            </ul>
          </div>
          <div className="portfolio-img">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                service?.data?.attributes?.Thumbnail?.data?.attributes?.url
                  ? service?.data?.attributes?.Thumbnail?.data?.attributes?.url
                  : ""
              }`}
              alt=""
              width={
                service?.data?.attributes?.Thumbnail?.data?.attributes?.width
                  ? service?.data?.attributes?.Thumbnail?.data?.attributes
                      ?.width
                  : 1920
              }
              height={
                service?.data?.attributes?.Thumbnail?.data?.attributes?.height
                  ? service?.data?.attributes?.Thumbnail?.data?.attributes
                      ?.height
                  : 1920
              }
            />
          </div>

          <div className="portfolio-single-text">
            <ReactMarkdown>{`${service?.data?.attributes?.Description}`}</ReactMarkdown>
          </div>

          <div className="portfolio-single-img-wrap">
            <div className="row">
              {service?.data?.attributes?.TwoImage?.data?.map(
                (item: any, index: number) => (
                  <div
                    key={`singleprt${index}`}
                    className="col-lg-6 col col-12"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.url}`}
                      alt=""
                      width={
                        item?.attributes?.Thumbnail?.data?.attributes?.width
                          ? item?.attributes?.Thumbnail?.data?.attributes?.width
                          : 1000
                      }
                      height={
                        item?.attributes?.Thumbnail?.data?.attributes?.height
                          ? item?.attributes?.Thumbnail?.data?.attributes
                              ?.height
                          : 1000
                      }
                    />
                  </div>
                )
              )}

              <div className="col-lg-12 col col-12">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    service?.data?.attributes?.SingleBigImage?.data?.attributes
                      ?.url
                      ? service?.data?.attributes?.SingleBigImage?.data
                          ?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    service?.data?.attributes?.SingleBigImage?.data?.attributes
                      ?.Thumbnail?.data?.attributes?.width
                      ? service?.data?.attributes?.SingleBigImage?.data
                          ?.attributes?.Thumbnail?.data?.attributes?.width
                      : 1920
                  }
                  height={
                    service?.data?.attributes?.SingleBigImage?.data?.attributes
                      ?.Thumbnail?.data?.attributes?.height
                      ? service?.data?.attributes?.SingleBigImage?.data
                          ?.attributes?.Thumbnail?.data?.attributes?.height
                      : 1920
                  }
                />
              </div>
            </div>
          </div>

          <div className="portfolio-section s2">
            <div className="sec-title">
              <span className="sectionTitle s2 text44">
                {singleData?.data?.attributes?.MoreProjectTitle}
              </span>
            </div>
            <div className="sortable-gallery">
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-grids gallery-container clearfix">
                    <div className="filter-container">
                      {Portfolio?.data
                        ?.slice(0, 2)
                        .map((item: any, index: number) => (
                          <div
                            className={`grid filter-item ${item?.attributes?.Title}`}
                            key={`citem${index}`}
                          >
                            <div className="img-holder">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                                  item?.attributes?.Thumbnail?.data?.attributes
                                    ?.url
                                    ? item?.attributes?.Thumbnail?.data
                                        ?.attributes?.url
                                    : ""
                                }`}
                                className="img img-responsive"
                                alt=""
                                width={
                                  item?.attributes?.Thumbnail?.data?.attributes
                                    ?.Thumbnail?.data?.attributes?.width
                                    ? item?.attributes?.Thumbnail?.data
                                        ?.attributes?.Thumbnail?.data
                                        ?.attributes?.width
                                    : 1920
                                }
                                height={
                                  item?.attributes?.Thumbnail?.data?.attributes
                                    ?.Thumbnail?.data?.attributes?.height
                                    ? item?.attributes?.Thumbnail?.data
                                        ?.attributes?.Thumbnail?.data
                                        ?.attributes?.height
                                    : 1920
                                }
                              />
                              <div className="portfolio-content">
                                <h2>
                                  <Link
                                    onClick={ClickHandler}
                                    href={`/portfolio-single/${item?.id}`}
                                    as={`/portfolio-single/${item?.id}`}
                                  >
                                    {item?.attributes?.Title}
                                  </Link>
                                </h2>
                                <span>{item?.attributes?.ShortTitle}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Oriented data={singleData} />
      <BlogSec />
    </Fragment>
  );
};
export default PortfolioSinglePage;
export async function getServerSideProps(context: any) {
  console.log(context.params.slug);
  return {
    props: {
      slug: context.params.slug,
    }, // will be passed to the page component as props
  };
}
