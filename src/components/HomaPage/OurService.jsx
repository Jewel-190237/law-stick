import Image from 'next/image';
import React from 'react';

const OurService = () => {
    return (
        <div className='max-w-[1320px] mx-auto my-24'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='max-w-[540px] text-justify'>
                    <div className='flex space-x-2 mb-6'>
                        <Image src='/order.png' height={26} width={32} alt='order'></Image>
                        <p className='text-[#B68C5A] text-[16px] font-semibold'>Our Services</p>
                    </div>
                    <h1 className='mb-10 text-[#021C1B] font-bold text-4xl'>The best lawyer best <br className='hidden lg:flex' /> solution.</h1>
                    <p className='text-[#5B5353] text-[16px] mb-12 max-w-[520px]'>Our firm provides comprehensive legal services, specializing in defending your
                        rights and ensuring justice is delivered with unwavering professionalism and
                        dedication. We are committed to guiding you through every legal challenge
                        with expert advice and personalized support, always prioritizing your best
                        interests.</p>
                    <p className="flex text-[#B68C5A] text-xl font-medium ">
                    Discover more service
                        <Image src='/Frame.png' height={24} width={24} alt='arrow' className='text-[#B68C5A] mx-2'></Image>
                    </p>
                </div>
                <div className='relative'>
                    <div className='bg-[#B68C5A] w-[360px] md:w-[480px] h-[580px] rounded-lg rotate-90'>
                        <p className='text-white text-[28px] font-bold text-center lato p-3'>We protect your right</p>
                    </div>
                    <Image className='relative -top-[520px] right-28' src='/serviceImage.png' height={400} width={580} alt='photo'/>
                </div>

            </div>
        </div>
    );
};

export default OurService;