'use client'
import EventBanner from "@/components/pages/event/EventBanner";
import Link from "next/link";
import HomeMenu from "@/components/pages/home/HomeMenu";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// // Swiper에서 가져올 모듈들
// import { EffectCoverflow, Pagination } from "swiper";

export default () => {
    return (
        <div>
        <h3 className="hidden">홈</h3>
        <div className="main_visual_banner">
            <h3 className="hidden">메인 비주얼 배너</h3>

            <div className="swiper_container pt-[100px]">
                <ul className="swiper_wrapper flex box-content">
                    <li className="swiper-slide">
                    
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><img src="\assets\images\event\main_event01.jpg"/></SwiperSlide>
                    <SwiperSlide><img src="\assets\images\event\main_event02.jpg"/> </SwiperSlide>
                    <SwiperSlide><img src="\assets\images\event\main_event03.jpg"/> </SwiperSlide>
                    </Swiper>

                    </li>





            {/* <>
            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            </Swiper>
            </> */}



                </ul>
            </div>
        </div>



{/* 
        <nav style={{marginTop: '200px'}}>
        <ul className="flex gap-10">
            <li>
            <Link href="/event/ingevents">
                <img src="./assets/images/event/main_event01.jpg" />
            </Link>
            </li>
        </ul>
    </nav> */}


    <HomeMenu/>
    </div>
    );
}