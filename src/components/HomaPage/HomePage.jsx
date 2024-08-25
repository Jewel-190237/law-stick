import React from 'react';
import About from './About';
import Service from './Service';
import Offer from './Offer';
import Team from './Team';
import Expert from './Expert';
import Blog from './Blog';

const HomePage = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>

            <About/>
            <Service/>
            <Offer/>
            <Team/>
            <Expert/>
            <Blog/>
        </div>
    );
};

export default HomePage;