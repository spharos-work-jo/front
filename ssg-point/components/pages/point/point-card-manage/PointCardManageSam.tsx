import Image from 'next/image'
import React from 'react'

const PointCardManageSam = () => {
  return (
    <div className='p-[20px]'>
      <h3 className='hidden'>삼성전자 멤버십</h3>
      <p className='pb-[16px] block w-auto h-[32px]'>
        <Image src='/assets/images/point/sam.png' alt='' width={112} height={32}/>
      </p>
        <dl className='flex pt-[16px]'>
          <dt className='text-[13px] leading-[21px] font-[550] min-w-[64px]'>적용상품</dt>
          <dd className='text-[13px] leading-[21px]'>삼성전자가 공급한 제품<br/>
          (이마트내 삼성전자 매장)
          </dd>
        </dl>

        <dl className='flex'>
          <dt className='text-[13px] leading-[21px] font-[550] min-w-[64px]'>적립</dt>
          <dd className='text-[13px] leading-[21px]'>구매 금액의 0.2% 신세계포인트와 동시적립
          </dd>
        </dl>


    </div>
  )
}
export default PointCardManageSam