'use client'
import { UserContext } from "@/app/signup/layout";
import React, { useContext } from "react";
import Image from "next/image";

function SignupCompletionTop() {

  const user = useContext(UserContext);
  const iconUrl : string = "/assets/images/signupIcon/";

  return (  
    <>
      <div className="px-5">
        <div className="flex">
          <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
          <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
          <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
          <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        </div>
        <p className="text-xl mt-6 mb-3">
          가입완료
        </p>
          <p className="text-xl">{user.userName} 님, {user.loginId}로<br/>
          신세계포인트 통합 회원 가입이<br/>
          완료되었습니다.
          </p>
      </div>
    </>
  );
}

export default SignupCompletionTop;