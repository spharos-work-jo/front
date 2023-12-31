'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { EventType } from '@/types/event'
import Image from 'next/image';

const WinEvent = () => {

  const [eventList, setEventList] = useState<EventType[]>([]); // 빈 배열로 초기화
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        const response = await fetch(`https://workjo.duckdns.org/api/v1/events/drawn`, {
          method: 'GET',
          headers
        });
        const data = await response.json();
        
        if (response.ok && Array.isArray(data.data)) {
          setEventList(data.data);
        } else {
          console.error("Invalid API response", data);
        }
      } catch (error) {
        console.error("An error occurred while fetching data", error);

      }
    };
  
    fetchData();
  }, []);
    
  return (
    <div className='pb-[60px]'>
      <ul className=''>
        {Array.isArray(eventList) && eventList.map((item) => (
          <div className='relative' key={item.id}>
            <li className='box-border text-[0px] relative text-center h-[350px]'>
              
              <div className='h-[300px] relative' style={{width:"100%", height: "auto", fill: "cover"}}>
              <div className='BACK bg-[rgba(0,0,0,.5)] absolute flex self-center w-full h-full z-10'>
                <span className='win self-center'>당첨발표</span>
              </div>
              <Image src={item.thumbnailUrl} alt={item.name} width={1920} height={500} />
              </div>
              <div className='pt-[20px] pr-[20px] pb-[35px] pl-[20px]'>
                <p className='text-[16px] font-medium leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis'>
                  {item.name}
                </p>
                <p className='text-[13px] font-normal leading-[21px] text-left pt-[4px]'>
                  {item.startDate} ~ {item.endDate}
                </p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default WinEvent