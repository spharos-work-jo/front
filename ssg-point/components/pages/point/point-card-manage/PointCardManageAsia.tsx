import React from 'react'
import Image from 'next/image'

const PointCardManageAsia = () => {
  return (
    <div className='p-[20px]'>
    <h3 className='hidden'>아시아나항공</h3>
    <p className='pb-[16px] block w-auto h-[32px]'>
      <Image src='/assets/images/point/asia.png' alt='' width={118} height={32}/>
    </p>
      <dl className='flex pt-[16px]'>
        <dt className='text-[13px] leading-[21px] font-[550] min-w-[64px]'>적립</dt>
        <dd className='text-[13px] leading-[21px]'>최종 7만원 이상 결제 시 3,000원당<br/>
        1마일 신세계포인트와 동시 적립
        <dd className='text-[11px] leading-[23px] [color:#666]'>※ 항공사 마일리지간 선택 적립/월 1,000마일 한도</dd>
        </dd>
      </dl>
  </div>
  )
}
export default PointCardManageAsia