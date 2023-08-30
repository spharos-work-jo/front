'use client'
import React, { ChangeEvent, useState } from 'react'
import { newsAgencyList } from '@/data/newsAgencyList';
import { authenticatedNeedDataType } from '@/types/authenticatedNeedDataType';
import { signUpErrorTypeData } from '@/types/signUpErrorTypeData';
import { signUpAgreeList, signUpAgreeListType } from '@/data/signUpAgreeConditionsList';
import { genderTypeList } from '@/data/genderTypeList';
import { localForeignerList } from '@/data/localForeignerList';
import Image from "next/image";
import { signupModalDataType } from '@/types/signupModalDataType';

function PhoneAuthBody() {


    // const certReq = () => {
    //   const RandomNumber:number = Math.floor(Math.random() * 100000);
      
    //   const num = SmsAuthApi()
    //   // fetch 

    //   // RandomNumber과 인풋 비교

    // }
    // 본인인증 API <- 백엔드와 상의 후 진행예정



    const [modalHandle,setModalHandle] = useState<signupModalDataType>({
      id:"",
      state:false
    });


    const [agreeList, setAgreeList] = useState<signUpAgreeListType[]>(signUpAgreeList);

    const [signUpListData,setSignUpListData] = useState<authenticatedNeedDataType>({
      name: '',
      gender: '남자',
      foreigner: '내국인',
      birthday:'',
      agency: 'SKT',
      phone: '',
      allAgree:false,
      agree:0
    });
    
    const [errorText,setErrorText] = useState<signUpErrorTypeData>({
      name: '',
      birthday:'',
      phone: '',
      agree:"",
    });

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {

      e.preventDefault();
      
      const {name,value} = e.target;

      console.log(name, value)

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
    const handleOnSelect = (e : React.FormEvent<HTMLSelectElement>) => {
      
      e.preventDefault();
      
      const {name,value} = e.target;

      setSignUpListData({
        ...signUpListData,
        [name]:value
      })
      setErrorText({
        ...errorText,
        [name]:value
      })

    }
    const handleSignUpFetch = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      
      let errText: signUpErrorTypeData = {
        name:'',
        birthday:'',
        phone: '',
        agree:'',
      }
      if(signUpListData.name === '' || signUpListData.name === undefined) errText.name = "이름을 입력해주세요."
      if(signUpListData.birthday === '' || signUpListData.birthday === undefined) errText.birthday = "생년월일을 입력해주세요."
      if(signUpListData.birthday.length !== 8) errText.birthday = "생년월일을 다시 입력해주세요."
      if(signUpListData.phone === '' || signUpListData.phone === undefined) errText.phone = "전화번호를 입력해주세요"
      if(signUpListData.phone.length !== 11) errText.phone = "전화번호를 다시 입력해주세요."
      if(errText.name !== '' || errText.birthday !== '' || errText.phone !== ''||errText.agree !== '')
          {
            setErrorText(errText)
            return 
    
          }else{
            console.log(signUpListData)
          }
    }

    const handleAgree = (e:React.ChangeEvent<HTMLInputElement>) => {
      
      const changeData = agreeList.find(item=> item.title === e.target.name )

      const check = changeData?.check 

      console.log(changeData)
      
      
    }
  return (
    <>
      <form className='px-10 pt-4' onSubmit={handleSignUpFetch}>
          <div className='text-[13px]'>
            <p className='pt-10 pb-2'>
              <b>이름을 입력해주세요.</b>
            </p>
              <input
                type='text'
                name='name'
                className='w-full h-[48px] border divide-[#e5e7eb] rounded-[6px] text-sm'
                placeholder='  이름입력'
                onChange={handleOnChange}
              />
              <p className='text-red-500 text-xs'>{errorText.name}</p>  
            <p className='pt-[12px] pb-1'>
              <b>성별을 선택해주세요.</b>
            </p>
            <div className='flex'>
            {
              genderTypeList.map( item => (
                  
                  <div className={signUpListData.gender === item.gender ? `flex justify-center items-center w-40 h-[60px] bg-[#000000] rounded-[6px] text-[white] text-base` : `flex justify-center items-center w-1/2 h-[60px] bg-[#F5F5F5] rounded-[6px] text-base`}
                      onClick = { () => setSignUpListData ({
                  ...signUpListData,
                  gender: item.gender
                })
                  }>
                  {item.gender}
                  </div>
              ))
            }
            </div>
            <p className='pt-[12px] pb-1'>
              <b>외국인 이신가요?</b>
            </p>
            <div className='flex'>
              {
              localForeignerList.map( item => (
                  
                  <div className={signUpListData.foreigner === item.type ? `flex justify-center items-center w-40 h-[60px] bg-[#000000] rounded-[6px] text-[white] text-base` : `flex justify-center items-center w-1/2 h-[60px] bg-[#F5F5F5] rounded-[6px] text-base`}
                      onClick = { () => setSignUpListData ({
                  ...signUpListData,
                  foreigner: item.type
                })
                  }>
                  {item.type}
                  </div>
              ))
            }
            </div>
              <p className='pt-[12px] pb-1'>
                <b>생년월일을 입력해주세요.(예:19990101)</b>
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
              <select 
                name="agency"
                className='h-[48px] mb-2 border w-full rounded-[6px] divide-[#e5e7eb] pr-2'
                onChange={handleOnSelect}
              >
              {
                    newsAgencyList.map( item => (
                  
                    <option
                      key={item.id}
                      value={item.name}
                      // onChange={handleOnOption}  
                    >
                      {item.name}
                    </option>
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
                <li className="flex border-b-[1px] border-gray-400 pb-3 mb-2 text-[15px] my-5">
                        <input 
                          name="allAgree"
                          type="checkbox"
                          className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
                          onChange={handleAgree}
                          />
                        <label htmlFor="agreeAllConditions">모든 약관에 동의합니다.</label>
                </li>
                  {/* {
                    signUpAgreeList.map( item => (      
                      <li className="flex text-[13px] my-5" key={item.id}>
                        <input
                          id={item.id}
                          name={`agree${item.id}`}
                          type="checkbox"
                          className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
                          onChange={handleOnChange}  
                        />
                        <label htmlFor="agreeAllConditions">{item.title}</label>
                      </li>
                    ))   
                  } */}
                  {
                    agreeList.map(item=>(
                      <li className="flex text-[13px] my-5" key={item.id}>
                      <input
                        id={item.id}
                        name={item.title}
                        type="checkbox"
                        checked={item.check}
                        className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"
                        onChange={handleAgree}
                      />
                      <label
                        htmlFor="agreeAllConditions"
                        className='w-80'
                        >{item.title}</label>
                      <button
                        key={item.id}
                        onClick={() => setModalHandle({
                          id: item.id,
                          state: true
                        })}
                      >
                        <Image
                          src="/assets/images/vector/Vector.png"
                          alt='화살표'
                          height={16}
                          width={5}
                        />
                      </button>
                    </li>
                    ))
                  }
                  
                <p className='text-red-500 text-xs'>{errorText.agree}</p>  
              </ul>
            <div>
              <button
                className="w-full"
                type='submit'
                // onClick={certReq}
                >
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
export default PhoneAuthBody;
