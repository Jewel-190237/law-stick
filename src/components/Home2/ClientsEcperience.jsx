import Image from 'next/image';
import React from 'react';

const ClientsExperience = () => {
    return (
        <section className='bg-[#EFF5F5] py-14'>
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex md:flex-row gap-6 items-center'>
                    <div className='flex-1'>
                        {/* Slider Part */}
                        <div>
                            <div className="carousel w-full">
                                <div id="s1" className="carousel-item relative w-full">
                                    <div className='max-w-[1240px] mx-auto pt-20 pb-8 pl-5'>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/clientSliderImage.png' height={552} width={463} alt='Blog Icon' />
                                        </div>
                                        <div className='relative bg-white w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20'>
                                            <div>
                                                <h3 className='text-black text-2xl font-medium mt-10 lato'>“The best team of movers”</h3>
                                                <p className='text-black text-[16px] font-normal mt-3 lato'>Lorem ipsum dolor sit amet, consectetr adipiscing elit. Vestibulum efficitur justo vitae sapien pellentesque porttitor.</p>
                                            </div>
                                            <div className='mt-4 flex justify-between items-center '>
                                                <div className='mt-8 flex gap-2 items-center'>                                                <div>
                                                    <p className='text-xl lato'>Brooklyn Simmons</p>
                                                    <p className='text-[14px] lato'>CEO and Founder</p>
                                                </div>
                                                </div>
                                                <div>
                                                    <div className=" flex gap-4 mt-10">
                                                        <a href="#s3" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                                        <a href="#s2" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="s2" className="carousel-item relative w-full">
                                    <div className='max-w-[1240px] mx-auto pt-20 pb-8 pl-5'>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/clientSliderImage.png' height={552} width={463} alt='Blog Icon' />
                                        </div>
                                        <div className='relative bg-white w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20'>
                                            <div>
                                                <h3 className='text-black text-2xl font-medium mt-10 lato'>“The best team of movers”</h3>
                                                <p className='text-black text-[16px] font-normal mt-3 lato'>Lorem ipsum dolor sit amet, consectetr adipiscing elit. Vestibulum efficitur justo vitae sapien pellentesque porttitor.</p>
                                            </div>
                                            <div className='mt-4 flex justify-between items-center '>
                                                <div className='mt-8 flex gap-2 items-center'>                                                <div>
                                                    <p className='text-xl lato'>Brooklyn Simmons</p>
                                                    <p className='text-[14px] lato'>CEO and Founder</p>
                                                </div>
                                                </div>
                                                <div>
                                                    <div className=" flex gap-4 mt-10">
                                                        <a href="#s1" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                                        <a href="#s3" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="s3" className="carousel-item relative w-full">
                                    <div className='max-w-[1240px] mx-auto pt-20 pb-8 pl-5'>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/clientSliderImage.png' height={552} width={463} alt='Blog Icon' />
                                        </div>
                                        <div className='relative bg-white w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20'>
                                            <div>
                                                <h3 className='text-black text-2xl font-medium mt-10 lato'>“The best team of movers”</h3>
                                                <p className='text-black text-[16px] font-normal mt-3 lato'>Lorem ipsum dolor sit amet, consectetr adipiscing elit. Vestibulum efficitur justo vitae sapien pellentesque porttitor.</p>
                                            </div>
                                            <div className='mt-4 flex justify-between items-center '>
                                                <div className='mt-8 flex gap-2 items-center'>                                                <div>
                                                    <p className='text-xl lato'>Brooklyn Simmons</p>
                                                    <p className='text-[14px] lato'>CEO and Founder</p>
                                                </div>
                                                </div>
                                                <div>
                                                    <div className=" flex gap-4 mt-10">
                                                        <a href="#s2" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                                        <a href="#s1" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos cum doloremque rem voluptatem quibusdam est! Unde pariatur eum deleniti natus, minus soluta animi deserunt a qui ex vitae ratione.
                    </div>
                </div>
            </div>
        </section>
    );
};



export default ClientsExperience;