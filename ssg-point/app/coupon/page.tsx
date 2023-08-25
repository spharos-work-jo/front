import React from 'react'
import CouponPageTop from '@/components/pages/coupon-page/CouponPageTop';
import CouponPageBot from '@/components/pages/coupon-page/CouponPageBot';
import CouponList from '@/components/pages/coupon-page/CouponList';

const coupon = () => { 
  return (
    <section className="pt-[4rem]">

        <CouponPageTop/>
        <CouponPageBot/>
        <CouponList/>

    </section>
  )
}

export default coupon;