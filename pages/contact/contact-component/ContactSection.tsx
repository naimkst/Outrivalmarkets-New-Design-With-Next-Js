import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const Contactpage = () => {
  return (
    <section className="contact-pg-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="contact-title">
              <h2 className="uppercase netArticleTitle text44">
                Have Any Question?
              </h2>
              <p className="font-Impact text40 !leading-[50px]">
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div className="contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="contact-map-section">
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
