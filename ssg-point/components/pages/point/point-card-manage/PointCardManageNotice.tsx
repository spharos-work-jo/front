'use client'

import React, { useState } from 'react'


const PointCardManageNotice = () => {

  const [isView, setIsView] = useState<boolean>(false)

  return (
    <div className='relative pt-[32px] pr-[20px] pb-[80px] pl-[20px] bg-[#fbfbfb]'>
      <h3 className='text-[14px] leading-[24px] font-[550]'>유의사항</h3>
      <button className='manage_active w-[10px] h-[5px] [text-indent:-999em] absolute right-[5px] top-[25px] p-[20px]' onClick={()=>setIsView(true)}>
      </button>
      {
        isView ? <PointCardManageNot setIsView={setIsView}/> : null
      }
    </div>
  )
}

export default PointCardManageNotice


const PointCardManageNot = (props:{
  setIsView:React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const { setIsView } = props

  return(

      <ul className='mt-[12px] pt-[12px] [border-top-width:1px] [border-top-style:solid] [border-top-color:rgb(232,232,232)]'>
        <li className='str_red [color:#eb0000] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          제휴 멤버십 동시 적립 서비스는 이마트에서만 제공되는 서비스입니다.
        </li>
          
        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          해당 제휴사에서 승인된 멤버십 카드 번호만 등록하실 수 있습니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          제휴사당 최대 1개의 카드만 등록하실 수 있습니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          잘못된 제휴 멤버십 카드번호 등록 시 제휴 포인트는 적립되지 않으며 잘못된 정보 등록에 대한 책임은 등록한 회원에게 있습니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          제휴 멤버십의 상태가 정상일 경우에만 포인트가 적립됩니다. (휴면/탈퇴 시 적립불가)
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          이미 등록된 제휴 멤버십 카드는 다른 ID로 중복 등록할 수 없습니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          동시 적립 서비스만 제공되며, 제휴 포인트 사용을 원할 경우에는 해당 제휴사 카드를 제시해야 합니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          제휴 종료 시 사전 공지드리며, 기존에 등록된 제휴 멤버십 카드번호는 종료일 기준으로 일괄 삭제됩니다.
        </li>

        <li className='str mt-[4px] [color:#767676] relative text-[12px] leading-[20[px] pl-[7px] [letter-spacing:-.5px]'>
          자세한 제휴 포인트의 적립/사용 정책은 해당 제휴사에 문의해 주세요.
        </li>



      </ul>
  )
}