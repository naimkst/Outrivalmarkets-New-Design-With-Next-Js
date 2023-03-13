import React from "react";
import useFetch from "../../hooks/useFetch";
import ContactHero from "./contact-component/ContactHero";
import Contactpage from "./contact-component/ContactSection";

const PortfolioPage = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contact-us?populate=deep`
  );
  return (
    <div>
      <ContactHero data={data} />
      <Contactpage data={data} />
    </div>
  );
};
export default PortfolioPage;
