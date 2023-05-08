import React from "react";
import Image from "next/image";
import team1 from "/public/assets/images/team.png";
import useFetch from "../../../hooks/useFetch";

const Teams = [
  {
    Id: "1",
    tImg: team1,
    name: "Ahron",
    title: "Founder, CEO, Marketing Director",
  },
  {
    Id: "2",
    tImg: team1,
    name: "Naim",
    title: "Senior Web Developer",
    gdClass: "gradient-bg",
  },
  {
    Id: "3",
    tImg: team1,
    name: "Esther",
    title: "Director, Sales",
  },
  {
    Id: "4",
    tImg: team1,
    name: "Rachel",
    title: "Lead Content Writer",
    gdClass: "gradient-bg",
  },
  {
    Id: "5",
    tImg: team1,
    name: "Sofia",
    title: "Lead PPC and ads Strategist",
  },
  {
    Id: "6",
    tImg: team1,
    name: "Kumar",
    title: "Master Graphic Designer",
    gdClass: "gradient-bg",
  },
  {
    Id: "7",
    tImg: team1,
    name: "Junaid",
    title: "UI/UX Strategist Designer",
    gdClass: "gradient-bg",
  },
];

const TeamMember = ({ data }: any) => {
  const {
    loading,
    error,
    data: tamList,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/teams?populate=deep`);
  const TeamMember = data?.data?.attributes?.TeamMember;

  const Teams: any = tamList;

  return (
    <section className="team-section">
      <div className="container">
        <h5 className="sectionTitle text44">{TeamMember?.Title}</h5>
        <div className="team-wrap">
          <div className="row justify-content-center">
            {Teams?.data?.map((team: any, aitem: any) => (
              <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                <div className={`team-item gradient-bg`}>
                  <div className="team-img">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                        team?.attributes?.Image?.data?.attributes?.url
                          ? team?.attributes?.Image?.data?.attributes?.url
                          : ""
                      }`}
                      alt=""
                      height={
                        team?.attributes?.Image?.data?.attributes?.height
                          ? team?.attributes?.Image?.data?.attributes?.height
                          : 1024
                      }
                      width={
                        team?.attributes?.Image?.data?.attributes?.width
                          ? team?.attributes?.Image?.data?.attributes?.width
                          : 1920
                      }
                    />
                  </div>
                  <div className="team-text">
                    <h2>{team?.attributes?.Name}</h2>
                    <span>{team?.attributes?.Designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamMember;
