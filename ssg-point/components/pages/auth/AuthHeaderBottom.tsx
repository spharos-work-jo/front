import React from "react";
import Image from "next/image";
import { PhoneCardBoxType } from "@/types/PhoneCardBoxType";

const AuthHeaderBottom = ( props: {
    typeList: PhoneCardBoxType[];
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {

const {typeList, selected, setSelected } = props;

const handleClick = (e : any) => {
  setSelected(e.target.id);
  console.log(selected);
};
  
  return(
    <>
      
      <div className="px-10">
        <b>
          <span className="text-[13px] text-[#767673]">
            본인인증 수단을 선택해주세요.
          </span>
        </b>
        <div className='flex mt-10'>
            {
                typeList.map( item => (
                  <button className='box-border w-3/6 h-[88px] border flex justify-center items-center rounded-[6px] divide-[#e5e7eb]'
                        key={item.id}
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

export default AuthHeaderBottom;