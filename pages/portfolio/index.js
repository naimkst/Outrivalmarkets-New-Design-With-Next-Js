import React from 'react';
import BlogSec from '../../components/blog';
import Oriented from '../../components/Oriented/Oriented';
import PortfolioHero from './portfolio-component/PortfolioHero';
import PortfolioSection from './portfolio-component/PortfolioSection';


const PortfolioPage =() => {
    return(
        <div>
            <PortfolioHero/>
            <PortfolioSection/>
            <Oriented/>
            <BlogSec/>
        </div>
    )
};
export default PortfolioPage;


