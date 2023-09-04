import { useRef, useState } from 'react';
import { EventBannerData } from '@/data/homeBotEvent'
import { EventBannerDataType, EventBannerListProps } from '@/types/event'
import React from 'react'
import Image from 'next/image';
import { Swiper , SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import { type } from 'os';

function CustomSlider({data}: {data: EventBannerListProps[]}) {
  return (
  
      <Swiper
        className='swiper relative w-full h-[455px]'

        modules={[Scrollbar, Pagination, Navigation]}
        pagination={{ 
          clickable: true,
          type: 'fraction'
        }}
        scrollbar={{
          draggable: true,
        }}
        
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >

          {
            data.map((item:EventBannerListProps) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={`/assets/images/event${item.imgUrl}`}
                  alt={`/assets/images/event${item.imgAlt}`}
                  fill={true}
                />
              </SwiperSlide>
            ))
          }
      </Swiper>
  )
}

export default CustomSlider