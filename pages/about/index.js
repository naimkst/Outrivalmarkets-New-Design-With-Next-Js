import React from 'react';
import BlogSec from '../../components/blog';
import Oriented from '../../components/Oriented/Oriented';
import AboutHero from './about-component/AboutHero';
import Founder from './about-component/Founder';
import TeamAbout from './about-component/TeamAbout';
import TeamInfo from './about-component/TeamInfo';
import TeamMember from './about-component/TeamMember';


const HomePage =() => {
    return(
        <div>
            <AboutHero/>
            <TeamAbout/>
            <Founder/>
            <TeamInfo/>
            <TeamMember/>
            <Oriented/>
            <BlogSec/>
        </div>
    )
};
export default HomePage;


