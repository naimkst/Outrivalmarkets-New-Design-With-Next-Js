import React from "react";
import Portfolios from "../../../api/portfolio";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";

const PortfolioSection = ({ portfolios, category, data }: any) => {
  console.log(portfolios, "Portfolio");
  const PortfolioTitle = data?.data?.attributes?.PortfolioTitle;

  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");
  const [timer, setTimer] = React.useState(false);

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      // cleanup
      //@ts-ignore
      return () => isotope.current.destroy();
    }, 1000);
  }, []);

  // handling filter key change
  setTimeout(() => {
    setTimer(true);
  }, 1000);

  const filterData = () => {
    filterKey === "*"
      ? //@ts-ignore
        isotope?.current?.arrange({ filter: `*` })
      : //@ts-ignore
        isotope?.current?.arrange({ filter: `.${filterKey}` });
  };

  React.useEffect(() => {
    filterData();
  }, [filterKey, timer]);

  const handleFilterKeyChange = (key: any) => () => setFilterKey(key);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="sec-title">
          <span className="sectionTitle s2 text44">
            {PortfolioTitle?.Title}
          </span>
        </div>
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-filters portfolio-menu">
                <ul>
                  <li
                    onClick={handleFilterKeyChange("*")}
                    className={filterKey == "*" ? "active" : ""}
                  >
                    All
                  </li>
                  {category?.data?.map((item: any, index: number) => (
                    <li
                      className={
                        filterKey ==
                        item.attributes?.CategoryTitle.toLowerCase()
                          .trim()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/[\s_-]+/g, "-")
                          .replace(/^-+|-+$/g, "")
                          ? "active"
                          : ""
                      }
                      onClick={handleFilterKeyChange(
                        item.attributes?.CategoryTitle.toLowerCase()
                          .trim()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/[\s_-]+/g, "-")
                          .replace(/^-+|-+$/g, "")
                      )}
                      key={`cat-${index}`}
                    >
                      {item.attributes?.CategoryTitle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                <div className="filter-container">
                  {portfolios?.data?.map((item: any, index: number) => (
                    <div
                      className={`grid filter-item ${item?.attributes?.category?.data?.attributes?.CategoryTitle.toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/[\s_-]+/g, "-")
                        .replace(/^-+|-+$/g, "")}`}
                      key={`portfolio-${index}`}
                    >
                      <div className="img-holder">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                            item?.attributes?.Thumbnail?.data?.attributes?.url
                              ? item?.attributes?.Thumbnail?.data?.attributes
                                  ?.url
                              : ""
                          }`}
                          width={
                            item?.attributes?.Thumbnail?.data?.attributes?.width
                              ? item?.attributes?.Thumbnail?.data?.attributes
                                  ?.width
                              : 100
                          }
                          height={
                            item?.attributes?.Thumbnail?.data?.attributes
                              ?.height
                              ? item?.attributes?.Thumbnail?.data?.attributes
                                  ?.height
                              : 100
                          }
                          className="img img-responsive"
                          alt=""
                        />
                        <div className="portfolio-content">
                          <h2>
                            <Link
                              onClick={ClickHandler}
                              href="/portfolio-single/[slug]"
                              as={`/portfolio-single/${item?.attributes?.Title}`}
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
    </section>
  );
};

export default PortfolioSection;
