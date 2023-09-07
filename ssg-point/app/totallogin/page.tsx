import OAuthLoginForm from '@/components/pages/Login/OAuthLoginForm'
import React from 'react'

const TotalLogin = () => {
  return (
    <section className='flex flex-col items-center gap-10 pt-20'>
      <div className='p-[40px]'>
        <p className='pb-[40px] text-[20px] leading-[30px] font-[400] break-keep [letter-spacing:-.5px]'>
          SNS 간편로그인을<br/>
          <strong>처음 이용</strong>
          하시는 경우,
          <br/>
          통합ID 로그인이 필요합니다.
        </p>

      <OAuthLoginForm />

      </div>
    </section>
  )
}

export default TotalLogin