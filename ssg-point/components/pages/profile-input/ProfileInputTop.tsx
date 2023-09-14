import React from "react";
import Image from "next/image";


function ProfileInputTop() {

  const iconUrl : string = "/assets/images/signupIcon/";


  return (  
    <>
    <div className="px-5">
      <div className="flex">
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20}/>
      </div>
        <p className="text-2xl mt-6 mb-3">
          정보입력
        </p>
        <span className="text-sm text-gray-400">
          필수 정보를 정확하게 입력해주세요.
        </span>
    </div>
    </>
  );
}

export default ProfileInputTop;