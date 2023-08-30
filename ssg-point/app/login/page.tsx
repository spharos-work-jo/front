import LoginForm from '@/components/pages/Login/LoginForm'
// import Logo from '@/components/ui/header/Logo'
import React from 'react'
import Image from 'next/image'
import LoginEasy from '@/components/pages/Login/LoginEasy'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
// get path from 'path'

async function Login() {

  const session = await getServerSession(options)
  console.log(session)
  
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