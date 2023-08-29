import LoginForm from '@/components/pages/Login/LoginForm'
import Logo from '@/components/ui/header/Logo'
import React from 'react'
import Image from 'next/image'
import LoginEasy from '@/components/pages/Login/LoginEasy'

// get path from 'path'

function Login() {

  return (
    <section className='flex flex-col items-center gap-10 pt-20'>

      <Image src={'/assets/images/logo/logo_header_login.gif'} alt={"로그인 로고"} width={89} height={56} />
      {/* {/* <Logo url={'/'} imgAlt={'Login Logo'}/> */}
      <LoginForm />
      <LoginEasy />

    </section>
  )
}

export default Login