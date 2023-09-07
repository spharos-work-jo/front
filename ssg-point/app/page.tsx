import EventBanner from "@/components/pages/home/EventBanner";
import HomeMenu from "@/components/pages/home/HomeMenu";
import HomeBot from "@/components/pages/home/HomeBot";
import React from 'react';

export default () => {
    return (
        <main>
            <div className="main_visual_banner">
                <div className="swiper_container relative pt-[90px]">
                    <EventBanner/>
                    <HomeMenu/>
                    <HomeBot/>
                </div>
            </div>
        </main>
    );

}