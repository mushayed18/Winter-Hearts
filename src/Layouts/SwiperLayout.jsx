import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import winterImage1 from "../assets/winter1.jpeg";
import winterImage2 from "../assets/winter2.jpeg";
import winterImage3 from "../assets/winter3.jpg";
import winterImage4 from "../assets/winter4.jpg";
import winterImage5 from "../assets/winter5.jpeg";

const SwiperLayout = () => {
  return (
    <div className='border-2 md:w-[80%] mx-auto h-[25rem]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={winterImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={winterImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={winterImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={winterImage4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={winterImage5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperLayout;
