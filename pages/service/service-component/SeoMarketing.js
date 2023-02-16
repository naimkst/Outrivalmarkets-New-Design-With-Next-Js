import React from 'react';
import Image from 'next/image';
import cImg from '/public/assets/images/seo.jpg'
import shape from '/public/assets/images/video-shape.png'

const SeoMarketing = () => {
    return (
        <div className='marketing-section seo section-padding'>
            <div className="container">
                <div className="marketing-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="marketing-img d-none d-lg-block">
                                <Image src={cImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="marketing-text">
                                <span className='sectionTitle s2 text44'>SEO SERVICES</span>
                                <h2>SEO that will put you on top</h2>
                                <div className="web-creation-img d-block d-lg-none">
                                    <Image src={cImg} alt="" />
                                </div>
                                <p>Want to make sure your website is showing up at the top of search engine results? Our team specializes in setting up SEO that will put you on top. From keyword research to meta tags, we'll make sure your website is optimized for success."</p>
                                <p>Compelling copy is our passion, making it intriguing and finger-clicking.. wait until we implement that with SEO to really rank you up the list organically!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text v2">
                <h2>4</h2>
            </div>
            <div className="left-shape">
                <Image src={shape} alt="" />
            </div>
        </div>
    )
};
export default SeoMarketing;

