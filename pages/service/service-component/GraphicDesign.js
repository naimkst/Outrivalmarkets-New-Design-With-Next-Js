import React from 'react';
import Image from 'next/image';
import cImg from '/public/assets/images/graphic.jpg'
import shape from '/public/assets/images/about-shape.png'
import Link from 'next/link'

const GraphicDesign = () => {
    return (
        <div className='web-graphic-section section-padding'>
            <div className="container">
                <div className="web-graphic-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="web-graphic-img d-none d-lg-block">
                                <Image src={cImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="web-graphic-text">
                                <span className='sectionTitle s2 text44'>Graphic Design</span>
                                <h2>Designs that will leave your customers drooling</h2>
                                <div className="web-creation-img d-block d-lg-none">
                                    <Image src={cImg} alt="" />
                                </div>
                                <p>{`Your branding and design should be just as unique as your product or service. That's why we offer graphics services such as branding, brochures, logos, catalog design, product packaging design, product renderings, product videos, and brand videos."`}</p>
                                <p>Getting lost? All over the place?</p>
                                <p>{`Our design team is here to make sure your customers can't resist your products.`}</p>
                                <Link href="/" className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">See our portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text v2">
                <h2>2</h2>
            </div>
            <div className="left-shape">
                <Image src={shape} alt="" />
            </div>
        </div>
    )
};
export default GraphicDesign;

