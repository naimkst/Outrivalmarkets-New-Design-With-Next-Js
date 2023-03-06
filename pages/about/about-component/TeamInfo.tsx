import React from "react";
import Image from "next/image";
import vshape from "/public/assets/images/about-shape.png";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import useFetch from "../../../hooks/useFetch";

const TeamInfo = ({ data }: any) => {
  const OurTeam = data?.data?.attributes?.OurTeam;

  return (
    <div className="team-info-section">
      <div className="container">
        <div className="team-info-text">
          <h5 className="sectionTitle text44">{OurTeam?.Title}</h5>
          <ReactMarkdown>{`${OurTeam?.Description}`}</ReactMarkdown>

          <Link
            href={String(OurTeam?.ButtonUrl)}
            className="theme-btn videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]"
          >
            {OurTeam?.ButtonText}
          </Link>
        </div>
      </div>
      <div className="shape">
        <Image src={vshape} alt="" />
      </div>
    </div>
  );
};
export default TeamInfo;
