import React from 'react';
import Image from 'next/image';
import cImg from '/public/assets/images/email.jpg'
import Link from 'next/link'

const EmailMarketing = () => {
    return (
        <div className='marketing-section section-padding'>
            <div className="container">
                <div className="marketing-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="marketing-text">
                                <span className='sectionTitle s2 text44'>Email Marketing</span>
                                <h2>Email Marketing that drives sales</h2>
                                <div className="web-creation-img d-block d-lg-none">
                                    <Image src={cImg} alt="" />
                                </div>
                                <p>Want to drive sales and build customer relationships? Our team specializes in developing and sending email campaigns that are tailored to your audience and designed to promote your products or services."</p>
                                <p>Don't believe us?</p>
                                <Link href="/" className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">See our portfolio</Link>
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
                <h2>5</h2>
            </div>
        </div>
    )
};
export default EmailMarketing;

