import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className='flex items-center gap-3'>
                <Image src='/public/blogIcon.png' height={50} width={50} alt='Blog Icon' />
                <p className='text-[#B68C5A] text-[16px] font-bold'>latest top blog</p>
            </div>
        </section>
    );
};


export default Blog;