import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './redirect.css';
import Image from "next/image"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src="/m2.jpeg" alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src="/m2.jpeg" alt="logo" layout="fill"/></SwiperSlide>
      </Swiper>
    </>
  );
}
