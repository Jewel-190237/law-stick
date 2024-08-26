import React from 'react';

import Blog from './Blog';
import Experience from './Experience';
import Expert from './Expert/Expert';

const HomePage = () => {
    return (
        <div className=''>
            
            <Expert/>
            <Experience/>
            <Blog/>
        </div>
    );
};

export default HomePage;