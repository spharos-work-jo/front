// import React, { useRef, useState } from "react";
// Import Swiper React components
'use client'
import { useRef } from "react";
import Image from "next/image";
// 사용할 모듈 import



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Scrollbar } from "swiper/modules"

// 최신 버전인 경우
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import Link from 'next/link'
import { EventType } from "@/app/page";


export default function EventBanner( props: {
  dataList : EventType[]

}) 
{
  const {dataList} = props
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="w-full">
      {
        dataList.map(item=>(
          <Image 
                src={item.img_url}
                alt={"text"}
                width={800}
                height={800}
        />
        ))
      }
       
    </div>
  );
}
