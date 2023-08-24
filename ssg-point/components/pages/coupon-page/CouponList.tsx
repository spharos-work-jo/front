import React from 'react'

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

                <div className='pt-4 w-full align-top inline-block box-border'>
                    <p className='text-[11px] text-gray-400 leading-5'>
                        이마트24(일부 매장 제외)
                    </p>

                    <p className='text=[16px] font-medium pt-0.5 pb-3 leading-6'>
                        1만원 이상 구매시 1천원 할인
                    </p>

                    <p className='text=[11px] font-medium leading-5 text-slate-500'>
                        2023-08-01 ~ 2023-08-31
                    <span className='text-red-800'>
                        7일 남음
                    </span>
                    </p>
                    <div>
                        <div>
                            <div>
                                <img src='/assets/images/coupon/e24.png' alt="e24" height={10} width={10} />
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