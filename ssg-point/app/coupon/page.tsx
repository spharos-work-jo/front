import React from 'react'
import CouponPageTop from '@/components/pages/coupon-page/CouponPageTop';
import CouponPageBot from '@/components/pages/coupon-page/CouponPageBot';
import CouponList from '@/components/pages/coupon-page/CouponList';
import { getServerSession } from "next-auth/next"

// import { options } from "../api/auth/[...nextauth]/options"

import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function coupon() { 


  // const session = await getServerSession(options)

  // if (!session) {
  //    redirect('/api/auth/signin?callbackUrl=/coupon')
  // }

  return (
    <section className="pt-[4rem]">

        <CouponPageTop/>
        <CouponPageBot/>
        <CouponList/>

    </section>
  )
}