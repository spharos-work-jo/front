import React from 'react'
import CouponPageTop from '@/components/pages/coupon-page/CouponPageTop';
import CouponPageBot from '@/components/pages/coupon-page/CouponPageBot';

const coupon = () => { 
  return (
    <section className="pt-[4rem]">

        <CouponPageTop></CouponPageTop>
        <CouponPageBot></CouponPageBot>

    </section>
  )
}

export default coupon;