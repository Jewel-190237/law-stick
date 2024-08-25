import React from 'react';
import About from './About';
import Service from './Service';
import Offer from './Offer';
import Team from './Team';
import Expert from './Expert';
import Blog from './Blog';
import Experience from './Experience';

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