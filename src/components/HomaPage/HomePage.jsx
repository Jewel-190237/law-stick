import React from 'react';

import Blog from './Blog';
import Experience from './Experience';
import Team from './Team/Team';
import Expert from './Expert/Expert';
import Hero from './Hero';
import AboutUs from './AboutUs';
import OurService from './OurService';
import WhatWeOffer from './WhatWeOffer';
import OnlineBooking from '../Home2/OnlineBooking';
import LatestAndTopBlog from '../Home2/LatestAndTopBlog';
import ClientsExperience from '../Home2/ClientsEcperience';
import OurTeam from '../Home2/OurTeam/OurTeam';

const HomePage = () => {
    return (
        <div className=''>
            <Hero/>
            <AboutUs/>
            <OurService/>
            <WhatWeOffer/>
            <Team/>
            <Expert/>
            <Experience/>
            <Blog/>

            {/* home2 */}
            
            <ClientsExperience/>
            <LatestAndTopBlog/>
            <OnlineBooking/>
            <OurTeam/>
        </div>
    );
};

export default HomePage;