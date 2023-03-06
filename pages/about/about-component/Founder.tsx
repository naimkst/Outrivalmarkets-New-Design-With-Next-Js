import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Founder = ({ data }: any) => {
  const OurFounder = data?.data?.attributes?.OurFounder;

  return (
    <div className="founder-section">
      <div className="container">
        <div className="founder-text">
          <span className="sectionTitle text44">
            {OurFounder?.SectionTitle}
          </span>
          <div>
            
            <ReactMarkdown>{`${OurFounder?.Description}`}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Founder;
