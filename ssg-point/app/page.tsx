import EventBanner from "@/components/pages/home/EventBanner";
import HomeMenu from "@/components/pages/home/HomeMenu";
import HomeBot from "@/components/pages/home/HomeBot";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React from 'react';

export default () => {
    return (
        
        <div>
        <h3 className="hidden">홈</h3>
        <div className="main_visual_banner">
            <h3 className="hidden">메인 비주얼 배너</h3>
            <div className="swiper_container relative pt-16">
                <EventBanner/>
                <HomeMenu/>
                <HomeBot/>
            </div>
        </div>
        </div>
    );

}