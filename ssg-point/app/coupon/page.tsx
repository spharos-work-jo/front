import React from 'react'
import CouponPageTop from '@/components/pages/coupon-page/CouponPageTop';
import CouponPageBot from '@/components/pages/coupon-page/CouponPageBot';
import CouponPageReg from '@/components/pages/coupon-page/CouponPageReg';
import CouponList from '@/components/pages/coupon-page/CouponList';

const coupon = () => { 
  return (
    <section className="pt-[4rem]">

        <CouponPageTop/>
        <CouponPageBot/>
        <CouponPageReg/>
        <CouponList/>

    </section>
  )
}

export default coupon;