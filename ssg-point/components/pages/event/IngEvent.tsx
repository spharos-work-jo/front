import { EventTypeData } from '@/data/event'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { EventType } from '@/types/event'


const IngEvent = () => {

  const [eventList, setEvenvList] = useState<EventType[]>([]); // 빈 배열로 초기화
    useEffect(() => {
    // useEffect 내부에서 HTTP 요청을 보내 데이터를 가져옵니다.
      fetch('https://workjo.duckdns.org/api/v1/point/event/ongoing')
      .then((response) => response.json())
      .then((data) => {

          console.log('Received Data:', data);

        });
      }, []);


  return (
    <div className='pb-[60px]'>
      <ul className='list-none'>

        {eventList.map((item:any) => (

        <li key={item.id} className='box-border text-[0px] relative text-center'>
          <Link href={'https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230828/086a3dfb-c047-43a9-8634-0512d5389d91.jpg'}>
          </Link>
          <p className='recommendation'>추천</p>

          <div className='pt-[20px] pr-[20px] pb-[35px] pl-[20px]'>
            <p className='text-[16px] font-medium leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</p>
            <p className='text-[13px] font-normal leading-[21px] text-left pt-[4px]'>{item.start_date} ~ {item.end_date}</p>
          </div>
        </li>

        ))}

      </ul>
      </div>
  )
}
export default IngEvent



{/* pathname 가져오기 -> useEffect -> if 로 ing, end, win -> fetch ( url : ${pathname} )
-> result -> result.data */}

{/* // 패스네임 가져오기 ingevnts, winevents
  const [eventList, setEvenvList]= useState()
  useEffect(() => {
    const res = fetch(`http://workjo.duckdns.org/api/v1/events/${pathname}`)
    console.log(res)
    const result = res.json()
    setEvenvList(result)
  }, []); */}
{/* 
      {
      EventTypeData && EventTypeData.map((item:any) => (
      }


      // map 을 돌려서 데이터를 받고 
      // useeffect 안에서 datapatch */}


  