import React from 'react';
import Image from 'next/image';
import vshape from '/public/assets/images/about-shape.png'
import Link from 'next/link'

const TeamInfo = () => {
    return (
        <div className='team-info-section'>
            <div className="container">
                <div className="team-info-text">
                    <h5 className='sectionTitle text44'>OUR TEAM:</h5>
                    <p>Backed by killer team of designers and developers to really create magic. We know how to make your brand look great and come-up-for-air in the big blue ocean. So whether you're looking to launch a new product or just need some help getting your name out there, we've got you covered.</p>
                    <p>Feeling overwhelmed twisting and turning in bed at night as a hard-working entrepreneur, determined to make-it-work, we feel you.. Our team can take your marketing stress levels wishooo….. all the way down so that you can focus on what you do best, and are completely passionate about..</p>
                    <p>So don't be shy, hit us up and let's talk about how we can help you outrival the competition. Let's make it happen, fam!"</p>
                    <Link href="/" className="theme-btn videoButtonGradient bg-white h-[70px] w-[349px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">Contact Us</Link>
                </div>
            </div>
            <div className="shape">
                <Image src={vshape} alt="" />
            </div>
        </div>
    )
};
export default TeamInfo;

