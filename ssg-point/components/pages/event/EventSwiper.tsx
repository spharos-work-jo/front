'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules';
import EventBanner from './EventBanner'

import React from 'react'
import { EventBannerCardProps } from '@/types/event';

function EventSwiper(props : {data:EventBannerCardProps[]}) {

  const {data} = props;

  return (
    <Swiper
      className='main_event_banner'
      spaceBetween={0}
      slidesPerView={1}
      scrollbar
      modules={[Scrollbar]}
    >
        {
          data.map((item:EventBannerCardProps) => (
            <SwiperSlide key={item.id}>
              <EventBanner
              id={item.id}
              url={item.url}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              />
            </SwiperSlide>    
          ))         
        }
    </Swiper>
  )
}

export default EventSwiper