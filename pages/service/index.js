import React from 'react';
import BlogSec from '../../components/blog';
import Oriented from '../../components/Oriented/Oriented';
import EmailMarketing from './service-component/EmailMarketing';
import GraphicDesign from './service-component/GraphicDesign';
import Marketing from './service-component/Marketing';
import SeoMarketing from './service-component/SeoMarketing';
import ServiceHero from './service-component/ServiceHero';
import WebsiteCreation from './service-component/WebsiteCreation';


const ServicePage =() => {
    return(
        <div>
            <ServiceHero/>
            <WebsiteCreation/>
            <GraphicDesign/>
            <Marketing/>
            <SeoMarketing/>
            <EmailMarketing/>
            <Oriented/>
            <BlogSec/>
        </div>
    )
};
export default ServicePage;


