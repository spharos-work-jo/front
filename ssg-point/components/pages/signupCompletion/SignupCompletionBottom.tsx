'use client'
import { UserContext } from "@/app/signup/layout";
import React, { useContext } from "react";

function SignupCompletionBottom() {

  const user = useContext(UserContext)

  return (  
    <>
      <div className="px-5 py-10">
        <p className="py-4 border-b-[1px] border-gray-500"><b>회원정보</b></p>
        <p className="pt-6 text-sm"><b>휴대폰 번호</b></p>
        <p>{user.phone}</p>
        <p className="pt-6 text-sm"><b>주소</b></p>
        <p>??</p>
        <p className="pt-6 text-sm"><b>이메일</b></p>
        <p>없음</p>
      </div>
    </>
  );
}

export default SignupCompletionBottom;