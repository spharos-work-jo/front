'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { PhoneCardSelectBoxData } from '@/data/PhoneCardSelectBoxData';
import { newsAgencyList } from '@/data/newsAgencyList';
import { authenticatedNeedDataType } from '@/types/authenticatedNeedDataType';
import { signUpErrorTypeData } from '@/types/signUpErrorTypeData';
import { signUpAgreeList } from '@/data/signUpAgreeConditionsList';
function CertBody() {
  
    const [signUpListData,setSignUpListData] = useState<authenticatedNeedDataType>({
      name: '',
      gender: '',
      foreigner: undefined,
      birthday:'',
      agency: '',
      phone: '',
      agree:0 ,
    });
    const [errorText,setErrorText] = useState<signUpErrorTypeData>({
      name: '',
      gender: '',
      foreigner: '',
      birthday:'',
      phone: '',
    });
    // const handleOnClick = (value : string) => {

    //   setSignUpListData({
    //     ...signUpListData,
    //     "gender":value
    //   })
    //   setErrorText({
    //     ...errorText,
    //     "gender":value
    //   })
    // }
    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const {name,value} = e.target;

        setSignUpListData({
          ...signUpListData,
          [name]:value
          }
        )
        setErrorText({
          ...errorText,
          [name]:value
        })
      }
    const handleSignUpFetch = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let errText: signUpErrorTypeData = {
        name:'',
        gender:'',
        foreigner:'',
        birthday:'',
        phone: '',
      }

      if(signUpListData.name === '' || signUpListData.name === undefined) errText.name = "이름을 입력해주세요."
      if(signUpListData.gender === '' || signUpListData.gender === undefined) errText.gender = "성별을 선택해주세요."
      if(signUpListData.foreigner === undefined ) errText.foreigner = "외국인 여부를 체크해주세요."
      if(signUpListData.birthday === '' || signUpListData.birthday === undefined) errText.birthday = "생년월일을 입력해주세요."
      if(signUpListData.birthday.length !== 8) errText.birthday = "생년월일을 다시 입력해주세요."
      if(signUpListData.phone === '' || signUpListData.phone === undefined) errText.phone = "전화번호를 입력해주세요"
      if(signUpListData.phone.length !== 11) errText.phone = "전화번호를 다시 입력해주세요."
      if(errText.name !== '' || errText.gender !== '' ||  errText.foreigner !== '' ||
          errText.birthday !== '' || errText.phone !== ''){
            setErrorText(errText)
            return 
    
          }else{
            console.log(signUpListData)
            
          }
    }
  return (
    <>
      <form className='px-10 pt-10' onSubmit={handleSignUpFetch}>
          <div className='flex'>
            {
                PhoneCardSelectBoxData.map( item => (
                  <div className='box-border w-3/6 h-[88px] border flex justify-center items-center rounded-[6px] divide-[#e5e7eb]'>
                    <a role="tab">
                      <Image 
                        alt={item.title}
                        src={item.url}
                        height={50}
                        width={40}
                        className='ml-2'/>  
                      <b>
                        <span className='text-[13px]'>{item.title}</span>
                      </b>
                    </a>
                  </div>
              ))
            }
          </div>
          <div className='text-[13px]'>
            <p className='pt-10 pb-2'>
              <b>이름을 입력해주세요.</b>
            </p>
              <input
                type='text'
                name='name'
                className='w-full h-[48px] border rounded-[6px] divide-[#e5e7eb] text-sm'
                placeholder='  이름입력'
                onChange={handleOnChange}
              />
              <p className='text-red-500 text-xs'>{errorText.name}</p>  
            <p className='pt-[12px] pb-1'>
              <b>성별을 선택해주세요.</b>
            </p>
          <div className='flex'>
            <button
              type='button'
              className='h-[48px] w-1/2 border rounded-[6px] divide-[#e5e7eb] pr-2'
              name='gender'>
              <p>남자</p>  
            </button>    
            <button
              type='button'
              className='h-[48px] w-1/2 border rounded-[6px] divide-[#e5e7eb]'
              name='gender'>
            <p>여자</p>
            </button>    
          </div>
          <p className='pt-[12px] pb-1'>
            <b>외국인 이신가요?</b>
          </p>
          <div className='flex'>
            <button 
              type='button'
              className='h-[48px] w-1/2 border rounded-[6px] divide-[#e5e7eb] pr-2'
              name='foreigner'>
            <p>내국인</p>
            </button>
            <button
              type='button'
              className='h-[48px] w-1/2 border rounded-[6px] divide-[#e5e7eb]'
              name='foreigner'>
            <p>외국인</p>
            </button>
          </div>  
              <p className='pt-[12px] pb-1'>
                <b>생년월일을 입력해주세요.</b>
              </p>
              <input 
                type='text' 
                className='h-[48px] border w-full rounded-[6px] divide-[#e5e7eb]text-sm'
                placeholder='  법정생년월일 8자리'
                name="birthday"
                onChange={handleOnChange}
                />
                <p className='text-red-500 text-xs'>{errorText.birthday}</p>
              <p className='pt-[12px] pb-1'>
                <b>본인명의의 휴대전화번호를 입력해주세요.</b>
              </p>
              <select name="selctAgency" className='h-[48px] mb-2 border w-full rounded-[6px] divide-[#e5e7eb] pr-2'>
                {
                  newsAgencyList.map( item => (
                    <option value={item.name}>{item.name}</option>
                  ))
                }
              </select>
              <input 
                type='text'
                className='h-[48px] border w-full rounded-[6px] divide-[#e5e7eb]text-sm'
                placeholder='  -없이 휴대폰 번호 입력'
                name="phone"
                onChange={handleOnChange}
                />
                <p className='text-red-500 text-xs'>{errorText.phone}</p>
            </div>
            <div className="pt-10 flex-col flex-wrap">
              <p className="text-xl pb-3">
                <b>휴대전화 인증 약관</b>
              </p>
              <ul className="flex-col justify-start">
                {
                    signUpAgreeList.map( item => (      
                      <li className="flex first:border-b-[1px] border-gray-400 first:pb-3 first:mb-2 first:text-[15px] text-[13px] my-5" key={item.id}>
                        <input id="agreeAllConditions" name="agreeAllConditions" type="checkbox" className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"/>
                        <label htmlFor="agreeAllConditions">{item.title}</label>
                      </li>
                    ))   
                }
              </ul>
            <div>
              <button className="w-full" type='submit'>
                  <p className='p-4 my-[50px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
                    인증번호 요청
                  </p>
                </button>
            </div>
          </div>
        </form>
    </>
  )

              }
export default CertBody
