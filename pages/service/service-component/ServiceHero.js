import React from 'react';


const ServiceHero = () => {
    return (
        <div className='hero-section service-hero'>
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
            <div className="h-[1220px] z-30 relative flex items-center justify-center heroSection phone:h-[100vh] phone:px-4">
                <div className="z-50 relative text-center about-hero-text">
                    <p className="text88 text-white font-bold w-[100%] m-auto text-center tablet:w-full ">
                        ARE YOU READY TO OUTRIVAL THE COMPETITION
                    </p>
                    <ul>
                        <li>Time to level up! mister and misses business owner, marketing director…</li>
                    </ul>
                    <div className="py-3">
                        <button className="bg-white h-[70px] px-[45px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                            <span className="heroButtonGradient text24 button">{`Explode “Dem Sales!”`}</span>
                        </button>
                    </div>
                </div>

                <div className="absolute left-[7%] top-[5%] tablet:hidden">
                    <img src="/assets/images/bulb.png" alt="" />
                </div>
            </div>

        </div>
    )
};
export default ServiceHero;

