import LoginForm from '@/components/pages/Login/LoginForm'
import React from 'react'
import Image from 'next/image'
import OAuthLogin from '@/components/pages/Login/OAuthLogin'
// get path from 'path'


async function Login() {
  
  return (
    <section className='flex flex-col items-center gap-10 pt-20'>

      <Image src={'/assets/images/logo/logo_header_login.gif'} alt={"로그인 로고"} width={89} height={56} />
      <LoginForm />
      <OAuthLogin />

    </section>
  )
}

export default Login