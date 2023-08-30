import React, { Dispatch, SetStateAction } from "react";

// const AuthBehindTap = (props : {
  
//   setIsTapView: React.Dispatch<React.SetStateAction<boolean>>

// }) => {
  const AuthBehindTap = () => {

  // let num:number = 180;

  // function timer(){
  //   num--;
  //   setTimeout
  // }

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
          />
        <button className="w-full p-4 mt-4 text-center text-sm text-black rounded-lg bg-ssg-linear">
          <p>
            확인
          </p>
        </button>
    </div>  
    
  );
}

export default AuthBehindTap;