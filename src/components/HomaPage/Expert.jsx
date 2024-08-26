import Image from 'next/image';
import React from 'react';

const Expert = () => {
    return (
        <section className='max-w-[1320px] mx-auto mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>

                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center gap-2 justify-center'>
                            <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                            <p className='text-[#B68C5A] text-[16px] font-bold'>Client Experiences</p>
                        </div>
                        <div className='mt-[25px] '>
                            <h1 className='heading text-center'>our case study </h1>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Expert;