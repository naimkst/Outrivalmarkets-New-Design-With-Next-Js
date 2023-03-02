import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import vshape from "/public/assets/images/about-shape.png";

const TeamAbout = ({ data }: any) => {
  const OurSmallTeam = data?.data?.attributes?.OurSmallTeam;

  return (
    <div className="team-about-section">
      <div className="container">
        <div className="team-about-text">
          <div className="team-about-text-top">
            <span className="sectionTitle text44">
              <ReactMarkdown
                children={`${OurSmallTeam?.Title}`}
                className="sectionTitle text44"
              />
            </span>
            <ReactMarkdown
              children={`${OurSmallTeam?.ShortDescription}`}
              className=""
            />
          </div>

          <div>
            <ReactMarkdown
              children={`${OurSmallTeam?.Description}`}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="shape">
        <Image src={vshape} alt="" />
      </div>
    </div>
  );
};
export default TeamAbout;
