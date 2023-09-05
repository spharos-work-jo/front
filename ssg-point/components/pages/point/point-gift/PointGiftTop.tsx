import Link from 'next/link'
import React from 'react'

const PointGiftTop = () => {
  return (
    <>
      <h3 className='hidden'>포인트 선물</h3>
      <div className='pt-[40px] pr-[20px] pb-[40px] pl-[20px]'>
        <h3 className='text-[20px] leading-[30px] font-[550] break-keep'> 마음을 담아 
        <br/>
        <strong className='font-[550] text-[#ea035c]'>신세계 포인트를 선물</strong>
        하세요.
        </h3>

        <p className='text-[14px] leading-[24px] text-[#767676] break-keep pt-[8px]'>
          신세계 포인트 회원끼리 주고 받는
          <br/>
          가장 실속있는 마음의 선물!
          <br/>
          친구나 가족, 소중한 사람에게 선물해 보세요.
          </p>
          <div className='pt-[40px]'>
            <button className='btn_pm block rounded-lg w-full text-center h-[48px] text-[14px] leading-[24px] font-[550] box-border'>
              <Link href={''} className=''>선물하기</Link>
            </button>
          </div>
        </div>
    </>
  )
}

export default PointGiftTop