import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className='flex items-center gap-2'>
                <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                <p className='text-[#B68C5A] text-[16px] font-bold'>Latest Top Blog</p>
            </div>
            <div>
                <h1 className='heading'>Legal Insights & Expert Advice:
                Our Blog</h1>
            </div>
        </section>
    );
};


export default Blog;