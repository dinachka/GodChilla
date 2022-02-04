import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CaruselMain.module.css'
SwiperCore.use([Autoplay]);

function CaruselMain(props) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        style={{ height: '200px', padding: '40px' }}
      >



        <SwiperSlide style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8quM5ex_WfSkUizmCjCSCPBwOQCseCatiQ&usqp=CAU)', backgroundSize: 'cover', borderRadius: '30px' }}>
          <div style={{ paddingLeft: '30px' }}>
            <h2>Event N</h2>
            <p>Date</p>
            <p>Location</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default CaruselMain;
