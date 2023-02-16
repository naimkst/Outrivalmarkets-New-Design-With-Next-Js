import Image from 'next/image';
import React from 'react';
import cImg from '/public/assets/images/creation.jpg'
import Link from 'next/link'

const WebsiteCreation = () => {
    return (
        <div className='web-creation-section section-padding'>
            <div className="container">
                <div className="web-creation-wrap">
                    <div className="web-creation-top">
                        <div className="row">
                            <div className="col-lg-7 order-lg-1 order-2">
                                <div className="web-creation-text">
                                    <span className='sectionTitle s2 text44'>Website Creation</span>
                                    <h3>Websites that will make your competitors envy you</h3>
                                    <div className="web-creation-img d-block d-lg-none">
                                        <Image src={cImg} alt="" />
                                    </div>
                                    <p>From design prototype, to actualizing and “technoligizing” your website (is technoligizing a real word?? Who really cares…)</p>
                                    <p>"Say goodbye to basic, lame, boxy lookin’ websites.</p>
                                    <p>Our team specializes in creating custom Shopify ecommerce websites that are both powerful and clean.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 order-lg-2 order-1">
                                <div className="web-creation-img d-none d-lg-block">
                                    <Image src={cImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Does your website need advanced functions? No problem.. we offer many solutions from WordPress to developing a fully custom front and back end heady-duty (lightweight) rig!</p>
                    <p>We also utilize technologies like React.js, Node.js, PHP, and JavaScript to make sure your website stands out, and is ready for many many years to come!</p>
                    <p>"Don't believe us? Check out our portfolio and see for yourself."</p>
                    <Link href="/" className="theme-btn mt-4 videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">See our portfolio</Link>
                </div>
            </div>
            <div className="visible-text">
                <h2>1</h2>
            </div>
        </div>
    )
};
export default WebsiteCreation;

