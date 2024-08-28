'use client'
import React from 'react';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const OurTeam = () => {
    return (
        <section className='max-w-[1400px] mx-auto'>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className='border border-red-800'>
                        <Image src='/sliderTeam.png' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
};



export default OurTeam;