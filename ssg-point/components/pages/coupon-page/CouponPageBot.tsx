'use client'
import React, { useState } from 'react'
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
              <li className='pt-0 text-[13px] text-center leading-5 w-44 bg-auto items-center justify-between'>
                <Link href='/mycoupon' className='inline-block box-border pt-7 h-16 bg-auto'>

                  <img src="/assets/images/coupon/my_coupon.png" alt="마이쿠폰함" width={65} height={65}/>

                  마이쿠폰함으로 이동
                  
                </Link>
                </li>

                <li className='pt-0 text-[13px] text-center leading-5 w-44 bg-auto items-center justify-between'>

                <button className={styles.register_coupon} onClick={()=>setIsView(true)}>
                  <img src='/assets/images/coupon/coupon_reg.png' alt="쿠폰등록" />
                  쿠폰 등록
                </button>

              </li>
            </ul>
            {
              isView ? <CouponInput/> : null
            }
        </div>
      </div>
  )
}

export default CouponPageBot

const CouponInput = () => {
  return(
    <div className='bg-white rounded-lg pt-[24px] pr-[20px] pb-[24px] pl-[20px] mt-4'>
      <p className='text=[16px] leading-5'>
        신세계포인트 쿠폰 등록을 위해 <br/>
        <span>
          쿠폰번호를 입력
        </span>
        해주세요.
      </p>

      <div className='mt-[16px]'>
        <input type='text' id="couponNum" className='box-border block w-full border border-x border-y border-r border-l border-t border-b border-slate-300 text-[14px] rounded-lg h-[48px]'/>
        <label className='table absolute box-border w-full h-[48px] text-[14px] leading-6'>
          <span>대소문자 구분하여 정확히 입력해 주세요.</span>
        </label>
        
        <button>

        </button>

      </div>

      <div className='flex mt-[px]'>
        <button className='w-full rounded-lg bg-white text-gray-500 p-3 text-sm border border-black-500'>
          다음에 하기
        </button>

        <button className='w-full rounded-lg bg-gradient text-black p-3 text-sm border border-black-500'>
          등록하기
        </button>


      </div>
    </div>
  )
}