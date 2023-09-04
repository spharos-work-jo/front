'use client'
import React from 'react'
import { EventBannerData } from '@/data/homeBotEvent'
import { EventBannerDataType } from '@/types/event';
import CustomSlider from '@/components/ui/CustomSlider';


const HomeBot = () => {

  const data : EventBannerDataType[] = EventBannerData;

  return (
    <>
    {
      data && data.map((item: EventBannerDataType) => (
        <CustomSlider 
          key={item.id}
          data={item.data}
        />
      ))
    } 
    </>
  )
}
export default HomeBot