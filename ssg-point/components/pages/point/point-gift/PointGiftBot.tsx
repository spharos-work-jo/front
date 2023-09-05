import React from 'react'

const PointGiftBot = () => {
  return (
    <div className='pb-[40px] pr-[20px] pl-[20px]'>
      <p className='text-[14px] font-[550] leading-[24px] pb-[12px]'>포인트 선물 내역을 확인하세요.</p>

      <div className='border-t-[1px] [border-top-style:solid] [border-top-color:rgb(34,34,34)] border-b-[1px] [border-bottom-style:solid] [border-bottom-color:rgb(229,229,229)] relative'>
        <div className='w-auto absolute left-0 top-[10px]'>
          <select className='point_select relative [z-index:2] block w-full h-[30px] pr-[22px] pl-[5px] box-border text-[13px] text-black'>
            <option value='1'>전체</option>
            <option value='2'>받은선물</option>
            <option value='3'>보낸선물</option>
          </select>
        </div>

        <div className='point total text-right w-full table h-[50px]'>
          <div className='table-cell text-right align-middle pr-[5px]'>
            <p className='p_acc inline-block h-[14px] text-[13px] leading-[13px] pl-[19px] box-border font-[550] mt-[2px] mb-[2px] text-[#ea035c]'>
              적립 <strong>0P</strong>
            </p>

            <p className='p_use inline-block h-[14px] text-[13px] leading-[13px] pl-[19px] box-border font-[550] mt-[2px] mb-[2px]'>
              사용 <strong>0P</strong>
            </p>
          </div>
        </div>
        <div>
      </div>
    </div>
    
    <ul className='pl-[5px] pr-[5px]'>
      <div className='pt-[80px] pb-[80px]'>
        <p className='point_result relative pt-[64px] text-[13px] text-center [color:#767676]'>
          포인트 선물 내역이 없습니다.
        </p>
      </div>
    </ul>
  
  </div>

  )
}

export default PointGiftBot