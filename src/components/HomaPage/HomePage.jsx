import React from 'react';

import Blog from './Blog';
import Experience from './Experience';
import Team from './Team/Team';
import Expert from './Expert/Expert';
import Hero from './Hero';
import AboutUs from './AboutUs';
import OurService from './OurService';

const HomePage = () => {
    return (
        <div className=''>
            <Hero/>
            <AboutUs/>
            <OurService/>
            <Team/>
            <Expert/>
            <Experience/>
            <Blog/>
        </div>
    );
};

export default HomePage;