'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { EventType } from '@/types/event'
import Image from 'next/image';


const IngEvent = () => {
  const [eventList, setEventList] = useState<EventType[]>([]);
  const query = useSearchParams()
  const sort = query.get('sort')
  useEffect(() => {

    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
          let apiUrl = `http://workjo.duckdns.org/api/v1/events/ongoing?sortedBy=${sort}`;
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers,
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
  }, [query]);

  
  return (
    <div className='pb-[60px] relative'>
      <ul className=''>
        {Array.isArray(eventList) && eventList.map((item) => (
          <li key={item.id} className='box-border text-[0px] relative text-center'>
            <Image src={item.thumbnailUrl} alt={item.name} width={1920} height={500} />
            <p className='recomm absolute z-50'>추천</p>
  
            <div className='pt-[20px] pr-[20px] pb-[35px] pl-[20px]'>
              <p className='text-[16px] font-medium leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</p>
              <p className='text-[13px] font-normal leading-[21px] text-left pt-[4px]'>{item.startDate} ~ {item.endDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngEvent;