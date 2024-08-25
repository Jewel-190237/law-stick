import Image from 'next/image';
import React from 'react';

const Experience = () => {
    return (
        <section className='mt-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Client Experiences</p>
                </div>
                <div className='mt-[25px] '>
                    <h1 className='heading text-center'>clients have confident <br className='hidden lg:flex' /> with us </h1>
                </div>
            </div>
            <div>
            <Image src='/logo.png' height={100} width={100} alt='Blog Icon' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div></div>
                <div></div>

            </div>
        </section>
    );
};

export default Experience;