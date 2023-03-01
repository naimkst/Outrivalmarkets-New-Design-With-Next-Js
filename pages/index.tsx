import { Inter } from "@next/font/google";

import BlogSec from "../components/blog";
import Oriented from "../components/Oriented/Oriented";
import { HeroSection } from "./index/component/HeroSection";
import { OurPhilosophy } from "./index/component/OurPhilosophy";
import { AboutSection } from "./index/component/AboutSection";
import { ReadyToLearn } from "./index/component/ReadyToLearn";
import { TestimonialSection } from "./index/component/TestimonialSection";
import { CoverSection } from "./index/component/CoverSection";
import { BrandSection } from "./index/component/BrandSection";
import { ConnectTodaySection } from "./index/component/ConnectTodaySection";
import { BusinessTalkSection } from "./index/component/BusinessTalkSection";
import { CreativeMindSection } from "./index/component/CreativeMindSection";
import { OurProcessSection } from "./index/component/OurProcessSection";
import useFetch from "../hooks/useFetch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/home-page?populate=deep`
  );

  console.log(data);
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
      <BlogSec data={data} />
    </>
  );
}
