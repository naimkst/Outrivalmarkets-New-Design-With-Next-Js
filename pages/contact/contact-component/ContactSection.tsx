import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const Contactpage = ({ data }: any) => {
  return (
    <section className="contact-pg-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="contact-title">
              <h2 className="uppercase netArticleTitle text44">
                {data?.data?.attributes?.ContactTitle}
              </h2>
              <p className="font-Impact text40 !leading-[50px]">
                {data?.data?.attributes?.ContactDescription}
              </p>
            </div>
            <div className="contact-form-area">
              <ContactForm data={data} />
            </div>
          </div>
        </div>
      </div>
      <section className="contact-map-section">
        <div className="contact-map">
          <iframe src={data?.data?.attributes?.MapLink}></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
