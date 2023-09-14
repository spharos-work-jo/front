'use client'
import AuthBottom from '@/components/pages/auth/AuthBottom'
import AuthHeaderBottom from '@/components/pages/auth/AuthHeaderBottom'
import CardAuthBody from '@/components/pages/auth/CardAuthBody'
import PhoneAuthBody from '@/components/pages/auth/PhoneAuthBody'
import PointPwdChangeTop from '@/components/pages/point-pwd-chg/PointPwdChangeTop'
import { PhoneCardSelectBoxData } from '@/data/PhoneCardSelectBoxData'
import React,{ useState } from 'react'

const page = () => {
  const [selected,setSelected] = useState<string>("0");
  const path = "findPointPwd"
  return (
    <>
      <PointPwdChangeTop/>
      <AuthHeaderBottom
                    typeList={PhoneCardSelectBoxData}
                    selected={selected}
                    setSelected={setSelected}
                />
                {
                    selected === "0" ? 
                    <PhoneAuthBody
                    pathName={path}
                    /> 
                    : <CardAuthBody/>

                }
        <AuthBottom/>
    </>
  )
}

export default page