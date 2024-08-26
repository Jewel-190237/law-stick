import React from 'react';

import Blog from './Blog';
import Experience from './Experience';
import Team from './Team/Team';
import Expert from './Expert/Expert';

const HomePage = () => {
    return (
        <div className=''>

            
            <Team/>
            <Expert/>
            <Experience/>
            <Blog/>
        </div>
    );
};

export default HomePage;