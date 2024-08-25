import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className='flex items-center gap-2'>
                <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                <p className='text-[#B68C5A] text-[16px] font-bold'>Latest Top Blog</p>
            </div>
            <div className='mt-[25px]'>
                <h1 className='heading w-full lg:w-1/2'>Legal Insights & Expert Advice:
                    Our Blog</h1>
            </div>
            <div className='[40px]'>
                <p className='description w-full lg:w-1/2'> Stay informed with our expert legal insights and advice. Our blog covers key topics to help
                    you navigate complex legal matters with confidence.</p>
            </div>
            <div className='mt-[40xp] grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className=' bg-[#F9F6EE] rounded-lg p-5'>
                    <Image src='/blog.png' height={327} width={455} alt='Blog Icon' />
                </div>
                <div className='col-span-2 '>
                    <div className='bg-[#F9F6EE] rounded-lg p-5'>

                    </div>

                </div>

            </div>
        </section>
    );
};


export default Blog;