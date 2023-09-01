'use client'
import { useRouter } from "next/navigation";
import React, { useState, SetStateAction } from "react";
// const AuthBehindTap = (props : {
  
//   setIsTapView: React.Dispatch<React.SetStateAction<boolean>>

// }) => {
  const AuthBehindTap = ( props : { resultNum:string }) => {
    const router = useRouter();


    const [certNumber,setCertNumber] = useState<Boolean>(false);
    
    const sameReqNumHandler = () => {
      
      if(certNumber){
        console.log("!!!!!!!!!!!!!!")
        router.push('/signup/conditions')
      }
    }
    
  const matchReqNum = (e : React.ChangeEvent<HTMLInputElement>) => {
  
  
    if(props.resultNum === e.target.value){
  
      setCertNumber(true)
    }    
  
  }

  return (
    <div className="my-12">
      <p className="text-xs mb-1">
        <b>인증번호</b>
      </p>
        <input
          type="text"
          name="certNumber"
          placeholder=" 인증번호 입력"
          className="text-sm w-full h-[48px] border rounded-[6px] divide-[#e5e7eb]"
          onChange={matchReqNum}
          />
        <button 
          className="w-full p-4 mt-4 text-center text-sm text-black rounded-lg bg-ssg-linear"
          onClick={sameReqNumHandler}
          >
          <p>
            확인
          </p>
        </button>
    </div>  
    
  );
}

export default AuthBehindTap;

