import { Inter } from "@next/font/google";

import BlogSec from "../components/BlogSec";
import Oriented from "../components/Oriented/Oriented";
import { HeroSection } from "../components/component/HeroSection";
import { OurPhilosophy } from "../components/component/OurPhilosophy";
import { AboutSection } from "../components/component/AboutSection";
import { ReadyToLearn } from "../components/component/ReadyToLearn";
import { TestimonialSection } from "../components/component/TestimonialSection";
import { CoverSection } from "../components/component/CoverSection";
import { BrandSection } from "../components/component/BrandSection";
import { ConnectTodaySection } from "../components/component/ConnectTodaySection";
import { BusinessTalkSection } from "../components/component/BusinessTalkSection";
import { CreativeMindSection } from "../components/component/CreativeMindSection";
import { OurProcessSection } from "../components/component/OurProcessSection";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/home-page?populate=deep`
  );
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <HeroSection data={data} />
        <OurPhilosophy data={data} />
        <AboutSection data={data} />
        <ReadyToLearn data={data} />
        <TestimonialSection data={data} />
        <CoverSection data={data} />
        <BrandSection data={data} />
        <ConnectTodaySection data={data} />
        {/* <div className="h-[726px] brandSection tablet:h-[550px]"></div> */}
        <BusinessTalkSection data={data} />
        <CreativeMindSection data={data} />
        <OurProcessSection data={data} />
        <Oriented data={data} />
        <BlogSec />
      </>
    );
  }
}
