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
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 content-center'>
                <div className=''>
                    <p className='text-[26px] lato mt-10 lg:mt-20'>“ I am incredibly satisfied with the firm’s professionalism and dedication. They kept me informed, supported, and delivered outstanding results. Highly recommend! ”</p>
                    <div className='flex gap-2 items-center'>
                        <Image src='/quete.png' height={50} width={50} alt='Blog Icon' />
                        <div>
                            <p className='text-xl lato'>Brooklyn Simmons</p>
                            <p className='text-[14px] lato'>CEO and Founder</p>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto'>
                    <Image className='mx-auto' src='/experience.png' height={400} width={400} alt='Blog Icon' />
                </div>

            </div>
        </section>
    );
};

export default Experience;