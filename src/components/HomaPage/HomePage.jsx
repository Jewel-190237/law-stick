import React from 'react';
import About from './About';
import Service from './Service';
import Offer from './Offer';

const HomePage = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>

            <About/>
            <Service/>
            <Offer/>
            
        </div>
    );
};

export default HomePage;