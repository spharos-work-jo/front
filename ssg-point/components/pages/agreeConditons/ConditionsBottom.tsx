'use client'
import { AgreeConditionsList, AgreeConditionsListType } from "@/data/AgreeCondotionsList";
import { provideInforCompanyList } from "@/data/provideInforCompanyList";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckStatus from "../auth/CheckStatus";

function ConditionsBottom() {

  const router = useRouter();
  const [agreeState,setAgreeState] = useState<AgreeConditionsListType[]>(AgreeConditionsList);

  const handleChecked = (id:number, isCheck:boolean) => {
 
    const newAgreeList = [...agreeState];

    newAgreeList.map((item) => {

      if(item.id === id){

        item.check = isCheck;

      }
    })
    
    setAgreeState(newAgreeList);

  }

  const [errText,setErrText] =useState<string>("");

  const handleOnClick = () => {

          router.push("./profile-input")

        }
    
  

  return (  
    <>
      <div className="px-5 mt-11">
        <p className="text-xl"><b>신세계포인트 통합회원</b></p>
          <b>
            {
              provideInforCompanyList.map(item => (
                
                <span className="text-xs" key={item.id}>
                <b>(주)</b> {item.name},  
                </span>
              ))
            }
          <span className="text-xs"> 귀중</span>
          </b>
          <div className="text-sm">
          {
            AgreeConditionsList.map( item =>(
            //   <li className="flex text-[13px] my-5" key={item.id}>
            //   <input id="agreeProvideConditions" name="agreeAllConditions" type="checkbox" className="w-5 h-5 mr-2 appearance-none rounded-full border border-gray-500 cursor-pointer checked:bg-black"/>
            //   <label htmlFor="agreeProvideConditions">{item.content}</label>
            // </li>
              <CheckStatus
                key={item.id} 
                checked={item.check}
                handler={handleChecked}
                label={item.content}
                checkId={item.id}
                name={item.content}
                size={20}
                />
            ))
          }
          </div>
          
            <button 
              className="w-full"
              type='submit'
              onClick={handleOnClick}
              >
              <p className='p-4 mt-[30px] text-center text-black text-sm rounded-lg bg-ssg-linear'>
                다음
              </p>
            </button>
      </div>
    </>
  );
}

export default ConditionsBottom;