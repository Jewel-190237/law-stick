import Image from 'next/image';
import React from 'react';

const Team = () => {
    return (
        <section className='max-w-[1320px] mx-auto mb-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Our Team</p>
                </div>
                <div className='mt-[25px] '>
                    <h1 className='heading text-center'>the faces of justice</h1>
                </div>
            </div>
        </section>
    );
};


export default Team;