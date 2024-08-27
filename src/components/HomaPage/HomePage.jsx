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
            <OnlineBooking/>
        </div>
    );
};

export default HomePage;