import Image from 'next/image';
import React from 'react';

const Experience = () => {
    return (
        <div>
            <div className='mx-auto'>
                <div className='flex items-center gap-2 '>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Latest Top Blog</p>
                </div>
                <div className='mt-[25px]'>
                    <h1 className='heading w-full lg:w-1/2'>Legal Insights & Expert Advice:
                        Our Blog</h1>
                </div>
            </div>
        </div>
    );
};

export default Experience;