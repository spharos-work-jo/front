'use client'
import { Swiper , SwiperSlide } from 'swiper/react';
import { EventTop } from '@/data/homeTopEvent';
import Image from 'next/image';
import { Scrollbar, Pagination, Navigation } from 'swiper/modules';

function EventBanner() {

  return (
    <section>
      <Swiper 
        className='relative w-full h-[auto]'
        modules={[Scrollbar, Pagination, Navigation]}
        pagination={{
          clickable: true,
          type: 'fraction'
        }}
        scrollbar={{ 
          draggable: true
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        
      >
        {
          EventTop && EventTop.map((item:any) => (
            <SwiperSlide>
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
    </section>
  )
}

export default EventBanner