import React from 'react';
import Image from 'next/image';
import cImg from '/public/assets/images/marketing.jpg'
import Link from 'next/link'

const Marketing = () => {
    return (
        <div className='marketing-section section-padding'>
            <div className="container">
                <div className="marketing-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="marketing-text">
                                <span className='sectionTitle s2 text44'>Marketing Strategies</span>
                                <h2>Marketing strategies that will make you the talk of the town</h2>
                                <div className="web-creation-img d-block d-lg-none">
                                    <Image src={cImg} alt="" />
                                </div>
                                <p>We know that creating a website and designing some graphics is only half the battle. That's why we also offer marketing strategizing to combine all of our services and set forth a compelling marketing strategy that will make you the talk of the town."</p>
                                <p>All over the place with marketing.. not sure how to set your marketing footprint for 2023? Lets talk about it and see how we can help.</p>
                                <p>"Ready to be the next big thing? Let's talk.</p>
                                <Link href="/" className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="marketing-img d-none d-lg-block">
                                <Image src={cImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text">
                <h2>3</h2>
            </div>
        </div>
    )
};
export default Marketing;

