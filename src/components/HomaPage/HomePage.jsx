import React from 'react';
import About from './About';
import Service from './Service';
import Offer from './Offer';
import Expert from './Expert';
import Blog from './Blog';
import Experience from './Experience';
import Team from './Team/Team';

const HomePage = () => {
    return (
        <div className=''>

            <About/>
            <Service/>
            <Offer/>
            <Team/>
            <Expert/>
            <Experience/>
            <Blog/>
        </div>
    );
};

export default HomePage;