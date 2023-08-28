import React from "react";
import Image from "next/image";
import { PhoneCardBoxType } from "@/types/PhoneCardBoxType";

const AuthTop = ( props: {
    typeList: PhoneCardBoxType[];
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {

const iconUrl : string = "/assets/images/signupIcon/";

const {typeList, selected, setSelected } = props;

const handleClick = (e : any) => {
  setSelected(e.target.id);
  console.log(selected);
};

  return(
    <>
      <div className="px-10 pb-5 pt-16 flex w-110">
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
        <div className='flex mt-10'>
            {
                typeList.map( item => (
                  <button className='box-border w-3/6 h-[88px] border flex justify-center items-center rounded-[6px] divide-[#e5e7eb]'
                        id={item.id}
                        onClick={(e) => handleClick(e)}
                        >
                      <a role="tab">
                      <Image
                        key={item.id}
                        src={item.url}
                        alt={item.title}
                        id={item.id}
                        onClick={(e) => handleClick(e)}
                        height={50}
                        width={40}
                        className='ml-2'
                      />
                      <b>
                        <span className='text-[13px]'>{item.title}</span>
                      </b>
                    </a>
                  </button>
              ))
            }
          </div>
      </div>
    </>
    );
};

export default AuthTop;