import Image from 'next/image';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import arrow from '/public/assets/images/arrow.svg'

const PortfolioHero = (props) => {
    return (
        <div className='hero-section portfolio-hero'>
            {/* Hero Section */}
            <div className="absolute inset-0 flex justify-center z-50 top-2 logo">
                <div className="">
                    <img
                        className="w-[200px] phone:w-[120px]"
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                </div>
            </div>

            {/* Our Philosophy: */}
            <div className="h-[1220px] relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
                <div className="z-50 relative text-center about-hero-text">
                    <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
                        {props.dTitle}
                    </p>
                    <span>Branding for Hermolis Band</span>
                    <div className="py-16 arrow-sec">
                        <AnchorLink className='arrow-btn' href='#portfolio'><span><Image src={arrow} alt="" /></span></AnchorLink>
                    </div>
                </div>

                <div className="absolute left-[7%] top-[5%] tablet:hidden">
                    <img src="/assets/images/bulb.png" alt="" />
                </div>
            </div>

        </div>
    )
};
export default PortfolioHero;

