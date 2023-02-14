import React from 'react';

const Oriented = () => {
    return (
        <div className='oriented-section'>
            <div className="relative py-[100px] phone:py-[50px]">
                <div className="w-[50%] m-auto text-center tablet:w-full tablet:px-5 phone:w-full phone:px-4">
                    <h2 className="sectionTitle text44">Growth oriented?</h2>
                    <p className="text40 font-bold mb-8">
                        A Click here to schedule your free 30 min kick-off meeting ($650
                        Value)
                    </p>

                    <div className="pt-3">
                        <button className="videoButtonGradient h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                            <span className="text-white">Yes, book me in for a 30 min session</span>
                        </button>
                    </div>
                </div>

                <div className="absolute left-0 bottom-0 z-50 phone:hidden">
                    <img src="/assets/images/grothShap.png" alt="" />
                </div>
            </div>

            <div className="relative container m-auto rounded-[20px] w-[80%] text-center z-50 my-20 phone:w-full phone:px-4 phone:my-5">
                <div className="aboutBackground">
                    <div className="py-[52px] px-[100px] tablet:px-3 phone:px-4 inner">
                        <p className="text25 font-bold text-white w-[70%] m-auto py-[40px] tablet:w-full tablet:px-5 phone:w-full phone:px-0">
                            Outrival markets is Montreal based company that offers marketing
                            services for brands looking to grow revenue and popularity. We
                            thrive to turn good value brands into highly sought after niche
                            movers & shakers! Not convinced yet?
                        </p>
                        <div className="">
                            <button className="bg-white h-[70px] w-auto px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
                                <span className="heroButtonGradient">
                                    See our recent brand success stories
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Oriented;

