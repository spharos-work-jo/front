import React from 'react'
import styles from './CouponList.module.css'

const CouponList = () => {

  return (

    <div className='pt-2.5 pr-5 pb-14 pl-5'>
        <h3 className='hidden'>쿠폰 리스트</h3>

        <div className='coupon_search h-11 flex items-center justify-between border-b'>
            <div>
                마감임박
            </div>

            <div>
                전체다운
            </div>
        </div>

        <ul>
            <li className='border-b pt-4 box-border'>
                <div className='inline-block align-top'>
                    <div>
                        <img src='/assets/images/coupon/1000.png' alt="1000원 할인" height={80} width={80} />
                    </div>
                        <img src='/assets/images/coupon/emart24.png' alt="emart24" height={80} width={80} />
                </div>

                <div className='pl-[18px] w-[calc(100% - 80px)] align-top inline-block box-border'>
                    <p className='text-[11px] text-gray-400 leading-5'>
                        이마트24(일부 매장 제외)
                    </p>

                    <p className='text-[16px] font-medium pt-0.5 pb-3 leading-6'>
                        1만원 이상 구매시 1천원 할인
                    </p>

                    <p className='text-[11px] font-medium leading-5 text-slate-500'>
                        2023-08-01 ~ 2023-08-31
                    <span className='text-red-700' >
                    <span className={styles.col}>
                        7일 남음
                    </span>
                    </span>
                    </p>
                    <div className='flex border-t-[1px]'>
                        <div>
                            <div>
                                <img src='/assets/images/coupon/e24.png' alt="e24" height={20} width={20} />
                            </div>

                        </div>
                    </div>
                </div>
            </li>
        </ul>
    
    </div>
  )
}

export default CouponList