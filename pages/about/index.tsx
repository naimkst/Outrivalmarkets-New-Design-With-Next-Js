import React from "react";
import BlogSec from "../../components/BlogSec";
import Oriented from "../../components/Oriented/Oriented";
import useFetch from "../../hooks/useFetch";
import AboutHero from "./about-component/AboutHero";
import Founder from "./about-component/Founder";
import TeamAbout from "./about-component/TeamAbout";
import TeamInfo from "./about-component/TeamInfo";
import TeamMember from "./about-component/TeamMember";

const AboutPage = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/about-page?populate=deep`
  );
  return (
    <div>
      <AboutHero data={data} />
      <TeamAbout data={data} />
      <Founder data={data} />
      <TeamInfo data={data} />
      <TeamMember data={data} />
      <Oriented data={data} />
      <BlogSec />
    </div>
  );
};
export default AboutPage;
