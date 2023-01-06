import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-[100vh] z-50 relative flex items-center justify-center heroSection">
        <div className="z-50 relative text-center">
          <p className="text-[88px] text-white font-bold leading-[108px] w-[70%] m-auto text-center">
            UTLIZING “BUNKER-BUSTER” MARKETING METHODS TO DETONATE YOUR ONLINE
            PRESENCE
          </p>
          <div className="py-16">
            <button className="bg-white h-[70px] w-[349px] text-[24px] font-bold rounded-[7px]">
              <p className="heroButtonGradient">Explode “Dem Sales!”</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
