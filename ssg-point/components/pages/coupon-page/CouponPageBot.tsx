'use client'
import React, { cloneElement, useState } from 'react'
import styles from './CouponPageBot.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { ThisExpression } from 'typescript'


const CouponPageBot = () => {

  const [isView, setIsView] = useState<boolean>(false)

  return (
    <div className={styles.coupon_bot}>
      <div className={styles.coupon_banner}>
      </div>
          <div className={styles.coupon_button}>
            <ul className='coupon_wrap flex flex-row justify-between items-center '>
              <li className='pt-0 mr-[40px] text-[13px] text-center leading-5 w-44 bg-auto items-center justify-between'>
                <Link href='/mybenefits/mycoupon' className='flex items-center flex-col box-border pt-[7px] pr-[30px] h-[60px] bg-[48px] bg-auto'>
                  <Image src="/assets/images/coupon/my_coupon.png" alt="마이쿠폰함" width={55} height={55}/>
                  마이쿠폰함으로 이동
                </Link>
                </li>

                <li className='pt-[8px] pl-[20px] text-[13px] text-center leading-5 w-[167px] bg-auto items-center justify-between'>
                <button className={styles.register_coupon} onClick={()=>setIsView(true)}>
                  <Image src='/assets/images/coupon/coupon_reg.png' alt="쿠폰등록" height={50} width={50} className='pb-[5px]' />
                  쿠폰 등록
                </button>
              </li>
            </ul>
            {
              isView ? <CouponInput setIsView={setIsView}/> : null
            }
        </div>
      </div>
  )
}

export default CouponPageBot

const CouponInput = (props:{
  setIsView:React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const { setIsView } = props


  return(
    <div className='bg-white rounded-lg pt-[24px] pr-[20px] pb-[24px] pl-[20px] mt-4'>
      <p className='text=[16px] leading-5'>
        신세계포인트 쿠폰 등록을 위해 <br/>
        <span className='text-red-700'>
          쿠폰번호를 입력
        </span>
        해주세요.
      </p>

      <div className='flex relative box-border w-full align-top mt-[16px]'>
        <input type='text' id="couponNum" className='box-border block focus-visible:outline-blue-700  w-full pl-[16px] border border-x border-y border-r border-l border-t border-b border-slate-300 text-[14px] rounded-lg h-[48px]'/>
        {/* <label className='table pr-[28px] left-0 top-0 absolute box-border w-full h-[48px] text-[14px] text-gray-700 leading-6'>
          <span className='hidden'>대소문자 구분하여 정확히 입력해 주세요.</span>
        </label> */}
      </div>

      <div className='flex mt-[8px]'>
        <button className='w-full mr-[5px] rounded-lg bg-white text-gray-500 p-3 text-sm border border-black-500' onClick={()=>setIsView(false)} >
          다음에 하기
        </button>

        <button className='w-full rounded-lg bg-gradient text-black p-3 text-sm border border-black-500'>
          <strong>등록하기</strong>
        </button>

      </div>
    </div>
  )
}