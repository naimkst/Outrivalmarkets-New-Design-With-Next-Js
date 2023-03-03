import React from "react";
import BlogSec from "../../components/blog";
import Oriented from "../../components/Oriented/Oriented";
import useFetch from "../../hooks/useFetch";
import EmailMarketing from "./service-component/EmailMarketing";
import GraphicDesign from "./service-component/GraphicDesign";
import Marketing from "./service-component/Marketing";
import SeoMarketing from "./service-component/SeoMarketing";
import ServiceHero from "./service-component/ServiceHero";
import WebsiteCreation from "./service-component/WebsiteCreation";

const ServicePage = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/service-page?populate=deep`
  );
  return (
    <div>
      <ServiceHero data={data} />
      <WebsiteCreation data={data} />
      <GraphicDesign data={data} />
      <Marketing data={data} />
      <SeoMarketing data={data} />
      <EmailMarketing data={data} />
      <Oriented data={data} />
      <BlogSec />
    </div>
  );
};
export default ServicePage;
