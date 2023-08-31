import { EventBannerData } from '@/data/homeBotEvent'
import { EventBannerDataType, EventBannerListProps } from '@/types/event'
import React from 'react'
import Image from 'next/image';
import { Swiper , SwiperSlide } from 'swiper/react'

function CustomSlider({data}: {data: EventBannerListProps[]}) {
  return (
  
      <Swiper className='relative w-full h-[500px]'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
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