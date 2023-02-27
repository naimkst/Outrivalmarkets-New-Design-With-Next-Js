import Image from 'next/image';
import React from 'react';
import vshape from '/public/assets/images/about-shape.png'

const TeamAbout = () => {
    return (
        <div className='team-about-section'>
            <div className="container">
                <div className="team-about-text">
                    <div className="team-about-text-top">
                        <span className='sectionTitle text44'>{`We're a small team with a big mindset,`}</span>
                        <h3>{`We're here to help you outrival the competition with killer marketing strategies.`}</h3>
                    </div>

                    <p>{`We're all about startups and new brands. We know how hard it can be to get your name out there, but we're here to make it happen. Hey and not just happen.. `} but actually <span>explodingly</span> happen!</p>
                </div>
            </div>
            <div className="shape">
                <Image src={vshape} alt="" />
            </div>
        </div>
    )
};
export default TeamAbout;

