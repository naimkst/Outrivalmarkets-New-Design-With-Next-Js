import React from 'react';
import Image from 'next/image';
import team1 from '/public/assets/images/team.png'

const Teams = [
    {
        Id: '1',
        tImg: team1,
        name: 'Ahron',
        title: 'Founder, CEO, Marketing Director',
    },
    {
        Id: '2',
        tImg: team1,
        name: 'Naim',
        title: 'Senior Web Developer',
        gdClass: 'gradient-bg',
    },
    {
        Id: '3',
        tImg: team1,
        name: 'Esther',
        title: 'Director, Sales',
    },
    {
        Id: '4',
        tImg: team1,
        name: 'Rachel',
        title: 'Lead Content Writer',
        gdClass: 'gradient-bg',
    },
    {
        Id: '5',
        tImg: team1,
        name: 'Sofia',
        title: 'Lead PPC and ads Strategist',
    },
    {
        Id: '6',
        tImg: team1,
        name: 'Kumar',
        title: 'Master Graphic Designer',
        gdClass: 'gradient-bg',
    },
    {
        Id: '7',
        tImg: team1,
        name: 'Junaid',
        title: 'UI/UX Strategist Designer',
        gdClass: 'gradient-bg',
    }
]

const TeamMember = () => {
    return (
        <section className="team-section">
            <div className="container">
                <h5 className='sectionTitle text44'>Meet Our Brilliant Team</h5>
                <div className="team-wrap">
                    <div className="row justify-content-center">
                        {Teams.map((team, aitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                                <div className={`team-item ${team.gdClass}`}>
                                    <div className="team-img">
                                        <Image src={team.tImg} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h2>{team.name}</h2>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};
export default TeamMember;

