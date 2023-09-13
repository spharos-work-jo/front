'use client'
import { ErroLogInFormType } from '@/types/errorType';
import { LogInFormDataType } from '@/types/formType';
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import styles from './LoginForm.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function OAuthLoginForm() {
  
  const query = useSearchParams();
  const callBackUrl = query.get('callbackUrl');

  const labelBefore = "w-6 h-6 rounded-full checked:bg-black appearance-none border border-black cursor-pointer"

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });

  const [errorText, setErrorText] = useState<ErroLogInFormType>({
    loginId: '',
    password: '',
  });

  const [pwType, setPwType] = useState<boolean>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(name === 'isAutoId' || name === 'isAutoLogin') {
      console.log(name, e.target.checked)
      setLoginData({
        ...loginData,
        [name]: e.target.checked
      })
    } else {
      console.log(name, value)
      setLoginData({
        ...loginData,
        [name]: value
      })
      setErrorText({
        ...errorText,
        [name]: ''
      })
    }
  }

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  const handlePwType = () => {
    setPwType(!pwType)
  }

  const handleLoginFetch = async () => {
    let errText: ErroLogInFormType = {
      loginId: '',
      password: '',
    }
    if(loginData.isAutoId) handleLocalStorage(loginData.loginId)
    if(loginData.loginId === '' || loginData.loginId === undefined) errText.loginId = '아이디를 입력해주세요'
    if(loginData.password === '' || loginData.password === undefined) errText.password = '비밀번호를 입력해주세요'
    if(errText.loginId !== '' || errText.password !== '') {
      setErrorText(errText)
      return
    } else {

      const response = await fetch('http://10.10.10.203:8000/api/v1/auth/oauth-login-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oauthId: "Y3HFwRGXdJOjCOXFAyIj7vyt595OJL3OKQfzskoOn5E",
          provider: "NAVER",
          loginId: loginData.loginId,
          password: loginData.password
        }),
      });
      console.log(response)
      

      const data = await response.json(); 
      if (data.success)
        signIn('credentials', {
        // ... 토큰이나 세션 ID 등을 설정
      });
      // ... 다른 로그인 후처리
    }

    

      // console.log(loginData)
      // const result = await signIn('credentials', {
      //   loginId: loginData.loginId,
      //   password: loginData.password,
      //   redirect: true,
      //   callbackUrl: callBackUrl ? callBackUrl : '/'
      // })
      // console.log(result)
    }
  

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const autoLogin = localStorage.getItem('autoLogin') || '';
      console.log("localStorage",autoLogin.length > 0 ? autoLogin : 'no data');
      if(autoLogin) {
        setLoginData({
          ...loginData,
          loginId: autoLogin,
          isAutoId: true
        })
      }
    }    
  },[])

  return (
    <form className='flex flex-col gap-3 w-full' onSubmit={handleLoginFetch}>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        placeholder='아이디' 
        className='w-full rounded-3xl  focus-visible:outline-blue-700 bg-white p-3 text-sm border border-black-500'
        // defaultValue={loginData.loginId}
        onChange={handleOnChange}
      />
      <p className='text-red-500 text-xs'>{errorText.loginId}</p>

      <div className='relative'>
        <input 
        type={pwType ? 'password' : 'text'}
        name="password" 
        id="password"
        className='Pw w-full rounded-3xl focus-visible:outline-blue-700 bg-white p-3 text-sm border border-black-500'
        onChange={handleOnChange}
        />

        <div className="eye absolute right-[20px] top-[28%] ">
        {pwType ? (
          <button type="button" onClick={handlePwType}> <Image src={'/assets/images/login/eye.png'} alt="비밀번호 감추기" height={20} width={20}  /> </button>
        ) : (
          <button type="button" onClick={handlePwType}> <Image src={'/assets/images/login/eyeclose.png'} alt="비밀번호 보이기" height={20} width={20} /> </button>
        )}
  
        </div>
        </div>


      <p className='text-red-500 text-xs'>{errorText.password}</p>

    
      <button type="button" className='btn_pm w-full rounded-[28px] text-black p-3 text-sm border h-[56px]' onClick={handleLoginFetch}>
        <strong className='text-[18px]'>로그인</strong>
      </button>
      <ul className='btn_list_box flex text-[14px] text-center justify-center mt-7'>
        <li className={styles.log}>
          <Link href={'/member/find-id-pw'}>아이디 찾기</Link>
        </li>
        <li className={styles.log}>
          <Link href={'/member/find-pw'}>비밀번호 찾기</Link>
        </li>
        <li>
          <Link href='/signup'>회원가입</Link>
        </li>
      </ul>

    </form>
  )

}

export default OAuthLoginForm