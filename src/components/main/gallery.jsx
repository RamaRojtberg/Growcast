import React from 'react'
import { useState, useEffect } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';






export default function Gallery() {

  function getWindowDimensions() {
    const width = window.innerWidth
    const height = window.innerHeight
    return {
        width,
        height
    };
  }

  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      useEffect(() => {
          function handleResize() {
              setWindowDimensions(getWindowDimensions());
          }
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }, []);

      return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  function slidesAmount () {
    if(width <= 576){
      return 1;
    } else {
      return 3;
    }
  }
  

  return (
    <div className='gallery'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={slidesAmount()}
      navigation
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={img1} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img2} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img3} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img4} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img5} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img6} className='imgSwiper' /></SwiperSlide>
      <SwiperSlide><img src={img7} className='imgSwiper' /></SwiperSlide>
      
    </Swiper>
    </div>
  )
}




