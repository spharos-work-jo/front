import React from "react";
import Image from "next/image";

const CertTop = () => {

const iconUrl : string = "/assets/images/signupIcon/";


  return(
    <>
      <div className="px-10 py-5 flex w-110">
        <Image src={iconUrl + "checkIcon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20} className="mr-2"/>
        <Image src={iconUrl + "nonCheckicon.png"} alt="" width={20} height={20}/>
      </div>
      <div className="px-10">
        <p className="text-2xl pb-1">
          본인인증
        </p>
        <b>
          <span className="text-[13px] text-[#767673]">
            본인인증 수단을 선택해주세요.
          </span>
        </b>
      </div>
    </>
    );
};

export default CertTop;