import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Scrollbar, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css';

// API로부터 받아올 데이터의 타입을 정의
interface Banner {
  id: number;
  imageUrl: string;
  eventId: number;
  redirectUrl: string;
  orderNum: number;
  type: string;
}

function EventBanner() {
  // 상태 변수 선언 및 초기값을 null로 설정
  const [EventTop, setEventTop] = useState<Banner[] | null>(null);

  // 컴포넌트가 마운트될 때 API를 호출
  useEffect(() => {
    fetch('https://workjo.duckdns.org/api/v1/banners')
      .then(response => response.json())
      .then(data => setEventTop(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // 빈 dependency 배열을 사용하여 한 번만 실행

  return (
    <section>
      { EventTop && (
      <Swiper
        className='relative w-full h-[auto]'
        modules={[Scrollbar, Pagination, Navigation]}
        pagination={{
          clickable: true,
          type: 'fraction'
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {/* EventTop이 null이 아니라면 map 함수를 사용 */}
        {
          EventTop ? EventTop.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='w-full h-[auto]'>
                <Link href={item.redirectUrl}>
                  <Image
                    src={item.imageUrl}
                    alt={item.type}
                    width={1920}
                    height={500}
                    priority
                  />
                </Link>
              </div>
            </SwiperSlide>
          )) : null // EventTop이 null이면 아무 것도 렌더링하지 않음
        }
      </Swiper>
      )}
    </section>
  );
}


export default EventBanner;
