'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { Swiper , SwiperSlide } from 'swiper/react';
import { EventBannerListProps } from '@/types/event';
import { EventTop } from '@/data/homeTopEvent';
import Image from 'next/image';


function EventBanner() {

  const [data, setData] = useState<any>();
  const query = useSearchParams();
  console.log("url quary ",query.get('sort'))

  return (
    <section>
        <div>
          <Swiper className='relative w-full h-[455px]'
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            {
              EventTop && EventTop.map((item:any) => (
                <SwiperSlide>
                  <Image
                    src={`/assets/images/event${item.imgUrl}`}
                    alt={`/assets/images/event${item.imgAlt}`}
                    fill={true}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
  )
}

export default EventBanner