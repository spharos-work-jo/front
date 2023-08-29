import React from 'react'
import Link from 'next/link'

const LoginSns = () => {
  return (
    <div className='w-full pt-[40px] pr-[40px] pb-[80px] pl-[40px]'>
      <h3 className='text-[14px] leading-[24px] mb-[24px] font-medium'>간편 로그인</h3>
      <ul className='flex justify-between'>
        <li className='naver'>
          <Link href={''} className='btn relative block w-[48px] h-[48px] bg-[url(/assets/images/login/easy_login.png)] bg-no-repeat [background-position-x:0px] [background-position-y:-56px] [background-size:98%] cursor-pointer overflow-hidden leading-[0px]'/>
            <span className='hidden'>naver</span>
        </li>
        <li className='kakao'>
          <Link href={''} className='btn relative block w-[48px] h-[48px] bg-[url(/assets/images/login/easy_login.png)] bg-no-repeat [background-position-x:0px] [background-position-y:-113px] [background-size:98%] cursor-pointer overflow-hidden leading-[0px]'/>
            <span className='hidden'>kakao</span>
        </li>
        <li className='apple'>
          <Link href={''} className='btn relative block w-[48px] h-[48px] bg-[url(/assets/images/login/easy_login.png)] bg-no-repeat [background-position-x:0px] [background-position-y:-169px] [background-size:98%] cursor-pointer overflow-hidden leading-[0px]'/>
            <span className='hidden'>apple</span>
        </li>
      </ul>
    </div>
  )
}

export default LoginSns