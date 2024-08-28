import Image from 'next/image';
import React from 'react';

const OnlineBooking = () => {
    return (
        <section className='max-w-[1320px] mx-auto my-20'>
            <h4 className='section-heading2 text-center'>online booking</h4>
            <h1 className='mt-6 section-title2 text-center'>Schedule Your Consultation Today</h1>
            <p className='mt-10 text-center section-description2 w-full lg:w-1/2 mx-auto '> Take the first step toward resolving your legal issue. Book a free consultation with
                our expert team today, and get the personalized advice and guidance you need
            </p>
            <div className='flex flex-col md:flex-row mt-14 justify-between'>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A]'>
                    <div className='py-14 pl-10 '>
                        <svg className='hover:bg-[#B68C5A]' xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <path d="M40.3342 28.0332C37.3731 28.0332 34.647 29.0349 32.4802 30.7092C32.186 30.2966 31.9922 29.8469 31.8698 29.4823C37.1746 27.8452 41.034 22.96 41.034 17.204V10.4618C41.0346 6.26861 37.1328 2.85718 32.3369 2.85718H23.6067C18.8108 2.85718 14.9091 6.26861 14.9091 10.4618V17.2035C14.9091 22.9778 18.7928 27.8755 24.1232 29.4966C23.8696 30.2389 23.3276 31.3315 22.2553 31.7155C22.0429 31.7915 21.469 31.88 20.8609 31.9743C15.9536 32.732 2.91663 34.7446 2.91663 52.2858V53.1429H40.3342H53.0833V52.2858C53.0833 49.5452 52.7653 47.184 52.2094 45.1469C52.7711 43.7326 53.0833 42.1955 53.0833 40.5875C53.0839 33.6652 47.3642 28.0332 40.3342 28.0332ZM51.1899 42.3103C51.0338 43.268 50.7541 44.1835 50.3601 45.0406C49.4966 46.9183 48.111 48.5126 46.3789 49.6383C45.8804 49.9623 45.3524 50.2452 44.8017 50.4869C43.4351 51.0875 41.9259 51.4286 40.3342 51.4286C34.264 51.4286 29.3259 46.5658 29.3259 40.588C29.3259 40.1475 29.3607 39.7155 29.4123 39.2886C29.4837 38.7057 29.6027 38.1383 29.7634 37.588C29.7849 37.5155 29.7988 37.4395 29.8214 37.3669C30.3472 35.7069 31.2709 34.2206 32.4779 33.008C32.7268 32.7577 32.9868 32.52 33.2595 32.2943C33.4818 32.1098 33.715 31.9389 33.9518 31.772C35.7541 30.5029 37.9539 29.748 40.3342 29.748C46.4044 29.748 51.3425 34.6109 51.3425 40.5886C51.3431 41.1755 51.2821 41.748 51.1899 42.3103ZM16.6493 17.2035V10.4618C16.6493 7.21375 19.7706 4.57146 23.6067 4.57146H32.3369C36.1731 4.57146 39.2938 7.21375 39.2938 10.4618V17.2035C39.2938 23.3515 34.2147 28.3532 27.9715 28.3532C21.7284 28.3532 16.6493 23.3515 16.6493 17.2035ZM25.8257 29.8909C26.5243 30.0052 27.2404 30.0675 27.9715 30.0675C28.7212 30.0675 29.4559 30.0012 30.1713 29.8812C30.3477 30.4406 30.6599 31.1852 31.1816 31.8612C29.912 33.152 28.9209 34.7092 28.304 36.4389L28.0226 36.7172L23.9706 32.7086C25.0272 31.8972 25.5686 30.7029 25.8257 29.8909ZM21.1307 33.668C21.5926 33.5966 21.9704 33.5366 22.2855 33.472L26.4007 37.5435L21.0744 39.4972L18.7603 34.0772C19.6435 33.8995 20.4512 33.7732 21.1307 33.668ZM12.9611 36.0498L13.5895 45.4498L7.92436 51.4286H4.66846C4.90347 42.544 8.79418 38.244 12.9611 36.0498ZM10.3058 51.4286L15.3768 46.0772L14.6532 35.2686C15.4655 34.944 16.2698 34.6875 17.0433 34.4795L20.117 41.6783L27.704 38.8949C27.628 39.4492 27.5851 40.0138 27.5851 40.5875C27.5851 45.2063 30.133 49.2475 33.9152 51.428L10.3058 51.4286ZM51.3315 51.4286H48.0756L47.5823 50.908C48.9112 50 50.0572 48.8509 50.9537 47.524C51.1632 48.7166 51.2943 50.0138 51.3315 51.4286Z" fill="#0C0C15" />
                            <path d="M45.5397 35.1914L44.6594 36.332L44.625 36.376L42.9088 38.5988L40.9879 41.0874L39.4339 43.0994L36.2157 40.5343L35.4882 39.9548L35.1137 39.656L34.5613 40.3211L34.3881 40.5297L34.0089 40.9863L39.7361 45.5497L40.7779 44.2L42.6994 41.712L46.0069 37.4285L46.9356 36.2257L46.2379 35.7086L45.5397 35.1914Z" fill="#0C0C15" />
                        </svg>
                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] '>
                    <div className='py-14 pl-10'>
                        <Image className='hover:text-[#B68C5A]' src='/handIcon.png' width={56} height={56} alt='image' />

                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300 group'>
                    <div className='py-14 pl-10'>
                        <Image className='hover:text-[#B68C5A]' src='/payIcon.png' width={56} height={56} alt='image' />

                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'>
                        <br />
                    </div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Book Fee </p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Appointment</h2>
                    </div>

                </div>
            </div>

        </section>
    );
};


export default OnlineBooking;