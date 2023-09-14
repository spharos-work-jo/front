import React from 'react'
import CouponPageTop from '@/components/pages/coupon-page/CouponPageTop';
import CouponPageBot from '@/components/pages/coupon-page/CouponPageBot';
import CouponList from '@/components/pages/coupon-page/CouponList';

export default async function coupon() { 

  return (
    <section className="pt-[4rem]">

        <CouponPageTop/>
        <CouponPageBot/>
        <CouponList/>

    </section>
  )
}