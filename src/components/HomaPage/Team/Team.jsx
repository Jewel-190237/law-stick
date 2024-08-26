"use client"

import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


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
            <div className=''>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/sliderTeam.png' height={500} width={500} alt='Blog Icon' />
                    </SwiperSlide>


                </Swiper>

            </div>
        </section>
    );
};


export default Team;