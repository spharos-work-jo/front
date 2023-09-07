import { EventBannerListProps } from '@/types/event'
import React from 'react'
import Image from 'next/image';
import { Swiper , SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

function CustomSlider({data}: {data: EventBannerListProps[]}) {
  return (
  
      <Swiper
        className='swiper relative w-full h-[auto]'

        modules={[Scrollbar, Pagination, Navigation]}
        pagination={{ 
          clickable: true,
          type: 'fraction'
        }}
        scrollbar={{
          draggable: true,
        }}
        
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >

          {
            data.map((item:EventBannerListProps) => (
              <SwiperSlide key={item.id}>
                <div className='w-full h-[auto]'>
                <Image
                  src={`/assets/images/event${item.imgUrl}`}
                  alt={`/assets/images/event${item.imgAlt}`}
                  width={1920}
                  height={500}
                  priority
                />
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper>
  )
}

export default CustomSlider