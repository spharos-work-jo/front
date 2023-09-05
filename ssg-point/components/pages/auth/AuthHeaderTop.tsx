import Image from "next/image";
import React from "react";

function AuthHeaderTop() {

  const iconUrl : string = "/assets/images/signupIcon/";
  
  return (
    <>
      <div className="px-10 pb-5 pt-16 flex w-110">
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20}/>
      </div>
      <div className="pl-10">
        <p className="text-2xl pb-1">
          본인인증
        </p>
      </div>
    </>
    );
}

export default AuthHeaderTop;